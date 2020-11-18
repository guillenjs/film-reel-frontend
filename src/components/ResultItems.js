import React from 'react'
import styled from 'styled-components'

const StyledItems = styled.article
`
border: 1px solid #ccc;
flex: 0 0 250px;
margin: 3px;
   img{
       max-width:200px;
   }
`

function ResultItems(){
   
    return(
            <StyledItems>
                <img src=""></img>
                <div>
                    Title 
                </div>
                <button>view more button</button>
            </StyledItems>
    )
}

export default ResultItems