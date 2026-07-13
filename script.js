const questions = [
  // --- [E vs I] ---
  { q: "모처럼 평일 저녁 일찍 퇴근/하교했을 때 내가 먼저 여는 것은?", a: "카카오톡 단톡방 (친구들 모아서 오늘 저녁 번개 추진)", b: "유튜브나 OTT 앱 (침대에 누워서 볼 영상 리스트 스캔)", type: "EI" },
  { q: "주변 사람들이 말하는 나의 평소 첫인상이나 소문은?", a: "낯을 가리지 않고 누구와도 금방 친해지는 마당발 성격", b: "처음엔 조금 차분하거나 조용해 보이지만 친해지면 웃긴 타입", type: "EI" },
  { q: "여러 명의 대화 속에서 내 의견을 내야 하는 순간에 나는?", a: "말이 먼저 나가고, 대화의 흐름을 주도하며 생각하는 편이다", b: "머릿속으로 정리 정돈을 완전히 다 끝낸 후에 조심스럽게 입을 연다", type: "EI" },
  { q: "오랜만에 정말 마음에 쏙 드는 힙한 핫플레이스를 발견했다면?", a: "여긴 무조건 아는 사람 다 데려오거나 단체 모임 장소로 찜한다", b: "나만 아는 아지트 삼고 싶다! 정말 친한 소수만 데려와야지 생각한다", type: "EI" },
  { q: "친구가 주말 모임에 내가 모르는 지인들을 잔뜩 데려왔을 때?", a: "오히려 좋아! 새로운 사람들을 알아가는 생각에 은근 신난다", b: "스멀스멀 기가 빨리기 시작하며, 언제 집에 갈지 각을 잰다", type: "EI" },
  // --- [S vs N] ---
  { q: "친구가 '나 오늘 하늘 날아다니는 꿈 꿨어'라고 말할 때 내 반응은?", a: "오 신기하네, 좋은 꿈 아냐? 복권이라도 사야 하는 거 아님?", b: "그때 바람 느낌은 어땠어? 지구 중력은 다 느껴지면서 난 거야?", type: "SN" },
  { q: "요리 레시피를 보며 음식을 직접 따라 만들 때 나의 행동은?", a: "g단위나 큰술 개수, 불 조절 시간을 최대한 정확하게 지킨다", b: "대충 눈대중으로 감을 잡고, 내 방식대로 재료를 가감해 본다", type: "SN" },
  { q: "길을 걷다가 문득 고개를 들어 밤하늘의 달을 바라볼 때 드는 생각은?", a: "오늘 달이 참 밝고 예쁘네. 내일 날씨는 맑으려나?", b: "만약 저 달이 내일 갑자기 지구로 추락하면 난 어떻게 도망쳐야 하지?", type: "SN" },
  { q: "설명서나 지도를 보고 길을 찾아가야 하는 상황에서 나는?", a: "이정표, 건물 이름, 도로 가이드라인 등 눈앞의 실물을 보며 찾는다", b: "전체적인 공간의 흐름이나 대략적인 방향 동선을 머릿속에 그리며 찾는다", type: "SN" },
  { q: "내가 평소 웹툰이나 소설, 영화를 고를 때 더 선호하는 장르는?", a: "일상물, 로맨스, 스릴러 등 일어날 법한 현실적인 이야기", b: "판타지, SF, 루프물, 초능력 등 완전 새로운 세계관의 상상 극장", type: "SN" },
  // --- [T vs F] ---
  { q: "팀 과제 중 팀원이 실수로 마감 기한을 넘겨 불이익을 받게 되었다면?", a: "잘못은 잘못이니 감점 요인을 즉시 분석하고 수정안부터 마련한다", b: "그 팀원이 얼마나 미안하고 자책하고 있을지 마음이 먼저 쓰인다", type: "TF" },
  { q: "친구가 '나 오늘 주차하다가 벽에 차 긁어 먹었어..' 라고 전화를 했다면?", a: "보험은 불렀어? 차 긁힌 부위 사진은 찍어놨어?", b: "헐 너 다치진 않았어? 깜짝 놀랐겠다, 괜찮아?", type: "TF" },
  { q: "내가 누군가에게 정말 큰 위로를 받았다고 느끼는 순간은?", a: "내 고민의 핵심을 관통하고, 확실한 해결책이나 조언을 제안해 줄 때", b: "내 처지에 진심으로 슬퍼해 주고 내 감정을 온전히 수용해 줄 때", type: "TF" },
  { q: "영화나 드라마를 보다가 폭풍 눈물을 흘리는 슬픈 장면이 나왔을 때?", a: "배우들 연기 진짜 소름 돋게 잘한다, 연출이 훌륭하네 생각한다", b: "내가 저 주인공 상황이었으면 가슴 찢어졌다며 과몰입해 눈물 흘린다", type: "TF" },
  { q: "지인이 옷을 새로 사고 와서 나에게 '이 옷 어때?' 물어볼 때 내 스타일은?", a: "핏이나 가성비, 디자인을 냉정하게 평가해서 어울리는지 솔직히 말한다", b: "조금 안 어울려도 산 사람의 기분을 생각해 좋은 점을 찾아 칭찬해 준다", type: "TF" },
  // --- [J vs P] ---
  { q: "내일 가야 하는 중요한 약속이나 일정이 있을 때 나의 전날 밤은?", a: "몇 시에 일어날지, 이동 시간과 교통편을 머릿속으로 시뮬레이션 끝낸다", b: "알람만 여러 개 맞춰두고, 옷이나 이동 경로는 내일 나가면서 결정한다", type: "JP" },
  { q: "내 스마트폰의 앱 아이콘 알림 표시(레드 닷)를 처리하는 방식은?", a: "숫자가 쌓여있는 꼴을 못 봄. 바로바로 들어가서 확인해 지워야 직성이 풀림", b: "몇십 개, 혹은 몇백 개가 쌓여있어도 별 신경 안 씀. 필요할 때만 염", type: "JP" },
  { q: "갑자기 일상 속에서 완전히 자유로운 빈 시간 3시간이 뚝 떨어졌다면?", a: "알차게 보낼 리스트(공부, 운동, 밀린 일)를 즉흥적으로라도 짜서 움직인다", b: "아무것도 생각 안 하고 손에 잡히는 대로 침대와 혼연일체가 된다", type: "JP" },
  { q: "내가 무언가 물건을 구매할 때 주로 보여주는 소비 패턴은?", a: "장바구니에 담아두고 후기, 가격 비교, 내 예산 계획까지 신중히 맞춰 산다", b: "리뷰 구경하다가 꽂히거나 지금 안 사면 품절될 것 같은 느낌에 결제한다", type: "JP" },
  { q: "학업이나 업무 목표를 달성하기 위해 투두리스트(To-Do)를 적을 때 나는?", a: "기한과 일정을 쪼개서 세부 체크박스를 만들고 하나씩 지우며 쾌감을 느낀다", b: "리스트는 적어두거나 머리에 두지만, 그때그때 가장 급한 것부터 유연하게 해치운다", type: "JP" }
];

