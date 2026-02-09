import React from "react";

function GreetingCard(){
    const name="Bhavya";
    const message="Welcome to React";
    const date=new Date().toDateString();
    return(
        <div style={{
      border: "2px solid black",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      width: "300px",
      margin: "50px auto",
      backgroundColor: "#f0f8ff"
            }
        }>
            <h1>Hello {name}!</h1>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    )
}

export default GreetingCard