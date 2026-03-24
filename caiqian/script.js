// ===== 12 支财运签文 =====
const qianData = [
  {
    num: "第一签",
    level: "上上签",
    levelClass: "level-shangshang",
    poem: "金龙出海现祥云\n财源广进万事兴\n贵人相助添喜气\n福禄双全迎吉星",
    text: "此签大吉，财运鼎盛。近期财路大开，投资理财均有丰厚回报。贵人相助，事业步步高升。宜把握时机，积极进取，财富自然滚滚而来。",
    finance: "💰 财运：大旺",
    business: "📈 事业：顺遂",
    lucky: "🌟 幸运：极佳"
  },
  {
    num: "第二签",
    level: "上上签",
    levelClass: "level-shangshang",
    poem: "春风得意马蹄疾\n一日看尽长安花\n财神驾到门庭旺\n黄金万两入家门",
    text: "财运亨通，诸事大吉。此时投资创业均宜，有意外之财降临。生意往来顺风顺水，合作伙伴诚信可靠。可大胆布局，未来收益颇丰。",
    finance: "💰 财运：极旺",
    business: "📈 事业：大吉",
    lucky: "🌟 幸运：上上"
  },
  {
    num: "第三签",
    level: "上签",
    levelClass: "level-shang",
    poem: "勤耕不辍秋收丰\n积少成多聚真金\n守正持恒待花开\n一份耕耘一份收",
    text: "财运良好，稳中有升。近期适合稳健理财，踏实工作必有所得。勤劳努力是最好的财神，切勿急功近利。守住手中积蓄，财富自会增长。",
    finance: "💰 财运：良好",
    business: "📈 事业：稳进",
    lucky: "🌟 幸运：上吉"
  },
  {
    num: "第四签",
    level: "上签",
    levelClass: "level-shang",
    poem: "柳暗花明又一村\n山重水复路已宽\n转角遇见好财运\n否极泰来笑开颜",
    text: "时来运转，财运向好。近期曾有困顿，但峰回路转，好运正在来临。不必气馁，坚持下去必有收获。可尝试新的投资方向，机遇已在眼前。",
    finance: "💰 财运：转旺",
    business: "📈 事业：渐进",
    lucky: "🌟 幸运：吉祥"
  },
  {
    num: "第五签",
    level: "上签",
    levelClass: "level-shang",
    poem: "桃花朵朵迎春开\n财运人缘俱上来\n把握良机莫犹豫\n满载而归笑颜开",
    text: "财运佳美，人缘亦旺。近期有贵人引荐，合作机遇不断。人脉即财脉，广结善缘自有收益。适合拓展业务，开辟新的财富渠道。",
    finance: "💰 财运：上佳",
    business: "📈 事业：拓展",
    lucky: "🌟 幸运：吉利"
  },
  {
    num: "第六签",
    level: "中签",
    levelClass: "level-zhong",
    poem: "平湖秋月映清辉\n不惊不躁自从容\n中道而行积厚德\n水到渠成自有时",
    text: "财运平稳，宜守不宜攻。近期不宜冒进投资，稳健为上。日积月累，量变终成质变。保持平常心，按部就班，财富虽缓却实在，切忌贪婪冒进。",
    finance: "💰 财运：平稳",
    business: "📈 事业：守成",
    lucky: "🌟 幸运：中吉"
  },
  {
    num: "第七签",
    level: "中签",
    levelClass: "level-zhong",
    poem: "云淡风轻过午天\n傍花随柳过前川\n时运虽缓终有日\n守得云开见月明",
    text: "财运中平，需耐心等待。近期事业财运均无大起伏，是蓄积能量的时期。不必强求，静待时机。可利用此时充实自身，提升能力，为下一次爆发做准备。",
    finance: "💰 财运：一般",
    business: "📈 事业：蓄势",
    lucky: "🌟 幸运：待时"
  },
  {
    num: "第八签",
    level: "中签",
    levelClass: "level-zhong",
    poem: "半亩方塘一鉴开\n天光云影共徘徊\n问渠那得清如许\n为有源头活水来",
    text: "财运需要自己创造。近期财运不算理想，但努力自有回报。多学习新知识，开拓思维，财路自然越走越宽。心态平和，量力而为，切忌盲目跟风。",
    finance: "💰 财运：普通",
    business: "📈 事业：努力",
    lucky: "🌟 幸运：自求"
  },
  {
    num: "第九签",
    level: "中签",
    levelClass: "level-zhong",
    poem: "不识庐山真面目\n只缘身在此山中\n退后一步天地宽\n方知财路在脚下",
    text: "财运平平，需要反思布局。近期或因决策失误影响财运，宜退一步重新审视。不妨请教有经验的长辈，听取他人意见。调整策略后，财运自然回升。",
    finance: "💰 财运：偏弱",
    business: "📈 事业：调整",
    lucky: "🌟 幸运：反思"
  },
  {
    num: "第十签",
    level: "下签",
    levelClass: "level-xia",
    poem: "山高路远坑深深\n大渡桥横铁索寒\n艰难困苦玉汝成\n砥砺前行终见光",
    text: "财运较弱，需谨慎行事。近期财务压力较大，宜收紧开支，避免大额投资。但困难是暂时的，只要坚持度过这段时期，必有转机。诚信待人，积累口碑。",
    finance: "💰 财运：偏低",
    business: "📈 事业：谨慎",
    lucky: "🌟 幸运：磨砺"
  },
  {
    num: "第十一签",
    level: "下签",
    levelClass: "level-xia",
    poem: "雄关漫道真如铁\n而今迈步从头越\n寒窑虽破能避风\n守住本心待春来",
    text: "财运低潮，切莫气馁。近期财运欠佳，易有破财之象，需格外留意钱财出入。不宜借贷投资，量入为出。静心修身，广积善德，低谷终将过去，曙光在前。",
    finance: "💰 财运：低迷",
    business: "📈 事业：保守",
    lucky: "🌟 幸运：守护"
  },
  {
    num: "第十二签",
    level: "上上签",
    levelClass: "level-shangshang",
    poem: "凤凰涅槃展翅飞\n金鳞岂是池中物\n一遇风云便化龙\n富贵荣华天注定",
    text: "鸿运当头，大富大贵之签！此乃诸签之首，财运滔天。近期一切投资皆有丰收，偏财正财皆旺。珍惜此等好运，感恩惜福，广结善缘，财运将持续旺盛。",
    finance: "💰 财运：滔天",
    business: "📈 事业：腾飞",
    lucky: "🌟 幸运：第一"
  }
];

