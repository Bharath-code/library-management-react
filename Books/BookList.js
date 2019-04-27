import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {bookDelete} from '../action';
import './BookList.css';
class BookList extends React.Component{
  state={
    search:''
  }
  renderList(){
    return this.props.Book.filter(id=>!id.bkName.search(this.state.search)).map((el,idx)=>{
      return <div className="card" key={idx}>
         <span > {el.bkName}</span>
          <Link className="material-icons Icon" style={{textDecoration:'none'}} 
          to={'/edit_book/'+el.id}>edit</Link>
          <i className="material-icons Icon" 
          onClick={()=>this.props.bookDelete(el.id)}>delete </i>
      </div>
    })
  }
  handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    this.setState({[name]:value})
  }
  render(){
    //console.log(this.props)
    return(
     <div className="container">
      <h3 > Book Library</h3>  
      <input type="text" className="inputStyle" value={this.state.search} name="search" onChange={this.handleChange} placeholder="search" />   
      {this.renderList()}
    </div> 
    )
  }
}
const mapsStateToProps=(state)=>{
  //console.log('s',state);
  return state;
}
export default connect(mapsStateToProps,{bookDelete})(BookList);