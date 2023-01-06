import { useState } from 'react';
import './App.css';

function App() {
  const [inputarr,setInputarr]=useState([])
  const [inputdata,SetInputdata]=useState({
    name:"",
    rollNo:""
  })


  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})

  }
  let {name,rollNo}=inputdata
  function changhandle(){
    setInputarr([...inputarr,{name,rollNo}])

    SetInputdata({name:"",rollNo:""})

  }


  return (
    <div className="App">
      <input type="text"  autoComplete='off' name='name' value={inputdata.name} onChange={changehandle} placeholder="Enter the name"/> <br />  
      <input type="text" autoComplete='off' name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder= "Roll no" /> <br />  <br /> 

      <button onClick={changhandle}>Add It</button>
      {/* <button onClick={changhandle2}>check Array in console</button> */}

      <table border={1} width="30%" cellPadding={10}>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Roll No</td>
        </tr>
        {
          inputarr.map((info,ind)=>{
            return(
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.rollNo}</td>
              </tr>
            )
          })
        }
          </tbody>
      </table>

     
    </div>
  );
}

export default App;
