import React from 'react'
import Student from './Student';
function App() {
  let a = 12;
  const mystyle = {
    backgroundColor: "red",
    color: "white"
  }
  return (
    <div style={mystyle}> ABES Engineering College
      <div style={mystyle}> {a}</div>
      <div>
        <Student college='ABES ENGINEERING COLLEGE'
          branch="Dhaba"
          name="Jaggumal Halwai"
          roll="1234"
        />
      </div>
    </div>

  )
}

export default App