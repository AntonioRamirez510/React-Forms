import { useState, useEffect } from 'react';

const Authenticate = ({token}) => {
  const [successMessage, setSuccessMessage] = useState(null)
  const [error, setError] = useState(null)

    const handleClick = async(event) => {
      try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              }
          }
       );
       const json = await response.json();
       if(json.success){
         setSuccessMessage(json.message || JSON.stringify(json));
       } else{
        setError(json.message)
       }
       console.log(`Attempting Authentication...`, json)
      } catch(error) {
        setSuccessMessage(null);
        setError(error.message);
      }
    }




  return (
    <>
    {token && <h2>Authentication</h2>}
    {successMessage && <p id="success">{successMessage}</p>}
    {error && <p id="error">{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenticate
