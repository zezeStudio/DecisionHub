// Destiny Dice Logic

const translations = {
    "en": {
        "app_title": "Dice of Destiny - Zeze Hub",
        "app_name": "Destiny Dice",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Dice of Destiny",
        "main_description": "Enter your choices and roll the dice.",
        "options_label": "Dice Faces (Max 6)",
        "add_option": "Add Option",
        "roll_btn": "Roll Dice",
        "result_label": "Destiny Result",
        "result_title": "Dice's Choice",
        "save_img_btn": "Save Record",
        "copy_link_btn": "Copy",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "clear_history_btn": "Reset Options",
        "dice_result_prefix": "The dice has chosen: ",
        "option_placeholder": "Option ",
        "confirm_clear": "Reset all options to default?",
        "help_title": "How to Use",
        "help_desc1": "Dice of Destiny is a tool to help you decide.",
        "help_step1": "Enter <strong>2 to 6 options</strong> in the settings section (Max 20 chars each).",
        "help_step2": "The dice faces will update in real-time as you type.",
        "help_step3": "Press the roll button to <strong>randomly select</strong> one option!",
        "help_ok": "Got it!",
        "history_title": "Recent History",
        "clear_log": "Clear Log",
        "no_history": "No history yet.",
        "confirm_clear_log": "Clear all history log?"
    },
    "ko": {
        "app_title": "운명의 주사위 - Zeze Hub",
        "app_name": "Destiny Dice",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "운명의 주사위",
        "main_description": "선택지를 적고 주사위를 굴려보세요.",
        "options_label": "주사위 면 설정 (최대 6개)",
        "add_option": "선택지 추가",
        "roll_btn": "주사위 굴리기",
        "result_label": "운명의 결과",
        "result_title": "주사위의 선택",
        "save_img_btn": "기록 저장",
        "copy_link_btn": "복사",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "clear_history_btn": "옵션 초기화",
        "dice_result_prefix": "주사위가 선택한 운명: ",
        "option_placeholder": "선택지 ",
        "confirm_clear": "모든 선택지를 초기 상태로 되돌릴까요?",
        "help_title": "사용 방법",
        "help_desc1": "운명의 주사위는 결정을 돕는 도구입니다.",
        "help_step1": "설정 섹션에서 <strong>최소 2개~최대 6개</strong>의 선택지를 입력하세요. (최대 20자)",
        "help_step2": "입력한 내용은 실시간으로 주사위 면에 반영됩니다.",
        "help_step3": "굴리기 버튼을 누르면 하나가 <strong>랜덤으로 당첨</strong>됩니다!",
        "help_ok": "확인했습니다",
        "history_title": "최근 기록 (History)",
        "clear_log": "기록 비우기",
        "no_history": "아직 기록이 없습니다.",
        "confirm_clear_log": "모든 결과 기록을 삭제할까요?"
    }
};

const diceRotations = [
    { x: 0, y: 0 },      // 1 (Front)
    { x: 0, y: 180 },    // 2 (Back)
    { x: 0, y: -90 },    // 3 (Right)
    { x: 0, y: 90 },     // 4 (Left)
    { x: -90, y: 0 },    // 5 (Top)
    { x: 90, y: 0 }      // 6 (Bottom)
];

let currentLang = localStorage.getItem('lang') || 'ko';
let options = JSON.parse(localStorage.getItem('dice_options')) || ["Yes", "No"];
let historyLog = JSON.parse(localStorage.getItem('dice_history')) || [];

// DOM Elements
const dice = document.getElementById('dice');
const rollButton = document.getElementById('roll-button');
const optionsList = document.getElementById('options-list');
const addOptionBtn = document.getElementById('add-option-btn');
const optionsCount = document.getElementById('options-count');
const destinySection = document.getElementById('destiny-section');
const resultText = document.getElementById('result-text');
const storyDisplayText = document.getElementById('story-display-text');
const shareButtons = document.getElementById('share-buttons');
const historyList = document.getElementById('history-list');

