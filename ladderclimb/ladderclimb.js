// Ladder Climb Logic

const translations = {
    "en": {
        "app_title": "Ladder Climb - Zeze Hub",
        "app_name": "Ladder Climb",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Destiny Ladder Climb",
        "main_description": "Decide your fate with your team.",
        "setup_title": "Participant Settings",
        "start_btn": "Create Ladder",
        "reset_btn": "Reset",
        "sequential_btn": "Sequential Results",
        "all_results_btn": "Show All",
        "result_title": "Results Summary",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "player_placeholder": "Name",
        "result_placeholder": "Reward/Penalty",
        "error_duplicate_bars": "Ladder generation error. Please try again.",
        "climbing_msg": "Climbing...",
        "click_to_start": "Click name to start!"
    },
    "ko": {
        "app_title": "운명의 사다리 - Zeze Hub",
        "app_name": "Ladder Climb",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "운명의 사다리 타기",
        "main_description": "팀원들과 함께 운명을 결정해보세요.",
        "setup_title": "참가자 설정",
        "start_btn": "사다리 만들기",
        "reset_btn": "다시 설정",
        "sequential_btn": "순차 결과 보기",
        "all_results_btn": "전체 결과",
        "result_title": "전체 결과 요약",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "player_placeholder": "이름",
        "result_placeholder": "당첨 내용",
        "error_duplicate_bars": "사다리 생성 중 오류가 발생했습니다. 다시 시도해주세요.",
        "climbing_msg": "내려가는 중...",
        "click_to_start": "이름을 클릭하면 시작됩니다!"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let playerCount = 4;
let players = [];
let results = [];
let ladderData = []; // Array of vertical lines and their horizontal bars
let isAnimating = false;
let completedPlayers = new Set();
let playerResultMap = {}; // Keep track of player results

// Path Colors
const playerColors = [
    '#6200EE', '#03DAC6', '#FF0266', '#FF9800', 
    '#4CAF50', '#2196F3', '#9C27B0', '#F44336', 
    '#795548', '#607D8B'
];

// DOM Elements
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const setupSection = document.getElementById('setup-section');
const ladderStage = document.getElementById('ladder-stage');
const resultSection = document.getElementById('result-section');
const resultDisplay = document.getElementById('result-display');
const canvas = document.getElementById('ladder-canvas');
const ctx = canvas.getContext('2d');

// Sound Manager
const SoundManager = {
    ctx: null,
    muted: false,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    },
    playTick() {
        if (this.muted || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.05);
    }
};

function init() {
    renderInputs();
    applyTranslations();
    setupEventListeners();
}

function renderInputs() {
    playerInputsContainer.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'player-input-group flex gap-2';
        div.innerHTML = `
            <input type="text" class="player-name-input flex-1 p-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all text-sm" 
                placeholder="${translations[currentLang].player_placeholder} ${i + 1}" value="${currentLang === 'ko' ? '참가자' : 'Player'} ${i + 1}">
            <input type="text" class="result-input flex-1 p-3 rounded-xl border border-gray-200 focus:border-secondary outline-none transition-all text-sm" 
                placeholder="${translations[currentLang].result_placeholder} ${i + 1}" value="${i === 0 ? (currentLang === 'ko' ? '당첨' : 'Winner') : (currentLang === 'ko' ? '꽝' : 'Fail')}">
        `;
        playerInputsContainer.appendChild(div);
    }
    playerCountDisplay.textContent = playerCount;
}

function setupLadder() {
    const nameInputs = document.querySelectorAll('.player-name-input');
    const resInputs = document.querySelectorAll('.result-input');
    
    players = Array.from(nameInputs).map(input => input.value || '???');
    results = Array.from(resInputs).map(input => input.value || '???');
    
    // Shuffle results
    for (let i = results.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [results[i], results[j]] = [results[j], results[i]];
    }

    completedPlayers.clear();
    playerResultMap = {};
    generateLadderData();
    drawLadder();
    
    setupSection.classList.add('hidden');
    ladderStage.classList.remove('hidden');
    resultSection.classList.add('hidden');
}

function generateLadderData() {
    ladderData = [];
    const rows = 15; // Vertical resolution
    for (let i = 0; i < playerCount; i++) {
        ladderData.push(new Array(rows).fill(false));
    }

    for (let j = 1; j < rows - 1; j++) {
        for (let i = 0; i < playerCount - 1; i++) {
            if (Math.random() > 0.6) {
                if (i > 0 && ladderData[i - 1][j]) continue;
                ladderData[i][j] = true;
            }
        }
    }
}