// ===== 状态 =====
let isShaking = false;
let musicPlaying = false;
let countdownTimer = null;
let audioCtx = null;
let musicNodes = [];
let musicStarted = false;
let shakeSource = null;   // 持续摇签音效节点
let shakeGain = null;     // 摇签音效增益节点（用于渐出停止）
let shakeTimers = [];     // 碰撞调度 timer 列表

// ===== Web Audio 古风音乐生成 =====
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// ===== 五声音阶音符表 =====
const notes = {
  LL1: 82.41,  LL2: 98.00,  LL3: 110.00,
  L5:  130.81, L6:  146.83, L1:  164.81, L2: 196.00, L3: 220.00,
  C5:  261.63, C6:  293.66, C1:  329.63, C2: 392.00, C3: 440.00,
  H5:  523.25, H6:  587.33, H1:  659.25, H2: 783.99, H3: 880.00,
};

// ===== 沉浸式氛围音乐核心组件 =====

// 创建混响效果（卷积混响模拟大殿空间）
let reverbNode = null;
function getReverbNode(ctx) {
  if (reverbNode) return reverbNode;
  const len = ctx.sampleRate * 3.5;
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2);
    }
  }
  const conv = ctx.createConvolver();
  conv.buffer = buf;
  // 混响输出混入主输出
  const wet = ctx.createGain();
  wet.gain.value = 0.32;
  conv.connect(wet);
  wet.connect(ctx.destination);
  reverbNode = conv;
  return reverbNode;
}

