// 3D Coin Flip Logic

const translations = {
    "en": {
        "app_title": "3D Coin Flip - Zeze Hub",
        "app_name": "3D Coin Flip",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "3D Coin Flip",
        "main_description": "Will it be Heads or Tails?",
        "prediction_label": "Predict the result",
        "heads_label": "Heads",
        "tails_label": "Tails",
        "win_label": "Prediction Win!",
        "flip_btn": "Flip Coin",
        "stat_total": "Total Flips",
        "stat_heads": "Heads",
        "stat_tails": "Tails",
        "save_img_btn": "Save Image",
        "copy_link_btn": "Copy Link",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "HEADS",
        "tails_text": "TAILS",
        "advice_heads": "A positive sign! Luck is on your side.",
        "advice_tails": "The flip says tails. Maybe wait a bit?",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service"
    },
    "ko": {
        "app_title": "3D 동전 던지기 - Zeze Hub",
        "app_name": "3D Coin Flip",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "3D 동전 던지기",
        "main_description": "운명은 앞면일까요, 뒷면일까요?",
        "prediction_label": "결과를 예측해보세요",
        "heads_label": "앞면",
        "tails_label": "뒷면",
        "win_label": "예측 성공!",
        "flip_btn": "동전 던지기",
        "stat_total": "총 던진 횟수",
        "stat_heads": "앞면",
        "stat_tails": "뒷면",
        "save_img_btn": "저장",
        "copy_link_btn": "복사",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "앞면 (Heads)",
        "tails_text": "뒷면 (Tails)",
        "advice_heads": "긍정적인 신호입니다! 행운이 따르겠네요.",
        "advice_tails": "뒷면이 나왔습니다. 조금 더 신중해볼까요?",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let selectedPrediction = null;

// State
let totalFlips = parseInt(localStorage.getItem('coin_total')) || 0;
let headsCount = parseInt(localStorage.getItem('coin_heads')) || 0;
let tailsCount = parseInt(localStorage.getItem('coin_tails')) || 0;

// DOM
const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const resultOverlay = document.getElementById('coin-result-overlay');
const resultText = document.getElementById('result-text');
const resultAdvice = document.getElementById('result-advice');
const winBadge = document.getElementById('win-badge');
const shareButtons = document.getElementById('share-buttons');

const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');

// 🎵 Sound Manager (Same logic as magiclamp)
const SoundManager = {
    ctx: null,
    muted: false,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    toggleMute() {
        this.muted = !this.muted;
        document.getElementById('sound-icon').textContent = this.muted ? 'volume_off' : 'volume_up';
    },
    playFlip() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.5);
    },
    playWin() {
        if (this.muted) return;
        this.init();
        [523.25, 659.25, 783.99].forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = f;
            gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.1);
            gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + i * 0.1 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.3);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.1); osc.stop(this.ctx.currentTime + i * 0.1 + 0.3);
        });
    }
};

function init() {
    applyLanguage();
    updateDisplay();
    setupEventListeners();
}

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;
}

function flipCoin() {
    flipButton.disabled = true;
    resultOverlay.classList.add('opacity-0', 'scale-50');
    shareButtons.classList.add('opacity-0');
    
    // Random Result
    const random = Math.random();
    const isHeads = random < 0.5;
    
    // Animation Logic
    coin.classList.remove('is-flipping');
    void coin.offsetWidth; // reflow
    
    // Calculate final rotation
    // We want at least 5 full rotations (1800deg)
    // Heads ends at 0 or 360, Tails ends at 180
    const extraRotations = Math.floor(Math.random() * 5) + 5;
    const finalRotation = extraRotations * 360 + (isHeads ? 0 : 180);
    
    coin.style.transform = `rotateY(${finalRotation}deg)`;
    coin.classList.add('is-flipping');
    SoundManager.playFlip();

    setTimeout(() => {
        // Show Results
        const t = translations[currentLang];
        resultText.textContent = isHeads ? t.heads_text : t.tails_text;
        resultAdvice.textContent = isHeads ? t.advice_heads : t.advice_tails;
        
        totalFlips++;
        if (isHeads) headsCount++; else tailsCount++;
        
        // Check Prediction
        if (selectedPrediction === (isHeads ? 'heads' : 'tails')) {
            winBadge.classList.remove('hidden');
            SoundManager.playWin();
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } else {
            winBadge.classList.add('hidden');
        }

        resultOverlay.classList.remove('opacity-0', 'scale-50');
        shareButtons.classList.remove('opacity-0');
        
        updateDisplay();
        saveState();
        flipButton.disabled = false;
    }, 1500);
}

function saveState() {
    localStorage.setItem('coin_total', totalFlips);
    localStorage.setItem('coin_heads', headsCount);
    localStorage.setItem('coin_tails', tailsCount);
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
}

// Image Capture
async function saveImage() {
    const card = document.querySelector('#coin-result-overlay > div');
    const canvas = await html2canvas(card, { backgroundColor: '#050c1d', scale: 2 });
    const link = document.createElement('a');
    link.download = `Zeze_CoinFlip_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function setupEventListeners() {
    flipButton.addEventListener('click', flipCoin);
    document.getElementById('sound-toggle').addEventListener('click', () => SoundManager.toggleMute());
    document.getElementById('save-img-btn').addEventListener('click', saveImage);
    
    document.querySelectorAll('.predict-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.predict-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPrediction = btn.dataset.predict;
        });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Sidebar
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    document.getElementById('menu-toggle').addEventListener('click', () => {
        sidebarMenu.classList.remove('translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', init);