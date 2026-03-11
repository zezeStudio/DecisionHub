// Card Flip Logic

const translations = {
    "en": {
        "app_title": "Card Flip - Zeze Hub",
        "app_name": "Card Flip",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "main_title": "Lucky Card Flip",
        "main_description": "Pick a card and reveal your fate.",
        "setup_title": "Settings",
        "mode_number": "Sequence (Num)",
        "mode_custom": "Custom Text",
        "mode_icon": "Icon Fortune",
        "mode_advice": "Advice",
        "mode_desc_number": "Decide the order of turns. Participants pick cards to reserve their slots.",
        "mode_desc_custom": "Enter your own penalties or rewards! Cards will reveal your fate after everyone picks.",
        "mode_desc_icon": "Check your luck for today with symbolic icons. Trust your intuition and pick one.",
        "mode_desc_advice": "Need a sign or mental remedy? Choose this mode for a special message for your heart.",
        "player_label": "Participant List",
        "player_placeholder": "Ex) Alex, Jordan, Taylor, Riley",
        "custom_label": "Enter Card Contents",
        "label_card_count": "Number of Cards",
        "start_btn": "Shuffle Cards",
        "reset_btn": "Reset",
        "reveal_all_btn": "Reveal Results",
        "game_instruction": "<b>{name}</b>'s turn! Pick a card.",
        "game_instruction_single": "Pick only 1 card to reveal your fate!",
        "all_picked_text": "Everyone picked! Click 'Reveal Results'.",
        "all_picked_single_text": "Card revealed!",
        "result_summary_title": "Final Results Summary",
        "error_empty_player": "Please enter all participant names.",
        "error_empty_custom": "Please fill in all card contents.",
        "error_count_shortage": "Number of cards must be equal to or greater than the number of participants.",
        "error_already_picked": "This card is already taken!",
        "instruction_limit_1": "You can only pick 1 card in this mode.",
        "top_guide_notice": "💡 Use cards for sequence, custom bets, or fortune telling! See the guide at the bottom for more ways to use it.",
        "footer_copyright": "© 2024 Zeze Decision Hub."
    },
    "ko": {
        "app_title": "카드 뒤집기 - Zeze Hub",
        "app_name": "Card Flip",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "main_title": "행운의 카드 뒤집기",
        "main_description": "숨겨진 카드를 선택하고 결과를 확인하세요.",
        "setup_title": "설정",
        "mode_number": "순서 (숫자)",
        "mode_custom": "직접 입력",
        "mode_icon": "아이콘 점괘",
        "mode_advice": "심리/조언",
        "mode_desc_number": "발표나 게임 순서를 정하세요. 참가자들이 카드를 하나씩 찜한 뒤 마지막에 공개합니다.",
        "mode_desc_custom": "벌칙이나 상품을 직접 입력해보세요! 여행 선물 추첨이나 집들이 게임에 활용하기 좋습니다.",
        "mode_desc_icon": "오늘의 운세를 상징적인 아이콘으로 확인하세요. 직감을 믿고 한 장만 골라보세요.",
        "mode_desc_advice": "마음의 위로가 필요하거나 결정을 위한 신호가 필요할 때 사용하세요. 특별한 메시지를 전합니다.",
        "player_label": "참가자 명단",
        "player_placeholder": "예) 참가자",
        "custom_label": "카드 내용 입력",
        "label_card_count": "카드 개수",
        "start_btn": "카드 셔플하기",
        "reset_btn": "초기화",
        "reveal_all_btn": "결과 공개",
        "game_instruction": "<b>{name}</b> 님 차례입니다! 카드를 골라주세요.",
        "game_instruction_single": "단 한 장의 카드를 선택하여 결과를 확인하세요!",
        "all_picked_text": "모두 선택했습니다! '결과 공개'를 눌러주세요.",
        "all_picked_single_text": "카드를 확인했습니다!",
        "result_summary_title": "최종 결과 요약",
        "error_empty_player": "모든 참가자의 이름을 입력해주세요.",
        "error_empty_custom": "모든 카드 내용을 입력해주세요.",
        "error_count_shortage": "카드(상품) 개수는 참가자 인원수보다 같거나 많아야 합니다.",
        "error_already_picked": "이미 다른 사람이 찜한 카드입니다!",
        "instruction_limit_1": "이 모드에서는 1장의 카드만 고를 수 있습니다.",
        "top_guide_notice": "💡 카드를 순서 정하기, 직접 내기 입력, 운세 확인 등 다양한 방법으로 응용해 보세요! 자세한 설명은 페이지 하단 가이드를 참고하세요.",
        "footer_copyright": "© 2024 Zeze Decision Hub."
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentMode = 'number';
let playerCount = 4;
let cardCount = 4;
let simpleCount = 4;
let players = [];
let cards = []; 
let storytellingData = null;
let currentTurnIndex = 0;
let isGameFinished = false;
let isRevealing = false;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const cardsContainer = document.getElementById('cards-container');
const playerSetupArea = document.getElementById('player-setup-area');
const playerInputsList = document.getElementById('player-inputs-list');
const playerCountDisplay = document.getElementById('player-count-display');
const customSetupArea = document.getElementById('custom-setup-area');
const customInputsList = document.getElementById('custom-inputs-list');
const cardCountDisplay = document.getElementById('card-count-display');
const simpleCountArea = document.getElementById('simple-count-area');
const simpleCountDisplay = document.getElementById('simple-count-display');
const storyResultSection = document.getElementById('story-result-section');
const instructionBar = document.getElementById('instruction-bar');
const instructionText = document.getElementById('game-instruction-text');
const modeDescription = document.getElementById('mode-description');
const revealAllBtn = document.getElementById('reveal-all-btn');

// Result List Container
const resultSummaryContainer = document.createElement('section');
resultSummaryContainer.id = 'result-summary-section';
resultSummaryContainer.className = 'hidden mt-8 space-y-4 pb-12';
gameStage.parentNode.insertBefore(resultSummaryContainer, gameStage.nextSibling);

// 🎵 Sound Manager
const SoundManager = {
    ctx: null,
    muted: localStorage.getItem('zeze_muted') === 'true',
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
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
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
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

async function init() {
    await loadStorytellingData();
    applyLanguage();
    
    // 💡 새로운 방문인지(링크 유입) 혹은 새로고침인지 확인
    const performanceEntries = performance.getEntriesByType('navigation');
    const isReload = performanceEntries.length > 0 && performanceEntries[0].type === 'reload';
    
    if (isReload) {
        loadState(); 
    } else {
        clearState(); 
        renderPlayerInputs();
        renderCustomInputs();
        updateModeUI();
    }
    
    setupEventListeners();
    SoundManager.updateMuteUI();
}

async function loadStorytellingData() {
    try {
        const response = await fetch('cardflip_data.json');
        storytellingData = await response.json();
    } catch (err) {
        console.error('Failed to load card data:', err);
    }
}

function saveState() {
    const state = {
        currentMode,
        playerCount,
        cardCount,
        simpleCount,
        players,
        cards,
        currentTurnIndex,
        isGameFinished,
        setupVisible: !setupSection.classList.contains('hidden')
    };
    localStorage.setItem('zeze_cardflip_state', JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem('zeze_cardflip_state');
    if (!saved) {
        renderPlayerInputs();
        renderCustomInputs();
        updateModeUI();
        return;
    }

    const state = JSON.parse(saved);
    currentMode = state.currentMode;
    playerCount = state.playerCount;
    cardCount = state.cardCount;
    simpleCount = state.simpleCount;
    players = state.players;
    cards = state.cards;
    currentTurnIndex = state.currentTurnIndex;
    isGameFinished = state.isGameFinished;

    updateModeUI();
    renderPlayerInputs();
    renderCustomInputs();

    if (players.length > 0) {
        const nameInputs = document.querySelectorAll('.player-name-input');
        players.forEach((p, i) => { if(nameInputs[i]) nameInputs[i].value = p; });
    }

    if (!state.setupVisible) {
        setupSection.classList.add('hidden');
        gameStage.classList.remove('hidden');
        renderCards();
        updateTurnIndicator(); // 버튼 활성화 여부 포함됨
        
        if (isGameFinished) {
            instructionBar.classList.add('hidden');
            revealAllBtn.classList.add('hidden');
            renderFinalResults();
            if (currentMode === 'icon' || currentMode === 'advice') {
                const flippedIdx = cards.findIndex(c => c.isRevealed);
                if (flippedIdx !== -1) showStoryResult(flippedIdx, true);
            }
        }
    }
}

function clearState() {
    localStorage.removeItem('zeze_cardflip_state');
}

function renderPlayerInputs() {
    const currentValues = Array.from(document.querySelectorAll('.player-name-input')).map(i => i.value);
    playerInputsList.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'flex gap-2 animate-fadeIn';
        div.innerHTML = `
            <div class="w-6 h-10 flex items-center justify-center font-black text-primary/30 text-[10px]">${i + 1}</div>
            <input type="text" class="player-name-input flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-primary outline-none transition-all" 
                placeholder="${translations[currentLang].player_placeholder} ${i + 1}" value="${currentValues[i] || ''}">
        `;
        playerInputsList.appendChild(div);
    }
    playerCountDisplay.textContent = playerCount;
}

function renderCustomInputs() {
    const currentValues = Array.from(document.querySelectorAll('.custom-card-input')).map(i => i.value);
    customInputsList.innerHTML = '';
    for (let i = 0; i < cardCount; i++) {
        const div = document.createElement('div');
        div.className = 'flex gap-2 animate-fadeIn';
        div.innerHTML = `
            <div class="w-6 h-10 flex items-center justify-center font-black text-secondary/30 text-[10px]">${i + 1}</div>
            <input type="text" class="custom-card-input flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-secondary outline-none transition-all" 
                placeholder="${currentLang === 'ko' ? '상품/벌칙 입력' : 'Prize/Penalty'} ${i + 1}" value="${currentValues[i] || ''}">
        `;
        customInputsList.appendChild(div);
    }
    cardCountDisplay.textContent = cardCount;
}

function updateModeUI() {
    const key = `mode_desc_${currentMode}`;
    modeDescription.innerHTML = translations[currentLang][key] || "";

    document.querySelectorAll('.mode-btn').forEach(btn => {
        if (btn.dataset.mode === currentMode) {
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.add('text-gray-500');
        }
    });

    if (currentMode === 'number') {
        playerSetupArea.classList.remove('hidden');
        customSetupArea.classList.add('hidden');
        simpleCountArea.classList.add('hidden');
    } else if (currentMode === 'custom') {
        playerSetupArea.classList.remove('hidden');
        customSetupArea.classList.remove('hidden');
        simpleCountArea.classList.add('hidden');
    } else {
        playerSetupArea.classList.add('hidden');
        customSetupArea.classList.add('hidden');
        simpleCountArea.classList.remove('hidden');
        simpleCountDisplay.textContent = simpleCount;
    }
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-gray-50', 'border', 'border-gray-200', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) btn.classList.add('bg-primary', 'text-white', 'font-bold');
        else btn.classList.add('bg-transparent', 'border-transparent');
    });

    if (!gameStage.classList.contains('hidden') && !isRevealing && !isGameFinished) {
        updateTurnIndicator();
    }
}

function shuffleCards() {
    let finalPlayers = [];
    if (currentMode === 'number' || currentMode === 'custom') {
        finalPlayers = Array.from(document.querySelectorAll('.player-name-input')).map(i => i.value.trim());
        if (finalPlayers.some(p => p === "")) {
            alert(translations[currentLang].error_empty_player);
            return;
        }
    }

    let pool = [];
    if (currentMode === 'number') {
        pool = Array.from({ length: finalPlayers.length }, (_, i) => ({ content: (i + 1).toString() }));
    } else if (currentMode === 'custom') {
        if (cardCount < finalPlayers.length) {
            alert(translations[currentLang].error_count_shortage);
            return;
        }
        const customContents = Array.from(document.querySelectorAll('.custom-card-input')).map(i => i.value.trim());
        if (customContents.some(c => c === "")) {
            alert(translations[currentLang].error_empty_custom);
            return;
        }
        pool = customContents.map(c => ({ content: c }));
    } else {
        const source = storytellingData[currentMode][currentLang];
        const randomValues = new Uint32Array(simpleCount);
        window.crypto.getRandomValues(randomValues);
        pool = Array.from(randomValues).map(v => {
            const idx = v % source.length;
            return { content: source[idx].title, originalPoolIndex: idx };
        });
    }

    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    players = finalPlayers;
    cards = pool.map(p => ({ ...p, isRevealed: false, playerName: null }));
    currentTurnIndex = 0;
    isGameFinished = false;
    isRevealing = false;

    saveState();
    renderCards();
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    instructionBar.classList.remove('hidden');
    storyResultSection.classList.add('hidden');
    resultSummaryContainer.classList.add('hidden');
    
    if (currentMode === 'icon' || currentMode === 'advice') revealAllBtn.classList.add('hidden');
    else revealAllBtn.classList.remove('hidden');

    updateTurnIndicator();
}

function renderCards() {
    cardsContainer.innerHTML = '';
    const gridCols = cards.length > 12 ? 'grid-cols-4' : (cards.length > 6 ? 'grid-cols-3' : 'grid-cols-2');
    cardsContainer.className = `grid ${gridCols} gap-3 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100 min-h-[300px]`;

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-wrapper aspect-[3/4] perspective-1000';
        cardEl.innerHTML = `
            <div class="card-inner relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${card.isRevealed ? 'flipped' : ''}">
                <div class="card-front absolute inset-0 bg-primary rounded-2xl flex flex-col items-center justify-center border-4 border-white/20 shadow-lg">
                    <span class="material-icons text-white text-4xl opacity-40 mb-2">style</span>
                    <span class="reserved-name text-white font-black text-xs px-2 text-center bg-white/20 rounded-lg ${card.playerName ? '' : 'hidden'}">${card.playerName || ''}</span>
                </div>
                <div class="card-back absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center border-2 border-primary/20 shadow-xl overflow-hidden p-2">
                    ${currentMode === 'icon' ? `<span class="material-icons text-primary text-2xl mb-1">${storytellingData.icon[currentLang][card.originalPoolIndex]?.icon || 'stars'}</span>` : ''}
                    <span class="card-content-text font-black text-gray-800 text-center break-keep leading-tight text-xs">${card.content}</span>
                    <span class="player-name-label absolute bottom-2 left-0 right-0 text-base font-black text-primary truncate px-2 text-center bg-primary/10 py-1.5">${card.playerName || ''}</span>
                </div>
            </div>
        `;
        cardEl.addEventListener('click', () => handleCardClick(index, cardEl));
        cardsContainer.appendChild(cardEl);
    });
}

