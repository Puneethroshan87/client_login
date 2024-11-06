import React, { useState } from 'react'
import axios from 'axios'
const Book = () => {
const [book,setBook]=useState("");
const [author,setAuthor]= useState("");


    const SubmitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/Book',{"name":book,"author":author})
        .then((book)=>{console.log(book)})
        .catch((err)=>{console.log(err)})
    } 
  return (
    <div>
        <h1>Book</h1>
        <form  onSubmit={SubmitHandler}>
            <input type="text" placeholder='book name' onChange={(e)=>{setBook(e.target.value)}}/>
            <input type="text" placeholder='auther' onChange={(e)=>{setAuthor(e.target.value)}}/>
            <button type="submit">Add Book</button>
        </form>
    </div>
  )
}

export default Book