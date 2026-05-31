import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Pixel Jungle Adventure",
  description: "8-bit pixel jungle with fully integrated background art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelFont.variable} h-full antialiased`}>
      <body 
        className="h-full flex justify-center items-center w-full relative overflow-hidden select-none font-mono antialiased"
        style={{
          // 滿版大背景圖（天空漸層、山稜、兩側大樹）
          backgroundImage: "url('/jungle-bg.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        
        {/* ==================== 中央主遊戲畫面螢幕容器 ==================== */}
        <div className="relative z-20 max-w-[480px] w-full h-[90vh] bg-[#fcedc0] text-[#311e05] border-8 border-t-[#bfc97b] border-x-[#13241e] border-b-[#849550] p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] flex flex-col font-['Press_Start_2P',_monospace] text-xs">
          
          {/* 容器內裝飾：左上角藤蔓（放大版） */}
          <img 
            src="/vine.png" 
            alt="Vine" 
            className="absolute -top-2 -left-2 w-32 h-auto z-30 pointer-events-none pixel-img"
          />

          

          {/* 頂部：像素 UI 狀態欄 */}
          <div className="w-full bg-[#311e05] text-[#fcedc0] p-2 mb-4 border-b-4 border-[#1f1202] flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1">
              <span>HP</span>
              <div className="w-20 h-3 bg-[#111827] p-[2px] border border-[#fcedc0]">
                <div className="h-full bg-[#ef4444]"></div>
              </div>
            </div>
            <div className="text-[#e9b85b]">🪙 999</div>
          </div>

          {/* 主要內容區 */}
          <div className="flex-1 overflow-y-auto pr-1 relative z-10">
            {children}
          </div>

          {/* ==================== 底部地表：全圖片控制的像素草皮與裝飾 ==================== */}
          <div className="w-[calc(100%+32px)] mt-4 relative -mx-4 h-12 overflow-visible shrink-0">            
            {/* 1. 像素草皮圖片 */}
            <img 
    src="/grass-floor.png" 
    alt="Grass Floor" 
    className="absolute bottom-0 left-0 w-full h-full object-cover z-20 pixel-img"
  />

            {/* 2. 左側小蘑菇（不壓縮比例放大版） */}
            <img 
              src="/mushroom.png" 
              alt="Mushroom" 
              className="absolute top-[-50px] left-6 w-[162.5px] h-auto z-30 pointer-events-none pixel-img"
            />

            {/* 3. 右側小蕨類 */}
            <img 
              src="/fern.png" 
              alt="Fern" 
              className="absolute -top-15 right-6 w-[162.5px] h-auto z-30 pointer-events-none pixel-img"
            />

          </div> {/* <-- 修正：確保底部草地容器正確閉合 */}

        </div> {/* <-- 修正：確保中央主畫面容器正確閉合 */}

      </body>
    </html>
  );
}