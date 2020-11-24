import React from 'react'
import styled from 'styled-components'



const StyledDiv = styled.div
    `
    display: block;
    position: fixed; 
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    `
const StyledContent = styled.div
    `
    border-radius: 10px;
    // background-color: #fefefe;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
    background-position:center;
    background-size: cover;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
        StyledHeader:hover{
            font-weight: 900;
        }

    `
const StyledHeader = styled.div
    `
   display: flex;
   justify-content: space-between;
   font-weight: bold;
   font-size: 15px;
   border-bottom: solid 1px;
    color: white;
        button{
            background: none;
            border: none;
            color:white;
            outline: 0;
            font-weight: 900;
        }
        button:hover{
            font-size: 15px;
        }
       
    `
 const StyledMovie = styled.div
    `
    display: flex;
    img{
        width: 25%;
        display:flex;
        margin-top: 5%;
        padding: 10px;
    }
    div{
        color: white;
        padding: 30px;
        text-shadow: 2px 2px #383838;
        
    }
    `

  const StyledDetails = styled.div
    `
    background-color: white;
    margin-top: 10px;
    border-top: solid red;
    margin: -20px -20px -20px;
    margin-top: 10px;
    border-radius: 0 0 10px 10px;
    padding: 25px;
    opacity: 85%;
    
    `  
function FilmView(props) {
    console.log(props.currentFilmClick)
    const{title, backdrop_path, poster_path, release_date, overview, genre_ids} = props.currentFilmClick


    return (
        <StyledDiv>
            <StyledContent style={backdrop_path? {backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("https://image.tmdb.org/t/p/original${backdrop_path}")`}: {backgroundColor: 'lightgrey'}}>

                <StyledHeader>
                    <p>{title}</p>
                    <button onClick={props.closeModal}>X</button>
                </StyledHeader>
                    
                <StyledMovie>
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`}></img>
                    <div>
                        <h2>{title}</h2>
                        <p>{release_date} | {genre_ids} </p>
                        <button>like</button><button>dislike</button>
                    </div>
                </StyledMovie>

                <StyledDetails><b>Details:</b><p>{overview}</p></StyledDetails>
                
            </StyledContent>
        </StyledDiv>
    )
}

export default FilmView


// display: none; /* Hidden by default */
// position: fixed; /* Stay in place */
// z-index: 1; /* Sit on top */
// padding-top: 100px; /* Location of the box */
// left: 0;
// top: 0;
// width: 100%; /* Full width */
// height: 100%; /* Full height */
// overflow: auto; /* Enable scroll if needed */
// background-color: rgb(0,0,0); /* Fallback color */
// background-color: rgba(0,0,0,0.4); /* Black w/ opacity */