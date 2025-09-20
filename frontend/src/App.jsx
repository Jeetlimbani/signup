import React, { useState } from 'react'
const App = () => {
const[text,text1]=useState(null);
const[password,password1]=useState(null)

  const handleSubmit=(e)=>{
   e.preventDefault();
   alert("Submitted")
   text1(" ");
   password1(" ");
  } 

  return (
    <div>
      <h1>Sign Up</h1>
    <form  onSubmit={handleSubmit}> 
      <label>Name</label><br></br>
      <input required type='text' value={text}></input><br></br>
      <label>Email</label><br></br>
      <input required type='email'value={text}></input><br></br>
      <label>Password</label><br></br>
      <input required type="password" value={password}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"></input><br></br>
      <label>Confirm Password</label><br></br>
      <input required type="password" name="confirm_password"></input><br></br>
      <input type='submit' value="Submit"/>
    </form>
    </div>
  )
}

export default App

