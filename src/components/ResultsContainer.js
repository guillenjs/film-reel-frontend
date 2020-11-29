import React from 'react'
import styled from 'styled-components'
import ResultItems from './ResultItems.js'

const StyledContainer = styled.div
`
width: 90%;
margin-left: 5%;
padding-left: 5%;
margin-top: 20px;
margin-bottom: 40px;

// border: solid 1px red;
display: flex;
flex-wrap: wrap;
align-items: stretch ;
    article:hover{
        // margin: -0px;
        // padding: 5px 5px 5px 5px;
        transition-duration: 0.5s;
        transform: scale(1.3, 1.3);
        
`



function ResultsContainer(props) { 

  //fetch movie genres to compare to them to current ids of genres of movies

    const renderItems = () => {
       if(props.results)
       {
        return props.results.map( movie => 
        <ResultItems key={movie.id} movie={movie} handleClick={props.handleClick}/>)  
       } 
       
    }
   
    return( 
        <div>
            <StyledContainer>
               {renderItems()}
            </StyledContainer>
        </div>
    )
}

export default ResultsContainer