// Help Modal Elements
const helpModal = document.getElementById('help-modal');
const helpContent = document.getElementById('help-content');
const helpToggle = document.getElementById('help-toggle');
const closeHelp = document.getElementById('close-help');
const helpOverlay = document.getElementById('help-overlay');
const helpOkBtn = document.getElementById('help-ok-btn');

// 🎵 Sound Manager
const SoundManager = {
    ctx: null,
    muted: false,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    },
    playRoll() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 1.5);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.5);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 1.5);
    }
};

function init() {
    applyLanguage();
    renderOptions();
    renderHistory();
    setupEventListeners();
}

function renderOptions() {
    optionsList.innerHTML = '';
    options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option-item flex gap-2';
        div.innerHTML = `
            <div class="w-8 h-10 flex items-center justify-center font-black text-gray-500">${index + 1}</div>
            <input type="text" class="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:border-secondary outline-none transition-all" 
                placeholder="${translations[currentLang].option_placeholder} ${index + 1}" value="${opt}" data-index="${index}" maxlength="20">
            ${options.length > 2 ? `<button class="remove-btn p-2 text-gray-600 hover:text-red-400 transition-colors" data-index="${index}"><span class="material-icons text-sm">remove_circle</span></button>` : ''}
        `;
        optionsList.appendChild(div);
    });
    optionsCount.textContent = `${options.length}/6`;
    addOptionBtn.style.display = options.length < 6 ? 'flex' : 'none';
    updateDiceFaces();
}

function updateDiceFaces() {
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    const diceFaces = document.querySelectorAll('.dice .face');
    diceFaces.forEach((face, i) => {
        const text = options[i] || (i + 1);
        face.textContent = text;
        face.style.opacity = options[i] ? '1' : '0.3';
        
        // Dynamic Font Sizing to prevent UI breakage
        if (text.toString().length > 12) face.style.fontSize = '12px';
        else if (text.toString().length > 8) face.style.fontSize = '16px';
        else face.style.fontSize = '24px';
    });
}

function renderHistory() {
    if (historyLog.length === 0) {
        historyList.innerHTML = `<p class="text-xs text-gray-600 italic text-center py-4" data-key="no_history">${translations[currentLang].no_history}</p>`;
        return;
    }
    historyList.innerHTML = '';
    historyLog.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 text-xs';
        div.innerHTML = `
            <span class="text-gray-400">${item.time}</span>
            <span class="font-bold text-secondary">${item.result}</span>
        `;
        historyList.prepend(div); // Newest on top
    });
}

function rollDice() {
    if (rollButton.disabled) return;
    
    // Final sync of options before rolling
    const inputs = document.querySelectorAll('.option-item input');
    options = Array.from(inputs).map(input => input.value.trim() || `${translations[currentLang].option_placeholder} ${parseInt(input.dataset.index) + 1}`);
    localStorage.setItem('dice_options', JSON.stringify(options));
    
    rollButton.disabled = true;
    destinySection.classList.remove('result-visible');
    destinySection.style.opacity = '0';
    shareButtons.classList.add('opacity-0');
    
    const resultIndex = Math.floor(Math.random() * options.length);
    const rotation = diceRotations[resultIndex];
    const extraX = (Math.floor(Math.random() * 5) + 5) * 360;
    const extraY = (Math.floor(Math.random() * 5) + 5) * 360;
    
    dice.style.transform = `rotateX(${rotation.x + extraX}deg) rotateY(${rotation.y + extraY}deg)`;
    SoundManager.playRoll();

    setTimeout(() => {
        const result = options[resultIndex];
        resultText.textContent = result;
        
        // Save to History
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
        historyLog.push({ time: timeStr, result: result });
        if (historyLog.length > 5) historyLog.shift();
        localStorage.setItem('dice_history', JSON.stringify(historyLog));
        renderHistory();

        const funStories = {
            "ko": [
                "주사위의 눈이 당신의 진심을 꿰뚫어 보았습니다. 이 선택이 당신을 빛나는 미래로 안내할 것입니다.",
                "망설임은 끝났습니다. 우주가 점지해준 이 길이 당신에게 가장 완벽한 해답입니다.",
                "운명의 수레바퀴가 멈춰 선 곳은 바로 여기입니다. 당신의 선택을 믿고 나아가세요.",
                "놀라운 우연이 겹쳐 만들어진 결과입니다. 오늘 이 선택은 당신에게 행운을 가져다줄 거예요."
            ],
            "en": [
                "The dice has seen through your heart. This choice will guide you to a shining future.",
                "The hesitation is over. This path chosen by the universe is the perfect answer for you.",
                "The wheel of destiny has stopped right here. Trust your choice and move forward.",
                "A result made of amazing coincidences. This choice will bring you great luck today."
            ]
        };
        const randomStory = funStories[currentLang][Math.floor(Math.random() * funStories[currentLang].length)];
        storyDisplayText.textContent = randomStory;
        
        destinySection.classList.add('result-visible');
        shareButtons.classList.remove('opacity-0');
        
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#FF0266', '#BB86FC', '#FFFFFF'] });
        rollButton.disabled = false;
    }, 1500);
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
    renderOptions();
    renderHistory();
}

