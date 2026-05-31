"use client"
import { useEffect, useState } from "react"


export default function Emoticons({ children, faceIndex }: { children: React.ReactNode, faceIndex:number }) {

    const emoticons = ["(ꐦ°д°)", "(*'꒳'* )", "(◉３◉)"]
    const [currentEmo, setCurrentEmo] = useState(0);

    const face = ["(ノ▼Д▼)ノ", "(=^-ω-^=)"]
    const [currentFace, setCurrentFace] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log("10s");

        }, 10000);

        setInterval(() => {
            if (currentFace % 5 == 0){
                setCurrentFace(1) 
            }else{
                setCurrentFace(0)
            }
            setCounter(counter+1);
        }, 1000)
}, []);
    return (
        <>
            {children}
            {face[currentFace]}
        </>
    );
}