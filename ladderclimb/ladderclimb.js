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
        "player_placeholder": "Ex) Player",
        "result_placeholder": "Reward/Penalty",
        "error_duplicate_bars": "Ladder generation error. Please try again.",
        "error_empty_name": "Please enter all participant names.",
        "error_duplicate_name": "Participant names cannot be duplicated.",
        "climbing_msg": "Climbing...",
        "click_to_start": "Click name to start!",
        "click_instruction": "Click on a participant's name to see their ladder path.",
        "winner_msg": "Congratulations! <b>{name}</b> has won!",
        "info_title1": "Origin of Ladder Climb: Amidakuji",
        "info_desc1": "Ladder climbing is a popular decision-making tool in East Asia, known as 'Amidakuji' in Japan. The name comes from the shape of the lines, which were said to resemble the halo (radial lines) of the Amida Buddha. Originally, it involved drawing radial lines to pick lots, but over time it evolved into the vertical lines and horizontal 'bridges' we know today. It has become an essential part of folk play culture in Korea, Japan, and China for things like betting on snacks or assigning roles.",
        "info_title2": "Why is Ladder Climb Mathematically Fair?",
        "info_desc2": "Ladder climbing is fair because it's based on the mathematical principle of 'Permutations.' The horizontal lines in a ladder act as swaps between two adjacent vertical lines. Mathematically, each horizontal line represents a single 'transposition.' No matter how many horizontal lines there are, the starting points and ending points always form a one-to-one correspondence (bijection). This means every participant will arrive at exactly one result without duplicates or omissions, and because the lines are placed randomly, each outcome's probability is equal for everyone.",
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
        "player_placeholder": "예) 참가자",
        "result_placeholder": "당첨 내용",
        "error_duplicate_bars": "사다리 생성 중 오류가 발생했습니다. 다시 시도해주세요.",
        "error_empty_name": "모든 참가자의 이름을 입력해주세요.",
        "error_duplicate_name": "중복된 참가자 이름이 있습니다.",
        "climbing_msg": "내려가는 중...",
        "click_to_start": "이름을 클릭하면 시작됩니다!",
        "click_instruction": "참가자 이름을 클릭하면 해당 참가자의 사다리 결과를 확인할 수 있습니다.",
        "winner_msg": "축하합니다! <b>{name}</b> 님이 당첨되었습니다!",
        "info_title1": "사다리 타기의 유래: 아미다쿠지",
        "info_desc1": "사다리 타기는 동아시아에서 매우 대중적인 결정 도구로, 일본에서는 '아미다쿠지(阿弥陀籤)'라고 불립니다. 이 이름은 과거 사다리 모양이 아미다 부처의 후광(방사형 선)과 닮았다고 해서 붙여진 명칭입니다. 초기에는 부채꼴 모양의 선을 그어 제비를 뽑는 방식이었으나, 시간이 흐르며 오늘날 우리가 아는 수직선과 수평 다리 모양의 사다리 형태로 발전했습니다. 한국, 일본, 중국 등지에서 간식 내기나 역할 분담을 정할 때 없어서는 안 될 민속적인 놀이 문화로 자리 잡았습니다.",
        "info_title2": "사다리 타기는 왜 수학적으로 공정할까?",
        "info_desc2": "사다리 타기가 공정한 이유는 수학의 '치환(Permutation)' 원리에 기반하기 때문입니다. 사다리의 가로선은 인접한 두 세로선의 위치를 맞바꾸는 역할을 합니다. 수학적으로 가로선 하나는 하나의 '전치(Transposition)'에 해당하며, 아무리 많은 가로선이 있더라도 출발점과 도착점은 항상 일대일 대응(Bijection)을 이룹니다. 즉, 어떤 중복이나 누락 없이 모든 참가자가 반드시 하나의 결과에 도달하게 되며, 무작위로 배치된 가로선 덕분에 각 결과에 도달할 확률은 모든 참가자에게 동일하게 보장됩니다.",
        "info_title3": "사다리 타기 활용 팁",
        "info_desc3": "<li>공정한 내기: 참가자 수에 맞춰 가로선이 자동으로 생성되므로 조작의 우려 없이 깨끗한 내기가 가능합니다.</li><li>애니메이션의 긴장감: Zeze Hub의 사다리 타기는 결과가 선을 따라 실시간으로 그려지며 시각적 즐거움을 제공합니다.</li><li>일대일 대응 확인: '전체 결과' 버튼을 통해 모든 인원의 당첨 여부를 한눈에 투명하게 공개할 수 있습니다.</li><li>개인정보 보호: 입력한 친구들의 이름은 서버에 저장되지 않으며, 현재 이용 중인 기기에만 임시 보관됩니다.</li>"
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
    '#4CAF50', '#2196F3', '#9C27B0', '#F44336'
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
const winnerAnnouncement = document.getElementById('winner-announcement');
const winnerText = document.getElementById('winner-text');

