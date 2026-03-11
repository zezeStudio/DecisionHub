// Drawing Lots Logic

const translations = {
    "en": {
        "app_title": "Drawing Lots - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Exciting Drawing Lots",
        "main_description": "Find the hidden lucky slips.",
        "setup_title": "Participant Count",
        "winner_count_label": "Number of Winners",
        "start_btn": "Shuffle Slips",
        "reset_btn": "Reset",
        "reveal_btn": "Show Results",
        "turn_text": "It's <b>{name}</b>'s turn! Pick a slip.",
        "all_picked_text": "All slips picked! Check the results.",
        "winner_reveal_msg": "🎉 Winners: <b>{names}</b>",
        "result_summary_title": "Full Results Summary",
        "winner_text": "WINNER!",
        "fail_text": "FAIL",
        "player_placeholder": "Ex) Player",
        "mission_label": "Mission / Bet / Selection Content",
        "mission_placeholder": "e.g., What is the penalty? ☕️",
        "top_guide_notice": "💡 Use drawing lots for penalty selection, drawing, or bets! See the guide at the bottom for more ways to use it.",
        "error_empty_name": "Please enter all participant names.",
        "error_duplicate_name": "Participant names cannot be duplicated.",
        "error_already_picked": "This slip has already been picked!",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "info_title1": "History of Drawing Lots: Mankind's Most Equal Decision",
        "info_desc1": "Drawing lots is a decision-making method used for ages, documented even in the Bible and ancient texts. In ancient Athens, public officials were often chosen by lot rather than election—a highly democratic device intended to give every citizen an equal chance and prevent the monopoly of power. Today, it remains a loved as the most intuitive, fair, and dispute-free tool for making decisions.",
        "info_title2": "Order and Probability: Is it better to go first?",
        "info_desc2": "People often wonder, 'Is it better to draw first or last?' Mathematically, drawing lots yields identical winning probabilities regardless of the order. For example, if there is 1 winner among 10 slips, the first person's chance is 1/10. The second person's chance is the probability of the first person losing (9/10) multiplied by the second person winning from the remaining slips (1/9), which equals 1/10. Zeze Hub implements this mathematical fairness with cryptographic randomness for truly equal luck.",
        "info_title3": "Drawing Lots Usage Guide (Various Applications)",
        "info_desc3": "<li><strong>Penalty Selection:</strong> Enter friends' names and set the 'Number of Selection' to 1. The selected person performs the penalty!</li><li><strong>Giveaway Drawing:</strong> Use it for fair drawings in events. Set the selection count to the number of prizes available.</li><li><strong>Bets & Dutch Pay:</strong> Enter names and a mission like 'Winner pays for coffee'. It's the most transparent way to settle who pays.</li><li><strong>Decision Support:</strong> Can't choose a lunch menu? Enter menu options as 'Participant Names' and see which one gets selected!</li><li><strong>Data Privacy:</strong> All data is stored only in your browser and never sent to any server.</li>"
    },
    "ko": {
        "app_title": "제비뽑기 - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "두근두근 제비뽑기",
        "main_description": "숨겨진 행운의 제비를 찾아보세요.",
        "setup_title": "참가자 인원",
        "winner_count_label": "당첨 인원",
        "start_btn": "제비 섞기",
        "reset_btn": "다시 설정",
        "reveal_btn": "결과 확인",
        "turn_text": "<b>{name}</b> 님 차례입니다! 제비를 골라주세요.",
        "all_picked_text": "제비를 모두 골랐습니다! 결과를 확인하세요.",
        "winner_reveal_msg": "🎉 당첨된 분: <b>{names}</b>",
        "result_summary_title": "전체 결과 요약",
        "winner_text": "당첨!",
        "fail_text": "꽝",
        "player_placeholder": "예) 참가자",
        "mission_label": "오늘의 미션 / 내기 내용 / 추첨 내용",
        "mission_placeholder": "예) 이번 내기 벌칙은? ☕️",
        "top_guide_notice": "💡 제비뽑기를 벌칙자 선정, 추첨, 내기 등 다양한 방법으로 응용해 보세요! 자세한 설명은 페이지 하단 가이드를 참고하세요.",
        "error_empty_name": "모든 참가자의 이름을 입력해주세요.",
        "error_duplicate_name": "중복된 참가자 이름이 있습니다.",
        "error_already_picked": "이미 선택된 제비입니다!",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "info_title1": "제비뽑기의 역사: 인류의 가장 평등한 결정과 민주주의",
        "info_desc1": "제비뽑기는 성경이나 고대 문헌에서도 찾아볼 수 있을 만큼 인류가 오랫동안 사용해온 결정 방식입니다. 고대 그리스의 아테네에서는 공직자를 선출할 때 투표가 아닌 제비뽑기를 사용했는데, 이는 모든 시민에게 평등한 기회를 제공하고 특정 권력의 독점을 막기 위한 고도의 민주적 장치였습니다. 당시 사람들은 인간의 의지가 아닌 '하늘의 뜻'에 결정을 맡기는 것이 가장 순수하고 정의롭다고 믿었습니다. 오늘날에도 제비뽑기는 가장 직관적이고 다툼 없는 공정한 결정 도구로 전 세계 어디에서나 사랑받고 있습니다.",
        "info_title2": "순서와 확률의 오해: 먼저 뽑는 것이 정말 유리할까?",
        "info_desc2": "제비뽑기를 할 때 흔히 \"먼저 뽑는 것이 유리할까, 나중에 뽑는 것이 유리할까?\"를 고민하곤 합니다. 하지만 수학적으로 제비뽑기는 뽑는 순서와 상관없이 당첨 확률이 완벽하게 동일합니다. 예를 들어 10개의 제비 중 1개가 당첨일 때, 첫 번째 사람이 뽑을 확률은 1/10입니다. 두 번째 사람이 당첨될 확률은 첫 번째 사람이 꽝을 뽑고(9/10) 두 번째 사람이 당첨될 확률(1/9)을 곱한 것으로, 결국 똑같은 1/10이 됩니다. Zeze Hub의 제비뽑기는 이 수학적 공정성을 암호학적 무작위성으로 구현하여 누구에게나 평등한 행운을 제공합니다.",
        "info_title3": "제비뽑기 활용 가이드 (다양한 응용법)",
        "info_desc3": "<li><strong>벌칙자 선정:</strong> 참가자 이름에 친구들의 이름을 넣고, '추첨 인원'을 1명으로 설정하세요. '선정!' 문구가 뜬 사람이 벌칙 당첨자입니다!</li><li><strong>공정한 경품 추첨:</strong> 각종 이벤트나 모임에서 경품 당첨자를 뽑을 때 사용하세요. 추첨 인원을 경품 개수만큼 설정하면 한 번에 여러 명을 선정할 수 있습니다.</li><li><strong>내기 및 독박 정하기:</strong> '미션/내기 내용'에 '커피 쏘기' 등을 적고 친구들과 제비를 골라보세요. 가장 깔끔하고 뒷말 없는 내기가 가능합니다.</li><li><strong>결정 장애 해결:</strong> 점심 메뉴나 할 일 순서를 정하기 힘들 때, 선택지들을 참가자 이름란에 입력해 보세요. 운명이 정해주는 선택을 따르는 것도 좋은 방법입니다.</li><li><strong>개인정보 보호:</strong> 입력하신 모든 데이터는 서버에 저장되지 않으며, 오직 현재 기기에만 안전하게 유지됩니다.</li>"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let playerCount = 4;
let winnerCount = 1;
let players = [];
let lots = []; // {isWinner: boolean, playerIndex: number | null, isRevealed: boolean}
let currentTurnIndex = 0;
let isAnimating = false;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const missionSection = document.querySelector('.mission-label-section') || document.getElementById('mission-input').parentElement;
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const winnerCountDisplay = document.getElementById('winner-count');
const lotsContainer = document.getElementById('lots-container');
const turnIndicatorContainer = document.getElementById('turn-indicator');
const turnIndicator = document.getElementById('current-turn-text');
const revealBtn = document.getElementById('reveal-btn');
const finalResultSection = document.getElementById('final-result-section');
const resultList = document.getElementById('result-list');
const missionInput = document.getElementById('mission-input');

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
    playPick() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.1);
    },
    playReveal() {
        if (this.muted) return;
        this.init();
        [261.63, 329.63, 392.00].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (i * 0.1));
            gain.gain.setValueAtTime(0.1, this.ctx.currentTime + (i * 0.1));
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + (i * 0.1));
            osc.stop(this.ctx.currentTime + 0.6);
        });
    }
};