async function saveImage() {
    const target = document.querySelector('#destiny-section > div');
    const resultEl = document.getElementById('result-text');
    const originalClasses = resultEl.className;
    resultEl.classList.remove('text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-white', 'to-gray-400');
    resultEl.classList.add('text-white');
    
    try {
        const canvas = await html2canvas(target, { backgroundColor: '#121212', scale: 3, borderRadius: 24, useCORS: true, logging: false });
        const link = document.createElement('a');
        link.download = `Zeze_Dice_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) {
        console.error("Capture failed:", err);
    } finally {
        resultEl.className = originalClasses;
    }
}

function toggleHelp(show) {
    if (show) {
        helpModal.classList.remove('hidden');
        setTimeout(() => {
            helpContent.classList.remove('scale-90', 'opacity-0');
            helpContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    } else {
        helpContent.classList.remove('scale-100', 'opacity-100');
        helpContent.classList.add('scale-90', 'opacity-0');
        setTimeout(() => helpModal.classList.add('hidden'), 300);
    }
}

function setupEventListeners() {
    rollButton.addEventListener('click', rollDice);
    addOptionBtn.addEventListener('click', () => {
        if (options.length < 6) {
            options.push("");
            renderOptions();
        }
    });

    optionsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-btn')) {
            const index = parseInt(e.target.closest('.remove-btn').dataset.index);
            options.splice(index, 1);
            localStorage.setItem('dice_options', JSON.stringify(options));
            renderOptions();
        }
    });

    optionsList.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') {
            const index = parseInt(e.target.dataset.index);
            options[index] = e.target.value;
            localStorage.setItem('dice_options', JSON.stringify(options));
            updateDiceFaces();
        }
    });

    document.getElementById('save-img-btn').addEventListener('click', saveImage);
    
    // Clear Options
    document.getElementById('clear-history-btn').addEventListener('click', () => {
        if (confirm(translations[currentLang].confirm_clear)) {
            options = ["Yes", "No"];
            localStorage.setItem('dice_options', JSON.stringify(options));
            renderOptions();
            destinySection.classList.remove('result-visible');
            destinySection.style.opacity = '0';
        }
    });

    // Clear History Log
    document.getElementById('clear-history-log-btn').addEventListener('click', () => {
        if (confirm(translations[currentLang].confirm_clear_log)) {
            historyLog = [];
            localStorage.setItem('dice_history', JSON.stringify(historyLog));
            renderHistory();
        }
    });

    helpToggle.addEventListener('click', () => toggleHelp(true));
    closeHelp.addEventListener('click', () => toggleHelp(false));
    helpOverlay.addEventListener('click', () => toggleHelp(false));
    helpOkBtn.addEventListener('click', () => toggleHelp(false));

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