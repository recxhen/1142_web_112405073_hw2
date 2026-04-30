"use client"
import Link from "next/link";
import {useEffect, useState} from "react"

export default function Home(){

  
  // 階段名稱   路由規劃
  // 歡迎畫面  /
  // 答題      /
  // 準備看結果 /
  // 看結果    /
  // https://psy-test.com/love/result?id=10


    
  return(
    <>
      <div className="flex flex-col justify-center item-center gap-4 ">
        歡迎！
        <Link className-="text-white bg-black px-3 py-2" href="/question">START</Link>  
      </div>

    </>
  ) 





}