import NewsHome from "./components/NewsHome"
import {Route, Redirect} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import CreateArticle from './components/CreateArticle.js'
import Favorites from './components/Favorites.js'
import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [favList, setFavList] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState([]);

  
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9b41315c8a15471ba340ecd223cb1e5d")
    .then(res => res.json())
    .then((articles) => {
        setArticles(articles.articles)
    })
}, []);
// These are the top articles that display when on the home page ^
 
  useEffect(() => {
    fetch('http://localhost:3001/newArticles')
    .then(res => res.json())
    .then((newArticles) => {
      setNewArticles(newArticles)
    })
  },[])
// These are the articles that display on the "Submit an Article" page ^

useEffect(() => {
  fetch("http://localhost:3001/favorites")
  .then(res => res.json())
  .then((articles) => {
      setFavList(articles)
  })
}, []);


function addNewArticle(newArticleItem){
  setArticles([...newArticles, newArticleItem])
}

function handleAddtoFavorites(article){
  //console.log(article) - works
    const foundIndex = favList.findIndex(item => article.title === item.title);
    if(foundIndex === -1){
        fetch('http://localhost:3001/favorites', {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
            title: article.title,
            author: article.author,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            content: article.content
          })
        })
        .then(resp => resp.json())
        .then(json => {
          //console.log(json) - works
          setFavList([...favList, json]);
        })
        //console.log(favList) - works
    } else {
        alert("Article is already in Favorites!")
    }
}

//This handles the process of adding an article to the Favorites ^

function handleRemoveFromFavorties(article){
  //console.log(article) - works
  const foundIndex = favList.findIndex(item => article.title === item.title);
  if (foundIndex === -1){
      alert("Article isn't in Favorites!")
  } else {
      fetch(`http://localhost:3001/favorites/${article.id}`, {
        method: "DELETE"})
      const copyArray = [...favList]
      copyArray.splice(foundIndex, 1);
      setFavList(copyArray);
  }
}
//This handles the process of removing an article from the Favorites ^

const history = useHistory();

  function onSearch (search){
    setSearchArticles([])
    console.log(search)
    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=9b41315c8a15471ba340ecd223cb1e5d`)
    .then(resp => resp.json())
    .then(articles => {
      setSearchArticles(articles.articles)
      history.push('/home')
    })
  }
  //This handles the backend of the search funtion ^

  
  function handleArticleRefresh () { 
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9b41315c8a15471ba340ecd223cb1e5d")
    .then(res => res.json())
    .then((articles) => {
        setArticles(articles.articles)
    })
  }
  
  return (
    <div className="App">
      <NavBar onSearch={onSearch} handleArticleRefresh={handleArticleRefresh}/>
      <Route exact path="/">
         <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <NewsHome searchArticles={searchArticles} articles={articles} onAddToFavorites={handleAddtoFavorites} />
      </Route>
      <Route path="/submit-article">
        <CreateArticle addNewArticle={addNewArticle} newArticles={newArticles} />
      </Route>
      <Route path="/favorites">
        <Favorites favList={favList} onRemoveFromFavorites={handleRemoveFromFavorties}/>
      </Route>
    </div>
  );
  // Everything up is what is rendered when user visits page and where the navbar routes the user to
}

export default App;