// 💾 Session State Persistence
function saveSessionState() {
    const session = {
        playerCount,
        winnerCount,
        players,
        lots,
        currentTurnIndex,
        missionText: missionInput.value,
        setupVisible: !setupSection.classList.contains('hidden'),
        isFinalResultVisible: !finalResultSection.classList.contains('hidden')
    };
    localStorage.setItem('zeze_drawinglots_session', JSON.stringify(session));
}

function loadSessionState() {
    const saved = localStorage.getItem('zeze_drawinglots_session');
    if (!saved) return;

    const state = JSON.parse(saved);
    playerCount = state.playerCount;
    winnerCount = state.winnerCount;
    players = state.players;
    lots = state.lots;
    currentTurnIndex = state.currentTurnIndex;
    missionInput.value = state.missionText || "";

    renderInputs(); // 텍스트 필드 값들 복구

    if (!state.setupVisible) {
        setupSection.classList.add('hidden');
        missionSection.classList.add('hidden');
        gameStage.classList.remove('hidden');
        
        // Mission Display
        let missionDisplay = document.getElementById('game-mission-display');
        if (!missionDisplay) {
            missionDisplay = document.createElement('div');
            missionDisplay.id = 'game-mission-display';
            missionDisplay.className = 'w-full mb-4 bg-white p-4 rounded-2xl border border-primary/20 text-center shadow-sm';
            gameStage.prepend(missionDisplay);
        }
        if (state.missionText) {
            missionDisplay.innerHTML = `<span class="text-[10px] text-primary font-black uppercase tracking-widest block mb-1">Current Mission</span><span class="text-lg font-bold text-gray-800">${state.missionText}</span>`;
            missionDisplay.classList.remove('hidden');
        } else {
            missionDisplay.classList.add('hidden');
        }

        renderLots();
        updateTurnIndicator();

        if (currentTurnIndex >= playerCount) {
            revealBtn.classList.remove('hidden');
            turnIndicatorContainer.classList.remove('animate-pulse');
        }

        if (state.isFinalResultVisible) {
            revealAll(true); // true means no extra confetti/sound if already done
        }
    }
}

