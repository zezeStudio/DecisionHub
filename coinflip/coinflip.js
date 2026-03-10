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
        "lose_label": "Prediction Failed",
        "flip_btn": "Flip Coin",
        "stat_total": "Total Flips",
        "stat_heads": "Heads",
        "stat_tails": "Tails",
        "save_img_btn": "Save Image",
        "copy_link_btn": "Copy Link",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "HEADS",
        "tails_text": "TAILS",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "skin_label": "Choose Coin Skin",
        "streak_label": "Streak",
        "scenario_label": "Choose Theme",
        "sc_daily": "Daily",
        "sc_love": "Love",
        "sc_adventure": "Adventure",
        "sc_food": "Menu",
        "destiny_title": "Current Destiny",
        "clear_history_btn": "Clear History",
        "info_title1": "History of Coin Flipping: From Rome to Now",
        "info_desc1": "Coin flipping is one of the oldest random decision-making methods in human history. Ancient Romans called it 'Navia aut Caput' (Ship or Head), as coins of the time featured a ship on one side and the emperor's head on the other. Beyond games, it was often used as a solemn procedure to settle legal disputes or seek divine will. Today, it remains a beloved tool worldwide for everything from starting football matches to making small daily choices.",
        "info_title2": "The Truth of Probability: Is 50/50 Perfect?",
        "info_desc2": "While mathematically 50%, research by Stanford statistician Persi Diaconis suggests that physical coin tosses are actually about 51:49, favoring the side facing up before the toss. This is due to the center of mass, air resistance, and subtle finger movements. However, Zeze Hub's coin flip uses a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) to ensure absolute fairness. While our 3D effects recreate physical reality, the results are based on pure, unbiased mathematical probability.",
        "info_title3": "Enjoying Coin Flip to the Max",
        "info_desc3": "<li>Notice which way your heart leans before the result appears. That's your true desire.</li><li>Use the 'Predict' feature to challenge your win streak records. See how strong your intuition and luck really are.</li><li>Try different coin skins like Bitcoin or Heart to match your current mood or situation.</li><li>Zeze Hub never sends your data to a server, so feel free to trust us with your most private concerns.</li>"
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
        "lose_label": "예측 실패...",
        "flip_btn": "동전 던지기",
        "stat_total": "총 던진 횟수",
        "stat_heads": "앞면",
        "stat_tails": "뒷면",
        "save_img_btn": "기록 저장",
        "copy_link_btn": "복사",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "앞면 (Heads)",
        "tails_text": "뒷면 (Tails)",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "skin_label": "동전 스킨 선택",
        "streak_label": "연승 기록",
        "scenario_label": "고민 테마 선택",
        "sc_daily": "일상",
        "sc_love": "연애",
        "sc_adventure": "모험",
        "sc_food": "메뉴",
        "destiny_title": "오늘의 운명 기록",
        "clear_history_btn": "기록 지우기",
        "info_title1": "동전 던지기의 역사: 로마에서 현재까지",
        "info_desc1": "동전 던지기는 인류 역사상 가장 오래된 무작위 결정 방법 중 하나입니다. 고대 로마인들은 이를 '나비아 아우트 카푸트(Navia aut Caput)', 즉 '배냐 머리냐'라고 불렀습니다. 당시 동전의 한쪽 면에는 배(Ship)가, 다른 쪽 면에는 황제의 머리(Head)가 새겨져 있었기 때문입니다. 로마 시대에 동전 던지기는 단순한 놀이를 넘어 법적 분쟁을 해결하거나 신의 뜻을 묻는 엄숙한 절차로 사용되기도 했습니다. 오늘날에도 축구 경기의 선축을 정하거나 일상의 소소한 선택을 내릴 때 전 세계적으로 가장 사랑받는 도구입니다.",
        "info_title2": "확률의 진실: 50대 50은 완벽할까?",
        "info_desc2": "수학적으로 동전 던지기의 확률은 50%로 알려져 있지만, 스탠퍼드 대학의 통계학자 퍼시 다이아코니스(Persi Diaconis)의 연구에 따르면 실제 물리적 동전 던지기는 약 51:49로 던지기 전 위를 향하고 있던 면이 나올 확률이 미세하게 높다고 합니다. 이는 동전의 무게 중심과 공기 저항, 그리고 손가락의 미세한 움직임 때문입니다. 하지만 Zeze Hub의 동전 던지기는 이러한 물리적 편향을 제거하고 완벽한 공정성을 보장하기 위해 암호학적 난수 생성기(CSPRNG)를 사용합니다. 당신이 보는 3D 효과는 물리적 현실을 재현하지만, 결과는 절대적으로 공정한 수학적 확률에 기반합니다.",
        "info_title3": "동전 던지기 백배 즐기기",
        "info_desc3": "<li>결과가 나오기 전, 당신의 심장이 반응하는 쪽이 어디인지 확인해 보세요. 그것이 당신의 진심입니다.</li><li>'예측(Predict)' 기능을 사용해 연승 기록(Streak)에 도전해 보세요. 당신의 직감과 운이 얼마나 강력한지 알 수 있습니다.</li><li>비트코인, 하트 등 다양한 코인 스킨을 활용해 상황에 맞는 분위기를 연출해 보세요.</li><li>Zeze Hub는 어떤 데이터도 서버로 전송하지 않으므로, 지극히 개인적인 고민도 안심하고 맡기실 수 있습니다.</li>"
    }
};

