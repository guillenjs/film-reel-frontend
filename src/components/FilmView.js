import React, {useEffect, useState} from 'react'
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
    margin-bottom: 200px;
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
    i{
        border: solid 2px;
        border-radius: 100%;
        padding: 7px;
        margin-right: 15px;
        margin-left: 5px;
    }
    .fa.fa-thumbs-up:hover{
        border: solid 2px #90EE90;
        padding: 8px;
       
    }
    .fa.fa-thumbs-down:hover{
        border: solid 2px #FF6347;
        padding: 8px;
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
    opacity: 70%;
    
    `  
const  API_KEY = process.env.REACT_APP_FILM_REEL_API_KEY



function FilmView(props) {
    const [filmInfo, setFilmInfo] = useState({})
    const [allGenres, setGenres] = useState({})
    // const {title} = filmInfo

    // console.log(title)
    const{title, backdrop_path, poster_path, release_date, overview, genre_ids, id} = props.currentFilmClick

    //everytime object is clicked on list it will render all info will be fetched from API]

    const fetchInfo = () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.currentFilmClick.id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(film => {
            setFilmInfo(film)
            if(film.genres.length > 1)
                {
                    setGenres(film.genres[0])
                }
        })
    }

    useEffect(() => {
        fetchInfo()
    },[filmInfo.id]
    )

    

    // do fetch for backend with current film info to rails api
    //if found then set state for like and dislikes 
    // if not found then render the likes and dislikes as 0 

console.log(filmInfo)
 
    return (
        <StyledDiv>
            <StyledContent
             style={filmInfo.backdrop_path? 
                            {backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("https://image.tmdb.org/t/p/original${backdrop_path}")`}: 
                            {backgroundColor: 'lightgrey'}}
                            >

                <StyledHeader>
                    <p>{filmInfo.title}</p>
                    <button onClick={props.closeModal}>X</button>
                </StyledHeader>
                    
                <StyledMovie>
                    <img src={`https://image.tmdb.org/t/p/original${filmInfo.poster_path}`}></img>
                    <div>
                        <h2>{filmInfo.title}</h2>
                            <p><h4>{filmInfo.release_date}</h4></p>
                            <p><h4>{Object.keys(allGenres).length !== 0? `${allGenres.name}`: ''}</h4></p>
                            <p><h4>{filmInfo.runtime} min</h4></p>
                            <p>{filmInfo.tagline}</p>
                        82<i className="fa fa-thumbs-up"></i> 5<i className="fa fa-thumbs-down"></i>
                    </div>
                </StyledMovie>

                <StyledDetails><b>Details:</b><p>{filmInfo.overview}</p></StyledDetails>
                
            </StyledContent>
        </StyledDiv>
    )
}

export default FilmView


