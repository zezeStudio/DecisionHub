// Drawing Lots Logic

const translations = {
    "en": {
        "app_title": "Drawing Lots - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Exciting Drawing Lots",
        "main_description": "Find the hidden lucky slips.",
        "setup_title": "Settings",
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
        "error_empty_name": "Please enter all participant names.",
        "error_duplicate_name": "Participant names cannot be duplicated.",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "info_title1": "History of Drawing Lots: Mankind's Most Equal Decision",
        "info_desc1": "Drawing lots is a decision-making method used for ages, documented even in the Bible and ancient texts. In ancient Athens, public officials were often chosen by lot rather than election—a highly democratic device intended to give every citizen an equal chance and prevent the monopoly of power. Today, it remains loved as the most intuitive, fair, and dispute-free tool for making decisions.",
        "info_title2": "Order and Probability: Is it better to go first?",
        "info_desc2": "People often wonder, 'Is it better to draw first or last?' Mathematically, drawing lots yields identical winning probabilities regardless of the order. For example, if there is 1 winner among 10 slips, the first person's chance is 1/10. The second person's chance is the probability of the first person losing (9/10) multiplied by the second person winning from the remaining slips (1/9), which equals 1/10. Zeze Hub implements this mathematical fairness with cryptographic randomness for truly equal luck.",
        "info_title3": "Getting the Most Out of Drawing Lots",
        "info_desc3": "<li>Set Winner Count: From picking a single winner to multiple people at once.</li><li>Real-time Suspense: Share the thrill with friends as you flip slips one by one.</li><li>Transparent Results: Review the 'Full Results Summary' after the game to openly reveal everyone's fate.</li><li>Secure Data: Participant info is never sent to a server and stays only on your current device.</li>"
    },
    "ko": {
        "app_title": "제비뽑기 - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "두근두근 제비뽑기",
        "main_description": "숨겨진 행운의 제비를 찾아보세요.",
        "setup_title": "설정",
        "winner_count_label": "당첨 인원",
        "start_btn": "제비 섞기",
        "reset_btn": "다시 설정",
        "reveal_btn": "결과 확인",
        "turn_text": "<b>{name}</b> 님 차례입니다! 제비를 골라주세요.",
        "all_picked_text": "제비를 모두 골랐습니다! 결과를 확인하세요.",
        "winner_reveal_msg": "🎉 당첨자: <b>{names}</b>",
        "result_summary_title": "전체 결과 요약",
        "winner_text": "당첨!",
        "fail_text": "꽝",
        "player_placeholder": "예) 참가자",
        "error_empty_name": "모든 참가자의 이름을 입력해주세요.",
        "error_duplicate_name": "중복된 참가자 이름이 있습니다.",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "info_title1": "제비뽑기의 역사: 인류의 가장 평등한 결정과 민주주의",
        "info_desc1": "제비뽑기는 성경이나 고대 문헌에서도 찾아볼 수 있을 만큼 인류가 오랫동안 사용해온 결정 방식입니다. 고대 그리스의 아테네에서는 공직자를 선출할 때 투표가 아닌 제비뽑기를 사용했는데, 이는 모든 시민에게 평등한 기회를 제공하고 특정 권력의 독점을 막기 위한 고도의 민주적 장치였습니다. 당시 사람들은 인간의 의지가 아닌 '하늘의 뜻'에 결정을 맡기는 것이 가장 순수하고 정의롭다고 믿었습니다. 오늘날에도 제비뽑기는 가장 직관적이고 다툼 없는 공정한 결정 도구로 전 세계 어디에서나 사랑받고 있습니다.",
        "info_title2": "순서와 확률의 오해: 먼저 뽑는 것이 정말 유리할까?",
        "info_desc2": "제비뽑기를 할 때 흔히 \"먼저 뽑는 것이 유리할까, 나중에 뽑는 것이 유리할까?\"를 고민하곤 합니다. 하지만 수학적으로 제비뽑기는 뽑는 순서와 상관없이 당첨 확률이 완벽하게 동일합니다. 예를 들어 10개의 제비 중 1개가 당첨일 때, 첫 번째 사람이 뽑을 확률은 1/10입니다. 두 번째 사람이 당첨될 확률은 첫 번째 사람이 꽝을 뽑고(9/10) 두 번째 사람이 당첨될 확률(1/9)을 곱한 것으로, 결국 똑같은 1/10이 됩니다. Zeze Hub의 제비뽑기는 이 수학적 공정성을 암호학적 무작위성으로 구현하여 누구에게나 평등한 행운을 제공합니다.",
        "info_title3": "제비뽑기 백배 활용하기: 투명하고 짜릿한 결과 확인",
        "info_desc3": "<li><strong>유연한 당첨 설정:</strong> 단순한 1명 뽑기부터 여러 명의 당첨자를 동시에 가려낼 수 있습니다. 벌칙자 한 명을 정하거나, 반대로 소수의 행운아를 정할 때 상황에 맞춰 설정하세요.</li><li><strong>실시간 확인의 스릴:</strong> 제비를 하나씩 뒤집을 때마다 느껴지는 짜릿한 긴장감을 친구들과 공유해 보세요. Zeze Hub는 애니메이션 효과를 통해 오프라인 제비뽑기의 아날로그적 재미를 디지털로 완벽히 재현합니다.</li><li><strong>투명한 결과 요약:</strong> 게임 종료 후 제공되는 '전체 결과 요약'을 통해 모든 참가자의 운명을 투명하게 공개할 수 있습니다. 입력한 참가자 정보는 서버에 저장되지 않으며, 사생활을 철저히 보호합니다.</li>"
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
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const winnerCountDisplay = document.getElementById('winner-count');
const lotsContainer = document.getElementById('lots-container');
const turnIndicatorContainer = document.getElementById('turn-indicator');
const turnIndicator = document.getElementById('current-turn-text');
const revealBtn = document.getElementById('reveal-btn');
const finalResultSection = document.getElementById('final-result-section');
const resultList = document.getElementById('result-list');

function init() {
    renderInputs();
    applyTranslations();
    setupEventListeners();
}

function renderInputs() {
    const currentValues = Array.from(document.querySelectorAll('.player-name-input')).map(i => i.value);
    
    playerInputsContainer.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'player-input-group flex items-center gap-2 animate-fadeIn';
        div.innerHTML = `
            <span class="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">${i + 1}</span>
            <input type="text" class="player-name-input flex-1 p-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all text-sm" 
                placeholder="${translations[currentLang].player_placeholder} ${i + 1}" value="${currentValues[i] || ''}">
        `;
        playerInputsContainer.appendChild(div);
    }
    playerCountDisplay.textContent = playerCount;
    winnerCountDisplay.textContent = winnerCount;
}

function shuffleLots() {
    lots = [];
    // Initialize with winners and losers
    for (let i = 0; i < playerCount; i++) {
        lots.push({
            isWinner: i < winnerCount,
            playerIndex: null,
            isRevealed: false
        });
    }
    
    // Fisher-Yates Shuffle
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
    
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    finalResultSection.classList.add('hidden');
    revealBtn.classList.add('hidden');
    
    renderLots();
    updateTurnIndicator();
}

function renderLots() {
    lotsContainer.innerHTML = '';
    lots.forEach((lot, index) => {
        const div = document.createElement('div');
        div.className = 'lot-slip bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-primary/5 hover:border-primary transition-all active:scale-95 shadow-sm';
        div.innerHTML = `
            <span class="material-icons text-gray-300 text-3xl slip-icon">help_outline</span>
        `;
        div.addEventListener('click', () => handleLotClick(index, div));
        lotsContainer.appendChild(div);
    });
}

function handleLotClick(index, element) {
    if (isAnimating || lots[index].playerIndex !== null) return;
    
    isAnimating = true;
    lots[index].playerIndex = currentTurnIndex;
    
    element.classList.add('picked');
    const icon = element.querySelector('.slip-icon');
    icon.textContent = 'person';
    icon.classList.remove('text-gray-300');
    icon.classList.add('text-primary');
    
    const nameLabel = document.createElement('span');
    nameLabel.className = 'absolute bottom-2 text-[9px] font-bold text-primary truncate w-full px-2 text-center';
    nameLabel.textContent = players[currentTurnIndex];
    element.appendChild(nameLabel);
    
    currentTurnIndex++;
    
    if (currentTurnIndex < playerCount) {
        setTimeout(() => {
            updateTurnIndicator();
            isAnimating = false;
        }, 300);
    } else {
        setTimeout(() => {
            turnIndicator.innerHTML = translations[currentLang].all_picked_text;
            turnIndicatorContainer.classList.remove('animate-pulse');
            revealBtn.classList.remove('hidden');
            isAnimating = false;
        }, 300);
    }
}

function updateTurnIndicator() {
    turnIndicator.innerHTML = translations[currentLang].turn_text.replace('{name}', players[currentTurnIndex]);
}

function revealAll() {
    revealBtn.classList.add('hidden');
    finalResultSection.classList.remove('hidden');
    
    const slips = document.querySelectorAll('.lot-slip');
    const winners = [];
    
    lots.forEach((lot, index) => {
        const slip = slips[index];
        const icon = slip.querySelector('.slip-icon');
        
        if (lot.isWinner) {
            slip.classList.add('bg-secondary/10', 'border-secondary');
            icon.textContent = 'stars';
            icon.classList.add('text-secondary');
            winners.push(players[lot.playerIndex]);
        } else {
            slip.classList.add('opacity-50');
            icon.textContent = 'close';
            icon.classList.add('text-gray-400');
        }
    });
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6200EE', '#FF9800', '#BB86FC']
    });
    
    renderResultList();
}