function drawLadder() {
    const padding = 40;
    const width = 320;
    const height = 400;
    const colWidth = (width - padding * 2) / (playerCount - 1);
    const rowHeight = (height - padding * 2) / (ladderData[0].length - 1);

    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, width, height);

    ctx.font = 'bold 12px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw Vertical Lines
    for (let i = 0; i < playerCount; i++) {
        const x = padding + i * colWidth;
        ctx.beginPath();
        ctx.strokeStyle = '#E5E7EB';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();

        // Names and placeholders - Adjusted position to be closer to the line
        ctx.fillStyle = playerColors[i % playerColors.length];
        ctx.fillText(players[i], x, padding - 15); 
        ctx.fillStyle = '#D1D5DB';
        ctx.fillText('???', x, height - padding + 20);
    }

    // Draw Horizontal Bars
    for (let i = 0; i < playerCount - 1; i++) {
        for (let j = 0; j < ladderData[i].length; j++) {
            if (ladderData[i][j]) {
                const x = padding + i * colWidth;
                const y = padding + j * rowHeight;
                ctx.beginPath();
                ctx.strokeStyle = '#E5E7EB';
                ctx.lineWidth = 4;
                ctx.moveTo(x, y);
                ctx.lineTo(x + colWidth, y);
                ctx.stroke();
            }
        }
    }

    addClickZones(padding, colWidth, width, height);
}

function addClickZones(padding, colWidth, width, height) {
    const container = document.getElementById('ladder-container');
    const existingZones = container.querySelectorAll('.click-zone');
    existingZones.forEach(z => z.remove());

    const hint = container.querySelector('.click-hint') || document.createElement('div');
    hint.className = 'click-hint absolute top-2 left-0 right-0 text-center text-[10px] text-primary font-bold animate-pulse';
    hint.textContent = translations[currentLang].click_to_start;
    if (!container.querySelector('.click-hint')) container.appendChild(hint);

    for (let i = 0; i < playerCount; i++) {
        const x = padding + i * colWidth;
        const zone = document.createElement('div');
        zone.className = 'click-zone absolute cursor-pointer hover:bg-primary/5 rounded-xl border border-transparent hover:border-primary/20 transition-all flex items-center justify-center group';
        zone.style.left = `${x - 25}px`;
        zone.style.top = `${padding - 30}px`; // Better alignment with name
        zone.style.width = '50px';
        zone.style.height = '30px';
        
        // Add a small indicator dot on hover
        zone.innerHTML = '<div class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity mt-4"></div>';
        
        zone.addEventListener('click', () => startClimb(i));
        container.appendChild(zone);
    }
}

function renderResultSummary() {
    resultSection.classList.remove('hidden');
    let summaryHtml = '<div class="space-y-2 text-sm font-bold max-w-[300px] mx-auto mt-2">';
    
    // Sort completed indices to show them in order
    const sortedIndices = Array.from(completedPlayers).sort((a, b) => a - b);
    
    sortedIndices.forEach(idx => {
        const res = playerResultMap[idx];
        const isWin = res.includes('당첨') || res.toLowerCase().includes('win');
        const color = playerColors[idx % playerColors.length];
        
        summaryHtml += `
            <div class="flex justify-between items-center p-3 rounded-xl bg-white/80 border border-gray-100 shadow-sm">
                <span style="color: ${color}">${players[idx]}</span>
                <span class="mx-2 text-gray-300">→</span>
                <span class="${isWin ? 'text-secondary' : 'text-gray-400'}">${res}</span>
            </div>`;
    });
    summaryHtml += '</div>';
    
    resultDisplay.innerHTML = summaryHtml;
    resultDisplay.style.color = 'inherit';
}

