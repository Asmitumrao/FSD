// import React from 'react'
// import Student from './Student';
// import logo from "./assets/download.png"
// function App() {
//   let a = 12;
//   const mystyle = {
//     backgroundColor: "red",
//     color: "white"
//   }
//   const studentData=[
//   {
//     pic:`${logo}`,
//     branch:"Dhaba",
//     name:"Asmit Umrao",
//     roll:"1234"

//   },
//   {
//     pic:`${logo}`,
//     branch:"Dhaba",
//     name:"Jaggu Halwai",
//     roll:"1234"

//   },
//   {
//     pic:`${logo}`,
//     branch:"Dhaba",
//     name:"raju Halwai",
//     roll:"1234"

//   }
//   ]
//   return (
    
//     <div style={mystyle}> ABES Engineering College
//       <div style={mystyle}> {a}</div>
//       <div style={{display : "flex"} }>

//         <Student data= {studentData} />

//         {/* <Student college='ABES ENGINEERING COLLEGE'
//           pic={<img src={logo} height={200} width={300}></img>}
//           branch="Dhaba"
//           name="Jaggumal Halwai"
//           roll="1234"
//         />

//         <Student 
//           pic={<img src={logo} height={200} width={300}></img>}
//           branch="Dhaba"
//           name="Jaggumal Halwai"
//           roll="1234"
//         />

//         <Student college='ABES ENGINEERING COLLEGE'
//           pic={<img src={logo} height={200} width={300}></img>}
//           branch="Dhaba"
//           name="Jaggumal Halwai"
//           roll="1234"
//         /> */}



//       </div>
//     </div>

//   )
// }

// export default App

// import React from 'react'
// import StudentState from './StudentState'

// function App() {
//   return (
//     <div>
//       <StudentState/>
//     </div>

//   )
// }

// export default App


// import React from 'react'
// import Imagemanipulation from './imagemanipulation'
// function App() {
//   return (
//     <div><Imagemanipulation/></div>
//   )
// }

// export default App

// import React, { useState } from 'react'
import Login from './login'
import Registeration from './Registeration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './mainLayout'





function App() {


  // const [rdata,setRdata]=useState()
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registeration' element={<Registeration/>}/>
        </Route>
      </Routes>
      </BrowserRouter>


      {/* <div>{JSON.stringify(rdata)}</div> */}
      {/* <Login logindata={rdata}/> */}
      {/* <Registeration regdata={setRdata}/> */}
    </div>
  )
}

export default App