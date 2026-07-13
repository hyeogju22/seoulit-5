const questions = [
  // --- [E vs I] 대인관계 & 에너지 방향 ---
  { q: "주말에 갑자기 보너스가 생겼을 때 나의 행동은?", a: "친구들을 소환해 풀코스로 쏜다 (E)", b: "조용히 통장에 넣고 배달앱을 켠다 (I)", type: "EI" },
  { q: "사람이 꽉 찬 엘리베이터에 탔을 때 나는?", a: "기 빨리고 빨리 내리고 싶다 (I)", b: "아무 생각 없거나 아는 사람 보면 반갑다 (E)", type: "EI" },
  { q: "팀 프로젝트를 할 때 내가 선호하는 역할은?", a: "발표나 조장 맡아서 전체 리드하기 (E)", b: "카톡 방에서 조용히 자료조사만 원본 제출하기 (I)", type: "EI" },
  { q: "스트레스를 만땅으로 받았을 때 해소법은?", a: "밖으로 나가서 사람들을 만나고 수다 떨기 (E)", b: "방 문 닫고 침대 속에서 유튜브나 OTT 정주행 (I)", type: "EI" },

  // --- [S vs N] 현실 인지 & 상상력 ---
  { q: "길을 걷다가 100억이 든 가방을 줍는다면?", a: "위조지폐 여부와 세금, 보상금부터 계산한다 (S)", b: "건물 매입하고 헬기 타는 상상을 한다 (N)", type: "SN" },
  { q: "사과를 보고 가장 먼저 드는 생각은?", a: "빨갛다, 맛있다, 아침에 먹으면 금사과 (S)", b: "스티브 잡스, 뉴턴, 만유인력, 독사과 백설공주 (N)", type: "SN" },
  { q: "넷플릭스에서 디스토피아 좀비 영화를 보고 난 후?", a: "재미있네, 근데 좀비 분장 진짜 같다 (S)", b: "우리 집 대문은 좀비가 부술 수 있을까 탈출 경로 구상 (N)", type: "SN" },
  { q: "강사나 선생님이 '이거 시험에 나온다'라고 했을 때?", a: "해당 페이지에 별표 치고 받아적기 바쁨 (S)", b: "이게 왜 시험에 나오지? 출제 의도가 뭘까 생각함 (N)", type: "SN" },

  // --- [T vs F] 판단의 기준 (팩폭 vs 공감) ---
  { q: "친구가 '슬퍼서 코인 샀어'라고 할 때 내 반응은?", a: "무슨 코인? 몇 층에 물렸는데? (T)", b: "무슨 일 있어? 마음이 힘들었구나 (F)", type: "TF" },
  { q: "친구가 열심히 준비한 시험에서 떨어졌다고 울 때?", a: "위로해주며 '다음엔 어떤 문제 위주로 준비할 거야?' 질문 (T)", b: "같이 눈물 흘리며 '진짜 고생 많았어, 그동안 노력한 거 다 알아' (F)", type: "TF" },
  { q: "나 화나서 노트북 던졌는데 부서졌어.", a: "노트북 기종이 뭔데? 수리비 많이 나오겠다 (T)", b: "헐 얼마나 화가 났으면 던졌어? 다치진 않음? (F)", type: "TF" },
  { q: "내가 생각하는 '나를 진정으로 생각해 주는 사람'이란?", a: "잘못된 점을 정확히 짚어주고 해결책을 주는 사람 (T)", b: "내 편에 서서 내 감정을 무조건 지지해 주는 사람 (F)", type: "TF" }
];

const results = {
  "EST": { title: "효율 제일주의 최고존엄", desc: "현실 감각과 논리력이 만렙인 타입! 감정 낭비를 제일 싫어하며, 일 처리 하나는 끝내주게 확실한 걸어 다니는 계산기입니다." },
  "ESF": { title: "골목대장 분위기 메이커", desc: "사람들을 이끄는 에너지가 넘치고 공감 능력도 뛰어난 마당발! 주변 사람 챙기는 것을 좋아하고 의리가 넘치는 타입입니다." },
  "ENT": { title: "야망 가득한 전략가 대장", desc: "아이디어가 끊이지 않으면서도 철저히 논리적인 야심가! 남들이 하지 않는 독창적인 방식으로 목표를 달성해 냅니다." },
  "ENF": { title: "리액션 끝판왕 인간 비타민", desc: "풍부한 상상력과 따뜻한 감성을 지닌 타입! 주변에 긍정적인 에너지를 뿜뿜하며, 사람들과 깊은 교감을 나눕니다." },
  "IST": { title: "비밀의 철벽 프로 분석러", desc: "조용하지만 실속은 다 챙기는 알짜배기 타입! 눈앞의 현실을 냉철하게 분석하고 계획에 맞춰 조용히 움직이는 고독한 장인입니다." },
  "ISF": { title: "조용한 천사, 프로 수호자", desc: "내 사람들에게 묵묵히 헌신하는 따뜻한 현실주의자! 드러내지 않고 뒤에서 챙겨주는 섬세함과 배려심이 돋보이는 성향입니다." },
  "INT": { title: "방구석 멀티버스 마스터", desc: "머릿속은 이미 우주 대전쟁 중인 뇌섹남/뇌섹녀! 논리적이고 독립적이며, 혼자 생각의 늪에 빠져 진리를 탐구하는 고독한 천재형입니다." },
  "INF": { title: "우주관조형 감성 소설가", desc: "겉은 조용해 보이지만 속은 엄청난 감수성과 생각으로 가득 찬 타입! 인간에 대한 깊은 고찰을 하며 나만의 평화를 즐깁니다." }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0 };

const startPage = document.getElementById('start-page');
const questionPage = document.getElementById('question-page');
const resultPage = document.getElementById('result-page');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const qText = document.getElementById('question-text');
const btnA = document.getElementById('answer-a');
const btnB = document.getElementById('answer-b');
const qCount = document.getElementById('question-count');
const progressBar = document.getElementById('progress');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

function showPage(page) {
  [startPage, questionPage, resultPage].forEach(p => p.style.display = 'none');
  page.style.display = 'flex';
}

function updateQuestion() {
  if (currentIdx >= questions.length) {
    showResult();
    return;
  }
  const currentQ = questions[currentIdx];
  qText.textContent = currentQ.q;
  btnA.textContent = currentQ.a;
  btnB.textContent = currentQ.b;
  qCount.textContent = `${currentIdx + 1} / ${questions.length}`;
  progressBar.style.width = `${(currentIdx / questions.length) * 100}%`;
}

function showResult() {
  progressBar.style.width = "100%";
  
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  
  const finalCode = ei + sn + tf;
  const result = results[finalCode];
  
  resultTitle.innerHTML = `${finalCode} <br><span style='font-size:18px; color:var(--text)'>[${result.title}]</span>`;
  resultDesc.textContent = result.desc;
  showPage(resultPage);
}

btnStart.addEventListener('click', () => {
  currentIdx = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0 };
  showPage(questionPage);
  updateQuestion();
});

btnA.addEventListener('click', () => {
  scores[questions[currentIdx].type[0]]++;
  currentIdx++;
  updateQuestion();
});

btnB.addEventListener('click', () => {
  scores[questions[currentIdx].type[1]]++;
  currentIdx++;
  updateQuestion();
});

btnRestart.addEventListener('click', () => {
  showPage(startPage);
});
