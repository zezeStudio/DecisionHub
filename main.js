// Zeze Hub - Main Hub Logic (Magic Lamp Edition)

const translations = {
    "en": {
        "seo_h1": "Random Decision Tool Set<br>(Coin Flip, Dice, Ladder Climb)",
        "seo_desc_extra": "Try various free random selection tools including coin flip, dice roll, ladder climb, team maker, and lunch menu picker.",
        "hub_title": "When decision is hard,<br>Decision Hub will help you.",
        "hub_desc": "Providing the best tools for your decision-making. Explore our selection today.",
        "daily_fortune_title": "Daily Word of Wisdom", "daily_fortune_desc": "Check your special advice once a day.",
        "draw_fortune_btn": "Draw Fortune", "use_it": "Try it now",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "article_section_title": "Decision Insights", "read_more": "Read more",
        "footer_about": "About", "footer_guide": "User Guide", "footer_privacy": "Privacy Policy", "footer_terms": "Terms of Service", "footer_copyright": "© 2026 ZezeStudio. All rights reserved.",
        "art1_title": "How to Overcome Decision Fatigue", "art1_desc": "Suffering from 'Hamlet Syndrome'.",
        "art2_title": "Psychology of Luck and Probability", "art2_desc": "Tools reveal your true intentions through your reaction to the results.",
        "art3_title": "What is Cryptographic Randomness?", "art3_desc": "Perfect fairness guaranteed by the Web Crypto API.",
        "art4_title": "Decision Style by MBTI", "art4_desc": "Various choice mechanisms based on personality types.",
        "art5_title": "What Should I Eat Today?", "art5_desc": "5 tips to reduce decision fatigue and enjoy your meal.",
        "art6_title": "The Science of Fair Team Building", "art6_desc": "Why random draws are needed for conflict-free gatherings.",
        "card1_title": "Magic Lamp", "card1_desc": "Yes or No? Let the genie decide your fate.",
        "card2_title": "3D Coin Flip", "card2_desc": "Heads or Tails? Real 3D physics effects.",
        "card3_title": "Dice of Destiny", "card3_desc": "Custom dice for multiple choices.",
        "card4_title": "Ladder Climb", "card4_desc": "Fair role assignment and betting with friends.",
        "card5_title": "Drawing Lots", "card5_desc": "Quick and easy way to pick a winner.",
        "card6_title": "Team Maker", "card6_desc": "Divide teams fairly by entering a list.",
        "card7_title": "Card Flip", "card7_desc": "Flip cards to decide order or luck.",
        "card8_title": "Time Bomb", "card8_desc": "High-tension wire cutting game.",
        "cat_food": "Food", "cat_love": "Love", "cat_money": "Money", "cat_study": "Study", "cat_life": "Life", "cat_etc": "Etc",
        "ask_lamp": "Rub the Lamp", "app_brand": "Zeze Hub - Magic Lamp",
        "genie_thinking": "Genie is thinking...",
        "ph_food": "Should I order pizza tonight?...",
        "ph_love": "Should I text them first?...",
        "ph_money": "Should I buy this now?...",
        "ph_study": "Should I take a break?...",
        "ph_life": "Should I go out today?...",
        "ph_etc": "Should I do this?...",
        "hint_lamp": "Ask a Yes/No question to the lamp."
    },
    "ko": {
        "seo_h1": "랜덤 결정 도구 모음<br>(동전 던지기, 주사위, 사다리타기)",
        "seo_desc_extra": "동전 던지기, 주사위 굴리기, 사다리타기, 팀 나누기, 점심 메뉴 추천까지 다양한 랜덤 선택 도구를 무료로 이용해보세요.",
        "hub_title": "선택이 어려울 때,<br>Decision Hub가 도와드릴게요.",
        "hub_desc": "당신의 고민에 맞는 최적의 도구를 제공합니다. 지금 바로 확인해 보세요.",
        "daily_fortune_title": "오늘의 한마디 운세", "daily_fortune_desc": "매일 한 번, 당신을 위한 특별한 조언을 확인하세요.",
        "draw_fortune_btn": "운세 뽑기", "use_it": "사용해보기",
        "fortune_disclaimer": "※ 본 서비스의 운세 결과는 재미로만 즐겨주시기 바랍니다.",
        "article_section_title": "의사결정 인사이트", "read_more": "자세히 보기",
        "footer_about": "소개", "footer_guide": "사용 가이드", "footer_privacy": "개인정보처리방침", "footer_terms": "서비스 약관", "footer_copyright": "© 2026 ZezeStudio. All rights reserved.",
        "art1_title": "선택 장애를 극복하는 법", "art1_desc": "결정하지 못해 괴로운 '햄릿 증후군'.",
        "art2_title": "운과 확률의 심리학", "art2_desc": "도구들은 결과에 대한 반응을 통해 진심을 확인시켜줍니다.",
        "art3_title": "암호학적 무작위성이란?", "art3_desc": "Web Crypto API로 보장하는 완벽한 공정성.",
        "art4_title": "MBTI별 결정 스타일", "art4_desc": "성격 유형에 따른 다양한 선택의 메커니즘.",
        "art5_title": "오늘 점심 뭐 먹지?", "art5_desc": "결정 피로를 줄이고 행복한 식사를 만드는 5가지 팁.",
        "art6_title": "공정한 팀 구성의 과학", "art6_desc": "갈등 없는 모임을 위해 무작위 추첨이 필요한 이유.",
        "card1_title": "요술 램프", "card1_desc": "할까 말까? 램프의 요정이 당신의 운명을 점쳐줍니다.",
        "card2_title": "3D 동전 던지기", "card2_desc": "앞면일까 뒷면일까? 실제 같은 3D 물리 효과.",
        "card3_title": "운명의 주사위", "card3_desc": "선택지가 많을 때 유용한 커스텀 주사위.",
        "card4_title": "운명의 사다리", "card4_desc": "친구들과 공정한 역할 분담과 내기.",
        "card5_title": "제비뽑기", "card5_desc": "빠르고 간편하게 행운의 주인공을 뽑으세요.",
        "card6_title": "무작위 팀 나누기", "card6_desc": "명단만 입력하면 공정하게 팀을 편성합니다.",
        "card7_title": "카드 뒤집기", "card7_desc": "행운 확인이나 순서 정하기를 위한 게임.",
        "card8_title": "시한 폭탄", "card8_desc": "심장이 쫄깃한 와이어 끊기 복불복 게임.",
        "cat_food": "음식", "cat_love": "연애", "cat_money": "금전", "cat_study": "학업", "cat_life": "일상", "cat_etc": "기타",
        "ask_lamp": "램프 문지르기", "app_brand": "Zeze Hub - 요술 램프",
        "genie_thinking": "지니가 생각 중...",
        "ph_food": "오늘 치킨을 시켜 먹을까요?...",
        "ph_love": "먼저 연락해 볼까요?...",
        "ph_money": "이거 지금 살까요?...",
        "ph_study": "잠깐 쉴까요?...",
        "ph_life": "오늘 나갈까요?...",
        "ph_etc": "이거 할까요?...",
        "hint_lamp": "램프에게 예/아니오로 답할 수 있는 질문을 하세요."
    }
};

