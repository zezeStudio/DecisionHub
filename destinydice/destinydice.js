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
        "footer_copyright": "© 2026 Zeze Studio Decision Hub.",
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
        "confirm_clear_log": "Clear all history log?",
        "error_empty_option": "Please fill in all options.",
        "error_duplicate_option": "Duplicate options are not allowed.",
        "mission_label": "Mission / Bet Content",
        "mission_placeholder": "e.g., Winner buys coffee! ☕️",
        "top_guide_notice": "💡 Try using the dice for numbers, Yes/No, or friend names! See the guide at the bottom for more ways to use it.",
        "win_suffix": " Selected",
        "info_title1": "Origins of Dice: From Ancient Times to Modern Day",
        "info_desc1": "Dice are ancient tools that predate recorded history. Early dice were carved from animal ankle bones (talus), widely used for divination and gaming in ancient Egyptian and Mesopotamian civilizations. For ancient Greeks, dice were seen not just as luck but as 'responses sent by the gods to humans.' Today, dice are central components of board games and mathematical symbols that played a crucial role in laying the foundations of probability theory and statistics.",
        "info_title2": "Psychology Behind Multiple Choices",
        "info_desc2": "We often suffer more when faced with two or more choices, a phenomenon known as the 'Paradox of Choice.' Dice serve as an immediate 'exit' that relieves the brain's cognitive load in complex multi-choice situations. Zeze Hub's Dice of Destiny is designed to allow users to custom-input up to 6 items, solving various concerns from lunch menus to daily to-do lists. Using a cryptographically secure random number generator ensures no bias towards any side, so you can trust your decisions to the roll.",
        "info_title3": "Various Ways to Use Custom Dice",
        "info_desc3": "<li><strong>Digital Dice Mode:</strong> Enter numbers 1 to 6 to use it as a 3D digital dice for board games.</li><li><strong>Yes or No:</strong> Stuck between two choices? Simply enter 'Yes' and 'No' for a quick answer.</li><li><strong>Penalty & Dutch Pay:</strong> Enter friends' names. The selected one can be the winner, the penalty taker, or the one to pay for everyone (Dok-bak)!</li><li><strong>Decision Support:</strong> Use it for anything from choosing a menu to picking the next task.</li><li><strong>Data Privacy:</strong> All input data is stored only in your current browser and never sent to any server.</li>"
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
        "footer_copyright": "© 2026 Zeze Studio Decision Hub.",
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
        "confirm_clear_log": "모든 결과 기록을 삭제할까요?",
        "error_empty_option": "모든 선택지를 입력해주세요.",
        "error_duplicate_option": "중복된 선택지가 있습니다.",
        "mission_label": "오늘의 미션 / 내기 내용",
        "mission_placeholder": "예) 걸린 사람이 커피 쏘기! ☕️",
        "top_guide_notice": "💡 주사위를 숫자, Yes/No, 친구 이름 등 다양한 방법으로 응용해 보세요! 자세한 설명은 페이지 하단 가이드를 참고하세요.",
        "win_suffix": " 당첨",
        "info_title1": "주사위의 기원: 인류 문명과 함께한 운명의 상징",
        "info_desc1": "주사위는 인류가 기록한 역사보다 더 오래된 유서 깊은 도구입니다. 초기 주사위는 동물의 발목뼈(복사뼈)를 깎아 만들었으며, 이는 고대 이집트와 메소포타미아 문명에서 점술과 놀이 용도로 널리 사용되었습니다. 고대 그리스인들에게 주사위는 단순한 운이 아니라 '신이 인간에게 보내는 응답'으로 여겨졌습니다. 로마 시대의 정치가 카이사르는 루비콘강을 건너며 \"주사위는 던져졌다\"는 유명한 말을 남기기도 했습니다. 오늘날 주사위는 보드게임의 핵심 부품일 뿐만 아니라, 확률론과 통계학의 기초를 닦는 데 결정적인 역할을 한 수학적 상징이기도 합니다.",
        "info_title2": "다양한 선택지 앞에서의 심리학: '선택의 역설'을 해결하라",
        "info_desc2": "우리는 때로 2가지 이상의 선택지 사이에서 더 큰 고통을 겪습니다. 심리학자 배리 슈워츠는 이를 '선택의 역설(Paradox of Choice)'이라고 불렀습니다. 선택지가 너무 많으면 뇌는 결정을 미루거나, 결정을 내린 후에도 다른 대안에 대한 미련 때문에 만족도가 떨어지게 됩니다. Zeze Hub의 운명의 주사위는 사용자가 직접 6개까지 커스텀 항목을 입력할 수 있게 설계되었습니다. 이는 복잡한 다중 선택 상황에서 당신의 뇌가 겪는 인지적 부하를 즉각적으로 덜어주는 '심리적 탈출구'가 됩니다. 정교한 알고리즘을 통해 어떤 면도 치우침 없이 나올 수 있도록 보장하므로, 복잡한 고민은 주사위에 맡기고 당신은 행동에 집중하세요.",
        "info_title3": "운명의 주사위 활용 가이드 (다양한 응용법)",
        "info_desc3": "<li><strong>일반 주사위 대용:</strong> 선택지에 숫자 1부터 6까지 입력하면 보드게임 등에서 실제 주사위 대신 사용할 수 있는 고품질 3D 주사위가 됩니다.</li><li><strong>Yes or No 결정:</strong> '한다', '안 한다' 또는 'Yes', 'No'를 입력해 보세요. 망설여지는 순간 주사위가 명쾌한 해답을 내려줍니다.</li><li><strong>친구들과 벌칙 & 내기:</strong> 각 면에 친구들의 이름을 입력하세요. 선택된 사람이 벌칙을 수행하거나, 저녁 쏘기, 더치페이 제외, 또는 오늘의 모든 비용을 지불하는 '독박' 당첨자가 될 수 있습니다!</li><li><strong>메뉴 및 활동 선택:</strong> '오늘 뭐 먹지?' 혹은 '지금 뭐부터 하지?' 고민될 때 후보들을 적고 운명에 맡겨보세요.</li><li><strong>개인정보 보호:</strong> 입력하신 모든 데이터는 서버에 저장되지 않으며, 오직 현재 기기에만 안전하게 저장됩니다.</li>"
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
let lastResultIndex = null;

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
const missionInput = document.getElementById('mission-input');

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