async function startClimb(playerIndex, isMulti = false) {
    if (isAnimating && !isMulti) return;
    if (completedPlayers.has(playerIndex)) return;
    
    if (!isMulti) isAnimating = true;
    SoundManager.init();

    const padding = 40;
    const colWidth = (320 - padding * 2) / (playerCount - 1);
    const rowHeight = (400 - padding * 2) / (ladderData[0].length - 1);

    let currentCol = playerIndex;
    let currentRow = 0;
    const pathColor = playerColors[playerIndex % playerColors.length];

    // Set common styles
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    while (currentRow < ladderData[0].length - 1) {
        const startX = padding + currentCol * colWidth;
        const startY = padding + currentRow * rowHeight;
        
        currentRow++;
        const endY = padding + currentRow * rowHeight;

        // CRITICAL: Set color right before stroking each segment to prevent multi-color bleeding
        ctx.strokeStyle = pathColor;
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX, endY);
        ctx.stroke();
        
        if (!isMulti || playerCount < 6) SoundManager.playTick();
        await sleep(isMulti ? 20 : 40);

        if (currentCol > 0 && ladderData[currentCol - 1][currentRow]) {
            const endX = padding + (currentCol - 1) * colWidth;
            ctx.strokeStyle = pathColor; // Ensure color is still correct
            ctx.beginPath();
            ctx.moveTo(startX, endY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            currentCol--;
            await sleep(isMulti ? 30 : 60);
        } else if (currentCol < playerCount - 1 && ladderData[currentCol][currentRow]) {
            const endX = padding + (currentCol + 1) * colWidth;
            ctx.strokeStyle = pathColor; // Ensure color is still correct
            ctx.beginPath();
            ctx.moveTo(startX, endY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            currentCol++;
            await sleep(isMulti ? 30 : 60);
        }
    }

    const finalResult = results[currentCol];
    completedPlayers.add(playerIndex);
    playerResultMap[playerIndex] = finalResult;
    
    revealLadderResult(currentCol, finalResult, pathColor);
    renderResultSummary();
    
    if (!window.isAllDrawing && (finalResult.includes('당첨') || finalResult.toLowerCase().includes('win'))) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.8 }, colors: [pathColor, '#FFFFFF'] });
    }

    if (!isMulti) isAnimating = false;
    return { player: players[playerIndex], result: finalResult, color: pathColor };
}

async function startSequentialClimb() {
    if (isAnimating) return;
    
    if (completedPlayers.size >= playerCount) {
        drawLadder();
        completedPlayers.clear();
        playerResultMap = {};
        resultSection.classList.add('hidden');
    }

    const sequentialBtn = document.getElementById('sequential-btn');
    const resetBtn = document.getElementById('reset-btn');
    const allResultsBtn = document.getElementById('all-results-btn');
    
    sequentialBtn.disabled = true;
    resetBtn.disabled = true;
    allResultsBtn.disabled = true;
    sequentialBtn.style.opacity = '0.5';

    for (let i = 0; i < playerCount; i++) {
        if (!completedPlayers.has(i)) {
            await startClimb(i, true);
            await sleep(500); 
        }
    }

    sequentialBtn.disabled = false;
    resetBtn.disabled = false;
    allResultsBtn.disabled = false;
    sequentialBtn.style.opacity = '1';
}

async function revealAllResults() {
    if (isAnimating) return;
    
    if (completedPlayers.size >= playerCount) {
        drawLadder();
        completedPlayers.clear();
        playerResultMap = {};
    }

    isAnimating = true;
    window.isAllDrawing = true; 
    
    const sequentialBtn = document.getElementById('sequential-btn');
    const resetBtn = document.getElementById('reset-btn');
    const allResultsBtn = document.getElementById('all-results-btn');
    
    allResultsBtn.disabled = true;
    sequentialBtn.disabled = true;
    allResultsBtn.style.opacity = '0.5';

    const promises = [];
    for (let i = 0; i < playerCount; i++) {
        if (!completedPlayers.has(i)) {
            promises.push(startClimb(i, true));
        }
    }

    await Promise.all(promises);
    
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.7 } });

    allResultsBtn.disabled = false;
    sequentialBtn.disabled = false;
    allResultsBtn.style.opacity = '1';
    window.isAllDrawing = false;
    isAnimating = false;
}

function revealLadderResult(colIndex, text, color = '#1F2937') {
    const padding = 40;
    const height = 400;
    const colWidth = (320 - padding * 2) / (playerCount - 1);
    const x = padding + colIndex * colWidth;
    
    ctx.font = 'bold 12px Roboto';
    ctx.textAlign = 'center';
    ctx.fillStyle = color;
    ctx.clearRect(x - 25, height - padding + 5, 50, 30);
    ctx.fillText(text, x, height - padding + 20);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function applyTranslations() {
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
    applyTranslations();
    renderInputs();
}

function setupEventListeners() {
    document.getElementById('player-plus').addEventListener('click', () => {
        if (playerCount < 10) {
            playerCount++;
            renderInputs();
        }
    });

    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) {
            playerCount--;
            renderInputs();
        }
    });

    document.getElementById('start-btn').addEventListener('click', setupLadder);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        setupSection.classList.remove('hidden');
        ladderStage.classList.add('hidden');
        resultSection.classList.add('hidden');
    });

    document.getElementById('sequential-btn').addEventListener('click', startSequentialClimb);
    document.getElementById('all-results-btn').addEventListener('click', revealAllResults);

    document.getElementById('sound-toggle').addEventListener('click', () => {
        SoundManager.muted = !SoundManager.muted;
        document.getElementById('sound-icon').textContent = SoundManager.muted ? 'volume_off' : 'volume_up';
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

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', init);