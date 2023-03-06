import {useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const APP_ID = 'dc34792b';
  const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'

const[search,setSearch]=useState('')
const[query,setQuery]=useState('momo')
const[dishes,setDishes]=useState([])

// API Call
useEffect(()=>{
async function getData(){
  const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const response=await res.json()
  setDishes(response.hits)
}
getData()
  },[query])

// Submit
const submitHandler = e =>{
e.preventDefault()
setQuery(search)
setSearch('')
}

return <div className='App'>
<form onSubmit={submitHandler}   className="search-form" >

  <input type="text" 
  onChange={e=>setSearch(e.target.value)} 
  value={search}
  className="search-bar" 

  aria-describedby="basic-addon2"/>
  <button type='submit'   className="search-button" onClick={submitHandler}>Search</button>
</form>
{
  dishes.map((item,idx)=><Recipe recipeList={item} key={idx}/>)
}
</div>
}
export default App;
