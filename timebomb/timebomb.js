// Time Bomb Game Logic - Multiplayer Version

const translations = {
    "en": {
        "app_title": "Time Bomb - Zeze Hub",
        "app_name": "TIME BOMB",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Bomb Defusal",
        "setup_desc": "Enter participants and set the order.",
        "label_players": "Participants",
        "add_player": "Add Player",
        "start_btn": "Start Mission",
        "turn_suffix": "'s turn!",
        "win_title": "SUCCESS!",
        "win_desc": "Miraculous! You successfully defused the bomb. Everyone is safe.",
        "lose_text": "BOOM!",
        "lose_desc_suffix": " triggered the bomb and failed the mission.",
        "reset_btn": "Restart Mission",
        "new_game_btn": "New Operation",
        "error_min_players": "At least 2 players are needed.",
        "error_empty_name": "Please enter all names.",
        "player_placeholder": "Player ",
        "privacy_policy": "Privacy Policy",
        "fortune_disclaimer": "※ Please enjoy the results for fun only.",
        "guide_title": "User Guide",
        "info_title1": "The Tension and Charm of Random Games",
        "info_desc1": "The Time Bomb game follows in the footsteps of classic 'random' games like Russian Roulette or Pirate Roulette. Its core appeal lies in the powerful immersion that comes from the uncertainty of 'not knowing when it will explode.' Psychologically, this high-tension state stimulates the brain's frontal lobe, temporarily allowing one to forget daily stress and maximizing the sense of relief when the result is revealed. This is why bomb games are the ultimate mood makers at gatherings and parties.",
        "info_title2": "Redefining Urgency Digitally",
        "info_desc2": "Zeze Hub's Time Bomb delivers realistic urgency through visual effects and haptic (vibration) feedback. Like a scene from a classic bomb disposal movie, one of several wires is set as a 'trap.' Designed with cryptographic randomness, the result cannot be predicted by anyone in advance. The structure, where the probability of explosion increases exponentially as wires are cut, provides participants with extreme thrills. Experience the true essence of random games in that short moment of choosing your fateful wire.",
        "info_title3": "Getting More Fun from the Bomb Game",
        "info_desc3": "<li>Player Count Settings: Supports 2 to 8 players, with the number of wires automatically adjusting based on the group size.</li><li>Turn Tracking: The name entry feature clearly shows whose turn it is, ensuring fair gameplay.</li><li>Sound and Vibration: Enable sound settings on the main page for a stronger visual and tactile impact upon explosion.</li><li>Safe Records: Participant names are not sent to any server and stay only within your current browser session.</li>"
    },
    "ko": {
        "app_title": "시한 폭탄 돌리기 - Zeze Hub",
        "app_name": "TIME BOMB",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "공포의 시한 폭탄",
        "setup_desc": "참여자를 입력하고 순서를 정하세요.",
        "label_players": "참여자 명단",
        "add_player": "참여자 추가",
        "start_btn": "작전 시작하기",
        "turn_suffix": "님 차례입니다!",
        "win_title": "해체 성공!",
        "win_desc": "운이 좋으시군요! 폭탄 제거에 성공하셨습니다. 모두가 안전합니다.",
        "lose_text": "BOOM!",
        "lose_desc_suffix": "님이 폭탄을 해제하지 못하고 터트려버렸습니다.",
        "reset_btn": "다시 시작하기",
        "new_game_btn": "새 작전 시작",
        "error_min_players": "최소 2명의 참여자가 필요합니다.",
        "error_empty_name": "모든 이름을 입력해주세요.",
        "player_placeholder": "참여자 ",
        "privacy_policy": "개인정보처리방침",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "guide_title": "사용 가이드",
        "info_title1": "복불복 게임의 긴장감과 매력",
        "info_desc1": "시한 폭탄 게임은 '러시안 룰렛'이나 '해적 룰렛'과 같은 계보를 잇는 고전적인 복불복 게임입니다. 이 게임의 핵심 매력은 '언제 터질지 모른다'는 불확실성에서 오는 강력한 몰입감입니다. 심리학적으로 이러한 고도의 긴장 상태는 뇌의 전두엽을 자극하여 일시적으로 일상의 스트레스를 잊게 만들고, 결과가 나왔을 때의 안도감을 극대화합니다. 친구들과 함께하는 술자리나 파티에서 폭탄 게임이 최고의 분위기 메이커인 이유가 바로 여기에 있습니다.",
        "info_title2": "디지털로 재해석된 긴박감",
        "info_desc2": "Zeze Hub의 시한 폭탄은 시각적 효과와 진동(Haptic Feedback) 피드백을 통해 디지털 환경에서도 실제와 같은 긴박감을 전달합니다. 고전적인 폭탄 해체 영화의 한 장면처럼, 여러 개의 와이어 중 하나가 함정(Trap)으로 설정됩니다. 암호학적 무작위성을 사용하여 그 누구도 미리 결과를 예측할 수 없도록 설계되었으며, 남은 와이어가 줄어들수록 폭발 확률이 기하급수적으로 높아지는 구조는 참가자들에게 극한의 스릴을 제공합니다. 운명의 와이어를 선택하는 그 짧은 순간, 진정한 복불복의 묘미를 느껴보세요.",
        "info_title3": "폭탄 게임 더 재미있게 즐기기",
        "info_desc3": "<li>플레이어 수 설정: 2명부터 최대 8명까지 참여 가능하며, 인원에 따라 와이어 개수가 자동으로 조절됩니다.</li><li>차례 지키기: 이름 입력 기능을 통해 누구의 차례인지 명확히 알 수 있어 공정한 게임 진행이 가능합니다.</li><li>사운드와 진동: 메인 페이지의 사운드 설정을 켜면 폭발 시 더 강력한 시각적/촉각적 타격감을 느낄 수 있습니다.</li><li>안전한 기록: 입력된 참여자 이름은 외부 서버로 전송되지 않으며 오직 현재 브라우저 세션에만 임시 보관됩니다.</li>"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let players = ["", ""];
let currentPlayerIndex = 0;
let trapWireIndex = -1;
let isGameOver = false;
let totalWires = 8;
let timerInterval = null;
let remainingWiresCount = 0;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const currentPlayerNameDisplay = document.getElementById('current-player-name');
const bomb = document.getElementById('bomb');
const digitalTimer = document.getElementById('digital-timer');
const wiresGrid = document.getElementById('wires-panel');
const resultBanner = document.getElementById('result-banner');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

function init() {
    applyTranslations();
    renderPlayerInputs();
    setupEventListeners();
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            if (key === 'turn_suffix') {
                el.textContent = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
    
    // 언어 버튼 스타일 업데이트 (확실한 초기화 및 재설정)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // 모든 스타일 관련 클래스 완전 초기화
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-white/5', 'border', 'border-white/10', 'bg-transparent', 'border-transparent');
        
        if (btn.dataset.lang === currentLang) {
            // 선택된 언어: 무조건 빨간색 테마 강조
            btn.classList.add('bg-primary', 'text-white', 'font-bold');
        } else {
            // 선택되지 않은 언어: 메뉴 배경색과 동일하게 투명 처리
            btn.classList.add('bg-transparent', 'border-transparent');
        }
    });

    if (isGameOver) {
        if (remainingWiresCount === 1) {
            resultTitle.textContent = translations[currentLang].win_title;
            resultDesc.textContent = translations[currentLang].win_desc;
        } else {
            resultTitle.textContent = translations[currentLang].lose_text;
            resultDesc.innerHTML = `<span class="text-white font-bold">${players[currentPlayerIndex]}</span>${translations[currentLang].lose_desc_suffix}`;
        }
    }
}

function saveCurrentNames() {
    const inputs = document.querySelectorAll('.player-name-input');
    inputs.forEach((input, index) => {
        if (players[index] !== undefined) {
            players[index] = input.value;
        }
    });
}

function renderPlayerInputs() {
    playerInputsContainer.innerHTML = '';
    
    players.forEach((name, index) => {
        const div = document.createElement('div');
        div.className = 'flex gap-2 items-center animate-fadeIn';
        div.innerHTML = `
            <input type="text" class="player-name-input flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" 
                placeholder="${translations[currentLang].player_placeholder}${index + 1}" value="${name}">
            ${players.length > 2 ? `<button class="remove-player-btn text-gray-600 hover:text-primary transition-colors" data-index="${index}"><span class="material-icons">remove_circle</span></button>` : ''}
        `;
        playerInputsContainer.appendChild(div);
    });
    playerCountDisplay.textContent = `${players.length}/8`;
}

function startGame() {
    saveCurrentNames();
    const names = players.map(n => n.trim()).filter(n => n !== "");
    
    if (names.length < 2) {
        alert(translations[currentLang].error_min_players);
        return;
    }
    
    players = names;
    currentPlayerIndex = 0;
    isGameOver = false;
    
    totalWires = Math.max(6, Math.min(players.length * 2, 12));
    remainingWiresCount = totalWires;
    trapWireIndex = Math.floor(Math.random() * totalWires);
    
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    
    resetUI();
    updateTurnDisplay();
    startTimerAnimation();
    renderWires();
}

function resetUI() {
    bomb.classList.remove('exploded');
    document.body.classList.remove('screen-shake');
    resultBanner.style.opacity = '0';
    resultBanner.classList.add('scale-90');
    resultTitle.classList.remove('text-success');
    resultTitle.classList.add('text-primary');
}

function updateTurnDisplay() {
    currentPlayerNameDisplay.textContent = players[currentPlayerIndex];
}

function renderWires() {
    wiresGrid.innerHTML = '';
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'white', 'red', 'blue', 'green', 'yellow'];
    
    for (let i = 0; i < totalWires; i++) {
        const wireRow = document.createElement('div');
        wireRow.className = 'wire-row';
        wireRow.dataset.color = colors[i % colors.length];
        wireRow.innerHTML = `
            <div class="connector left"></div>
            <div class="wire-cable"></div>
            <div class="connector right"></div>
        `;
        
        wireRow.addEventListener('click', () => handleWireClick(i, wireRow));
        wiresGrid.appendChild(wireRow);
    }
}