function handleCardClick(index, element) {
    if (isGameFinished || isRevealing) return;
    if ((currentMode === 'icon' || currentMode === 'advice') && cards.some(c => c.isRevealed)) return;
    if (cards[index].playerName !== null || cards[index].isRevealed) {
        alert(translations[currentLang].error_already_picked);
        return;
    }

    if (players.length > 0 && currentTurnIndex < players.length) {
        cards[index].playerName = players[currentTurnIndex];
        const nameLabelFront = element.querySelector('.reserved-name');
        const nameLabelBack = element.querySelector('.player-name-label');
        nameLabelFront.textContent = cards[index].playerName;
        nameLabelFront.classList.remove('hidden');
        nameLabelBack.textContent = cards[index].playerName;
        currentTurnIndex++;
        SoundManager.playFlip();
        saveState();
    } else if (players.length === 0) {
        flipOneCard(index, element);
    }
    updateTurnIndicator();
}

function flipOneCard(index, element) {
    if (cards[index].isRevealed) return;
    cards[index].isRevealed = true;
    element.querySelector('.card-inner').classList.add('flipped');
    SoundManager.playFlip();
    saveState();
    
    if (currentMode === 'icon' || currentMode === 'advice') {
        showStoryResult(index);
        isGameFinished = true;
        saveState();
        instructionBar.classList.add('hidden');
    }
}

