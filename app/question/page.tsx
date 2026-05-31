"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "../../store/store";

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  console.log(psyData);
  console.log(psyData.quizData);

  useEffect(() => {
    console.log("目前分數：" + psyData.score);
  }, [psyData.score]);

  function nextQuestion(optionIndex: any) {
    console.log("使用者選擇：" + optionIndex);

    setPsyScore(psyData.score + psyData.quizData[questionIndex].options[optionIndex].value);
    console.log(psyData.score);

    if (questionIndex != psyData.quizData.length - 1) {
      console.log("下一題～");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("進入準備看結果頁面")
      router.push("/prepare");
    }
  }

  // 防止資料尚未載入時造成的出錯
  if (!psyData || !psyData.quizData || !psyData.quizData[questionIndex]) {
    return (
      <div className="flex h-full items-center justify-center text-lg font-bold text-[#543d2b]">
        載入中...
      </div>
    );
  }

  return (
    // 主容器：確保在父層（Layout 的 flex-1）中水平垂直置中，並限制最大寬度
    <div className="flex flex-col justify-center items-center gap-6 min-h-[70vh] w-[92%] max-w-[400px] mx-auto py-4 box-border select-none">
      
      {/* 📜 問題方塊：延續立體木質質感，字體放大至 text-lg */}
      <div className="w-full text-base md:text-lg leading-relaxed text-left text-[#543d2b] font-bold box-border bg-[#f3da9f] shadow-[5px_5px_0px_0px_#1d130b] border-t-4 border-l-4 border-[#fff1d0] border-r-4 border-b-4 border-[#ad7224] p-4 rounded-sm">
        {"Q" + (questionIndex + 1) + ". " + psyData.quizData[questionIndex].title}
      </div>

      {/* 🖲️ 選項區塊：垂直排列，gap-4 保持間距 */}
      <div className="w-full flex flex-col gap-4">
        {psyData.quizData[questionIndex].options.map((option: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => nextQuestion(index)}
              className="w-full text-sm md:text-base text-left text-[#eadeca] bg-[#ad7224] font-bold p-4 tracking-wide border-t-4 border-l-4 border-[#e09f4c] border-r-4 border-b-4 border-[#614124] shadow-[4px_4px_0px_0px_#1d130b] cursor-pointer rounded-sm transition-all duration-75 box-border
              hover:-translate-y-[2px] hover:shadow-[4px_6px_0px_0px_#1d130b] 
              active:translate-y-[2px] active:shadow-[4px_2px_0px_0px_#1d130b]"
            >
              {option.text}
            </div>
          );
        })}
      </div>

    </div>
  );
}