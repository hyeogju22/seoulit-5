// 1. 질문 데이터 정의 (E/I, S/N 유형 점수 산출 방식)
const questions = [
  {
    q: "주말에 갑자기 보너스 돈이 생겼을 때 나의 행동은?",
    a: "친구들 당장 소환해서 풀코스로 쏜다! (E)",
    b: "일단 조용히 통장에 넣고 배달앱을 켠다. (I)",
    type: "EI"
  },
  {
    q: "길을 걷다가 100억이 든 가방을 줍는다면?",
    a: "위조지폐인가? 경찰에 주면 보상금 얼마지? 현실적 계산 (S)",
    b: "건물 매입하고 헬기 타고 출근하는 상상 이미 다 끝냄 (N)",
    type: "SN"
  },
  {
    q: "친구가 갑자기 '나 너무 슬퍼서 코인 샀어' 라고 한다면?",
    a: "무슨 코인? 몇 층에 물렸는데? (S)",
    b: "헐... 무슨 일 있어? 마음이 많이 힘들었구나 (N)",
    type: "SN"
  },
  {
    q: "사람이 꽉 찬 엘리베이터에 탔을 때 나는?",
    a: "옆 사람 숨소리까지 신경 쓰여서 기 빨림 (I)",
    b: "아무 생각 없음 혹은 아는 사람 만나면 반가움 (E)",
    type: "EI"
  }
];

// 2. 결과 유형별 데이터
const results = {
  "ES": { title: "슈퍼 인싸 갓생러", desc: "넘치는 에너지로 현실을 지배하는 타입! 돈이 생기면 바로 쓰고, 상상보다는 눈앞의 기회를 포착하는 야생의 현실주의자입니다." },
  "EN": { title: "방구석 몽상가 대장", desc: "말은 제일 많은데 가끔 혼자 우주로 가버리는 타입! 사람 만나는 것도 좋아하지만, 머릿속으로 어마어마한 아이디어를 짜느라 바쁜 천재형입니다." },
  "IS": { title: "비밀의 철벽 계산기", desc: "조용하지만 실속은 다 챙기는 알짜배기 타입! 쓸데없는 상상에 시간 낭비하지 않고, 철저히 계획된 나만의 평화를 즐기는 현실파입니다." },
  "IN": { title: "우주관조형 고독가", desc: "머릿속은 이미 멀티버스 대전쟁 중인 프로 집순이/집돌이! 혼자 사색하는 시간을 가장 사랑하며, 가끔 세상을 초탈한 듯한 통찰력을 보여줍니다." }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0 };

// DOM 요소 획득
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

// 화면 전환 함수
function showPage(page) {
  [startPage, questionPage, resultPage].forEach(p => p.classList.remove('active'));
  page.classList.add('active');
}

// 질문 업데이트
function updateQuestion() {
  if (currentIdx >= questions.length) {
    showResult();
    return;
  }

  const currentQ = questions[currentIdx];
  qText.textContent = currentQ.q;
  btnA.textContent = currentQ.a;
  btnB.textContent = currentQ.b;

  // 진행도 및 카운트 표시
  qCount.textContent = `${currentIdx + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentIdx) / questions.length) * 100}%`;
}

// 결과 계산 및 출력
function showResult() {
  progressBar.style.width = "100%";
  
  // 점수 비교하여 코드 생성 (E vs I, S vs N)
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const finalCode = ei + sn;

  const result = results[finalCode];
  resultTitle.innerHTML = `${finalCode} <br><span style='font-size:24px; color:var(--text)'>[${result.title}]</span>`;
  resultDesc.textContent = result.desc;

  showPage(resultPage);
}

// 이벤트 리스너 등록
btnStart.addEventListener('click', () => {
  currentIdx = 0;
  scores = { E: 0, I: 0, S: 0, N: 0 };
  showPage(questionPage);
  updateQuestion();
});

btnA.addEventListener('click', () => {
  const type = questions[currentIdx].type; // "EI" or "SN"
  scores[type[0]]++; // 첫 번째 글자 유형(E 혹은 S)에 가산점
  currentIdx++;
  updateQuestion();
});

btnB.addEventListener('click', () => {
  const type = questions[currentIdx].type; // "EI" or "SN"
  scores[type[1]]++; // 두 번째 글자 유형(I 혹은 N)에 가산점
  currentIdx++;
  updateQuestion();
});

btnRestart.addEventListener('click', () => {
  showPage(startPage);
});