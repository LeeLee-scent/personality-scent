
const questions = [
  {
    question: "早晨醒來時，你最喜歡的儀式是？",
    options: [
      ["沖杯手沖咖啡", "木質"],
      ["播輕音樂", "花香"],
      ["打開窗迎接陽光", "柑橘"],
      ["點香冥想", "東方"],
      ["清理空間", "皂感"],
      ["穿上最愛穿搭", "高冷"]
    ]
  },
  {
    question: "你最常釋放壓力的方式是？",
    options: [
      ["靜靜獨處", "木質"],
      ["和朋友傾訴", "花香"],
      ["運動流汗", "柑橘"],
      ["旅行轉換心情", "東方"],
      ["清潔收納", "皂感"],
      ["買點精品犒賞自己", "高冷"]
    ]
  },
  {
    question: "哪一句話最能打動你？",
    options: [
      ["慢一點，才能看到細節。", "木質"],
      ["愛是與世界溫柔相處。", "花香"],
      ["自由是一種選擇。", "柑橘"],
      ["走出去，你才知道你多強大。", "東方"],
      ["乾淨，是一種修行。", "皂感"],
      ["高級，是不需要解釋的自信。", "高冷"]
    ]
  }
];

const results = {
  "木質": "🌿 你是寧靜木質型：內斂、沈穩，如雪松與岩蘭草。",
  "花香": "🌸 你是柔美花香型：溫柔體貼，如牡丹或小蒼蘭。",
  "柑橘": "🍋 你是清新柑橘型：朝氣活潑，像檸檬與橙花。",
  "東方": "🔥 你是辛香東方型：神秘而強烈，如香料與琥珀。",
  "皂感": "💧 你是皂感中性型：極簡、乾淨，追求秩序。",
  "高冷": "🌌 你是奢冷高調型：自信獨立，如皮革與鳶尾。"
};

let current = 0;
let scores = {};
const quizDiv = document.getElementById("quiz");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[current];
  quizDiv.innerHTML = "<h2>" + q.question + "</h2>";
  q.options.forEach(([text, type]) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = text;
    btn.onclick = () => {
      scores[type] = (scores[type] || 0) + 1;
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    quizDiv.appendChild(btn);
  });
}

function showResult() {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const type = sorted[0][0];
  quizDiv.innerHTML = "<h2>你的香氣人格是：</h2><p>" + results[type] + "</p>";
  restartBtn.style.display = "inline-block";
}

restartBtn.onclick = () => {
  current = 0;
  scores = {};
  restartBtn.style.display = "none";
  showQuestion();
};

showQuestion();