// 带颤音的长音符（模拟洞箫 / 埙 音色）
function playAmbientNote(freq, startTime, duration, vol = 0.055) {
  const ctx = getAudioCtx();
  const reverb = getReverbNode(ctx);

  // 主音
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, startTime);

  // 颤音 LFO（0.3~0.5Hz，±2Hz 轻微颤音）
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.35 + Math.random() * 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 1.8;
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);

  // 包络：慢起 → 保持 → 慢出（像气息控制的管乐）
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(vol, startTime + duration * 0.18);
  gain.gain.setValueAtTime(vol, startTime + duration * 0.75);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.connect(reverb);   // 同时送入混响

  lfo.start(startTime);
  lfo.stop(startTime + duration + 0.1);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.1);
  musicNodes.push(osc, lfo);
}

// 古琴拨弦（三角波，快起慢衰，带音高微滑）
function playQin(freq, startTime, duration, vol = 0.07) {
  const ctx = getAudioCtx();
  const reverb = getReverbNode(ctx);

  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, startTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.994, startTime + duration);

  // 加一点泛音
  const osc2 = ctx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2.01, startTime);
  osc2.frequency.exponentialRampToValueAtTime(freq * 1.99, startTime + duration * 0.6);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(vol, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  const gain2 = ctx.createGain();
  gain2.gain.setValueAtTime(0, startTime);
  gain2.gain.linearRampToValueAtTime(vol * 0.22, startTime + 0.02);
  gain2.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 0.5);

  osc.connect(gain);   gain.connect(ctx.destination);  gain.connect(reverb);
  osc2.connect(gain2); gain2.connect(ctx.destination);

  osc.start(startTime);  osc.stop(startTime + duration + 0.05);
  osc2.start(startTime); osc2.stop(startTime + duration * 0.5 + 0.05);
  musicNodes.push(osc, osc2);
}

// 钟鼓低音（正弦 + 快速衰减，营造禅意空间感）
function playDrum(freq, startTime, vol = 0.09) {
  const ctx = getAudioCtx();
  const reverb = getReverbNode(ctx);
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq * 1.4, startTime);
  osc.frequency.exponentialRampToValueAtTime(freq, startTime + 0.08);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.8);
  osc.connect(gain); gain.connect(ctx.destination); gain.connect(reverb);
  osc.start(startTime); osc.stop(startTime + 2.0);
  musicNodes.push(osc);
}

// 持续低频氛围垫（模拟风声/空气感）
let ambientPad = null;
function startAmbientPad(ctx) {
  if (ambientPad) return;
  const bufSize = ctx.sampleRate * 4;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1);
  const src = ctx.createBufferSource();
  src.buffer = buf; src.loop = true;
  const lpf = ctx.createBiquadFilter();
  lpf.type = 'lowpass'; lpf.frequency.value = 200; lpf.Q.value = 0.5;
  const g = ctx.createGain(); g.gain.value = 0.028;
  src.connect(lpf); lpf.connect(g); g.connect(ctx.destination);
  src.start();
  ambientPad = src;
  musicNodes.push(src);
}

