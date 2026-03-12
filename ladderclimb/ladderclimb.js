// Ladder Climb Logic - Optimized and Restored

const translations = {
    "en": {
        "app_title": "Ladder Climb - Zeze Hub",
        "app_name": "Ladder Climb",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Destiny Ladder Climb",
        "main_description": "Decide your fate with your team.",
        "setup_title": "Participant Settings",
        "setup_instruction": "Enter names and results. Each row represents a <strong>fixed ladder number</strong>. You can enter multiple people/results separated by commas (,).",
        "guide_header": "Setup Guide",
        "result_settings_title": "Result Settings",
        "name_label_header": "Name",
        "result_label_header": "Result",
        "win_label": "Win",
        "loss_label": "Loss",
        "auto_fill_btn": "Auto Fill",
        "win_text": "Win",
        "loss_text": "Loss",
        "start_btn": "Create Ladder",
        "reset_btn": "Reset",
        "sequential_btn": "Sequential Results",
        "all_results_btn": "Show All",
        "result_title": "Results Summary",
        "click_instruction": "Click a player's number to reveal their ladder result.",
        "player_map_title": "Participant List",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2026 Zeze Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "player_placeholder": "Names (ex: Alex, Jordan)",
        "result_placeholder": "Results (ex: Win, Loss)",
        "error_empty_name": "Please enter all names and results.",
        "error_duplicate_name": "Participant names cannot be duplicated.",
        "error_auto_fill": "Sum of Win/Loss must match participant count ({count}).",
        "climbing_msg": "Climbing...",
        "click_to_start": "Click name to start!",
        "winner_msg": "Congratulations! <b>{name}</b> have won!",
        "info_title1": "History of Ladder Climb: Amidakuji",
        "info_desc1": "Ladder climbing is a popular decision-making tool in East Asia, known as 'Amidakuji' in Japan. The name comes from the shape of the lines, which were said to resemble the halo of the Amida Buddha. It has become an essential part of folk play culture in Korea, Japan, and China for things like betting on snacks or assigning roles.",
        "info_title2": "Why is Ladder Climb Mathematically Fair?",
        "info_desc2": "Ladder climbing is fair because it's based on the mathematical principle of 'Permutations.' The horizontal lines in a ladder act as swaps between 두 adjacent vertical lines. No matter how many horizontal lines there are, the starting points and ending points always form a one-to-one correspondence. This means every participant will arrive at exactly one result without duplicates.",
        "info_title3": "Ladder Climb Tips",
        "info_desc3": "<li>Fair Betting: Horizontal lines are automatically generated based on the number of participants, ensuring a clean bet without risk of manipulation.</li><li>Animated Suspense: In Zeze Hub, results are drawn in real-time along the lines, providing visual excitement.</li><li>Verification: Use the 'Show All' button to transparently reveal everyone's outcome at once.</li><li>Privacy: Participant names are never stored on a server and remain only on your current device.</li>"
    },
    "ko": {
        "app_title": "운명의 사다리 - Zeze Hub",
        "app_name": "Ladder Climb",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "운명의 사다리 타기",
        "main_description": "팀원들과 함께 운명을 결정해보세요.",
        "setup_title": "참가자 설정",
        "setup_instruction": "이름과 결과를 입력해 주세요. 각 줄은 <strong>고정된 사다리 번호</strong>를 나타냅니다. 콤마(,)로 구분하여 한 칸에 여러 명을 넣을 수 있습니다.",
        "guide_header": "작성 가이드",
        "result_settings_title": "결과 설정",
        "name_label_header": "이름",
        "result_label_header": "결과",
        "win_label": "당첨",
        "loss_label": "꽝",
        "auto_fill_btn": "자동 입력",
        "win_text": "당첨",
        "loss_text": "꽝",
        "start_btn": "사다리 만들기",
        "reset_btn": "다시 설정",
        "sequential_btn": "순차 결과 보기",
        "all_results_btn": "전체 결과",
        "result_title": "전체 결과 요약",
        "click_instruction": "참가자 번호를 클릭하면 해당 참가자의 사다리 결과를 확인할 수 있습니다.",
        "player_map_title": "참가자 명단",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2026 Zeze Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "player_placeholder": "이름 (예: 홍길동, 김철수)",
        "result_placeholder": "결과 (예: 당첨, 꽝)",
        "error_empty_name": "모든 이름과 결과를 입력해주세요.",
        "error_duplicate_name": "중복된 참가자 이름이 있습니다.",
        "error_auto_fill": "당첨과 꽝의 합계가 참가자 수({count})와 일치해야 합니다.",
        "climbing_msg": "내려가는 중...",
        "click_to_start": "이름을 클릭하면 시작됩니다!",
        "winner_msg": "축하합니다! <b>{name}</b> 님이 당첨되었습니다!",
        "info_title1": "사다리 타기의 유래: 아미다쿠지",
        "info_desc1": "사다리 타기는 동아시아에서 매우 대중적인 결정 도구로, 일본에서는 '아미다쿠지(阿弥陀籤)'라고 불립니다. 이 이름은 과거 사다리 모양이 아미다 부처의 후광(방사형 선)과 닮았다고 해서 붙여진 명칭입니다. 초기에는 부채꼴 모양의 선을 그어 제비를 뽑는 방식이었으나, 시간이 흐르며 오늘날 우리가 아는 수직선과 수평 다리 모양의 사다리 형태로 발전했습니다. 한국, 일본, 중국 등지에서 간식 내기나 역할 분담을 정할 때 없어서는 안 될 민속적인 놀이 문화로 자리 잡았습니다.",
        "info_title2": "사다리 타기는 왜 수학적으로 공정할까?",
        "info_desc2": "사다리 타기가 공정한 이유는 수학의 '치환(Permutation)' 원리에 기반하기 때문입니다. 사다리의 가로선은 인접한 두 세로선의 위치를 맞바꾸는 역할을 합니다. 수학적으로 가로선 하나는 하나의 '전치(Transposition)'에 해당하며, 아무리 많은 가로선이 있더라도 출발점과 도착점은 항상 일대일 대응(Bijection)을 이룬다는 특징이 있습니다. Zeze Hub는 Web Crypto API를 통한 정교한 난수 생성을 사용하여, 어떠한 주관적 개입 없이 완벽한 확률적 공정성을 보장합니다.",
        "info_title3": "사다리 타기 활용 팁",
        "info_desc3": "<li>공정한 내기: 참가자 수에 맞춰 가로선이 자동으로 생성되므로 조작의 우려 없이 깨끗한 내기가 가능합니다.</li><li>애니메이션의 긴장감: Zeze Hub의 사다리 타기는 결과가 선을 따라 실시간으로 그려지며 시각적 즐거움을 제공합니다.</li><li>일대일 대응 확인: '전체 결과' 버튼을 통해 모든 인원의 당첨 여부를 한눈에 투명하게 공개할 수 있습니다.</li><li>개인정보 보호: 입력한 친구들의 이름은 서버에 저장되지 않으며, 오직 현재 이용 중인 기기에만 임시 보관됩니다.</li>"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let playerCount = 4;
let players = [];
let results = [];
let ladderData = []; 
let isAnimating = false;
let completedPlayers = new Set();
let playerResultMap = {}; // playerIndex -> endVerticalLineIndex
let showAllResults = false;
let persistentPaths = []; // { color, points, resultText }
let winnerIndices = []; // 당첨자 인덱스 저장 배열

const playerColors = ['#6200EE', '#03DAC6', '#FF0266', '#FF9800', '#4CAF50', '#2196F3', '#9C27B0', '#F44336'];

// DOM Elements
const setupGuideArea = document.getElementById('setup-guide-area');
const setupSection = document.getElementById('setup-section');
const ladderStage = document.getElementById('ladder-stage');
const playerInputsContainer = document.getElementById('player-inputs');
const resultInputsContainer = document.getElementById('result-inputs');
const playerCountDisplay = document.getElementById('player-count');
const canvas = document.getElementById('ladder-canvas');
const ctx = canvas.getContext('2d');

function formatNames(nameStr) {
    if (!nameStr) return '';
    const names = nameStr.split(',').map(n => n.trim()).filter(n => n !== '');
    if (currentLang === 'ko') {
        return names.map(n => `${n} 님`).join(', ');
    }
    return names.join(', ');
}

// 💾 Session State Persistence
function saveSessionState() {
    const session = {
        playerCount,
        players,
        results,
        ladderData,
        completedPlayers: Array.from(completedPlayers),
        playerResultMap,
        showAllResults,
        persistentPaths,
        winnerIndices,
        setupVisible: !setupSection.classList.contains('hidden')
    };
    localStorage.setItem('zeze_ladderclimb_session', JSON.stringify(session));
}

function loadSessionState() {
    const saved = localStorage.getItem('zeze_ladderclimb_session');
    if (!saved) return;

    const state = JSON.parse(saved);
    playerCount = state.playerCount;
    players = state.players;
    results = state.results;
    ladderData = state.ladderData;
    completedPlayers = new Set(state.completedPlayers);
    playerResultMap = state.playerResultMap;
    showAllResults = state.showAllResults;
    persistentPaths = state.persistentPaths;
    winnerIndices = state.winnerIndices;

    playerCountDisplay.textContent = playerCount;
    renderInputs(); // 텍스트 필드 값들 복구

    if (!state.setupVisible) {
        setupGuideArea.classList.add('hidden');
        setupSection.classList.add('hidden');
        ladderStage.classList.remove('hidden');
        
        updateDynamicTexts();
        resizeCanvas();
        drawLadder();
    }
}

function clearSessionState() {
    localStorage.removeItem('zeze_ladderclimb_session');
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
        renderInputs();
    }
    
    setupEventListeners();
}

function renderInputs() {
    if (!playerInputsContainer || !resultInputsContainer) return;
    
    const currentNames = Array.from(document.querySelectorAll('.player-name-input')).map(i => i.value);
    const currentResultsArr = Array.from(document.querySelectorAll('.result-text-input')).map(i => i.value);
    
    playerInputsContainer.innerHTML = '';
    resultInputsContainer.innerHTML = '';
    
    for (let i = 0; i < playerCount; i++) {
        const pDiv = document.createElement('div');
        pDiv.className = 'flex items-center gap-2 animate-fadeIn';
        pDiv.innerHTML = `
            <span class="w-6 h-10 flex items-center justify-center font-black text-gray-300 text-[10px] shrink-0">${i + 1}</span>
            <input type="text" class="player-name-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" 
                placeholder="${translations[currentLang].player_placeholder}" value="${players[i] || currentNames[i] || ''}">
        `;
        playerInputsContainer.appendChild(pDiv);

        const rInput = document.createElement('input');
        rInput.type = 'text';
        rInput.className = 'result-text-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-secondary outline-none transition-all';
        rInput.placeholder = translations[currentLang].result_placeholder;
        rInput.value = results[i] || currentResultsArr[i] || '';
        resultInputsContainer.appendChild(rInput);
    }
    
    const winInput = document.getElementById('auto-win-count');
    const lossInput = document.getElementById('auto-loss-count');
    
    winInput.max = playerCount;
    lossInput.max = playerCount;
    
    if (parseInt(winInput.value) + parseInt(lossInput.value) !== playerCount) {
        winInput.value = 1;
        lossInput.value = playerCount - 1;
    }
}

function autoFillResults() {
    const wins = parseInt(document.getElementById('auto-win-count').value) || 0;
    const losses = parseInt(document.getElementById('auto-loss-count').value) || 0;
    
    if (wins + losses !== playerCount) {
        alert(translations[currentLang].error_auto_fill.replace('{count}', playerCount));
        return;
    }
    
    const fillList = [];
    for (let i = 0; i < wins; i++) fillList.push(translations[currentLang].win_text);
    for (let i = 0; i < losses; i++) fillList.push(translations[currentLang].loss_text);
    
    const resultInputs = document.querySelectorAll('.result-text-input');
    resultInputs.forEach((input, i) => {
        input.value = fillList[i] || '';
    });
}

function generateLadder() {
    ladderData = [];
    for (let i = 0; i < playerCount - 1; i++) {
        const count = 3 + Math.floor(Math.random() * 3);
        for (let j = 0; j < count; j++) {
            let y;
            let overlap = true;
            while (overlap) {
                y = 0.1 + Math.random() * 0.8;
                overlap = ladderData.some(b => Math.abs(b.y - y) < 0.05 && (b.gap === i || b.gap === i-1 || b.gap === i+1));
            }
            ladderData.push({ gap: i, y: y });
        }
    }
    ladderData.sort((a, b) => a.y - b.y);
    saveSessionState();
}

function drawLadder(activePath = null) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const padding = 40;
    const spacing = (w - padding * 2) / (playerCount - 1);

    ctx.clearRect(0, 0, w, h);
    
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    for (let i = 0; i < playerCount; i++) {
        const x = padding + i * spacing;
        ctx.beginPath(); ctx.moveTo(x, 40); ctx.lineTo(x, h - 40); ctx.stroke();
    }

    ctx.lineWidth = 3;
    ladderData.forEach(bar => {
        const x1 = padding + bar.gap * spacing;
        const x2 = padding + (bar.gap + 1) * spacing;
        const y = 40 + bar.y * (h - 80);
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
    });

    ctx.font = 'bold 14px Roboto';
    ctx.textAlign = 'center';
    players.forEach((name, i) => {
        const x = padding + i * spacing;
        ctx.fillStyle = completedPlayers.has(i) ? playerColors[i % playerColors.length] : '#374151';
        ctx.fillText(i + 1, x, 25);
        
        let isRevealed = showAllResults;
        for (let pIdx of completedPlayers) {
            if (playerResultMap[pIdx] === i) {
                isRevealed = true;
                break;
            }
        }

        if (isRevealed) {
            ctx.fillStyle = '#6B7280';
            ctx.font = 'bold 11px Roboto';
            const resVal = results[i] || '';
            const displayResult = resVal.length > 8 ? resVal.substring(0,7)+'..' : resVal;
            ctx.fillText(displayResult || `R${i+1}`, x, h - 15);
            ctx.font = 'bold 14px Roboto';
        } else {
            ctx.fillStyle = '#E5E7EB';
            ctx.fillText('?', x, h - 15);
        }
    });

    const shouldFilter = showAllResults || (completedPlayers.size === playerCount && playerCount > 0);

    persistentPaths.forEach(p => {
        if (shouldFilter) {
            const isWin = p.resultText.includes('당첨') || p.resultText.toLowerCase().includes('win');
            if (!isWin) return;
        }
        
        ctx.strokeStyle = p.color; ctx.lineWidth = 6; ctx.globalAlpha = 0.6;
        ctx.beginPath(); ctx.moveTo(p.points[0].x, p.points[0].y);
        for (let k = 1; k < p.points.length; k++) ctx.lineTo(p.points[k].x, p.points[k].y);
        ctx.stroke();
    });
    ctx.globalAlpha = 1.0;

    if (activePath) {
        ctx.strokeStyle = activePath.color; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(activePath.points[0].x, activePath.points[0].y);
        for (let k = 1; k < activePath.points.length; k++) ctx.lineTo(activePath.points[k].x, activePath.points[k].y);
        ctx.stroke();
    }
}

