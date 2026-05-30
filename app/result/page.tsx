"use client"
import Link from "next/link";

import { useEffect, useState } from "react"
import { usePsyStore } from "@/store/store"
import { useRouter } from "next/navigation"

export default function result() {
  const router = useRouter();
  const psyData = usePsyStore( (state)=> state.psyData);
  const setPsyScore = usePsyStore( (state) => state.setScore );
  const [psyResult, setPsyResult] = useState(<> </>);

  useEffect(() => {
    getResult();
  }, [psyData.score]);


  function getResult(){

    if (psyData.score < 3) {
      setPsyResult(
         <div>
          結果 A
        </div>
      );
      
    } else if (psyData.score >= 3 && psyData.score < 7) {
      setPsyResult(<div>結果Ｂ</div>);
    } else {
      setPsyResult(<div>結果Ｃ</div>);
    }
  }



  return (
    <>
      <div className="flex flex-col justify-center item-center gap-4 ">

        結果，目前積分：{psyData.score}
        {
          psyData.score < 3 && <div>結果 A</div>
        }

        {
          psyData.score >= 3 && psyData.score < 7 && <div>結果Ｂ</div>
        }

        {
          psyData.score >= 3 && <div>結果Ｃ</div>

        }

        <Link className="text-white bg-black px-3 py-2" href="/">再玩一次</Link>
      </div>

    </>
  )





}