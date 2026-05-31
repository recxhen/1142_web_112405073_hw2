// src/store.js
import { create } from 'zustand'

const questionData = [
    {
      title: "你剛在草叢中醒來，一隻體型比你大三倍的巨型野獸突然朝你咆哮，宣示領地！此時你體內的「戰鬥本能」第一反應是？",
      options:[
        {
          text: "全身毛發豎起！立刻張牙舞爪地吼回去，不管三七二十一，先開打再說！",
          value: 1
        },
        {
          text: "冷靜地壓低身體，一邊觀察牠的動作尋找破綻，一邊調動體內的能量準備反擊。",
          value: 2
        },
        {
          text: "覺得沒必要硬碰硬，立刻發動身法或擬態，輕巧地躍上樹枝，隱入陰影中。",
          value: 3 
        }
      ]
    },
    {
      title: "叢林裡突然降下神祕的爆雨，你的身體開始發熱、渴望進化，直覺告訴你哪裡能找到突破的契機？",
      options:[
        {
          text: "冒著滾滾熱氣、流淌著岩漿的火山",
          value: 1
        },
        {
          text: "長滿發光地衣、空氣中飄散著治癒孢子的古老巨木樹洞",
          value: 2
        },
        {
          text: "瀑布沖刷、匯聚了百年天地靈氣的深潭",
          value: 3 
        }
      ]
    },
    {
      title: "你踩到了一個人類捕獸夾，這時前方傳來了陣陣腳步聲，你會？",
      options:[
        {
          text: "怒氣值滿點！直接用蠻力或元素大招強行炸開陷阱。",
          value: 1
        },
        {
          text: "冷靜分析，使用體內的毒素、麻痺或幻術技能，讓接近的人類陷入混亂，再慢慢脫困。",
          value: 2
        },
        {
          text: "保存體力，先假裝被捕獲、降低對方戒心，等進球或靠近營地時再發動致命偷襲。",
          value: 3 
        },
      ]
    },
    {
      title: "你在與叢林守護者的決鬥中受了重傷，雖然贏了，但體力近乎透支。此時你會如何讓自己恢復？",
      options:[
        {
          text: "咬緊牙關，拖著疲憊的身軀走回自己的巢穴，堅信強者只能靠意志力熬過黑夜。",
          value: 1
        },
        {
          text: "就地沉睡，將身體與大自然融為一體，利用草木、溫泉或雨水來慢慢治癒自己。",
          value: 2
        },
        {
          text: "去搶奪或尋找其他弱小怪物的樹果地盤，用最快、最有效率的方式掠奪資源恢復。",
          value: 3 
        },
      ]
    },
    {
      title: "當你終於突破界限，迎來終極進化！你希望自己獲得什麼樣的能力？",
      options:[
        {
          text: "能瞬間燃盡一切阻礙、震碎整片叢林的絕對破壞力。",
          value: 1
        },
        {
          text: "能無視空間干擾、在叢林各處甚至雲端自由瞬移的速度。",
          value: 2
        },
        {
          text: "能讓方圓百里枯木逢春、掌控生靈治癒的奇蹟生命力。",
          value: 3 
        },
      ]
    }
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }