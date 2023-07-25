
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [data, setData] = useState({username: "", password: ""})
  let [error, setError] = useState("")

  function handleChange(){
    if(!data.username || !data.password){
      setError("Both username and password are required.")
    }
    else{
      setError("")
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <input type="text" onChange={(e) => setData({...data, "username": e.target.value})}></input>
        </div>
        <div>
          <input type="password" onChange={(e) => setData({...data, "password": e.target.value})}></input>
        </div>
        {
          error &&
          <div id="errorMessage">{error}</div>
        }
        <button onClick={handleChange}>Login</button>
    </div>
  )
}

export default App