function clearSessionState() {
    localStorage.removeItem('zeze_drawinglots_session');
}

function init() {
    applyTranslations();
    
    // Check if Reload
    const perfEntries = performance.getEntriesByType('navigation');
    const isReload = perfEntries.length > 0 && perfEntries[0].type === 'reload';
    
    if (isReload) {
        loadSessionState();
    } else {
        clearSessionState();
        renderInputs();
    }
    
    setupEventListeners();
    SoundManager.updateMuteUI();
}

function renderInputs() {
    const inputs = document.querySelectorAll('.player-name-input');
    const currentValues = Array.from(inputs).map(i => i.value);
    
    playerInputsContainer.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'player-input-group flex items-center gap-2 animate-fadeIn';
        div.innerHTML = `
            <span class="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">${i + 1}</span>
            <input type="text" class="player-name-input flex-1 p-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all text-sm" 
                placeholder="${translations[currentLang].player_placeholder} ${i + 1}" value="${players[i] || currentValues[i] || ''}">
        `;
        playerInputsContainer.appendChild(div);
    }
    playerCountDisplay.textContent = playerCount;
    winnerCountDisplay.textContent = winnerCount;
}

function shuffleLots() {
    lots = [];
    for (let i = 0; i < playerCount; i++) {
        lots.push({
            isWinner: i < winnerCount,
            playerIndex: null,
            isRevealed: false
        });
    }
    for (let i = lots.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lots[i], lots[j]] = [lots[j], lots[i]];
    }
}

