"use client"

import {useState} from "react"

export default function Home(){
  const[counter, setCounter] = useState(0)

  function addMorning(){
    console.log("被點到了");
    setCounter(counter+1)
  }
  return(
    <>
      <div>道{counter}聲早安</div>
      <div onClick={addMorning} className="border-white border flex px-3 py-1 inline">說早安</div>
    
    </>
  )





}