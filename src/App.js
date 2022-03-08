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
  const [searchArticles, setSearchArticles] = useState([]);

  
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9b41315c8a15471ba340ecd223cb1e5d")
    .then(res => res.json())
    .then((articles) => {
        setArticles(articles.articles)
    })
}, []);
// These are the top articles that display when on the home page ^

function handleAddtoFavorites(article){
    const foundIndex = favList.findIndex(item => article.title === item.id);
    if(foundIndex === -1){
        setFavList([...favList, article]);
        console.log(favList)
    } else {
        alert("Article is already in Favorites!")
    }
}

//This handles the process of adding an article to the Favorites ^

function handleRemoveFromFavorties(article){
    const foundIndex = favList.findIndex(item => article.title === item.id);
    if (foundIndex === -1){
        alert("Article isn't in Favorites!")
    } else {
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
  
  return (
    <div className="App">
      <NavBar onSearch={onSearch}/>
      <Route exact path="/">
         <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <NewsHome searchArticles={searchArticles} articles={articles} onAddToFavorites={handleAddtoFavorites} />
      </Route>
      <Route path="/submit-article">
        <CreateArticle />
      </Route>
      <Route path="/favorites">
        <Favorites favList={favList} onRemoveFromFavorites={handleRemoveFromFavorties}/>
      </Route>
    </div>
  );
}

export default App;
