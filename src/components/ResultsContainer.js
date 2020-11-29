import React from 'react'
import styled from 'styled-components'
import ResultItems from './ResultItems.js'

const StyledContainer = styled.div
`
    width: 90%;
    margin-left: 5%;
    padding-left: 5%;
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch ;
        article:hover{
            transition-duration: 0.5s;
            transform: scale(1.3, 1.3);
            flex: 0 0 250px;
            // border: solid 1px  #E8E8E8;
            padding: 10px 0 0 10px;
        
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