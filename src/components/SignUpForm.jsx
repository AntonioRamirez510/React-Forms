import { useState } from "react";


const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(username.length && password.length){
      try {
        const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({username, password})
        })
        const json = await response.json();
        const token = json.token
        setToken(token);
        console.log(`Thank you for Signing up`, username,`!`)
        setUsername('')
        setPassword('')
      } catch(error) {
        setError(error.message);
      }

    }
  }

  return (

    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event)=> setUsername(event.target.value)}/>
        </label>
        <br></br>

        <label>
          Password:
          <input
          type="password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}/>
        </label>
        <br></br>

        <button>Sign-Up!</button>
      </form>
    </>
  )
}

export default SignUpForm
