import React from 'react'
import Footer from './Footer'
import NewTodo from '../containers/NewTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <NewTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