const storyData = {
    "daily": {
        "icon": "today",
        "heads": { 
            "ko": "오늘 당신의 에너지가 최고조에 달해 있습니다! 우주는 당신이 망설이던 그 일을 시작하라는 강력한 신호를 보내고 있네요. 뒤돌아보지 말고 첫발을 내디뎌 보세요. 행동하는 사람에게만 승리의 여신이 미소 지을 것입니다.", 
            "en": "Your energy is at its peak today! The universe is sending a strong signal to start what you've been hesitating about. Take the first step without looking back. The goddess of victory smiles only on those who act." 
        },
        "tails": { 
            "ko": "아무리 바쁜 여행자라도 때로는 휴식이 필요한 법입니다. 오늘만큼은 무거운 짐을 내려놓고 잠시 하늘을 바라보는 여유를 가져보세요. 오늘 취하는 짧은 휴식이 내일 더 큰 도약을 위한 소중한 원동력이 될 것입니다.", 
            "en": "Even the busiest traveler needs a rest sometimes. For today, put down your heavy burdens and take a moment to look at the sky. A short break today will be a valuable driving force for a bigger leap tomorrow." 
        }
    },
    "love": {
        "icon": "favorite",
        "heads": { 
            "ko": "진심은 언제나 마음을 움직이는 가장 강력한 마법입니다. 지금 머릿속에 떠오르는 그 사람이 있다면, 용기를 내어 먼저 손을 내밀어 보세요. 짧은 안부 인사 하나가 두 사람의 인생을 바꿀 아름다운 이야기의 시작이 될 수 있습니다.", 
            "en": "Sincerity is always the most powerful magic that moves the heart. If there is someone who comes to mind right now, gather your courage and reach out first. A short greeting can be the beginning of a beautiful story." 
        },
        "tails": { 
            "ko": "서두를 필요 없습니다. 인연의 시간은 자연스럽게 다가올 거예요. 지금은 타인이 아닌, 당신 자신을 먼저 사랑하고 돌볼 시간입니다. 당신의 매력이 충분히 빛을 발할 때, 가장 아름다운 사랑이 당신 곁에 머물게 될 것입니다.", 
            "en": "No need to rush. The right time for love will come naturally. Now is the time to love and care for yourself first. When your charm shines enough, the most beautiful love will stay by your side." 
        }
    },
    "adventure": {
        "icon": "explore",
        "heads": { 
            "ko": "축하합니다! 당신은 숨겨진 황금 보물 상자를 발견했습니다. 험난한 길 너머에는 상상을 초월하는 보상이 기다리고 있을 것입니다. 당신의 검과 용기를 단단히 챙기고, 미지의 세계를 향해 과감하게 전진하세요!", 
            "en": "Congratulations! You've discovered a hidden golden treasure chest. Beyond the rugged path, rewards beyond your imagination await. Pack your sword and courage tightly, and advance boldly into the unknown world!" 
        },
        "tails": { 
            "ko": "짙은 안개가 앞길을 가리고 있습니다. 무모하게 전진하는 것은 위험한 함정에 빠지는 지름길이 될 수 있습니다. 지금은 칼을 갈고 지도를 다시 점검하며 때를 기다려야 합니다. 인내심 또한 위대한 모험가가 갖춰야 할 최고의 기술입니다.", 
            "en": "A thick fog is blocking the path ahead. Advancing recklessly could be a shortcut to a dangerous trap. Now is the time to sharpen your sword, re-check the map, and wait for the right moment. Patience is also the best skill a great adventurer should have." 
        }
    },
    "food": {
        "icon": "restaurant",
        "heads": { 
            "ko": "오늘은 짜릿하고 강렬한 매운맛이 당신의 운명을 깨울 메뉴입니다! 입안 가득 퍼지는 강렬한 자극이 오늘 하루의 모든 스트레스를 시원하게 날려버릴 것입니다. 고민하지 말고 당신의 미각을 자극하는 화끈한 선택을 하세요.", 
            "en": "Today, a thrilling and intense spicy flavor is the menu that will wake up your destiny! The intense stimulation will refreshingly blow away all the stress of the day. Don't hesitate and make a bold choice that stimulates your taste buds." 
        },
        "tails": { 
            "ko": "부드럽고 담백한 한 끼 식사가 지친 당신의 영혼을 포근하게 감싸줄 것입니다. 자극적인 것보다는 속을 편안하게 해주고 마음을 안정시키는 메뉴를 선택해 보세요. 평온한 식사 시간이 당신의 하루를 치유해 줄 것입니다.", 
            "en": "A soft and warm meal will cozily wrap around your tired soul. Choose a menu that comforts your stomach and stabilizes your mind rather than something stimulating. A peaceful mealtime will heal your day." 
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let selectedPrediction = null;
let currentSkin = localStorage.getItem('coin_skin') || 'gold';
let currentScenario = 'daily';

// State
let totalFlips = parseInt(localStorage.getItem('coin_total')) || 0;
let headsCount = parseInt(localStorage.getItem('coin_heads')) || 0; 
let tailsCount = parseInt(localStorage.getItem('coin_tails')) || 0; 
let currentStreak = 0;

// DOM
const coin = document.getElementById('coin');
const coinContainer = document.getElementById('coin-container');
const flipButton = document.getElementById('flip-button');
const resultOverlay = document.getElementById('coin-result-overlay');
const resultText = document.getElementById('result-text');
const resultAdvice = document.getElementById('result-advice');
const winBadge = document.getElementById('win-badge');
const shareButtons = document.getElementById('share-buttons');
const streakCounter = document.getElementById('streak-counter');
const streakValue = document.getElementById('streak-value');

const destinySection = document.getElementById('destiny-section');
const storyDisplayText = document.getElementById('story-display-text');
const storyIcon = document.getElementById('story-icon');
const storyThemeName = document.getElementById('story-theme-name');

const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');

// 🎵 Sound Manager
const SoundManager = {
    ctx: null,
    muted: localStorage.getItem('zeze_muted') === 'true',
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    updateMuteUI() {
        const icon = document.getElementById('sound-icon');
        if (icon) {
            icon.textContent = this.muted ? 'volume_off' : 'volume_up';
            if (this.muted) icon.classList.add('text-red-500');
            else icon.classList.remove('text-red-500');
        }
    },
    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('zeze_muted', this.muted);
        this.updateMuteUI();
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
    },
    playLose() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.4);
    }
};