const adviceDB = {
    food: [
        { type: "positive", answer: "네!", text: "맛있게 먹으면 0칼로리입니다.", en: { answer: "YES!", text: "It's 0 calories if you enjoy it." } },
        { type: "negative", answer: "아니오", text: "지금 참으면 내일 아침이 가볍습니다.", en: { answer: "NO", text: "If you wait, you'll feel better tomorrow." } }
    ],
    love: [
        { type: "positive", answer: "좋아요!", text: "당신의 진심을 보여주세요.", en: { answer: "YES!", text: "Show your true feelings." } },
        { type: "negative", answer: "조금만 더", text: "신중하게 생각할 시간이 필요합니다.", en: { answer: "Wait", text: "You need more time to think." } }
    ],
    money: [
        { type: "positive", answer: "지르세요", text: "가치 있는 투자입니다.", en: { answer: "Buy it", text: "It's a worthy investment." } },
        { type: "negative", answer: "참으세요", text: "충동구매일 수 있습니다.", en: { answer: "Skip it", text: "Might be an impulse buy." } }
    ],
    study: [
        { type: "positive", answer: "지금 당장", text: "5분만 앉아보세요.", en: { answer: "Start Now", text: "Just sit for 5 minutes." } },
        { type: "negative", answer: "휴식 권장", text: "머리를 식힐 시간이 필요해요.", en: { answer: "Take a break", text: "You need to cool down." } }
    ],
    life: [
        { type: "positive", answer: "무조건 고", text: "새로운 변화가 필요합니다.", en: { answer: "Go for it", text: "Change is needed." } },
        { type: "negative", answer: "멈춤", text: "현상 유지가 답일 수 있습니다.", en: { answer: "Stop", text: "Staying put might be better." } }
    ],
    etc: [
        { type: "positive", answer: "YES", text: "우주가 당신을 돕고 있습니다.", en: { answer: "YES", text: "The universe is with you." } },
        { type: "negative", answer: "NO", text: "다른 길을 찾아보는 건 어떨까요?", en: { answer: "NO", text: "Maybe find another way?" } }
    ]
};

// Global State
let currentLang = localStorage.getItem('lang') || 'ko';
let fortunesData = null;
let selectedCategory = 'food';
let isMuted = localStorage.getItem('zeze_muted') === 'true';

// Sound Manager (Basic implementation for Hub)
const SoundManager = {
    ctx: null,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    playPoof() {
        if (isMuted) return;
        this.init();
        const bufSize = this.ctx.sampleRate * 0.4;
        const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
        noise.connect(gain); gain.connect(this.ctx.destination);
        noise.start();
    }
};