// 💾 Session State Persistence
function saveSessionState() {
    const session = {
        options,
        missionText: missionInput ? missionInput.value : "",
        lastResultIndex,
        isResultVisible: destinySection.classList.contains('result-visible')
    };
    localStorage.setItem('zeze_destinydice_session', JSON.stringify(session));
}

function loadSessionState() {
    const saved = localStorage.getItem('zeze_destinydice_session');
    if (!saved) return;

    const state = JSON.parse(saved);
    options = state.options;
    if (missionInput) missionInput.value = state.missionText || "";
    lastResultIndex = state.lastResultIndex;

    renderOptions();

    if (state.isResultVisible && lastResultIndex !== null) {
        const result = options[lastResultIndex];
        const missionText = state.missionText || "";
        const winSuffix = translations[currentLang].win_suffix;
        
        const finalResultDisplay = missionText ? `${result}${winSuffix}` : result;
        resultText.textContent = finalResultDisplay;

        if (missionText) {
            storyDisplayText.innerHTML = `<span class="text-secondary font-bold">Mission:</span> ${missionText}`;
        } else {
            const funStories = {
                "ko": ["주사위의 눈이 당신의 진심을 꿰뚫어 보았습니다. 이 선택이 당신을 빛나는 미래로 안내할 것입니다."],
                "en": ["The dice has seen through your heart. This choice will guide you to a shining future."]
            };
            storyDisplayText.textContent = funStories[currentLang][0];
        }

        const rotation = diceRotations[lastResultIndex];
        dice.style.transition = 'none';
        dice.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
        setTimeout(() => { dice.style.transition = ''; }, 50);

        destinySection.classList.add('result-visible');
        destinySection.style.opacity = '1';
        shareButtons.classList.remove('opacity-0');
    }
}

function clearSessionState() {
    localStorage.removeItem('zeze_destinydice_session');
}

