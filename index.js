import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter ,Route,Link,Switch} from 'react-router-dom';

import BookList from './Books/BookList';
import BookAdd from './Books/BookAdd'
import './style.css';
import reducers from './reducer'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div id="main" style={{display:'flex'}}>
          <BookList/>          
          <div className='newDiv'>
            <Link className='newButton' to='/new_book'>
              New Book           
            </Link>
          </div>          
          <Switch>
            <Route path="/new_book" exact component={BookAdd}/>
            <Route path="/edit_book/:name" exact component={BookAdd}/>    
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('root'));
