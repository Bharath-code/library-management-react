import React from 'react';
import {connect} from 'react-redux';

import FormBook from './FormBook';
import {bookAdd,bookEdit} from '../action';
import './BookList.css';
class BookAdd extends React.Component{
  constructor(props){
      super(props);
      this.state={
        id:'',
        bkName:'',
        bkDesc:'',
        bkCount:'',
        bkAuthor:'',
        title:'Book Add'
      };
    }
  componentDidMount(){
    this.handleState(this.props);
  }
  componentWillReceiveProps(nextProps){
      //console.log('sd',nextProps)
     this.handleState(nextProps);
  }
  handleState(nextProps){
    const {match,Book}=nextProps;
    
    if(match.path==="/edit_book/:name"){      
      const val=Book.find(el=>el.id==match.params.name);
      this.setState({title: 'Book Edit'});
      console.log(val);
      this.setState({...val});      
    } else {
      this.setState({
        bkName:'',
        bkDesc:'',
        bkCount:'',
        bkAuthor:'',
        title:'Book Add'
      });
    }
  }
  
   handleSubmit=(e)=>{
     e.preventDefault();
     // console.log(this.state);
     const {match,Book}=this.props;
     if(Book.length>0){
    var max=Book.reduce((max, b) => Math.max(max, b.id), Book[0].id);
    console.log(max)
     } else{
       var max=1;
     }
    if(match.path==="/edit_book/:name"){
      this.props.bookEdit(this.state)
    } else {
      this.props.bookAdd({...this.state,id:max+1});

    }
      this.setState({
        bkName:'',
        bkDesc:'',
        bkCount:'',
        bkAuthor:''
      });
      this.props.history.push('/');
    }

    handleInput=(e)=>{
      //console.log('e')
      let name=e.target.name;
      let value=e.target.value;
      this.setState({[name]:value})
    }

  render(){
    //console.log(this.props)
    return(
      <div className="container">
      <h3>{this.state.title}</h3>
      <FormBook {...this.state} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapPropsToState=(state)=>{
  //console.log(state)
  return state;
}
export default connect(mapPropsToState,{bookAdd,bookEdit})(BookAdd);