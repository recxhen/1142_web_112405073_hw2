"use client"
import { useEffect, useState } from "react"


export default function result() {
  
  const [id, setId]= useState({name: "", age: 0, city: ""});

  useEffect(()=>{
    fetch("http://localhost:3002/person?id=0")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setId(data)

        postData()
      })
    
  },[])
  
  function postData(){
    fetch("http://localhost:3002/message-box", {
      method: "POST",
      body: JSON.stringify("YA")
    })
    .then(response=> response.json)
    .then(data=> console.log(data));
  }

  return (
    <>
      test api
      <div>
        <div>name: {id.name}</div>
        <div>age: {id.age}</div>
        <div>city: {id.city}</div>
      </div>
    </>
  )

}