// Sound Manager
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
    playTick() {
        if (this.muted || !this.ctx) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.05);
    }
};

function init() {
    applyLanguage();
    renderPlayerInputs();
    setupEventListeners();
    SoundManager.updateMuteUI();
}

function renderPlayerInputs() {
    playerInputsContainer.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'flex gap-3 items-center';
        div.innerHTML = `
            <div class="flex-1 space-y-1">
                <input type="text" class="player-name w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" 
                    placeholder="${translations[currentLang].player_placeholder} ${i+1}" value="${players[i] || ''}">
            </div>
            <div class="material-icons text-gray-300 text-sm">arrow_forward</div>
            <div class="flex-1 space-y-1">
                <input type="text" class="result-text w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-secondary outline-none transition-all" 
                    placeholder="${translations[currentLang].result_placeholder} ${i+1}" value="${results[i] || ''}">
            </div>
        `;
        playerInputsContainer.appendChild(div);
    }
}

function generateLadder() {
    ladderData = Array.from({ length: playerCount }, () => []);
    
    // Ensure every vertical line has at least some horizontal connections
    // and prevent horizontal lines from being at the same height on the same side
    for (let i = 0; i < playerCount - 1; i++) {
        const barCount = 3 + Math.floor(Math.random() * 3); // 3-5 bars between lines
        for (let j = 0; j < barCount; j++) {
            let height;
            let collision = true;
            let attempts = 0;
            
            while (collision && attempts < 20) {
                height = 0.15 + Math.random() * 0.7; // Avoid very top and bottom
                collision = ladderData[i].some(b => Math.abs(b.y - height) < 0.05) || 
                            ladderData[i+1].some(b => Math.abs(b.y - height) < 0.05);
                attempts++;
            }
            
            if (attempts < 20) {
                ladderData[i].push({ y: height, to: i + 1 });
                ladderData[i + 1].push({ y: height, to: i });
            }
        }
    }
    
    // Sort bars by height for each vertical line
    ladderData.forEach(line => line.sort((a, b) => a.y - b.y));
}

function resizeCanvas() {
    const container = document.getElementById('ladder-container');
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    
    canvas.width = (rect.width - 32) * dpr;
    canvas.height = 400 * dpr;
    canvas.style.width = `${rect.width - 32}px`;
    canvas.style.height = `400px`;
    ctx.scale(dpr, dpr);
    
    if (ladderData.length > 0) drawLadder();
}

function drawLadder(highlightPaths = []) {
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = 400;
    const padding = 40;
    const spacing = (w - padding * 2) / (playerCount - 1);
    
    ctx.clearRect(0, 0, w, h);
    
    // Draw Base Vertical Lines
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#E5E7EB';
    
    for (let i = 0; i < playerCount; i++) {
        const x = padding + i * spacing;
        ctx.beginPath();
        ctx.moveTo(x, 20);
        ctx.lineTo(x, h - 20);
        ctx.stroke();
    }
    
    // Draw Horizontal Bars
    ctx.lineWidth = 3;
    for (let i = 0; i < playerCount - 1; i++) {
        const x1 = padding + i * spacing;
        const x2 = padding + (i + 1) * spacing;
        
        ladderData[i].forEach(bar => {
            if (bar.to > i) {
                ctx.beginPath();
                ctx.moveTo(x1, 20 + bar.y * (h - 40));
                ctx.lineTo(x2, 20 + bar.y * (h - 40));
                ctx.stroke();
            }
        });
    }

    // Draw Labels (Players and Results)
    ctx.font = 'bold 12px Roboto';
    ctx.textAlign = 'center';
    
    players.forEach((name, i) => {
        const x = padding + i * spacing;
        const color = playerColors[i % playerColors.length];
        
        // Player Name Bubble
        ctx.fillStyle = completedPlayers.has(i) ? color : '#9CA3AF';
        ctx.beginPath();
        ctx.roundRect(x - 30, h - 15, 60, 20, 10);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(name || `P${i+1}`, x, h - 1);
        
        // Result Name Label (at the top)
        ctx.fillStyle = '#374151';
        ctx.fillText(results[i] || `R${i+1}`, x, 15);
    });

    // Draw Animated Paths
    highlightPaths.forEach(path => {
        ctx.strokeStyle = path.color;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(path.points[0].x, path.points[0].y);
        for (let i = 1; i < path.points.length; i++) {
            ctx.lineTo(path.points[i].x, path.points[i].y);
        }
        ctx.stroke();
    });
}

