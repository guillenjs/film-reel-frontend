import React from 'react'
import styled from 'styled-components'


const StyledItems = styled.article
`
// border: 1px solid #ccc;
flex: 0 0 250px;
margin: 3px;
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
   img{
    //    max-width:150px;  
       max-height: 250px;
       margin-top:-10;
       margin-botom:-10px;
   }
`
const StyledDiv = styled.div
   `
   display:flex
   align-items: end;
   justify-content: end;
   background-color:#EDE1E1;
   width: 100%;
   height: 100%;
   `

const StyledTitle = styled.div
   ` background-color: white;
   width: 100%;
   height: 100%;
   text-align: center;
   `

  

function ResultItems(props){
   const{title,poster_path} = props.movie 
   const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    
    return(
        //onClick of item set show to true in APP and useCurrent object to render modal 
            <StyledItems  onClick ={()=> props.handleClick(props.movie)}>
                <StyledDiv><img src={poster} alt="poster for movie"></img></StyledDiv>
                <StyledTitle>
                    {title}
                </StyledTitle>
            </StyledItems>
    )
}

export default ResultItems