async function revealAll() {
    if (isGameFinished || isRevealing) return;
    
    // 버튼이 활성화된 경우에만 실행 (혹시 모를 강제 클릭 방지)
    if (players.length > 0 && currentTurnIndex < players.length) return;

    isRevealing = true;
    instructionBar.classList.add('hidden');
    revealAllBtn.classList.add('hidden'); 
    
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    for (let i = 0; i < cards.length; i++) {
        if (!cards[i].isRevealed) {
            await new Promise(resolve => setTimeout(resolve, 700));
            cards[i].isRevealed = true;
            cardWrappers[i].querySelector('.card-inner').classList.add('flipped');
            SoundManager.playFlip();
            saveState();
        }
    }

    setTimeout(() => {
        isGameFinished = true;
        isRevealing = false;
        saveState();
        SoundManager.playReveal();
        renderFinalResults();
    }, 500);
}

function renderFinalResults() {
    resultSummaryContainer.innerHTML = `
        <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-xl">
            <h2 class="text-center font-black text-gray-400 text-[10px] uppercase tracking-widest mb-6" data-key="result_summary_title">${translations[currentLang].result_summary_title}</h2>
            <div id="final-result-list" class="space-y-2"></div>
        </div>
    `;
    const list = document.getElementById('final-result-list');
    const matchedCards = cards.filter(c => c.playerName !== null);
    
    if (matchedCards.length > 0) {
        if (currentMode === 'number') matchedCards.sort((a, b) => parseInt(a.content) - parseInt(b.content));
        matchedCards.forEach(card => {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 animate-fadeIn';
            div.innerHTML = `
                <span class="font-bold text-gray-800 text-sm">${card.playerName}</span>
                <span class="font-black text-primary uppercase tracking-tighter text-xs">${card.content}</span>
            `;
            list.appendChild(div);
        });
        resultSummaryContainer.classList.remove('hidden');
    }
}