function init() {
    applyLanguage();
    updateDisplay();
    applySkin(currentSkin);
    setupEventListeners();
    SoundManager.updateMuteUI();
}

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;
    
    if (currentStreak > 0) {
        streakCounter.classList.remove('opacity-0');
        streakValue.textContent = currentStreak;
    } else {
        streakCounter.classList.add('opacity-0');
    }
}

function applySkin(skin) {
    currentSkin = skin;
    localStorage.setItem('coin_skin', skin);
    coin.className = `coin skin-${skin}`;
    const frontIcon = coin.querySelector('.front .coin-icon');
    const backIcon = coin.querySelector('.back .coin-icon');
    
    if (skin === 'gold') { frontIcon.textContent = 'face'; backIcon.textContent = 'toll'; }
    else if (skin === 'bitcoin') { frontIcon.textContent = 'currency_bitcoin'; backIcon.textContent = 'savings'; }
    else if (skin === 'heart') { frontIcon.textContent = 'favorite'; backIcon.textContent = 'favorite_border'; }
    else if (skin === 'cat') { frontIcon.textContent = 'pets'; backIcon.textContent = 'catching_pokemon'; }

    document.querySelectorAll('.skin-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.skin === skin));
}

function flipCoin() {
    if (flipButton.disabled) return;
    
    flipButton.disabled = true;
    resultOverlay.classList.remove('answer-visible');
    resultOverlay.classList.add('opacity-0', 'scale-50');
    shareButtons.classList.add('opacity-0');
    
    // Animate destiny section exit
    destinySection.classList.add('opacity-0', 'translate-y-4');
    
    const isHeads = Math.random() < 0.5;
    
    coinContainer.classList.remove('is-jumping');
    void coinContainer.offsetWidth;
    coinContainer.classList.add('is-jumping');

    const currentRotationY = getRotationY(coin);
    const extraSpins = (Math.floor(Math.random() * 5) + 5) * 360;
    const targetRotationY = isHeads ? 0 : 180;
    const finalRotationY = currentRotationY + extraSpins + (targetRotationY - (currentRotationY % 360));
    const finalRotationX = (Math.floor(Math.random() * 5) + 5) * 360;
    
    coin.style.transform = `rotateY(${finalRotationY}deg) rotateX(${finalRotationX}deg)`;
    SoundManager.playFlip();

    setTimeout(() => {
        const t = translations[currentLang];
        const scenarioData = storyData[currentScenario];
        const scenarioText = scenarioData[isHeads ? 'heads' : 'tails'][currentLang];
        
        resultText.textContent = isHeads ? t.heads_text : t.tails_text;
        resultAdvice.textContent = isHeads ? "Positive Sign" : "Wait a moment";
        
        // Update Bottom Story Card
        storyDisplayText.textContent = scenarioText;
        storyIcon.textContent = scenarioData.icon;
        storyThemeName.textContent = t[`sc_${currentScenario}`];
        destinySection.classList.remove('opacity-0', 'translate-y-4');
        
        totalFlips++;
        if (isHeads) headsCount++; else tailsCount++;
        
        if (selectedPrediction) {
            const isWin = selectedPrediction === (isHeads ? 'heads' : 'tails');
            if (isWin) {
                currentStreak++;
                winBadge.textContent = t.win_label;
                winBadge.className = "inline-block px-3 py-1 bg-yellow-500 text-[#050c1d] text-[10px] font-black rounded-full mb-3 uppercase tracking-tighter";
                winBadge.classList.remove('hidden');
                SoundManager.playWin();
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
            } else {
                currentStreak = 0;
                winBadge.textContent = t.lose_label;
                winBadge.className = "inline-block px-3 py-1 bg-gray-600 text-white text-[10px] font-black rounded-full mb-3 uppercase tracking-tighter opacity-70";
                winBadge.classList.remove('hidden');
                SoundManager.playLose();
            }
        } else { winBadge.classList.add('hidden'); }

        resultOverlay.classList.remove('opacity-0', 'scale-50');
        resultOverlay.classList.add('answer-visible');
        shareButtons.classList.remove('opacity-0');
        
        updateDisplay();
        saveState();
        flipButton.disabled = false;
    }, 1500);
}

function getRotationY(el) {
    const transformStr = el.style.transform;
    if (transformStr && transformStr.includes('rotateY')) {
        const match = transformStr.match(/rotateY\((.+?)deg\)/);
        if (match) return parseFloat(match[1]);
    }
    return 0;
}

function saveState() {
    localStorage.setItem('coin_total', totalFlips);
    localStorage.setItem('coin_heads', headsCount);
    localStorage.setItem('coin_tails', tailsCount);
}

function clearHistory() {
    if (confirm(currentLang === 'ko' ? "모든 기록을 초기화할까요?" : "Are you sure you want to clear all history?")) {
        totalFlips = 0;
        headsCount = 0;
        tailsCount = 0;
        currentStreak = 0;
        saveState();
        updateDisplay();
        
        // Hide destiny section
        destinySection.classList.add('opacity-0', 'translate-y-4');
        resultOverlay.classList.remove('answer-visible');
        resultOverlay.classList.add('opacity-0');
        shareButtons.classList.add('opacity-0');
        
        // Close Sidebar
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    }
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
}

async function saveImage() {
    const target = document.querySelector('#destiny-section > div');
    const canvas = await html2canvas(target, { 
        backgroundColor: '#0A192F', 
        scale: 2,
        useCORS: true,
        borderRadius: 24
    });
    const link = document.createElement('a');
    link.download = `Zeze_Destiny_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function setupEventListeners() {
    flipButton.addEventListener('click', flipCoin);
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => SoundManager.toggleMute());
    }
    document.getElementById('save-img-btn').addEventListener('click', saveImage);
    document.getElementById('share-link-btn').addEventListener('click', () => {
        const text = `🔮 Zeze Hub 3D Coin Flip Result!\n\nCheck your destiny too: ${window.location.href}`;
        navigator.clipboard.writeText(text).then(() => alert(currentLang === 'ko' ? "링크가 복사되었습니다!" : "Link copied to clipboard!"));
    });
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
    
    document.querySelectorAll('.predict-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.predict-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPrediction = btn.dataset.predict;
        });
    });

    document.querySelectorAll('.skin-btn').forEach(btn => {
        btn.addEventListener('click', () => applySkin(btn.dataset.skin));
    });

    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentScenario = btn.dataset.scenario;
        });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

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
