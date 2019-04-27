export const bookAdd=(form)=>{
  return{
    type:'BOOK_ADD',
    payload:form
  }
}

export const bookEdit=(form)=>{
  return{
    type:'BOOK_EDIT',
    payload:form
  }
}

export const bookDelete=(id)=>{
  return{
    type:'BOOK_DELETE',
    payload:id
  }
}