async function tracePath(playerIndex) {
    if (isAnimating) return;
    isAnimating = true;
    
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = 400;
    const padding = 40;
    const spacing = (w - padding * 2) / (playerCount - 1);
    const color = playerColors[playerIndex % playerColors.length];
    
    let currentXIndex = playerIndex;
    let currentY = 0; // Relative 0 to 1
    const pathPoints = [{ x: padding + playerIndex * spacing, y: h - 20 }];
    
    const barsVisited = new Set();
    
    while (currentY < 1) {
        const currentLineBars = ladderData[currentXIndex];
        const nextBar = currentLineBars.find(b => b.y > currentY);
        
        if (nextBar) {
            // Move to bar height
            const barY = 20 + nextBar.y * (h - 40);
            pathPoints.push({ x: padding + currentXIndex * spacing, y: barY });
            
            // Move across bar
            currentXIndex = nextBar.to;
            pathPoints.push({ x: padding + currentXIndex * spacing, y: barY });
            
            currentY = nextBar.y;
            SoundManager.playTick();
        } else {
            // Move to top
            pathPoints.push({ x: padding + currentXIndex * spacing, y: 20 });
            currentY = 1;
        }
        
        drawLadder([{ color, points: pathPoints }]);
        await new Promise(r => setTimeout(r, 150));
    }
    
    const finalResult = results[currentXIndex] || `Result ${currentXIndex + 1}`;
    playerResultMap[playerIndex] = finalResult;
    completedPlayers.add(playerIndex);
    
    resultSection.classList.remove('hidden');
    resultDisplay.textContent = `${players[playerIndex]} ➔ ${finalResult}`;
    
    // Check if winner
    if (finalResult.includes('당첨') || finalResult.toLowerCase().includes('win')) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        winnerText.innerHTML = translations[currentLang].winner_msg.replace('{name}', players[playerIndex]);
        winnerAnnouncement.classList.remove('hidden');
    }

    isAnimating = false;
    drawLadder();
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
    renderPlayerInputs();
}

function setupEventListeners() {
    document.getElementById('player-plus').addEventListener('click', () => {
        if (playerCount < 8) {
            playerCount++;
            playerCountDisplay.textContent = playerCount;
            renderPlayerInputs();
        }
    });
    
    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) {
            playerCount--;
            playerCountDisplay.textContent = playerCount;
            renderPlayerInputs();
        }
    });

    document.getElementById('start-btn').addEventListener('click', () => {
        const nameInputs = document.querySelectorAll('.player-name');
        const resultInputs = document.querySelectorAll('.result-text');
        
        players = Array.from(nameInputs).map(i => i.value.trim());
        results = Array.from(resultInputs).map(i => i.value.trim());
        
        if (players.some(p => p === '') || results.some(r => r === '')) {
            alert(translations[currentLang].error_empty_name);
            return;
        }

        if (new Set(players).size !== players.length) {
            alert(translations[currentLang].error_duplicate_name);
            return;
        }

        setupSection.classList.add('hidden');
        ladderStage.classList.remove('hidden');
        completedPlayers.clear();
        winnerAnnouncement.classList.add('hidden');
        
        generateLadder();
        resizeCanvas();
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        setupSection.classList.remove('hidden');
        ladderStage.classList.add('hidden');
        resultSection.classList.add('hidden');
    });

    canvas.addEventListener('click', (e) => {
        if (isAnimating) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const w = rect.width;
        const padding = 40;
        const spacing = (w - padding * 2) / (playerCount - 1);
        
        for (let i = 0; i < playerCount; i++) {
            const lineX = padding + i * spacing;
            if (Math.abs(x - lineX) < 30 && y > 350) {
                tracePath(i);
                break;
            }
        }
    });

    document.getElementById('sequential-btn').addEventListener('click', async () => {
        for (let i = 0; i < playerCount; i++) {
            if (!completedPlayers.has(i)) {
                await tracePath(i);
                await new Promise(r => setTimeout(r, 500));
            }
        }
    });

    document.getElementById('all-results-btn').addEventListener('click', () => {
        // Instant show all logic could be here, for now we just sequential all
        document.getElementById('sequential-btn').click();
    });

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

    window.addEventListener('resize', resizeCanvas);
}

document.addEventListener('DOMContentLoaded', init);
