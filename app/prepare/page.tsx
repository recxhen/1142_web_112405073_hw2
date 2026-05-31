"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Prepare() {
  return (
    // 主容器：使用 min-h-[70vh] 並透過 flex 置中，確保內容在黃色大螢幕的正中央
    <div className="flex flex-col justify-center items-center gap-8 min-h-[70vh] w-[92%] max-w-[400px] mx-auto py-4 box-border select-none text-center">
      
      {/* 🏛️ 質感標題區塊（延續首頁裝飾線風格） */}
      <div className="w-full flex items-center justify-center gap-3 py-2">
        {/* 左裝飾線 */}
        <div className="flex flex-col items-end gap-[3px] opacity-70 flex-shrink-0">
          <div className="w-4 h-[3px] bg-[#543d2b]"></div>
          <div className="w-2 h-[3px] bg-[#ad7224]"></div>
        </div>
        
        {/* 標題文字 */}
        <h1 className="text-xl font-bold tracking-widest text-[#543d2b] drop-shadow-[1px_1px_0px_#fff1d0]">
          考察分析中
        </h1>
        
        {/* 右裝飾線 */}
        <div className="flex flex-col items-start gap-[3px] opacity-70 flex-shrink-0">
          <div className="w-4 h-[3px] bg-[#543d2b]"></div>
          <div className="w-2 h-[3px] bg-[#ad7224]"></div>
        </div>
      </div>

      {/* 📜 分析狀態方塊：立體木質質感 */}
      <div className="w-full text-base leading-loose text-center text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-6 rounded-sm">
        正在彙整你的冒險紀錄...<br />
        神祕的元素核心正在產生共鳴，<br />
        你的原始真面目即將揭曉！
      </div>

      {/* 🖲️ 立體像素按鈕 */}
      <Link 
        className="text-[#f3da9f] bg-[#ad7224] font-bold px-10 py-4 tracking-widest text-lg mt-2 inline-block border-t-4 border-l-4 border-[#e09f4c] border-r-4 border-b-4 border-[#614124] shadow-[4px_4px_0px_0px_#1d130b] transition-all duration-75 box-border
        hover:-translate-y-[2px] hover:shadow-[4px_6px_0px_0px_#1d130b] 
        active:translate-y-[2px] active:shadow-[4px_2px_0px_0px_#1d130b]" 
        href="/result"
      >
        揭曉答案
      </Link>  
      
      {/* 底部小裝飾：動態點點 */}
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-[#ad7224] animate-bounce"></div>
        <div className="w-2 h-2 bg-[#ad7224] animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-[#ad7224] animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}