function startGame() {
    const inputs = document.querySelectorAll('.player-name-input');
    players = Array.from(inputs).map(input => input.value.trim());
    
    if (players.some(p => p === "")) {
        alert(translations[currentLang].error_empty_name);
        return;
    }
    
    if (new Set(players).size !== players.length) {
        alert(translations[currentLang].error_duplicate_name);
        return;
    }
    
    shuffleLots();
    currentTurnIndex = 0;
    isAnimating = false;
    
    const missionText = missionInput.value.trim();

    missionSection.classList.add('hidden');
    
    let missionDisplay = document.getElementById('game-mission-display');
    if (!missionDisplay) {
        missionDisplay = document.createElement('div');
        missionDisplay.id = 'game-mission-display';
        missionDisplay.className = 'w-full mb-4 bg-white p-4 rounded-2xl border border-primary/20 text-center shadow-sm';
        gameStage.prepend(missionDisplay);
    }
    
    if (missionText) {
        missionDisplay.innerHTML = `<span class="text-[10px] text-primary font-black uppercase tracking-widest block mb-1">Current Mission</span><span class="text-lg font-bold text-gray-800">${missionText}</span>`;
        missionDisplay.classList.remove('hidden');
    } else {
        missionDisplay.classList.add('hidden');
    }

    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    finalResultSection.classList.add('hidden');
    revealBtn.classList.add('hidden');
    
    renderLots();
    updateTurnIndicator();
    saveSessionState();
}

function renderLots() {
    lotsContainer.innerHTML = '';
    const gridCols = playerCount > 12 ? 'grid-cols-4' : 'grid-cols-3';
    lotsContainer.className = `grid ${gridCols} gap-3 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100 min-h-[300px]`;

    lots.forEach((lot, index) => {
        const div = document.createElement('div');
        div.className = 'lot-slip bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-primary/5 hover:border-primary transition-all active:scale-95 shadow-sm relative overflow-hidden h-24';
        
        if (lot.playerIndex !== null) {
            div.classList.add('picked', 'bg-primary/5', 'border-primary');
            div.innerHTML = `
                <span class="material-icons slip-icon text-primary text-3xl">person</span>
                <span class="absolute bottom-2 left-0 right-0 text-[10px] font-bold text-primary truncate px-2 text-center bg-white/80 py-0.5">${players[lot.playerIndex]}</span>
            `;
        } else {
            div.innerHTML = `<span class="material-icons text-gray-300 text-3xl slip-icon">help_outline</span>`;
        }
        
        div.addEventListener('click', () => handleLotClick(index, div));
        lotsContainer.appendChild(div);
    });
}

function handleLotClick(index, element) {
    if (isAnimating) return;
    if (lots[index].playerIndex !== null) {
        alert(translations[currentLang].error_already_picked);
        return;
    }
    if (currentTurnIndex >= playerCount) return;
    
    isAnimating = true;
    lots[index].playerIndex = currentTurnIndex;
    SoundManager.playPick();
    
    element.classList.add('picked', 'bg-primary/5', 'border-primary');
    const icon = element.querySelector('.slip-icon');
    icon.textContent = 'person';
    icon.classList.remove('text-gray-300');
    icon.classList.add('text-primary');
    
    const nameLabel = document.createElement('span');
    nameLabel.className = 'absolute bottom-2 left-0 right-0 text-[10px] font-bold text-primary truncate px-2 text-center bg-white/80 py-0.5';
    nameLabel.textContent = players[currentTurnIndex];
    element.appendChild(nameLabel);
    
    currentTurnIndex++;
    
    if (currentTurnIndex < playerCount) {
        setTimeout(() => {
            updateTurnIndicator();
            isAnimating = false;
            saveSessionState();
        }, 300);
    } else {
        setTimeout(() => {
            turnIndicator.innerHTML = translations[currentLang].all_picked_text;
            turnIndicatorContainer.classList.remove('animate-pulse');
            revealBtn.classList.remove('hidden');
            isAnimating = false;
            saveSessionState();
        }, 300);
    }
}

function updateTurnIndicator() {
    if (currentTurnIndex < playerCount) {
        turnIndicator.innerHTML = translations[currentLang].turn_text.replace('{name}', players[currentTurnIndex]);
    } else {
        turnIndicator.innerHTML = translations[currentLang].all_picked_text;
    }
}

