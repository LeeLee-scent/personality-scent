// script.js

document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    {
      question: "你最嚮往的生活場景是？",
      options: [
        { text: "陽光普照的公路旅行", result: "citrus" },
        { text: "木屋裡靜靜閱讀", result: "woody" },
        { text: "午後與好友賞花聊天", result: "floral" },
        { text: "森林裡冥想或瑜伽", result: "earthy" },
        { text: "老屋咖啡館裡寫字", result: "sweet" },
        { text: "雨天獨處整理空間", result: "soap" },
      ],
    },
    {
      question: "你最常被說擁有什麼氣質？",
      options: [
        { text: "陽光、開朗", result: "citrus" },
        { text: "穩重、可靠", result: "woody" },
        { text: "溫柔、細膩", result: "floral" },
        { text: "療癒、自然", result: "earthy" },
        { text: "甜美、浪漫", result: "sweet" },
        { text: "簡潔、冷靜", result: "soap" },
      ],
    },
    {
      question: "以下哪一種香氣最吸引你？",
      options: [
        { text: "柑橘香", result: "citrus" },
        { text: "木質香", result: "woody" },
        { text: "花香調", result: "floral" },
        { text: "青草香", result: "earthy" },
        { text: "果香與甜香", result: "sweet" },
        { text: "皂感香", result: "soap" },
      ],
    },
    {
      question: "當你情緒低落時，你會選擇？",
      options: [
        { text: "戶外活動轉移情緒", result: "citrus" },
        { text: "靜坐或冥想自我對話", result: "woody" },
        { text: "找朋友聊聊", result: "floral" },
        { text: "寫日記或手作", result: "earthy" },
        { text: "看劇聽音樂療癒", result: "sweet" },
        { text: "泡澡後好好睡一覺", result: "soap" },
      ],
    },
    {
      question: "你喜歡的穿搭風格是？",
      options: [
        { text: "活潑色系 + 運動風", result: "citrus" },
        { text: "深色 + 經典剪裁", result: "woody" },
        { text: "飄逸長裙 + 柔和色", result: "floral" },
        { text: "亞麻自然風", result: "earthy" },
        { text: "文青混搭感", result: "sweet" },
        { text: "極簡黑白灰", result: "soap" },
      ],
    },
    {
      question: "哪句話最打動你？",
      options: [
        { text: "『人生就是一場即興的公路冒險』", result: "citrus" },
        { text: "『沈默是最有力量的溫柔』", result: "woody" },
        { text: "『柔軟是一種深刻的力量』", result: "floral" },
        { text: "『樹的存在，是最沉靜的自由』", result: "earthy" },
        { text: "『溫柔不是示弱，是另一種堅強』", result: "sweet" },
        { text: "『純粹是一種難得的質感』", result: "soap" },
      ],
    },
  ];

  let currentQuestion = 0;
  const resultsCount = {
    citrus: 0,
    woody: 0,
    floral: 0,
    earthy: 0,
    sweet: 0,
    soap: 0,
  };

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next");
  const resultContainer = document.getElementById("result");

  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.className = "option";
      btn.onclick = () => selectOption(index);
      optionsEl.appendChild(btn);
    });
  }

  function selectOption(index) {
    const selected = quizData[currentQuestion].options[index].result;
    resultsCount[selected]++;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    const highest = Object.entries(resultsCount).sort((a, b) => b[1] - a[1])[0][0];
    window.location.href = `result-${highest}.html`;
  }

  loadQuestion();
});
