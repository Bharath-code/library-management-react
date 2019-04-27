import {combineReducers} from 'redux';
const initialState=[{
  id:1,
  bkName:'I Too Had a Love Story',
  bkDesc:'I Too Had a Love Story is an English autobiographical novel written by Ravinder Singh. This was the debut novel of the author and was first published in 2008 by Srishti Publishers, in 2012 it was republished by Penguin India',
  bkCount:34,
  bkAuthor:'Ravinder Singh'
}];
const BookMaintenace=(state=initialState,action)=>{
  switch(action.type){
    
    case 'BOOK_ADD':    
      return [...state,action.payload];
    case 'BOOK_EDIT':
      var nBook=state.map(el=>el.id===action.payload.id?action.payload:el);      
      return nBook;
    case 'BOOK_DELETE':
    console.log('sd',action.payload)
      return state.filter(el=>el.id!==action.payload)
    default:
      return state;
  }
}

export default combineReducers({Book:BookMaintenace});