const results = {
  "ESTJ": { title: "효율 만렙 규칙 리더", desc: "체계적이고 확실한 것을 좋아하는 현실의 지배자! 흐트러짐 없는 계획과 칼 같은 실행력으로 무리를 하드캐리하는 대장 스타일입니다." },
  "ESTP": { title: "E너지 폭발 승부사", desc: "말보다 행동이 5배 빠른 트렌드세터! 매 순간 스릴과 자유를 즐기며 어떠한 위기 상황도 피지컬과 센스로 돌파합니다." },
  "ESFJ": { title: "친절 보스 인간 마당발", desc: "주변 사람들의 감정을 섬세하게 케어하는 따뜻한 분위기 메이커! 리액션이 좋고 조화로운 커뮤니티를 만드는 데 탁월합니다." },
  "ESFP": { title: "자유로운 축제 연예인", desc: "인생을 단 한 번뿐인 파티처럼 즐기는 해피바이러스! 호기심이 많고 특유의 친화력으로 누구와도 금방 절친이 됩니다." },
  "ENTJ": { title: "강철 멘탈 야망 전략가", desc: "철저한 논리와 거대한 비전으로 세상을 설계하는 야심가! 비효율을 혐오하며 목표가 정해지면 뒤를 보지 않고 진격합니다." },
  "ENTP": { title: "천재 직진러 아이디어 뱅크", desc: "고정관념을 깨부술 때 가장 짜릿함을 느끼는 브레인! 번뜩이는 말솜씨와 재치로 늘 새로운 패러다임을 제안합니다." },
  "ENFJ": { title: "빛과 소금 헌신적 멘토", desc: "타인의 성장을 진심으로 응원하고 이끄는 따뜻한 리더! 공감대 형성이 아주 뛰어나며 정의로운 에너지가 가득합니다." },
  "ENFP": { title: "에너지 뿜뿜 낭만 쿼카", desc: "상상력이 풍부하고 늘 열정이 가득한 자유로운 영혼! 겉은 밝아 보여도 내면에는 자신만의 철학과 깊은 생각이 있습니다." },
  "ISTJ": { title: "철벽 보안 논리 정석", desc: "한 번 맡은 임무는 지구 끝까지 책임지는 듬직한 현실주의자! 기억력이 날카롭고 매사 흐트러짐 없는 규칙을 선호합니다." },
  "ISTP": { title: "시크한 효율 극대화 전문가", desc: "평소엔 조용하지만 필요할 때 엄청난 집중력을 발휘하는 마이웨이! 쓸데없는 감정 소모를 패스하고 팩트에만 집중합니다." },
  "ISFJ": { title: "뒤편의 헌신 수호천사", desc: "내가 좋아하는 소중한 사람들을 뒤에서 묵묵히 보살피는 수호자! 섬세하고 꼼꼼하며 책임감이 누구보다 강합니다." },
  "ISFP": { title: "감성 가득 눕방 아티스트", desc: "갈등을 제일 싫어하고 유유자적함을 사랑하는 평화주의자! 친해지면 속 깊은 따뜻함을 보여주며 침대 위가 가장 행복합니다." },
  "INTJ": { title: "용의주도한 전략 분석가", desc: "독립적이고 논리적이며 지적 호기심이 최고 수준인 전략가! 혼자 사색하며 거대한 시스템의 본질을 꿰뚫어 보길 좋아합니다." },
  "INTP": { title: "고독한 뇌섹 사색가", desc: "비판적인 분석력과 나만의 논리 세계가 뚜렷한 조용한 천재! 관심 있는 코드나 이론이 생기면 밤을 새워서라도 정복합니다." },
  "INFJ": { title: "비밀스러운 예언자 소울", desc: "깊은 통찰력과 강한 신념을 가슴에 품고 사는 신비로운 유형! 겉은 부드러워 보이지만 내면의 기준과 통찰은 누구보다 날카롭습니다." },
  "INFP": { title: "새벽 감성 낭만 몽상가", desc: "풍부한 이상과 따뜻한 마음을 간직한 우주형 집순이/집돌이! 나만의 가치관을 무엇보다 소중히 여기며 깊은 울림을 줍니다." }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

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
  [startPage, questionPage, resultPage].forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  page.classList.add('active');
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
  const jp = scores.J >= scores.P ? "J" : "P";
  
  const finalCode = ei + sn + tf + jp;
  const result = results[finalCode];
  
  resultTitle.innerHTML = `${finalCode} <br><span style='font-size:16px; font-weight:600; color:var(--muted); display:inline-block; margin-top:8px;'>[${result.title}]</span>`;
  resultDesc.textContent = result.desc;
  showPage(resultPage);
}

btnStart.addEventListener('click', () => {
  currentIdx = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  showPage(questionPage);
  updateQuestion();
});

btnA.addEventListener('click', () => {
  if (currentIdx < questions.length) {
    const currentQ = questions[currentIdx];
    scores[currentQ.type[0]]++;
    currentIdx++;
    updateQuestion();
  }
});

btnB.addEventListener('click', () => {
  if (currentIdx < questions.length) {
    const currentQ = questions[currentIdx];
    scores[currentQ.type[1]]++;
    currentIdx++;
    updateQuestion();
  }
});

btnRestart.addEventListener('click', () => {
  showPage(startPage);
});

// 초기 구동 시 첫 페이지 강제 활성화
showPage(startPage);
