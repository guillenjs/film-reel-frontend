import React from 'react'
import styled  from 'styled-components'

const StyledFooter = styled.div
    `
    position: fixed;
    left: 0;
    bottom: 0;
    margin-top: 20px;
    width: 100%;
    // color: #C8C8C8;
    font-size: 12px;
    border-top: solid 1px #E8E8E8;
    text-align: right;
    background-color: white;
        div{
            padding: 5px;
            margin-right: 20px;
            opacity: 0.3;
        }
        img{
            width:10%;
            margin-left:10px;
        }
        div:hover{
            transition-duration: 1s;
            color: black;
            opacity: 1;
        }
       
       
    `
function Footer() {

    return(
        <StyledFooter>
           <div>This product uses the TMDb API but is not endorsed or certified by TMDb.
               <img src="blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"></img>
           </div>
        </StyledFooter>
    )
}

export default Footer