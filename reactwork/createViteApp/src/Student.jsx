import React from 'react'
import "./student.css"
function Student({data}) {
  return (

    <div className='icard'>
        {
            // JSON.stringify(data)
        }
        
        <table border={1}>
            <tbody>
                <tr>
                    <th colSpan={2}>{data.college}</th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <img src={data.pic} alt="" height={200} width={300} />
                    </td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <th>RollNo</th>
                    <td>{data.roll}</td>
                </tr>
                <tr>
                    <th>Branch</th>
                    <td>{data.branch
                        }</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
Student.defaultProps={
    college:"AKG Engineering College"
}

export default Student