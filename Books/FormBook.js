import React from 'react';
import './FormBook.css'

const FormBook=(props)=>{
    return(
      <div >
        <form onSubmit={props.handleSubmit} autoComplete='off'>
          <label htmlFor="bkName"><b>Book Name</b></label>
          <input className='inputStyle' type="text" placeholder="Enter Name" 
          name="bkName" value={props.bkName} onChange={props.handleInput} required/>

          <label htmlFor="bkDesc"><b>Book Description</b></label>
          <textarea className='inputStyle' type="text" rows="4" cols="70" placeholder="Enter Description" 
          value={props.bkDesc} onChange={props.handleInput} name="bkDesc" required/>

          <label htmlFor="bkCount"><b>Book Available Count</b></label>
          <input className='inputStyle' type="text" placeholder="Enter available count"
          value={props.bkCount} onChange={props.handleInput} name="bkCount" required/>

          <label htmlFor="bkAuthor"><b>Book Author</b></label>
          <input className='inputStyle' type="text" placeholder="Enter Author Name"
           onChange={props.handleInput} value={props.bkAuthor} name="bkAuthor" required/>

          <button className='buttonSuccess' type="submit">Submit </button> 
        </form>   
      </div>
    )
  }

export default FormBook;