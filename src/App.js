import React, { createRef, useRef, useState } from "react";
import './App.css';
import InputField from "./Components/InputField";

function App() {
  const inputRefs = useRef([
    createRef(), createRef()
  ]);
  const [data, setData] = useState({});

  function handleChange(name , value) {
    setData(prev => ({...prev, [name]: value}))
  }

  function submitForm(e) {
    e.preventDefault();
    let isValid = true;

    for(let i=0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if(!valid) {
        isValid = false;
      }
    }
    if(!isValid) {
      return
    }
    console.log("Logged In!")
    // Carry on as normal
  }
  console.log(data)
  return (
    <div className="App">
      <form onSubmit={submitForm} className="form">
        <h1>React Register Form</h1>
        <InputField
          ref={inputRefs.current[0]}
          name='username'
          label='username*:'
          value={data.username}
          onChange={handleChange}
          validation="required|min:6|max:12"  />
        <InputField
          ref={inputRefs.current[1]}
          value={data.password}
          name='password'
          label='password*:'
          type='password'
          onChange={handleChange}
          validation="required|min:6"  />
          <button>Login</button>
      </form>
    </div>
  )
}

export default App;
