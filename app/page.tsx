"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import ActionButton from "@/component/ActionButton";
import Emoticons from "@/component/Emoticons";


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
        
        想知道你是哪種植物嗎？花三分鐘揭曉最適合你的植物！
        {/* <Emoticons/> */}
        {/* <Emoticons faceIndex={0}>
         <Link className="text-white bg-black px-3 py-2" href="/question">11111</Link>  

        </Emoticons> */}


        <Link className="text-white bg-black px-3 py-2" href="/question">START</Link>  
        {/* <ActionButton/> */}
      </div>

    </>
  );
}