function renderResultList() {
    resultList.innerHTML = '';
    
    // Sort lots by player index to show chronological result
    const sortedLots = [...lots].sort((a, b) => a.playerIndex - b.playerIndex);
    
    sortedLots.forEach(lot => {
        const div = document.createElement('div');
        div.className = `flex justify-between items-center p-4 rounded-2xl border ${lot.isWinner ? 'bg-secondary/5 border-secondary/20' : 'bg-gray-50 border-gray-100'}`;
        div.innerHTML = `
            <span class="font-bold text-sm ${lot.isWinner ? 'text-secondary' : 'text-gray-600'}">${players[lot.playerIndex]}</span>
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

    // 언어 버튼 스타일 업데이트 (확실한 초기화 및 재설정)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // 모든 스타일 관련 클래스 완전 초기화
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-gray-50', 'border', 'border-gray-200', 'bg-transparent', 'border-transparent');
        
        if (btn.dataset.lang === currentLang) {
            // 선택된 언어: 보라색 테마 강조
            btn.classList.add('bg-primary', 'text-white', 'font-bold');
        } else {
            // 선택되지 않은 언어: 메뉴 배경색과 동일하게 투명 처리
            btn.classList.add('bg-transparent', 'border-transparent');
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
        if (playerCount < 12) {
            playerCount++;
            renderInputs();
        }
    });
    
    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) {
            playerCount--;
            if (winnerCount >= playerCount) winnerCount = playerCount - 1;
            renderInputs();
        }
    });
    
    document.getElementById('winner-plus').addEventListener('click', () => {
        if (winnerCount < playerCount - 1) {
            winnerCount++;
            winnerCountDisplay.textContent = winnerCount;
        }
    });
    
    document.getElementById('winner-minus').addEventListener('click', () => {
        if (winnerCount > 1) {
            winnerCount--;
            winnerCountDisplay.textContent = winnerCount;
        }
    });

    document.getElementById('start-btn').addEventListener('click', startGame);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        setupSection.classList.remove('hidden');
        gameStage.classList.add('hidden');
        finalResultSection.classList.add('hidden');
    });
    
    revealBtn.addEventListener('click', revealAll);

    // Global Sound & Sidebar
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            const icon = document.getElementById('sound-icon');
            const isMuted = localStorage.getItem('zeze_muted') === 'true';
            localStorage.setItem('zeze_muted', !isMuted);
            icon.textContent = !isMuted ? 'volume_off' : 'volume_up';
            if (!isMuted) icon.classList.add('text-red-500');
            else icon.classList.remove('text-red-500');
        });
        
        // Initial UI
        const isMuted = localStorage.getItem('zeze_muted') === 'true';
        const icon = document.getElementById('sound-icon');
        icon.textContent = isMuted ? 'volume_off' : 'volume_up';
        if (isMuted) icon.classList.add('text-red-500');
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
