import React from 'react'
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
    background-image: url("https://image.tmdb.org/t/p/original/aUVCJ0HkcJIBrTJYPnTXta8h9Co.jpg");
    background-position:center;
    background-size: cover;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    height: 60%;
        StyledHeader:hover{
            font-weight: 900;
        }
    `
const StyledHeader = styled.div
    `
    text-align: right;
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
function FilmView(props) {
    return (
        <StyledDiv>
            <StyledContent>
                <StyledHeader>
                    <button onClick={props.closeModal}>X</button>
                </StyledHeader>
            </StyledContent>
        </StyledDiv>
    )
}

export default FilmView


// display: none; /* Hidden by default */
// position: fixed; /* Stay in place */
// z-index: 1; /* Sit on top */
// padding-top: 100px; /* Location of the box */
// left: 0;
// top: 0;
// width: 100%; /* Full width */
// height: 100%; /* Full height */
// overflow: auto; /* Enable scroll if needed */
// background-color: rgb(0,0,0); /* Fallback color */
// background-color: rgba(0,0,0,0.4); /* Black w/ opacity */