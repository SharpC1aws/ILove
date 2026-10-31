/**
 * VIKA & SLAVIK — 1 YEAR ANNIVERSARY INTERACTIVE EXPERIENCE
 * Anchored to: 30 October 2025
 * Mobile & Desktop Performance Engineered: 60 FPS Canvas, Pointer Events, Audio Context Unlock
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initAudioExperience();
  initLoveCounter();
  renderTimelinePostcards();
  renderReasonsGrid();
  renderBentoGallery();
  initWaxEnvelope();
  initComplimentJar();
  initPhotoModal();
  initScrollReveal();
  initHeartBurstOnClicks();
});

/* ==========================================================================
   1. PHOTOS DATASET & NARRATIVE
   ========================================================================== */

const MEMORIES = [
  {
    id: 1,
    img: 'photos/photo_2026-06-14_00-54-05.jpg',
    fallbackImg: '../photo_2026-06-14_00-54-05.jpg',
    date: '14 Июня • Начало лета',
    title: 'Первые летние ночи',
    caption: 'Когда прогулки до утра казались слишком короткими...',
    desc: 'Мы гуляли часами, говорили обо всём на свете, и именно тогда я понял: с этой девушкой я хочу провести всю свою жизнь.',
    likes: 384
  },
  {
    id: 2,
    img: 'photos/photo_2026-06-14_00-54-11.jpg',
    fallbackImg: '../photo_2026-06-14_00-54-11.jpg',
    date: '14 Июня • Самый тёплый взгляд',
    title: 'Твоя улыбка',
    caption: 'Улыбка, в которую невозможно не влюбиться',
    desc: 'Каждый раз, когда ты так смотришь на меня, весь мир вокруг замирает. В твоих глазах — мой самый настоящий дом.',
    likes: 420
  },
  {
    id: 3,
    img: 'photos/photo_2026-08-08_21-42-10.jpg',
    fallbackImg: '../photo_2026-08-08_21-42-10.jpg',
    date: '8 Августа • Августовское тепло',
    title: 'Вечер только для нас двоих',
    caption: 'Тот самый вечер, когда не хотелось отпускать твою руку',
    desc: 'Тёплый августовский воздух, свет вечерних фонарей и ты рядом — ничего идеальнее для счастья просто не существует.',
    likes: 512
  },
  {
    id: 4,
    img: 'photos/photo_2026-08-08_22-30-14.jpg',
    fallbackImg: '../photo_2026-08-08_22-30-14.jpg',
    date: '8 Августа • Ночные огни',
    title: 'Наши объятия',
    caption: 'Когда ты прижимаешься ко мне — я самый сильный на планете',
    desc: 'Твои объятия обладают невероятной силой. Они прогоняют любую усталость и наполняют сердце невыразимым покоем.',
    likes: 477
  },
  {
    id: 5,
    img: 'photos/photo_2026-08-08_22-30-22.jpg',
    fallbackImg: '../photo_2026-08-08_22-30-22.jpg',
    date: '8 Августа • Искренний смех',
    title: 'Секунда чистого счастья',
    caption: 'Обожаю, когда мы смеёмся вместе до слёз',
    desc: 'Твой смех — моя любимая мелодия. Я готов на любые шутки и безумства, лишь бы видеть тебя такой сияющей.',
    likes: 530
  },
  {
    id: 6,
    img: 'photos/photo_2026-08-11_21-30-40.jpg',
    fallbackImg: '../photo_2026-08-11_21-30-40.jpg',
    date: '11 Августа • Звёздная ночь',
    title: 'Магия моментов',
    caption: 'Ты делаешь каждый обычный день особенным праздником',
    desc: 'Даже самый простой поход или тихий вечер рядом с тобой превращается в незабываемое приключение.',
    likes: 395
  },
  {
    id: 7,
    img: 'photos/photo_2026-08-15_21-21-44.jpg',
    fallbackImg: '../photo_2026-08-15_21-21-44.jpg',
    date: '15 Августа • Середина августа',
    title: 'Нежность без слов',
    caption: 'Когда достаточно одного прикосновения',
    desc: 'Нам никогда не бывает неловко молчать. Мы можем просто сидеть рядом, держась за руки, и чувствовать абсолютную гармонию.',
    likes: 462
  },
  {
    id: 8,
    img: 'photos/photo_2026-08-15_21-22-03.jpg',
    fallbackImg: '../photo_2026-08-15_21-22-03.jpg',
    date: '15 Августа • Моя красавица',
    title: 'Самая прекрасная',
    caption: 'Каждый день восхищаюсь твоей красотой и душой',
    desc: 'Ты восхитительна во всём — в том, как ты говоришь, как мечтаешь, как искренне любишь этот мир.',
    likes: 489
  },
  {
    id: 9,
    img: 'photos/photo_2026-08-24_20-46-10.jpg',
    fallbackImg: '../photo_2026-08-24_20-46-10.jpg',
    date: '24 Августа • Закат лета',
    title: 'Золотые лучи',
    caption: 'Провожая лето с той, кто согревает моё сердце всегда',
    desc: 'Лето может заканчиваться, но моё персональное солнце — это ты, и ты греешь меня в любое время года.',
    likes: 510
  },
  {
    id: 10,
    img: 'photos/photo_2026-08-24_20-46-12.jpg',
    fallbackImg: '../photo_2026-08-24_20-46-12.jpg',
    date: '24 Августа • Взгляд в будущее',
    title: 'Вместе навсегда',
    caption: 'Смотрю на тебя и точно знаю: мы сможем всё',
    desc: 'С тобой не страшно ничего. Любые трудности превращаются в пустяк, когда мы стоим плечом к плечу.',
    likes: 544
  },
  {
    id: 11,
    img: 'photos/photo_2026-09-07_22-50-45.jpg',
    fallbackImg: '../photo_2026-09-07_22-50-45.jpg',
    date: '7 Сентября • Осенний уют',
    title: 'Первое осеннее дыхание',
    caption: 'Осень становится в сто раз уютнее, когда ты рядом',
    desc: 'Тёплые свитера, горячий чай и твои ладошки в моих карманах. Обожаю нашу осень.',
    likes: 430
  },
  {
    id: 12,
    img: 'photos/photo_2026-09-09_22-38-18.jpg',
    fallbackImg: '../photo_2026-09-09_22-38-18.jpg',
    date: '9 Сентября • Ночные огни города',
    title: 'Огни большого города',
    caption: 'Среди миллионов людей я выбираю только тебя',
    desc: 'В огромном шумящем мире есть только одна точка притяжения для моего взгляда — ты.',
    likes: 456
  },
  {
    id: 13,
    img: 'photos/photo_2026-09-14_23-52-17.jpg',
    fallbackImg: '../photo_2026-09-14_23-52-17.jpg',
    date: '14 Сентября • Полночь',
    title: 'Наши полуночные секреты',
    caption: 'Когда город засыпает, наше счастье просыпается',
    desc: 'Те самые сокровенные разговоры под тихую музыку, когда открываешь душу без остатка.',
    likes: 472
  },
  {
    id: 14,
    img: 'photos/photo_2026-09-23_22-32-15.jpg',
    fallbackImg: '../photo_2026-09-23_22-32-15.jpg',
    date: '23 Сентября • Золотая пора',
    title: 'Моя муза',
    caption: 'Ты вдохновляешь меня становиться лучше каждый день',
    desc: 'Ради твоей гордости и твоих сияющих глаз хочется покорять любые вершины.',
    likes: 498
  },
  {
    id: 15,
    img: 'photos/photo_2026-09-23_22-32-16.jpg',
    fallbackImg: '../photo_2026-09-23_22-32-16.jpg',
    date: '23 Сентября • Любимый кадр',
    title: 'Кадр в моем сердце',
    caption: 'Сохраняю каждый миг с тобой в памяти навсегда',
    desc: 'Фотографии хранят моменты, а сердце хранит чувства. И мои чувства к тебе растут с каждым часом.',
    likes: 521
  },
  {
    id: 16,
    img: 'photos/photo_2026-09-30_21-10-10.jpg',
    fallbackImg: '../photo_2026-09-30_21-10-10.jpg',
    date: '30 Сентября • Проводы месяца',
    title: 'Наш общий ритм',
    caption: 'Мы дышим в унисон',
    desc: 'Поразительно, как легко и естественно нам быть вместе. Будто мы знали друг друга всю жизнь.',
    likes: 415
  },
  {
    id: 17,
    img: 'photos/photo_2026-09-30_21-54-08.jpg',
    fallbackImg: '../photo_2026-09-30_21-54-08.jpg',
    date: '30 Сентября • Теплые минуты',
    title: 'Особенная атмосфера',
    caption: 'С тобой уютно в любом месте вселенной',
    desc: 'Неважно, где мы — важно, что мы вместе. В этом секрет нашего бесконечного комфорта.',
    likes: 467
  },
  {
    id: 18,
    img: 'photos/photo_2026-09-30_22-03-27.jpg',
    fallbackImg: '../photo_2026-09-30_22-03-27.jpg',
    date: '30 Сентября • Преддверие октября',
    title: 'Моё счастье',
    caption: 'Ты — самое лучшее, что случилось в моей жизни',
    desc: 'Если бы мне предложили прожить этот год снова, я бы не изменил ни секунды, лишь бы встретить тебя точно так же.',
    likes: 560
  },
  {
    id: 19,
    img: 'photos/photo_2026-10-07_20-33-25.jpg',
    fallbackImg: '../photo_2026-10-07_20-33-25.jpg',
    date: '7 Октября • Шаг к годовщине',
    title: 'В предвкушении годовщины',
    caption: 'Год пролетел как один сказочный день...',
    desc: 'И это только начало нашей большой и красивой истории любви с 30 октября 2025 года. Люблю тебя бесконечно, моя Викуля!',
    likes: 618
  }
];

