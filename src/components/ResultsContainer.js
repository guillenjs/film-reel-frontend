import React from 'react'
import styled from 'styled-components'
import ResultItems from './ResultItems.js'

const StyledContainer = styled.div
`
height: 100vh;
width: 90%;
margin-left: 5%;
margin-top: 20px;
border: solid 1px red;
display: flex;
flex-wrap: wrap;
align-items: stretch ;
    article:hover{
        // margin: -0px;
        // padding: 5px 5px 5px 5px;
        transform: scale(1.2, 1.2);
`

function ResultsContainer() { 

    return( 
        <div>
            <StyledContainer>
                <ResultItems />
                <ResultItems />
                <ResultItems />
                <ResultItems />
                <ResultItems />
                <ResultItems />
                <ResultItems />
                <ResultItems />
            </StyledContainer>
        </div>
    )
}

export default ResultsContainer