// ===== 沉浸式古风音乐主循环（24s 一段）=====
function scheduleMusicLoop(loopStart) {
  const ctx = getAudioCtx();
  const T = loopStart;

  // 启动持续氛围垫
  startAmbientPad(ctx);

  // ——— 低频鼓点（每 4s 一次，营造厚重感）———
  [0, 4, 8, 12, 16, 20].forEach(t => {
    playDrum(notes.LL1, T + t, 0.08);
  });

  // ——— 深沉低音（埙音色，慢进慢出）———
  playAmbientNote(notes.L3,  T+0,   6.0, 0.052);
  playAmbientNote(notes.L2,  T+6,   5.5, 0.048);
  playAmbientNote(notes.L1,  T+12,  6.0, 0.052);
  playAmbientNote(notes.L2,  T+18,  5.5, 0.048);

  // ——— 中音旋律点（古琴，稀疏，留白）———
  // 前半段（0~12s）
  playQin(notes.C3, T+1.5,  2.8, 0.072);
  playQin(notes.C1, T+5.0,  2.2, 0.065);
  playQin(notes.C2, T+8.0,  3.0, 0.070);
  playQin(notes.C5, T+11.0, 2.0, 0.060);
  // 后半段（12~24s）
  playQin(notes.C6, T+13.5, 2.5, 0.065);
  playQin(notes.C3, T+16.5, 3.5, 0.072);
  playQin(notes.C1, T+20.0, 2.2, 0.062);
  playQin(notes.C5, T+22.5, 1.8, 0.058);

  // ——— 高音细节（偶尔点缀，如远处风铃）———
  playQin(notes.H5, T+3.5,  1.2, 0.040);
  playQin(notes.H1, T+9.5,  1.0, 0.038);
  playQin(notes.H5, T+17.0, 1.4, 0.040);
  playQin(notes.H2, T+21.5, 1.0, 0.036);

  // ——— 循环：24s，提前 0.5s 衔接 ———
  const loopDur = 24;
  if (musicPlaying) {
    setTimeout(() => {
      if (musicPlaying) scheduleMusicLoop(getAudioCtx().currentTime + 0.05);
    }, (loopDur - 0.5) * 1000);
  }
}

// ===== 音乐控制 =====
function toggleMusic() {
  const btn = document.getElementById('musicBtn');
  const slash = document.getElementById('muteSlash');
  if (musicPlaying) {
    musicPlaying = false;
    btn.classList.add('muted');
    slash.style.display = 'block';
    musicNodes.forEach(n => { try { n.stop(); } catch(e){} });
    musicNodes = [];
    ambientPad = null;
    reverbNode = null;
  } else {
    musicPlaying = true;
    btn.classList.remove('muted');
    slash.style.display = 'none';
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    scheduleMusicLoop(ctx.currentTime + 0.1);
  }
}

// ===== 音效函数 =====

// ===== 签筒摇晃音效（新版）=====
// 模拟：签条在圆形木筒内壁滚动 + 碰撞
//   层1：连续刷动感（高频带通噪声，模拟竹签快速扫过）
//   层2：节奏性冲击（每50~100ms，模拟签条撞壁"啪"声）
//   层3：木筒低频共鸣（每次大冲击带出筒壁震动）
//   特效：强度随机抖动，模拟手部摇晃不均匀