/* ==========================================================================
   2. REASONS WHY I LOVE YOU DATA
   ========================================================================== */

const REASONS = [
  {
    num: '01',
    icon: '✨',
    title: 'За твой звонкий смех',
    desc: 'Когда ты искренне смеёшься, у меня на душе становится настолько светло, будто взошло сразу десять солнц.'
  },
  {
    num: '02',
    icon: '☕',
    title: 'За наши уютные вечера',
    desc: 'За то, как мы можем укутаться в один плед, пить чай и обсуждать всё — от глупых шуток до сокровенных мечтаний.'
  },
  {
    num: '03',
    icon: '💖',
    title: 'За твою искреннюю заботу',
    desc: 'За то, как ты переживаешь, поел ли я, тепло ли оделся, и за то, как нежно ты умеешь поддержать в сложный момент.'
  },
  {
    num: '04',
    icon: '👀',
    title: 'За твои волшебные глаза',
    desc: 'В них можно смотреть часами и каждый раз находить там нежность, глубину и целый космос любви.'
  },
  {
    num: '05',
    icon: '🤝',
    title: 'За то, что ты — мой лучший друг',
    desc: 'С тобой я могу быть настоящим, без масок и притворства. Ты понимаешь меня с полувзгляда.'
  },
  {
    num: '06',
    icon: '🌸',
    title: 'За то, какая ты настоящая',
    desc: 'За твою доброту, искренность, трогательность и чистоту души, которую я берегу больше всего на свете.'
  }
];

