// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import styled from 'styled-components'
import Header from './components/Header.js'
import Search from './components/Search.js'
import ResultsContainer from './components/ResultsContainer'

const StyledDiv = styled.div
  `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20%;
  `
 
const  API_KEY = process.env.REACT_APP_FILM_REEL_API_KEY

function App() {
  const[searchTerm, setSearchTerm] = useState('')
  const[currentItems, setCurrentItems] = useState([])
  
  console.log(searchTerm.length)

//fetches whatever is the current term from api  
  const fetchSearchTerm = (term) => {
    console.log(term)
    if(term.length  > 1)
    {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`)
        .then(res => res.json())
        .then(arr => {
          // let movies = arr.results.filter(movie => movie.poster_path != false)
          setCurrentItems(arr)
        })
    }
    else
      {
        setCurrentItems([])
      }
  }
  
  //function to set search term once term has been set then call function that will fetch items
  const handleSearch = (term) =>{
    setSearchTerm(term)
    fetchSearchTerm(term)
  }


  console.log(searchTerm)
  console.log(currentItems.results)
  return (
    <div className="App">
      <Header />
      <Search handleSearch = {handleSearch}/>
        {searchTerm.length < 2? 
          <StyledDiv >
              <img src="/filmreel-green.png" alt="filmreel green logo"></img>
          </StyledDiv>:

          <ResultsContainer results = {currentItems.results} />
        }
    </div>
  );
}

export default App;
