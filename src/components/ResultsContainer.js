import React from 'react'
import styled from 'styled-components'
import ResultItems from './ResultItems.js'

const StyledContainer = styled.div
`
height: 100vh;
width: 90%;
margin-left: 5%;
margin-top: 20px;
// border: solid 1px red;
display: flex;
flex-wrap: wrap;
align-items: stretch ;
    article:hover{
        // margin: -0px;
        // padding: 5px 5px 5px 5px;
        transform: scale(1.2, 1.2);
`



function ResultsContainer(props) { 

  //fetch movie genres to compare to them to current ids of genres of movies

    console.log(props.results)
    const renderItems = () => {
       if(props.results)
       {
        return props.results.map( movie => 
        <ResultItems key={movie.id} movie={movie}/>)  
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