/* ==========================================================================
   3. COMPLIMENTS BANK
   ========================================================================== */

const COMPLIMENTS = [
  "Викуля, твоя улыбка способна осветить даже самый хмурый осенний день! ☀️",
  "С каждым днём я влюбляюсь в тебя всё сильнее, хотя казалось, что сильнее уже невозможно. ❤️",
  "Ты — самое ценное и дорогое, что есть в моей жизни. 💎",
  "Когда ты рядом, весь остальной мир просто перестаёт иметь значение. ✨",
  "Спасибо за то, что ты делаешь меня самым счастливым парнем на свете! 🕊️",
  "Твои объятия — это самое уютное и безопасное место во всей Вселенной. 🏡",
  "У тебя самое доброе и прекрасное сердце, моя девочка. 🌸",
  "Я горжусь тобой, верю в тебя и всегда буду стоять за твоей спиной! 🌟",
  "Ты красивее всех закатов и рассветов, которые я когда-либо видел. 🌅",
  "Один твой поцелуй снимает любую усталость и дарит крылья. 🦋",
  "Ты — моё главное вдохновение и мой любимый человечек. 💫",
  "С 30 октября 2025 года каждый день с тобой — настоящее чудо... Люблю тебя! 🌹"
];

/* ==========================================================================
   4. AMBIENT ROSE PETALS & STARDUST CANVAS (60 FPS + MOBILE OPTIMIZED)
   ========================================================================== */