function startShakeSound() {
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') ctx.resume();

  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0, ctx.currentTime);
  masterGain.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.12);
  masterGain.connect(ctx.destination);
  shakeSource = masterGain;
  shakeGain = masterGain;

  // —— 层1：连续刷动噪声（签条划过筒壁的"沙沙"底色）——
  const rushBuf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 2), ctx.sampleRate);
  const rushData = rushBuf.getChannelData(0);
  for (let i = 0; i < rushData.length; i++) rushData[i] = (Math.random() * 2 - 1);

  const rushSrc = ctx.createBufferSource();
  rushSrc.buffer = rushBuf;
  rushSrc.loop = true;

  // 带通 800~3000Hz：保留签条摩擦的沙沙感
  const rushBP = ctx.createBiquadFilter();
  rushBP.type = 'bandpass';
  rushBP.frequency.value = 1400;
  rushBP.Q.value = 0.6;

  const rushGain = ctx.createGain();
  rushGain.gain.value = 0.08;

  rushSrc.connect(rushBP);
  rushBP.connect(rushGain);
  rushGain.connect(masterGain);
  rushSrc.start();
  shakeTimers.push({ type: 'source', node: rushSrc });

  // —— 层2+3：节奏性冲击（签条撞壁 + 筒壁共鸣）——
  let stopped = false;
  // 摇晃节奏：模拟手腕往返，每次来回约 200~300ms，每来回 2~4 次碰撞
  let phaseTime = 0;   // 相位时间，控制强弱起伏

  function scheduleImpact() {
    if (stopped || !shakeGain) return;

    phaseTime += 0.06 + Math.random() * 0.05;
    // 强度曲线：sin 模拟来回摇晃，有强有弱
    const phaseMod = 0.55 + 0.45 * Math.abs(Math.sin(phaseTime * 3.2));
    const strength = phaseMod * (0.5 + Math.random() * 0.5);

    const t = ctx.currentTime;

    // 签条碰撞：超短指数衰减噪声（30ms），中高频
    const hitSize = Math.floor(ctx.sampleRate * 0.03);
    const hitBuf = ctx.createBuffer(1, hitSize, ctx.sampleRate);
    const hitData = hitBuf.getChannelData(0);
    for (let i = 0; i < hitSize; i++) {
      hitData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (hitSize * 0.25));
    }
    const hitSrc = ctx.createBufferSource();
    hitSrc.buffer = hitBuf;

    const hitBP = ctx.createBiquadFilter();
    hitBP.type = 'bandpass';
    hitBP.frequency.value = 2500 + Math.random() * 800;  // 随机音色
    hitBP.Q.value = 0.8;

    const hitGain = ctx.createGain();
    hitGain.gain.value = strength * 0.6;

    hitSrc.connect(hitBP);
    hitBP.connect(hitGain);
    hitGain.connect(masterGain);
    hitSrc.start(t);

    // 木筒共鸣（强冲击时触发，模拟筒壁震动）
    if (strength > 0.65) {
      const woodFreq = 160 + Math.random() * 80;  // 160~240Hz 木质共鸣
      const woodOsc = ctx.createOscillator();
      woodOsc.type = 'sine';
      woodOsc.frequency.setValueAtTime(woodFreq, t);
      woodOsc.frequency.exponentialRampToValueAtTime(woodFreq * 0.88, t + 0.12);

      const woodGain = ctx.createGain();
      woodGain.gain.setValueAtTime(strength * 0.15, t);
      woodGain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      woodOsc.connect(woodGain);
      woodGain.connect(masterGain);
      woodOsc.start(t);
      woodOsc.stop(t + 0.16);
    }

    // 间隔：55~110ms，强时稍短（摇得猛时密集）
    const interval = 55 + (1 - strength) * 55 + Math.random() * 30;
    const timer = setTimeout(scheduleImpact, interval);
    shakeTimers.push({ type: 'timer', id: timer, stop: () => { stopped = true; } });
  }

  scheduleImpact();
}

// 停止摇签音效（渐出）
function stopShakeSound(fadeTime = 0.35) {
  shakeTimers.forEach(item => {
    if (item.type === 'timer') { clearTimeout(item.id); if (item.stop) item.stop(); }
    if (item.type === 'source') { try { item.node.stop(); } catch(e){} }
  });
  shakeTimers = [];

  if (shakeGain) {
    const g = shakeGain;
    const ctx = getAudioCtx();
    g.gain.cancelScheduledValues(ctx.currentTime);
    g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + fadeTime);
  }
  shakeSource = null;
  shakeGain = null;
}

// 2. 签条滑出：短促木质叩击声
function playStickSound() {
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') ctx.resume();

  [0, 0.09, 0.20].forEach((delay, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 580 - i * 55;
    gain.gain.setValueAtTime(0.25, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + 0.25);
  });
}

// 3. 出签揭晓：古风钟鸣声（低沉三叠，余韵悠长）
function playRevealSound() {
  const ctx = getAudioCtx();
  if (ctx.state === 'suspended') ctx.resume();

  [[220, 0.20], [330, 0.12], [440, 0.10]].forEach(([freq, vol], i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.975, ctx.currentTime + i * 0.07 + 1.8);
    gain.gain.setValueAtTime(vol, ctx.currentTime + i * 0.07);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 2.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + i * 0.07);
    osc.stop(ctx.currentTime + i * 0.07 + 2.5);
  });
}

// ===== 初始化粒子 =====
function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (4 + Math.random() * 6) + 's';
    p.style.animationDelay = (Math.random() * 6) + 's';
    p.style.opacity = (0.3 + Math.random() * 0.5).toString();
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}