// Language Functions
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.id === `lang-${currentLang}`) {
            btn.classList.add('bg-primary', 'text-white', 'border-primary');
            btn.classList.remove('bg-transparent', 'text-gray-600');
        } else {
            btn.classList.remove('bg-primary', 'text-white', 'border-primary');
            btn.classList.add('bg-transparent', 'text-gray-600');
        }
    });
    document.documentElement.lang = currentLang;

    // Update Input Placeholder and Hint
    const questionInput = document.getElementById('question-input');
    const questionHint = document.getElementById('question-hint');
    if (questionInput) questionInput.placeholder = translations[currentLang][`ph_${selectedCategory}`];
    if (questionHint) questionHint.textContent = translations[currentLang].hint_lamp;

    if (document.getElementById('fortune-display') && !document.getElementById('fortune-display').classList.contains('hidden')) {
        showFortuneText();
    }
}

// Daily Fortune Functions
async function fetchFortunes() {
    try {
        const response = await fetch('fortunes.json');
        fortunesData = await response.json();
        checkDailyFortuneState();
    } catch (error) { console.error('Failed to load fortunes:', error); }
}

function drawFortune() {
    if (!fortunesData) return;
    localStorage.setItem('last_fortune_date', new Date().toDateString());
    document.getElementById('draw-fortune-btn').classList.add('hidden');
    const display = document.getElementById('fortune-display');
    display.classList.remove('hidden');
    showFortuneText();
}

function showFortuneText() {
    if (!fortunesData) return;
    const list = fortunesData[currentLang];
    const today = new Date();
    let seed = (today.getFullYear() * 31) + (today.getMonth() + 1 * 7) + today.getDate();
    seed = (seed ^ (seed << 13)) ^ (seed >> 17);
    document.getElementById('fortune-text').textContent = list[Math.abs(seed) % list.length];
}

function checkDailyFortuneState() {
    if (localStorage.getItem('last_fortune_date') === new Date().toDateString()) {
        const btn = document.getElementById('draw-fortune-btn');
        const display = document.getElementById('fortune-display');
        if (btn) btn.classList.add('hidden');
        if (display) display.classList.remove('hidden');
        showFortuneText();
    }
}

// Magic Lamp Hub Logic
function initMagicLamp() {
    const askBtn = document.getElementById('ask-button');
    const questionInput = document.getElementById('question-input');
    const catBtns = document.querySelectorAll('.cat-btn');
    const lampContainer = document.getElementById('magic-lamp-container');
    const smokePuffs = document.querySelectorAll('.smoke-puff');
    const answerReveal = document.getElementById('answer-reveal');

    if (!askBtn) return;

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            questionInput.placeholder = translations[currentLang][`ph_${selectedCategory}`];
        });
    });

    askBtn.addEventListener('click', () => {
        const question = questionInput.value.trim();
        if (!question) {
            questionInput.classList.add('animate-shake');
            setTimeout(() => questionInput.classList.remove('animate-shake'), 400);
            return;
        }

        askBtn.disabled = true;
        answerReveal.classList.remove('answer-visible');
        answerReveal.classList.add('opacity-0', 'scale-50');
        lampContainer.classList.remove('lamp-dimmed');
        lampContainer.classList.add('lamp-shaking');
        
        const genieVoice = document.getElementById('genie-voice');
        if (genieVoice) genieVoice.textContent = translations[currentLang].genie_thinking;

        setTimeout(() => {
            smokePuffs.forEach(p => p.classList.add('active'));
            SoundManager.playPoof();

            const pool = adviceDB[selectedCategory];
            const result = pool[Math.floor(Math.random() * pool.length)];
            
            const displayAnswer = (currentLang === 'en') ? result.en.answer : result.answer;
            const displayAdvice = (currentLang === 'en') ? result.en.text : result.text;

            document.getElementById('answer-text').textContent = displayAnswer;
            document.getElementById('answer-advice').textContent = displayAdvice;

            setTimeout(() => {
                lampContainer.classList.remove('lamp-shaking');
                lampContainer.classList.add('lamp-dimmed');
                answerReveal.classList.remove('opacity-0', 'scale-50');
                answerReveal.classList.add('answer-visible');
                askBtn.disabled = false;
            }, 800);
        }, 800);
    });
}

// Global Sound Management
const GlobalSound = {
    updateUI() {
        const icon = document.getElementById('global-sound-icon');
        if (icon) {
            icon.textContent = isMuted ? 'volume_off' : 'volume_up';
            if (isMuted) icon.classList.add('text-red-500');
            else icon.classList.remove('text-red-500');
        }
    },
    toggle() {
        isMuted = !isMuted;
        localStorage.setItem('zeze_muted', isMuted);
        this.updateUI();
    }
};

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    fetchFortunes();
    initMagicLamp();
    GlobalSound.updateUI();
    
    const soundBtn = document.getElementById('global-sound-toggle');
    if (soundBtn) soundBtn.addEventListener('click', () => GlobalSound.toggle());
});
