const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// CORS 설정
app.use(cors());

// JSON 파싱 미들웨어
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