function highlightWinners() {
    if (completedPlayers.size !== playerCount) return;
    
    players.forEach((_, i) => {
        const endLineIdx = playerResultMap[i];
        const finalResult = results[endLineIdx];
        const isWin = finalResult.includes('당첨') || finalResult.toLowerCase().includes('win');
        
        if (isWin) {
            const mappingItem = document.getElementById(`mapping-item-${i}`);
            if (mappingItem) {
                const circle = mappingItem.querySelector('.w-5');
                const nameSpan = mappingItem.querySelector('.truncate:not(.w-5)');
                if (circle) {
                    circle.classList.remove('bg-gray-100', 'text-primary');
                    circle.classList.add('bg-secondary', 'text-white');
                }
                if (nameSpan) {
                    nameSpan.classList.add('text-secondary', 'font-black');
                }
            }
        }
    });
}

async function tracePath(playerIndex) {
    if (isAnimating || completedPlayers.has(playerIndex)) return;
    isAnimating = true;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr; const h = canvas.height / dpr;
    const padding = 40; const spacing = (w - padding * 2) / (playerCount - 1);
    
    let currentXIndex = playerIndex;
    let currentY = 0; 
    const pathPoints = [{ x: padding + playerIndex * spacing, y: 40 }];
    const color = playerColors[playerIndex % playerColors.length];

    while (currentY < 1) {
        const possibleBars = ladderData.filter(b => b.y > currentY && (b.gap === currentXIndex || b.gap === currentXIndex - 1));
        const nextBar = possibleBars.length > 0 ? possibleBars.find(b => b.y > currentY) : null;

        if (nextBar) {
            const nextY = 40 + nextBar.y * (h - 80);
            pathPoints.push({ x: padding + currentXIndex * spacing, y: nextY }); 
            if (nextBar.gap === currentXIndex) currentXIndex++; else currentXIndex--;
            pathPoints.push({ x: padding + currentXIndex * spacing, y: nextY }); 
            currentY = nextBar.y;
        } else {
            pathPoints.push({ x: padding + currentXIndex * spacing, y: h - 40 });
            currentY = 1;
        }
        drawLadder({ color, points: pathPoints });
        await new Promise(r => setTimeout(r, 80));
    }

    const finalResult = results[currentXIndex];
    playerResultMap[playerIndex] = currentXIndex;
    completedPlayers.add(playerIndex);
    persistentPaths.push({ color, points: pathPoints, resultText: finalResult }); 
    isAnimating = false;

    if (finalResult.includes('당첨') || finalResult.toLowerCase().includes('win')) {
        winnerIndices.push(playerIndex);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    updateDynamicTexts();
    
    if (completedPlayers.size === playerCount) {
        highlightWinners();
    }
    drawLadder(); 
    saveSessionState();
}

function updateDynamicTexts() {
    const winnerAnnounce = document.getElementById('winner-announcement');
    const winnerText = document.getElementById('winner-text');
    
    if (winnerIndices.length > 0) {
        winnerAnnounce.classList.remove('hidden');
        let textHTML = '';
        winnerIndices.forEach((idx, i) => {
            const playerNameDisplay = formatNames(players[idx]);
            const msg = translations[currentLang].winner_msg.replace('{name}', playerNameDisplay);
            textHTML += (i > 0 ? '<br>' : '') + msg;
        });
        winnerText.innerHTML = textHTML;
    } else {
        winnerAnnounce.classList.add('hidden');
        winnerText.innerHTML = '';
    }

    const summarySection = document.getElementById('result-section');
    const display = document.getElementById('result-display');
    if (completedPlayers.size > 0) {
        summarySection.classList.remove('hidden');
        display.innerHTML = '';
        const sortedIndices = Array.from(completedPlayers).sort((a, b) => a - b);
        sortedIndices.forEach(pIdx => {
            const resIdx = playerResultMap[pIdx];
            const div = document.createElement('div');
            div.className = 'text-sm mb-1';
            const nameText = formatNames(players[pIdx]);
            div.innerHTML = `<span class="font-bold text-primary">${pIdx + 1}. ${nameText}</span> ➔ ${results[resIdx]}`;
            display.appendChild(div);
        });
    }
    
    if (players.length > 0) {
        const mappingList = document.getElementById('player-mapping-list');
        mappingList.innerHTML = '';
        players.forEach((name, i) => {
            const div = document.createElement('div');
            div.id = `mapping-item-${i}`;
            div.className = 'flex items-center gap-2 truncate';
            const nameText = formatNames(name);
            div.innerHTML = `<span class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">${i+1}</span> <span class="truncate" title="${nameText}">${nameText}</span>`;
            mappingList.appendChild(div);
        });
        highlightWinners();
    }
}

function resizeCanvas() {
    const container = document.getElementById('ladder-container');
    if (!container) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = (rect.width - 32) * dpr;
    canvas.height = 450 * dpr;
    canvas.style.width = `${rect.width - 32}px`;
    canvas.style.height = `450px`;
    ctx.scale(dpr, dpr);
    if (ladderData.length > 0) drawLadder();
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) btn.classList.add('bg-primary', 'text-white', 'font-bold');
        else btn.classList.add('bg-transparent', 'border-transparent');
    });
    updateDynamicTexts();
}

