"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import ActionButton from "@/component/ActionButton";
import Emoticons from "@/component/Emoticons";

export default function Home() {
  return (
    // 1. 這裡使用 max-w-full 確保最外層不超過外框，並移除 w-screen
    <div className="flex flex-col justify-center items-center min-h-150 bg-[#61673c] p-4 font-mono box-border">
      
      {/* 2. 主容器：寬度設為 92%（確保手機兩側一定有安全留白），最大鎖在 400px */}
      <div className="flex flex-col justify-center items-center gap-5 w-[92%] max-w-[400px] text-center text-[#eadeca] box-border">
        
        {/* 🏛️ 質感標題區塊（無 Emoji，改用像素對稱裝飾線） */}
        <div className="w-full flex items-center justify-center gap-3 py-2 select-none box-border">
          {/* 左裝飾線 */}
          <div className="flex flex-col items-end gap-[3px] opacity-70 shrink-0">
            <div className="w-4 h-[3px] bg-[#eadeca]"></div>
            <div className="w-2 h-[3px] bg-[#ad7224]"></div>
          </div>
          
          {/* 主標題文字 */}
          <h1 className="text-xl font-black tracking-widest text-[#eadeca] drop-shadow-[2px_2px_0px_#1d130b] whitespace-nowrap">
            叢林考察誌
          </h1>
          
          {/* 右裝飾線 */}
          <div className="flex flex-col items-start gap-[3px] opacity-70 shrink-0">
            <div className="w-4 h-[3px] bg-[#eadeca]"></div>
            <div className="w-2 h-[3px] bg-[#ad7224]"></div>
          </div>
        </div>
        
        {/* 📜 立體木質文字方塊 */}
        <div className="w-full text-[15px] leading-loose text-left text-[#543d2b] font-medium box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
          睜開眼，你發現自己失去了人類的身體，四周是遮天蔽日的遠古巨木。
          體內湧動著一股神祕的元素核心，你低頭一看，自己的雙手竟然變成了……爪子？！
        </div>

        {/* 🖲️ 立體像素按鈕 */}
        <Link 
          className="text-[#f3da9f] bg-[#ad7224] font-bold px-8 py-3 tracking-widest text-base mt-2 inline-block border-t-4 border-l-4 border-[#e09f4c] border-r-4 border-b-4 border-[#614124] shadow-[4px_4px_0px_0px_#1d130b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1d130b] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 box-border" 
          href="/question"
        >
          START
        </Link>  
        
      </div>
    </div>
  );
}