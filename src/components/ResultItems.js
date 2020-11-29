import React from 'react'
import styled from 'styled-components'


const StyledItems = styled.article
`
flex: 0 0 190px;
margin: 3px;

border-radius:10px;  
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
   img{
       max-height: 250px;
       margin-top:-10;
       margin-botom:-10px;
       border-radius:10px;  
   }
`
const StyledDiv = styled.div
   `
   display:flex;
   align-items: center;
   border-radius: 10px 10px 0 0;
   justify-content: center;
   background-color: white;
   width: 100%;
   height: 100%px;

   `

const StyledTitle = styled.div
   ` background-color: white;
   width: 100%;
   height: 100%;
   text-align: center;
   border-radius: 0 0 10px 10px;  
   font-size: 15px;
   `

  

function ResultItems(props){
   const{title,poster_path} = props.movie 
   const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    
    return(
        //onClick of item set show to true in APP and useCurrent object to render modal 
            <StyledItems  onClick ={()=> props.handleClick(props.movie)}>
                
                <StyledDiv ><img src={poster} alt="poster for movie"></img></StyledDiv>

                <StyledTitle>
                    {title}
                </StyledTitle>
                
            </StyledItems>
    )
}

export default ResultItems