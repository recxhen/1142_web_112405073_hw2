"use client"
import Link from "next/link";

import {useEffect, useState} from "react"

export default function prepare(){

  return(
    <>
      <div className="flex flex-col justify-center item-center gap-4 ">
        準備
        <Link className="text-white bg-black px-3 py-2" href="/result">揭曉答案</Link>  
      </div>

    </>
  )





}