// ===== 尝试自动播放（需用户交互触发）=====
function tryAutoPlay() {
  const startOnInteraction = () => {
    if (!musicStarted) {
      musicStarted = true;
      musicPlaying = true;
      ambientPad = null;
      reverbNode = null;
      const btn = document.getElementById('musicBtn');
      const slash = document.getElementById('muteSlash');
      btn.classList.remove('muted');
      slash.style.display = 'none';
      const ctx = getAudioCtx();
      scheduleMusicLoop(ctx.currentTime + 0.1);
    }
    document.removeEventListener('click', startOnInteraction);
    document.removeEventListener('touchstart', startOnInteraction);
  };
  document.addEventListener('click', startOnInteraction);
  document.addEventListener('touchstart', startOnInteraction);
}

// ===== 开始摇签 =====
function startShake() {
  if (isShaking) return;
  isShaking = true;

  const tube = document.getElementById('qianTube');
  const tubeWrap = document.getElementById('tubeWrap');
  const overlay = document.getElementById('shakingOverlay');
  const shakeBtn = document.getElementById('shakeBtn');
  const countdownEl = document.getElementById('countdown');

  // 隐藏按钮
  shakeBtn.style.opacity = '0.4';
  shakeBtn.style.pointerEvents = 'none';

  // 签筒摇晃 + 启动持续沙沙声
  tube.classList.add('shaking');
  startShakeSound();   // ← 持续循环，不会自动停

  // 2秒后显示祈求文字 + 倒计时
  setTimeout(() => {
    tubeWrap.style.display = 'none';
    overlay.style.display = 'flex';
    playStickSound();    // 签条滑出叩击声

    // 倒计时（沙沙声继续播放）
    let count = 4;
    countdownEl.textContent = count;
    countdownTimer = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count <= 0) {
        clearInterval(countdownTimer);
        showResult();
      }
    }, 1000);
  }, 2000);
}

// ===== 展示结果 =====
function showResult() {
  const overlay = document.getElementById('shakingOverlay');
  const resultCard = document.getElementById('resultCard');
  const againArea = document.getElementById('againArea');
  const btnArea = document.getElementById('btnArea');

  // 随机抽签
  const idx = Math.floor(Math.random() * qianData.length);
  const qian = qianData[idx];

  // 填充内容
  document.getElementById('resultNum').textContent = qian.num;
  const levelEl = document.getElementById('resultLevel');
  levelEl.textContent = qian.level;
  levelEl.className = 'result-level ' + qian.levelClass;

  document.getElementById('resultPoem').textContent = qian.poem;
  document.getElementById('resultText').textContent = qian.text;
  document.getElementById('fortuneFinance').textContent = qian.finance;
  document.getElementById('fortuneBusiness').textContent = qian.business;
  document.getElementById('fortuneLucky').textContent = qian.lucky;

  // 切换显示
  overlay.style.display = 'none';
  resultCard.style.display = 'block';
  btnArea.style.display = 'none';
  againArea.style.display = 'block';
  stopShakeSound(0.3);   // 沙沙声渐出停止
  playRevealSound();     // 钟鸣揭晓

  isShaking = false;
}

// ===== 重置游戏 =====
function resetGame() {
  const tubeWrap = document.getElementById('tubeWrap');
  const overlay = document.getElementById('shakingOverlay');
  const resultCard = document.getElementById('resultCard');
  const againArea = document.getElementById('againArea');
  const btnArea = document.getElementById('btnArea');
  const shakeBtn = document.getElementById('shakeBtn');
  const tube = document.getElementById('qianTube');

  tubeWrap.style.display = 'flex';
  overlay.style.display = 'none';
  resultCard.style.display = 'none';
  againArea.style.display = 'none';
  btnArea.style.display = 'flex';

  shakeBtn.style.opacity = '1';
  shakeBtn.style.pointerEvents = 'auto';
  tube.classList.remove('shaking');

  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }

  stopShakeSound(0.2);   // 确保摇签音效停止
  isShaking = false;
}

// ===== 初始化 =====
window.addEventListener('load', () => {
  initParticles();
  tryAutoPlay(); // 等待用户首次点击后自动开始播放
});