function setLanguage(lang) {
    currentLang = lang; localStorage.setItem('lang', lang);
    applyLanguage(); renderInputs();
}

function setupEventListeners() {
    const winInput = document.getElementById('auto-win-count');
    const lossInput = document.getElementById('auto-loss-count');

    winInput.addEventListener('input', () => {
        let val = parseInt(winInput.value) || 0;
        if (val > playerCount) { val = playerCount; winInput.value = val; }
        if (val < 0) { val = 0; winInput.value = 0; }
        lossInput.value = playerCount - val;
    });

    lossInput.addEventListener('input', () => {
        let val = parseInt(lossInput.value) || 0;
        if (val > playerCount) { val = playerCount; lossInput.value = val; }
        if (val < 0) { val = 0; lossInput.value = 0; }
        winInput.value = playerCount - val;
    });

    document.getElementById('player-plus').addEventListener('click', () => {
        if (playerCount < 6) { playerCount++; playerCountDisplay.textContent = playerCount; renderInputs(); saveSessionState(); }
    });
    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) { playerCount--; playerCountDisplay.textContent = playerCount; renderInputs(); saveSessionState(); }
    });
    
    document.getElementById('auto-fill-btn').addEventListener('click', autoFillResults);

    document.getElementById('start-btn').addEventListener('click', () => {
        const names = Array.from(document.querySelectorAll('.player-name-input')).map(i => i.value.trim());
        const res = Array.from(document.querySelectorAll('.result-text-input')).map(i => i.value.trim());
        if (names.some(n => n === '') || res.some(r => r === '')) {
            alert(translations[currentLang].error_empty_name); return;
        }
        
        for (let i = res.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [res[i], res[j]] = [res[j], res[i]];
        }

        players = names; results = res;
        
        setupGuideArea.classList.add('hidden');
        setupSection.classList.add('hidden'); ladderStage.classList.remove('hidden');
        completedPlayers.clear(); playerResultMap = {}; showAllResults = false; persistentPaths = []; winnerIndices = [];
        
        updateDynamicTexts();
        document.getElementById('result-section').classList.add('hidden');
        generateLadder(); resizeCanvas();
        saveSessionState();
    });
    document.getElementById('reset-btn').addEventListener('click', () => {
        clearSessionState();
        setupGuideArea.classList.remove('hidden');
        setupSection.classList.remove('hidden'); ladderStage.classList.add('hidden');
        document.getElementById('result-section').classList.add('hidden');
        document.getElementById('winner-announcement').classList.add('hidden');
        players = []; results = [];
        renderInputs();
    });
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left);
        const w = rect.width; const padding = 40; const spacing = (w - padding * 2) / (playerCount - 1);
        for (let i = 0; i < playerCount; i++) {
            if (Math.abs(x - (padding + i * spacing)) < 30) { tracePath(i); break; }
        }
    });
    document.getElementById('all-results-btn').addEventListener('click', async () => {
        showAllResults = false; 
        for (let i = 0; i < playerCount; i++) {
            if (!completedPlayers.has(i)) {
                await tracePath(i);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        showAllResults = true; 
        highlightWinners();
        drawLadder(); 
        saveSessionState();
    });
    document.getElementById('sequential-btn').addEventListener('click', async () => {
        for (let i = 0; i < playerCount; i++) {
            if (!completedPlayers.has(i)) {
                await tracePath(i);
                await new Promise(r => setTimeout(r, 1000));
            }
        }
    });
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
    window.addEventListener('resize', resizeCanvas);
}

document.addEventListener('DOMContentLoaded', init);
