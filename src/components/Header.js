import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header
`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
border-bottom: solid 1px #E8E8E8;

// justify-content: space-between;
   div{
    width: 50%;
    margin-left: 2%;
    {
        .film-text-logo{
            width:100px;
            margin-top: 20px;
            margin-left: 5%;
        }
    }
   }
   .second-div{
      width:50%;
      text-align: right;
      margin-right: 2%;
      {
          .film-logo-green{
            width:40px;
              margin-top: 5px;
          }
      }
   }
  
`


function Header() {
    
    return(
        <div>
          <StyledHeader>
              <div>
                  <img src="/filmreel.png" 
                        alt="film reel logo" 
                        className="film-text-logo">
                    </img>
                </div>

                <div className="second-div">
                    <img src="/film-logo-small.png" 
                        className="film-logo-green" 
                        alt="film reel logo">
                    </img>
                </div>
                
            </StyledHeader>
        </div>
    )
}

export default Header