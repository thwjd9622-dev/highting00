// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 보냅니다.
const MESSAGES = [
  "오늘도 여기까지 온 것만으로 충분히 잘하고 있어요.",
  "작은 한 걸음도 분명히 앞으로 가는 걸음이에요.",
  "지금의 노력은 언젠가 꼭 빛을 발할 거예요.",
  "힘들 땐 잠깐 쉬어 가도 괜찮아요.",
  "당신의 웃음이 누군가의 하루를 밝히고 있어요.",
  "완벽하지 않아도 괜찮아요. 꾸준함이 더 멋져요.",
  "어제보다 조금 나아진 오늘이면 충분해요.",
  "스스로를 믿어 주세요. 생각보다 훨씬 강한 사람이에요.",
  "오늘 하루도 정말 수고 많았어요.",
  "좋은 일이 곧 찾아올 거예요. 기대해도 좋아요.",
  "당신은 존재만으로도 소중한 사람이에요.",
  "실수해도 괜찮아요. 거기서 배우면 되니까요.",
  "천천히 가도 멈추지 않으면 결국 도착해요.",
  "오늘의 나에게 따뜻한 칭찬 한마디 해 주세요.",
  "당신이 가는 길을 진심으로 응원하고 있어요.",
];

module.exports = (req, res) => {
  const raw = typeof req.query?.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message });
};