function revealAll(noAnim = false) {
    revealBtn.classList.add('hidden');
    finalResultSection.classList.remove('hidden');
    if (!noAnim) SoundManager.playReveal();
    
    const slips = document.querySelectorAll('.lot-slip');
    
    lots.forEach((lot, index) => {
        const slip = slips[index];
        if (!slip) return;
        const icon = slip.querySelector('.slip-icon');
        
        if (lot.isWinner) {
            slip.classList.add('bg-secondary/10', 'border-secondary');
            slip.classList.remove('bg-primary/5', 'border-primary');
            if (icon) {
                icon.textContent = 'stars';
                icon.classList.add('text-secondary');
                icon.classList.remove('text-primary');
            }
            const label = slip.querySelector('span:not(.slip-icon)');
            if (label) {
                label.classList.add('text-secondary');
                label.classList.remove('text-primary');
            }
        } else {
            slip.classList.add('opacity-50');
            if (icon) {
                icon.textContent = 'close';
                icon.classList.add('text-gray-400');
                icon.classList.remove('text-primary');
            }
        }
    });
    
    if (!noAnim) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6200EE', '#FF9800', '#BB86FC']
        });
    }
    
    renderResultList();
    saveSessionState();
}

function renderResultList() {
    resultList.innerHTML = '';
    const mText = missionInput.value.trim();
    
    if (mText) {
        const missionHeader = document.createElement('div');
        missionHeader.className = 'bg-primary/5 p-4 rounded-2xl border border-primary/10 mb-4 text-center';
        missionHeader.innerHTML = `<span class="text-[10px] text-primary font-black uppercase tracking-widest block mb-1">Mission</span><span class="text-gray-800 font-bold">${mText}</span>`;
        resultList.appendChild(missionHeader);
    }

    const sortedLots = [...lots].sort((a, b) => a.playerIndex - b.playerIndex);
    
    sortedLots.forEach(lot => {
        if (lot.playerIndex === null) return;
        const div = document.createElement('div');
        div.className = `flex justify-between items-center p-4 rounded-2xl border ${lot.isWinner ? 'bg-secondary/5 border-secondary/20' : 'bg-gray-50 border-gray-100'}`;
        
        const winSuffix = lot.isWinner ? ` ${translations[currentLang].winner_text}` : "";
        
        div.innerHTML = `
            <span class="font-bold text-sm ${lot.isWinner ? 'text-secondary' : 'text-gray-600'}">${players[lot.playerIndex]}${winSuffix}</span>
            <span class="text-xs font-black uppercase tracking-tighter ${lot.isWinner ? 'text-secondary' : 'text-gray-400'}">
                ${lot.isWinner ? translations[currentLang].winner_text : translations[currentLang].fail_text}
            </span>
        `;
        resultList.appendChild(div);
    });
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });

    if (missionInput && translations[currentLang].mission_placeholder) {
        missionInput.placeholder = translations[currentLang].mission_placeholder;
    }

    if (!gameStage.classList.contains('hidden')) {
        updateTurnIndicator();
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-gray-50', 'border', 'border-gray-200', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('bg-primary', 'text-white', 'font-bold');
        } else {
            btn.classList.add('bg-transparent', 'border-transparent');
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
    renderInputs();
}

function setupEventListeners() {
    document.getElementById('player-plus').addEventListener('click', () => {
        if (playerCount < 20) {
            playerCount++;
            renderInputs();
            saveSessionState();
        }
    });
    
    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) {
            playerCount--;
            if (winnerCount >= playerCount) winnerCount = playerCount - 1;
            renderInputs();
            saveSessionState();
        }
    });
    
    document.getElementById('winner-plus').addEventListener('click', () => {
        if (winnerCount < playerCount - 1) {
            winnerCount++;
            winnerCountDisplay.textContent = winnerCount;
            saveSessionState();
        }
    });
    
    document.getElementById('winner-minus').addEventListener('click', () => {
        if (winnerCount > 1) {
            winnerCount--;
            winnerCountDisplay.textContent = winnerCount;
            saveSessionState();
        }
    });

    document.getElementById('start-btn').addEventListener('click', startGame);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        clearSessionState();
        setupSection.classList.remove('hidden');
        gameStage.classList.add('hidden');
        finalResultSection.classList.add('hidden');
        missionSection.classList.remove('hidden');
        const missionDisplay = document.getElementById('game-mission-display');
        if (missionDisplay) missionDisplay.classList.add('hidden');
        players = [];
        renderInputs();
    });
    
    revealBtn.addEventListener('click', () => revealAll());

    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => SoundManager.toggleMute());
    }

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
    sidebarOverlay.addEventListener('click', () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', init);
