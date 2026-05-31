"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [psyResult, setPsyResult] = useState(<></>);
  
  useEffect(() => {
    getResult();
  }, [psyData.score]);

  function getResult() {
    // 根據不同的分數區間，渲染對應的幻獸結果、圖片與解釋
    if (psyData.score < 7) {
      setPsyResult(
        <div className="w-full flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold text-[#ef4444] drop-shadow-[1px_1px_0px_#1d130b] tracking-widest">
            ❉ 火焰獅 ❉
          </h2>
          {/* 圖片框 */}
          <div className="w-full h-full bg-[#311e05] border-4 border-[#ef4444] p-2 shadow-[4px_4px_0px_0px_#1d130b] flex items-center justify-center">
            <img src="/lion.png" alt="火焰獅" className="w-full h-full object-contain pixel-img" />
          </div>
          {/* 解釋方塊 */}
          <div className="w-full text-sm leading-loose text-left text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
            體內湧動著無盡的火元素核心！你擁有極高的熱情與行動力，面對挑戰總是勇往直前。在叢林中，你就是那道最耀眼、最不容忽視的熾熱光芒。
          </div>
        </div>
      );
    } else if (psyData.score >= 9 && psyData.score < 11) {
      setPsyResult(
        <div className="w-full flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold text-[#22c55e] drop-shadow-[1px_1px_0px_#1d130b] tracking-widest">
          ✿ 青苔鹿 ✿
          </h2>
          <div className="w-full h-full bg-[#311e05] border-4 border-[#22c55e] p-2 shadow-[4px_4px_0px_0px_#1d130b] flex items-center justify-center">
            <img src="/deer.png" alt="青苔鹿" className="w-full h-full object-contain pixel-img" />
          </div>
          <div className="w-full text-sm leading-loose text-left text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
            與森林大地完美共鳴的溫柔靈獸。你心思細膩、愛好和平，擅長療癒周遭的人。如同靜謐長青的青苔，在默默之中為整個生態系帶來穩定的生命力。
          </div>
        </div>
      );
    } else if (psyData.score >= 11 && psyData.score < 13) {
      setPsyResult(
        <div className="w-full flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold text-[#06b6d4] drop-shadow-[1px_1px_0px_#1d130b] tracking-widest">
           ❆ 潮汐龜 ❆
          </h2>
          <div className="w-full h-full bg-[#311e05] border-4 border-[#06b6d4] p-2 shadow-[4px_4px_0px_0px_#1d130b] flex items-center justify-center">
            <img src="/turtle.png" alt="潮汐龜" className="w-full h-full object-contain pixel-img" />
          </div>
          <div className="w-full text-sm leading-loose text-left text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
            沉穩如海、智慧深邃的古老血脈。你具備極強的包容力與冷靜的思考能力，總能在混亂中理出頭緒。流水不爭先，你的沉著便是你最強大的防禦與武器。
          </div>
        </div>
      );
    } else {
      setPsyResult(
        <div className="w-full flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold text-[#eab308] drop-shadow-[1px_1px_0px_#1d130b] tracking-widest">
            ⚡ 雷電鼠 ⚡
          </h2>
          <div className="w-full h-full bg-[#311e05] border-4 border-[#eab308] p-2 shadow-[4px_4px_0px_0px_#1d130b] flex items-center justify-center">
            <img src="/rat.png" alt="雷電鼠" className="w-full h-full object-contain pixel-img" />
          </div>
          <div className="w-full text-sm leading-loose text-left text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
            充滿靈性、迅捷如雷的叢林精靈！你思維敏捷、好奇心旺盛，常常有些出人意料的神來之筆。如同閃電般迅速的適應力，讓你總能輕鬆玩轉任何艱難的環境。
          </div>
        </div>
      );
    }
  }

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  return (
    // 主容器置中調整
    <div className="flex flex-col justify-center items-center gap-6 min-h-[72vh] w-[92%] max-w-[400px] mx-auto py-4 box-border select-none text-center">
      
      {/* 🧾 頂部積分小標籤 */}
      {/* <div className="text-[10px] bg-[#311e05] text-[#eadeca] px-2 py-1 border border-[#1d130b] font-mono opacity-80 tracking-wide">
        LOG_SCORE: {psyData.score}
      </div> */}
      
      {/* 🎯 動態產生的結果區塊 */}
      <div className="w-full flex flex-col items-center">
        {psyResult}
      </div>
      
      {/* 🖲️ 立體像素按鈕 - 再玩一次 */}
      <button 
        className="text-[#f3da9f] bg-[#ad7224] font-bold px-8 py-3 tracking-widest text-base mt-4 border-t-4 border-l-4 border-[#e09f4c] border-r-4 border-b-4 border-[#614124] shadow-[4px_4px_0px_0px_#1d130b] cursor-pointer transition-all duration-75 box-border
        hover:-translate-y-[2px] hover:shadow-[4px_6px_0px_0px_#1d130b] 
        active:translate-y peril-active:translate-y-[2px] active:translate-y-[2px] active:shadow-[4px_2px_0px_0px_#1d130b]" 
        onClick={playAgain}
      >
        再玩一次
      </button>

    </div>
  );
}