function handleWireClick(index, element) {
    if (isGameOver || element.classList.contains('cut')) return;
    
    element.classList.add('cut');
    remainingWiresCount--;
    
    const isMuted = localStorage.getItem('zeze_muted') === 'true';

    if (index === trapWireIndex) {
        explode();
    } else if (remainingWiresCount === 1) {
        win();
    } else {
        if (!isMuted && "vibrate" in navigator) navigator.vibrate(20);
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateTurnDisplay();
    }
}

function explode() {
    isGameOver = true;
    clearInterval(timerInterval);
    
    bomb.classList.add('exploded');
    document.body.classList.add('screen-shake');
    
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    
    const isMuted = localStorage.getItem('zeze_muted') === 'true';

    setTimeout(() => {
        resultTitle.textContent = translations[currentLang].lose_text;
        resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-primary";
        resultDesc.innerHTML = `<span class="text-white font-bold">${players[currentPlayerIndex]}</span>${translations[currentLang].lose_desc_suffix}`;
        
        resultBanner.style.opacity = '1';
        resultBanner.classList.remove('scale-90');
        
        if (!isMuted && "vibrate" in navigator) navigator.vibrate([100, 50, 200, 50, 300]);
        
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#FF3D00', '#FFD600', '#FFFFFF', '#444444']
        });
    }, 200);
}

