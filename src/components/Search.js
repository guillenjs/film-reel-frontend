import React, {useState} from 'react' 
import styled from 'styled-components'

const StyledSearch = styled.input
`
// color: white;
width: 90%;
margin-left: 5%;
height: 80px;
border: none;
outline: 0;
font-size: 50px;

color: grey;
border-bottom solid 1px grey;
margin-top: 30px;
// background: #404040;
::placeholder{
    color:#C8C8C8;
}
`


function Search(props) {

   const [current, setCurrent] = useState('')
    
   const setSearch = (e) => {
      setCurrent(e.target.value)
      props.handleSearch(current)
   }


    return(
        <div>
            < StyledSearch placeholder = "Search" value={current} onChange={setSearch}/>
        </div>
    )
}

export default Search