function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const isMobile = width < 768;
  const petalsCount = isMobile ? Math.min(18, Math.floor(width / 22)) : Math.min(35, Math.floor(width / 35));
  const petals = [];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = isMobile ? (7 + Math.random() * 9) : (8 + Math.random() * 12);
      this.speedY = 0.5 + Math.random() * 1.1;
      this.speedX = (Math.random() - 0.5) * 0.7;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.02;
      this.oscillationSpeed = 0.01 + Math.random() * 0.02;
      this.oscillationAmp = isMobile ? (12 + Math.random() * 18) : (20 + Math.random() * 30);
      this.baseX = this.x;
      this.alpha = 0.35 + Math.random() * 0.45;
      this.hue = 340 + Math.random() * 20; // Soft pink to rose
    }

    update() {
      this.y += this.speedY;
      this.angle += this.angularSpeed;
      this.x = this.baseX + Math.sin(this.y * this.oscillationSpeed) * this.oscillationAmp;

      if (this.y > height + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = `hsla(${this.hue}, 85%, 72%, ${this.alpha})`;
      ctx.beginPath();
      // Organic petal shape
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size * 1.4);
      ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < petalsCount; i++) {
    petals.push(new Petal());
  }

  // Floating starlight particles
  const starsCount = isMobile ? Math.min(20, Math.floor(width / 20)) : Math.min(40, Math.floor(width / 30));
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.8 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.7,
      speed: 0.005 + Math.random() * 0.015
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Draw stardust
    for (let s of stars) {
      s.alpha += Math.sin(Date.now() * s.speed) * 0.01;
      ctx.fillStyle = `rgba(255, 240, 245, ${Math.max(0.1, Math.min(0.8, s.alpha))})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw falling rose petals
    for (let p of petals) {
      p.update();
      p.draw();
    }

    requestAnimationFrame(loop);
  }

  loop();
}

/* ==========================================================================
   5. WEB AUDIO API ROMANTIC SYNTH MELODY (ZERO EXTERNAL ASSETS NEEDED)
   ========================================================================== */

let audioCtx = null;
let isPlaying = false;
let melodyInterval = null;

function initAudioExperience() {
  const musicBtn = document.getElementById('music-toggle');
  if (!musicBtn) return;

  // Unlock mobile web audio on any initial interaction
  const unlockAudio = () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  window.addEventListener('pointerdown', unlockAudio, { once: true, passive: true });
  window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });

  musicBtn.addEventListener('click', () => {
    unlockAudio();

    if (!isPlaying) {
      startRomanticMelody();
      isPlaying = true;
      musicBtn.classList.remove('paused');
      musicBtn.querySelector('.music-label').textContent = 'Музыка: Вкл';
      spawnHeartShower();
    } else {
      stopRomanticMelody();
      isPlaying = false;
      musicBtn.classList.add('paused');
      musicBtn.querySelector('.music-label').textContent = 'Музыка: Выкл';
    }
  });
}

function playSoftChime(freq, duration = 2.5, gainLevel = 0.08) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  const overtone = audioCtx.createOscillator();
  const overtoneGain = audioCtx.createGain();

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1400, now);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  overtone.type = 'triangle';
  overtone.frequency.setValueAtTime(freq * 2, now);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(gainLevel, now + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  overtoneGain.gain.setValueAtTime(0, now);
  overtoneGain.gain.linearRampToValueAtTime(gainLevel * 0.25, now + 0.05);
  overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + (duration * 0.6));

  osc.connect(gain);
  overtone.connect(overtoneGain);
  gain.connect(filter);
  overtoneGain.connect(filter);
  filter.connect(audioCtx.destination);

  osc.start(now);
  overtone.start(now);
  osc.stop(now + duration);
  overtone.stop(now + duration);
}

function startRomanticMelody() {
  const progression = [
    [261.63, 329.63, 392.00, 493.88, 587.33],
    [220.00, 261.63, 329.63, 392.00, 493.88],
    [174.61, 261.63, 329.63, 349.23, 440.00],
    [196.00, 293.66, 392.00, 440.00, 493.88]
  ];

  let chordIndex = 0;
  let arpeggioStep = 0;

  function tick() {
    const currentChord = progression[chordIndex];
    const note = currentChord[arpeggioStep % currentChord.length];

    playSoftChime(note, 3.0, 0.06);

    arpeggioStep++;
    if (arpeggioStep >= currentChord.length) {
      arpeggioStep = 0;
      chordIndex = (chordIndex + 1) % progression.length;
    }
  }

  tick();
  melodyInterval = setInterval(tick, 950);
}

function stopRomanticMelody() {
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
}

/* ==========================================================================
   6. LIVE ANNIVERSARY STOPWATCH (COUNTING FROM 30 OCTOBER 2025)
   ========================================================================== */

function initLoveCounter() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-minutes');
  const secsEl = document.getElementById('count-seconds');

  // Exact relationship start date: 30 October 2025 at 00:00:00
  const relationshipStart = new Date(2025, 9, 30, 0, 0, 0);

  function update() {
    const current = new Date();
    const diff = Math.max(0, current - relationshipStart);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   7. TIMELINE POSTCARDS RENDERING
   ========================================================================== */

function renderTimelinePostcards() {
  const container = document.getElementById('postcards-container');
  if (!container) return;

  const timelineItems = MEMORIES.slice(0, 10);

  timelineItems.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.className = 'postcard-entry';
    entry.setAttribute('data-reveal', '');

    entry.innerHTML = `
      <div class="timeline-marker" title="Момент ${index + 1}">❤️</div>
      <article class="postcard-card" data-photo-id="${item.id}">
        <div class="postcard-image-box">
          <img src="${item.img}" 
               onerror="this.onerror=null; this.src='${item.fallbackImg}'" 
               alt="${item.title}" 
               loading="lazy">
          <span class="postcard-badge">${item.date}</span>
        </div>
        <div class="postcard-meta">
          <span class="postcard-date">Открытка #${index + 1}</span>
          <h3 class="postcard-caption">${item.caption}</h3>
          <p class="postcard-subtext">${item.desc}</p>
          <span class="postcard-tap-hint">🔍 Нажми, чтобы рассмотреть</span>
        </div>
      </article>
    `;

    container.appendChild(entry);
  });

  container.querySelectorAll('.postcard-card').forEach(card => {
    card.addEventListener('click', () => {
      const photoId = parseInt(card.getAttribute('data-photo-id'), 10);
      const photo = MEMORIES.find(m => m.id === photoId);
      if (photo) openPhotoModal(photo);
    });
  });
}

/* ==========================================================================
   8. REASONS WHY I LOVE YOU GRID
   ========================================================================== */

function renderReasonsGrid() {
  const grid = document.getElementById('reasons-grid');
  if (!grid) return;

  REASONS.forEach(reason => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.setAttribute('data-reveal', '');

    card.innerHTML = `
      <div class="reason-top">
        <span class="reason-number">Причина ${reason.num}</span>
        <span class="reason-icon">${reason.icon}</span>
      </div>
      <div>
        <h3 class="reason-title">${reason.title}</h3>
        <p class="reason-desc">${reason.desc}</p>
      </div>
      <button class="reason-heart-btn" aria-label="Поставить сердечко">
        <span>❤️ В самое сердце</span>
      </button>
    `;

    card.querySelector('.reason-heart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = e.target.getBoundingClientRect();
      spawnHeartBurst(rect.left + rect.width / 2, rect.top);
      playSoftChime(587.33, 1.2, 0.05);
    });

    card.addEventListener('click', (e) => {
      const rect = card.getBoundingClientRect();
      spawnHeartBurst(rect.left + rect.width / 2, rect.top + 30);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   9. BENTO GALLERY RENDERING (ALL 19 PHOTOS)
   ========================================================================== */

function renderBentoGallery() {
  const gallery = document.getElementById('bento-gallery');
  if (!gallery) return;

  MEMORIES.forEach((item, index) => {
    const itemEl = document.createElement('div');
    const isSpan = index === 0 || index === 7 || index === 14;
    itemEl.className = `gallery-item ${isSpan ? 'span-2' : ''}`;
    itemEl.setAttribute('data-reveal', '');

    itemEl.innerHTML = `
      <img src="${item.img}" 
           onerror="this.onerror=null; this.src='${item.fallbackImg}'" 
           alt="${item.title}" 
           loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-date">${item.date}</span>
        <h4 class="gallery-title">${item.title}</h4>
      </div>
    `;

    itemEl.addEventListener('click', () => {
      openPhotoModal(item);
    });

    gallery.appendChild(itemEl);
  });
}

/* ==========================================================================
   10. INTERACTIVE WAX-SEALED LOVE LETTER
   ========================================================================== */

function initWaxEnvelope() {
  const envelope = document.getElementById('love-envelope');
  const seal = document.getElementById('wax-seal');

  if (!envelope || !seal) return;

  seal.addEventListener('click', () => {
    playSoftChime(523.25, 2.0, 0.08);
    playSoftChime(659.25, 2.5, 0.06);

    const rect = seal.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
      setTimeout(() => spawnSingleHeart(centerX, centerY), i * 30);
    }

    envelope.classList.add('opened');

    setTimeout(() => {
      const letterPaper = document.getElementById('letter-paper');
      if (letterPaper) {
        letterPaper.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 400);
  });
}

/* ==========================================================================
   11. COMPLIMENT JAR & SWEET WORDS GENERATOR
   ========================================================================== */

function initComplimentJar() {
  const btn = document.getElementById('next-compliment-btn');
  const textEl = document.getElementById('compliment-text');
  if (!btn || !textEl) return;

  let lastIndex = -1;

  btn.addEventListener('click', (e) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * COMPLIMENTS.length);
    } while (newIndex === lastIndex && COMPLIMENTS.length > 1);

    lastIndex = newIndex;

    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(10px)';

    setTimeout(() => {
      textEl.textContent = COMPLIMENTS[newIndex];
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
    }, 250);

    const rect = btn.getBoundingClientRect();
    spawnHeartBurst(rect.left + rect.width / 2, rect.top);
    playSoftChime(440, 1.5, 0.05);
  });
}

/* ==========================================================================
   12. LIGHTBOX PHOTO MODAL (TOUCH-FRIENDLY)
   ========================================================================== */

let currentModalPhoto = null;

function initPhotoModal() {
  const modal = document.getElementById('photo-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const likeBtn = document.getElementById('modal-like-btn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (likeBtn) {
    likeBtn.addEventListener('click', (e) => {
      if (currentModalPhoto) {
        currentModalPhoto.likes++;
        const countEl = document.getElementById('modal-likes-count');
        if (countEl) {
          countEl.textContent = `${currentModalPhoto.likes} отметок «Люблю»`;
        }
        const rect = likeBtn.getBoundingClientRect();
        spawnHeartBurst(rect.left + rect.width / 2, rect.top);
        playSoftChime(659.25, 1.2, 0.06);
      }
    });
  }
}

function openPhotoModal(photo) {
  currentModalPhoto = photo;
  const modal = document.getElementById('photo-modal');
  const img = document.getElementById('modal-img');
  const badge = document.getElementById('modal-badge');
  const title = document.getElementById('modal-title');
  const caption = document.getElementById('modal-caption');
  const likesCount = document.getElementById('modal-likes-count');

  if (!modal || !img) return;

  img.src = photo.img;
  img.onerror = () => { img.src = photo.fallbackImg; };
  if (badge) badge.textContent = photo.date;
  if (title) title.textContent = photo.title;
  if (caption) caption.textContent = `${photo.caption} — ${photo.desc}`;
  if (likesCount) likesCount.textContent = `${photo.likes} отметок «Люблю»`;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

/* ==========================================================================
   13. FLOATING HEART BURSTS & ZERO-DELAY TOUCH
   ========================================================================== */

function initHeartBurstOnClicks() {
  const showerBtn = document.getElementById('hearts-shower-btn');
  const finalBtn = document.getElementById('final-love-btn');

  if (showerBtn) {
    showerBtn.addEventListener('click', (e) => {
      spawnHeartShower();
      playSoftChime(523.25, 1.5, 0.05);
    });
  }

  if (finalBtn) {
    finalBtn.addEventListener('click', (e) => {
      spawnHeartShower();
      playSoftChime(659.25, 2.5, 0.08);
      alert('Викуля! Славик любит тебя больше всего на свете! С нашей годовщиной — вместе с 30 октября 2025 года и навсегда! 💖✨');
    });
  }

  // Pointer event gives instant touch feedback without mobile click lag
  document.addEventListener('pointerdown', (e) => {
    if (e.target && e.target.closest && e.target.closest('button, a, input, .modal-dialog, .postcard-card')) {
      return;
    }
    spawnSingleHeart(e.clientX, e.clientY);
  }, { passive: true });
}

function spawnSingleHeart(x, y) {
  const layer = document.getElementById('floating-hearts-layer');
  if (!layer) return;

  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  
  const emojis = ['💖', '❤️', '💕', '✨', '🌸', '💘', '💗'];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  const tx = (Math.random() - 0.5) * 100;
  const rot = (Math.random() - 0.5) * 50;
  const size = 16 + Math.random() * 20;

  heart.style.setProperty('--tx', `${tx}px`);
  heart.style.setProperty('--rot', `${rot}deg`);
  heart.style.fontSize = `${size}px`;

  layer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2500);
}

function spawnHeartBurst(x, y, count = 8) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnSingleHeart(x, y), i * 35);
  }
}

function spawnHeartShower() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      const rx = Math.random() * width;
      const ry = height * 0.7 + Math.random() * (height * 0.25);
      spawnSingleHeart(rx, ry);
    }, i * 60);
  }
}

/* ==========================================================================
   14. INTERSECTION OBSERVER SCROLL REVEAL
   ========================================================================== */

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -25px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