function win() {
    isGameOver = true;
    clearInterval(timerInterval);
    
    resultTitle.textContent = translations[currentLang].win_title;
    resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-success";
    resultDesc.textContent = translations[currentLang].win_desc;
    
    resultBanner.style.opacity = '1';
    resultBanner.classList.remove('scale-90');
    
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#00E676', '#FFFFFF', '#FFD600']
    });
}

function startTimerAnimation() {
    timerInterval = setInterval(() => {
        if (isGameOver) return;
        const ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
        const sec = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        digitalTimer.textContent = `00:${sec}:${ms}`;
    }, 85);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    renderPlayerInputs();
}

function setupEventListeners() {
    document.getElementById('add-player-btn').addEventListener('click', () => {
        if (players.length < 8) {
            saveCurrentNames();
            players.push("");
            renderPlayerInputs();
        }
    });

    playerInputsContainer.addEventListener('click', (e) => {
        if (e.target.closest('.remove-player-btn')) {
            saveCurrentNames();
            const index = parseInt(e.target.closest('.remove-player-btn').dataset.index);
            players.splice(index, 1);
            renderPlayerInputs();
        }
    });

    playerInputsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('player-name-input')) {
            saveCurrentNames();
        }
    });

    document.getElementById('start-game-btn').addEventListener('click', startGame);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        gameStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
    });

    document.getElementById('reset-game-menu').addEventListener('click', () => {
        gameStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.remove('translate-x-full');
        document.getElementById('sidebar-overlay').classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', init);
