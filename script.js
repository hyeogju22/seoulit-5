:root {
  --bg: #05050a;
  --panel-bg: #0d0e17;
  --text: #f0f1f7;
  --muted: #9499b3;
  --border: #1f233a;
  --accent: #00f0ff; /* 네온 싸이언 */
  --accent-purple: #bd00ff; /* 네온 퍼플 */
  --accent-hover: #00d8e6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background-color: var(--bg);
  background-image: radial-gradient(circle at 50% 50%, #141529 0%, #05050a 100%);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 420px;
  height: 640px;
  background-color: var(--panel-bg);
  border: 2px solid var(--border);
  border-radius: 24px;
  padding: 35px 24px;
  box-shadow: 0 0 30px rgba(189, 0, 255, 0.15), inset 0 0 15px rgba(0, 240, 255, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
}

.page {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.page.active {
  display: flex;
}

.badge {
  background: rgba(0, 240, 255, 0.08);
  color: var(--accent);
  border: 1px solid rgba(0, 240, 255, 0.2);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

h1 {
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 12px;
  text-align: center;
  letter-spacing: -0.5px;
}
h1 b { 
  color: transparent;
  background: linear-gradient(90deg, var(--accent), var(--accent-purple));
  -webkit-background-clip: text;
  background-clip: text;
}

p {
  color: var(--muted);
  font-size: 14px;
  text-align: center;
  line-height: 1.6;
}

.hero-img {
  font-size: 72px;
  margin: 40px 0;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.btn-main {
  width: 100%;
  background: linear-gradient(135deg, var(--accent), var(--accent-purple));
  color: #000;
  border: none;
  padding: 18px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
  transition: all 0.2s ease;
  margin-top: auto;
}
.btn-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(189, 0, 255, 0.4);
}
.btn-main.sub {
  background: var(--border);
  color: var(--text);
  box-shadow: none;
  border: 1px solid rgba(255,255,255,0.05);
}
.btn-main.sub:hover {
  background: #2a2f4e;
}

.progress-container {
  width: 100%;
  height: 6px;
  background-color: var(--border);
  border-radius: 10px;
  margin-bottom: 16px;
  overflow: hidden;
}
.progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-purple));
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.count {
  font-size: 12px;
  color: var(--accent);
  font-weight: 800;
  margin-bottom: 24px;
}

#question-text {
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 35px;
  word-break: keep-all;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.options {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: auto;
}

.btn-option {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.4;
}
.btn-option:hover {
  background-color: rgba(0, 240, 255, 0.05);
  border-color: var(--accent);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
}

.result-badge { background: rgba(189, 0, 255, 0.1); color: var(--accent-purple); border-color: rgba(189,0,255,0.3); }
.result-kicker { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
#result-title { font-size: 34px; color: #fff; text-shadow: 0 0 15px var(--accent); margin-bottom: 16px; line-height: 1.3; }
#result-desc { font-size: 14px; background: rgba(0,0,0,0.3); padding: 18px; border-radius: 16px; border: 1px solid var(--border); line-height: 1.6; text-align: left; }
.action-box { width: 100%; margin-top: auto; }