function init() {
    applyLanguage();
    
    // Check if Reload
    const perfEntries = performance.getEntriesByType('navigation');
    const isReload = perfEntries.length > 0 && perfEntries[0].type === 'reload';
    
    if (isReload) {
        loadSessionState();
    } else {
        clearSessionState();
        renderOptions();
    }
    
    renderHistory();
    setupEventListeners();
    SoundManager.updateMuteUI();
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
    const diceFaces = document.querySelectorAll('.dice .face');
    diceFaces.forEach((face, i) => {
        const text = options[i] || (i + 1);
        face.textContent = text;
        face.style.opacity = options[i] ? '1' : '0.3';
        
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
            <span class="font-bold text-secondary flex-grow truncate mr-4">${item.result}</span>
            <span class="text-gray-500 flex-shrink-0">${item.time}</span>
        `;
        historyList.prepend(div);
    });
}

function rollDice() {
    if (rollButton.disabled) return;
    
    const inputs = document.querySelectorAll('.option-item input');
    const inputValues = Array.from(inputs).map(input => input.value.trim());

    if (inputValues.some(val => val === "")) {
        alert(translations[currentLang].error_empty_option);
        return;
    }

    const uniqueOptions = new Set(inputValues);
    if (uniqueOptions.size !== inputValues.length) {
        alert(translations[currentLang].error_duplicate_option);
        return;
    }

    options = inputValues;
    localStorage.setItem('dice_options', JSON.stringify(options));
    
    rollButton.disabled = true;
    destinySection.classList.remove('result-visible');
    destinySection.style.opacity = '0';
    shareButtons.classList.add('opacity-0');
    
    const resultIndex = Math.floor(Math.random() * options.length);
    lastResultIndex = resultIndex;
    const rotation = diceRotations[resultIndex];
    const extraX = (Math.floor(Math.random() * 5) + 5) * 360;
    const extraY = (Math.floor(Math.random() * 5) + 5) * 360;
    
    dice.style.transform = `rotateX(${rotation.x + extraX}deg) rotateY(${rotation.y + extraY}deg)`;
    SoundManager.playRoll();

    setTimeout(() => {
        const result = options[resultIndex];
        const mText = missionInput ? missionInput.value.trim() : "";
        const winSuffix = translations[currentLang].win_suffix;
        
        const finalResultDisplay = mText ? `${result}${winSuffix}` : result;
        resultText.textContent = finalResultDisplay;
        
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
        
        const historyDisplay = mText ? `${result}${winSuffix} : ${mText}` : result;
        historyLog.push({ time: timeStr, result: historyDisplay });
        
        if (historyLog.length > 10) historyLog.shift();
        localStorage.setItem('dice_history', JSON.stringify(historyLog));
        renderHistory();

        if (mText) {
            storyDisplayText.innerHTML = `<span class="text-secondary font-bold">Mission:</span> ${mText}`;
        } else {
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
        }
        
        destinySection.classList.add('result-visible');
        destinySection.style.opacity = '1';
        shareButtons.classList.remove('opacity-0');
        
        saveSessionState();
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

    if (missionInput && translations[currentLang].mission_placeholder) {
        missionInput.placeholder = translations[currentLang].mission_placeholder;
    }

    if (destinySection.classList.contains('result-visible') && lastResultIndex !== null) {
        const result = options[lastResultIndex];
        const mText = missionInput ? missionInput.value.trim() : "";
        const winSuffix = translations[currentLang].win_suffix;
        const finalResultDisplay = mText ? `${result}${winSuffix}` : result;
        resultText.textContent = finalResultDisplay;
        
        if (mText) {
            storyDisplayText.innerHTML = `<span class="text-secondary font-bold">Mission:</span> ${mText}`;
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-secondary', 'text-white', 'font-bold', 'bg-white/5', 'border', 'border-white/10', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('bg-secondary', 'text-white', 'font-bold');
        } else {
            btn.classList.add('bg-transparent', 'border-transparent');
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
            saveSessionState();
        }
    });

    optionsList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-btn')) {
            const index = parseInt(e.target.closest('.remove-btn').dataset.index);
            options.splice(index, 1);
            localStorage.setItem('dice_options', JSON.stringify(options));
            renderOptions();
            saveSessionState();
        }
    });

    optionsList.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') {
            const index = parseInt(e.target.dataset.index);
            options[index] = e.target.value;
            localStorage.setItem('dice_options', JSON.stringify(options));
            updateDiceFaces();
            saveSessionState();
        }
    });

    if (missionInput) {
        missionInput.addEventListener('input', () => {
            saveSessionState();
        });
    }

    document.getElementById('save-img-btn').addEventListener('click', saveImage);
    document.getElementById('share-link-btn').addEventListener('click', () => {
        const text = `🔮 Zeze Hub Dice of Destiny Result!\n\nCheck your destiny too: ${window.location.href}`;
        navigator.clipboard.writeText(text).then(() => alert(currentLang === 'ko' ? "링크가 복사되었습니다!" : "Link copied to clipboard!"));
    });
    
    document.getElementById('reset-options-btn').addEventListener('click', () => {
        if (confirm(translations[currentLang].confirm_clear)) {
            options = ["Yes", "No"];
            localStorage.setItem('dice_options', JSON.stringify(options));
            renderOptions();
            destinySection.classList.remove('result-visible');
            destinySection.style.opacity = '0';
            clearSessionState();
        }
    });

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

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.remove('translate-x-full');
        document.getElementById('sidebar-overlay').classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });

    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => SoundManager.toggleMute());
    }
}

document.addEventListener('DOMContentLoaded', init);
