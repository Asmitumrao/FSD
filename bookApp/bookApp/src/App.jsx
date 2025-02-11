import React from 'react'
import Book from './Book'

function App() {
  return (
    <div>
      <h1>Bookstore</h1>

      <Book isbn='978-83-7278-000-3' title='JavaScript: The Good Parts' author='Douglas Crockford' price={30.00} />
      <Book isbn='978-83-7278-000-4' title='JavaScript: The Definitive Guide' author='David Flanagan' price={45.00} />  
      <Book isbn='978-83-7278-000-5' title='You Don’t Know JS' author='Kyle Simpson' price={25.00} />
      <Book isbn='978-83-7278-000-6' title='Eloquent JavaScript' author='Marijn Haverbeke' price={20.00} />
    </div>
  )
}

export default App