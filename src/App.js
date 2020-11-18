// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'
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

function App() {
  const[searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm.length)

 useEffect(()=>{
  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/spiderman", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ff9794ab67msh35db3dcea8f46a1p11d3a5jsnd4b08dccfc0f",
      "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
  })
  .then(res => res.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });;
  })

  const handleSearch = (term) =>{
    setSearchTerm(term)
  }


  console.log(searchTerm.length)

  return (
    <div className="App">
      <Header />
      <Search handleSearch = {handleSearch}/>
        {searchTerm.length < 2? 
          <StyledDiv >
              <img src="/filmreel-green.png" alt="filmreel green logo"></img>
          </StyledDiv>:

          <ResultsContainer />
        }
    </div>
  );
}

export default App;