function updateTurnIndicator() {
    if (players.length > 0) {
        if (currentTurnIndex < players.length) {
            instructionText.innerHTML = translations[currentLang].game_instruction.replace('{name}', players[currentTurnIndex]);
            // 선택 중에는 버튼 비활성화
            revealAllBtn.disabled = true;
            revealAllBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            instructionText.innerHTML = translations[currentLang].all_picked_text;
            // 모두 선택 완료 시 버튼 활성화
            revealAllBtn.disabled = false;
            revealAllBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    } else {
        if (cards.some(c => c.isRevealed)) {
            instructionText.innerHTML = translations[currentLang].all_picked_single_text;
        } else {
            instructionText.innerHTML = translations[currentLang].game_instruction_single;
        }
    }
}

function showStoryResult(index, noAnim = false) {
    const card = cards[index];
    const data = storytellingData[currentMode][currentLang][card.originalPoolIndex];
    document.getElementById('story-icon').textContent = data.icon || 'auto_fix_high';
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-desc').textContent = data.desc;
    storyResultSection.classList.remove('hidden');
    if (!noAnim) confetti({ particleCount: 100, spread: 70, origin: { y: 0.8 }, colors: ['#6200EE', '#FF0266', '#FFFFFF'] });
}

function setupEventListeners() {
    document.getElementById('player-plus').addEventListener('click', () => { if (playerCount < 10) { playerCount++; renderPlayerInputs(); saveState(); } });
    document.getElementById('player-minus').addEventListener('click', () => { if (playerCount > 2) { playerCount--; renderPlayerInputs(); saveState(); } });
    document.getElementById('card-plus').addEventListener('click', () => { if (cardCount < 10) { cardCount++; renderCustomInputs(); saveState(); } });
    document.getElementById('card-minus').addEventListener('click', () => { if (cardCount > 2) { cardCount--; renderCustomInputs(); saveState(); } });
    document.getElementById('simple-plus').addEventListener('click', () => { if (simpleCount < 10) { simpleCount++; simpleCountDisplay.textContent = simpleCount; saveState(); } });
    document.getElementById('simple-minus').addEventListener('click', () => { if (simpleCount > 2) { simpleCount--; simpleCountDisplay.textContent = simpleCount; saveState(); } });

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMode = btn.dataset.mode;
            updateModeUI();
            saveState();
        });
    });

    document.getElementById('start-btn').addEventListener('click', shuffleCards);
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (isRevealing) return;
        clearState();
        setupSection.classList.remove('hidden');
        gameStage.classList.add('hidden');
        storyResultSection.classList.add('hidden');
        resultSummaryContainer.classList.add('hidden');
    });

    revealAllBtn.addEventListener('click', revealAll);
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) soundToggle.addEventListener('click', () => SoundManager.toggleMute());
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => { currentLang = btn.dataset.lang; localStorage.setItem('lang', currentLang); applyLanguage(); renderPlayerInputs(); renderCustomInputs(); updateModeUI(); });
    });

    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    document.getElementById('menu-toggle').addEventListener('click', () => { sidebarMenu.classList.remove('translate-x-full'); sidebarOverlay.classList.remove('hidden'); });
    document.getElementById('close-menu').addEventListener('click', () => { sidebarMenu.classList.add('translate-x-full'); sidebarOverlay.classList.add('hidden'); });
    sidebarOverlay.addEventListener('click', () => { sidebarMenu.classList.add('translate-x-full'); sidebarOverlay.classList.add('hidden'); });
}

document.addEventListener('DOMContentLoaded', init);
