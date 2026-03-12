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
        "label_wires": "Number of Wires",
        "add_player": "Add Player",
        "start_btn": "Start Mission",
        "turn_suffix": "'s turn!",
        "bomb_exploded_status": "BOMB EXPLODED!",
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
        "footer_copyright": "© 2026 Zeze Decision Hub.",
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
        "label_wires": "와이어 개수",
        "add_player": "참여자 추가",
        "start_btn": "작전 시작하기",
        "turn_suffix": "님 차례입니다!",
        "bomb_exploded_status": "폭탄이 터졌습니다!",
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
        "footer_copyright": "© 2026 Zeze Decision Hub.",
        "guide_title": "사용 가이드",
        "info_title1": "복불복 게임의 긴장감과 매력: 찰나의 순간에 마주하는 운명",
        "info_desc1": "시한 폭탄 게임은 '러시안 룰렛'이나 '해적 룰렛'과 같은 계보를 잇는 고전적인 복불복 게임의 디지털 진화형입니다. 이 게임의 핵심 매력은 '언제 터질지 모른다'는 불확실성에서 오는 강력한 몰입감과 아드레날린의 분출입니다. 심리학적으로 이러한 고도의 긴장 상태는 뇌의 전두엽을 일시적으로 강하게 자극하여 일상의 자잘한 스트레스를 잊게 만들고, 폭발을 피했을 때의 안도감을 극대화하는 효과가 있습니다. 친구들과 함께하는 술자리나 파티에서 폭탄 게임이 최고의 분위기 메이커로 손꼽히는 이유는 바로 이 공동의 긴장감과 해방감을 공유하기 때문입니다.",
        "info_title2": "디지털로 재해석된 긴박감: 시각과 촉각의 조화",
        "info_desc2": "Zeze Hub의 시한 폭탄은 단순한 무작위 선택을 넘어, 정교한 시각적 효과와 진동(Haptic Feedback) 피드백을 통해 디지털 환경에서도 실제와 같은 긴박감을 전달합니다. 고전적인 폭탄 해체 영화의 한 장면처럼, 여러 개의 와이어 중 단 하나만이 치명적인 함정으로 설정됩니다. 암호학적 무작위성을 사용하여 그 누구도 미리 결과를 예측하거나 조작할 수 없도록 설계되었으며, 남은 와이어가 줄어들수록 폭발 확률이 기하급수적으로 높아지는 구조는 참가자들에게 매 순간 최고의 스릴을 제공합니다. 운명의 와이어를 선택하는 그 짧은 멈춤의 순간, 진정한 복불복의 묘미를 경험해 보세요.",
        "info_title3": "폭탄 게임 더 재미있게 즐기기: 상황별 활용 팁",
        "info_desc3": "<li><strong>인원에 최적화된 설정:</strong> 2명부터 최대 8명까지 참여 가능하며, 인원에 따라 와이어의 개수가 자동으로 조절되어 최적의 확률 밸런스를 유지합니다. 적은 인원일 때는 빠른 승부를, 많은 인원일 때는 긴 호흡의 게임을 즐길 수 있습니다.</li><li><strong>명확한 차례 시스템:</strong> 이름 입력 기능을 통해 누구의 차례인지 명확히 표시되므로 공정한 게임 진행이 가능합니다. 긴박한 타이머 소리와 함께 자신의 이름이 호명될 때의 전율을 느껴보세요.</li><li><strong>강력한 사운드와 진동:</strong> 메인 페이지의 사운드 설정을 켜면 폭발 시 더 강력한 시각적/청각적 타격감을 느낄 수 있습니다. 모바일 기기라면 손끝으로 전해지는 진동이 게임의 몰입도를 정점으로 끌어올립니다.</li><li><strong>안전한 로컬 기록:</strong> 입력된 참여자 이름과 모든 게임 데이터는 외부 서버로 전송되지 않으며 오직 당신의 브라우저 세션에만 머무릅니다. 개인 정보 유출 걱정 없이 마음껏 즐기세요.</li>"
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
let cutWires = [];

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const wireCountDisplay = document.getElementById('wire-count');
const currentPlayerNameDisplay = document.getElementById('current-player-name');
const turnIndicatorBox = document.getElementById('turn-indicator');
const turnIndicatorTextContainer = turnIndicatorBox ? turnIndicatorBox.querySelector('span.text-sm') : null;
const bomb = document.getElementById('bomb');
const digitalTimer = document.getElementById('digital-timer');
const wiresGrid = document.getElementById('wires-panel');
const resultBanner = document.getElementById('result-banner');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

// 🎵 Sound Manager
const SoundManager = {
    ctx: null,
    muted: localStorage.getItem('zeze_muted') === 'true',
    tickTimer: null,
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
        if (this.muted) this.stopTick();
        else {
            this.init();
            if (!isGameOver && setupSection && setupSection.classList.contains('hidden')) this.startTick();
        }
    },
    startTick() {
        if (this.muted || this.tickTimer) return;
        this.init();
        this.tickTimer = setInterval(() => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.setValueAtTime(800, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(); osc.stop(this.ctx.currentTime + 0.05);
        }, 1000);
    },
    stopTick() {
        if (this.tickTimer) {
            clearInterval(this.tickTimer);
            this.tickTimer = null;
        }
    },
    playCut() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.1);
    },
    playExplosion() {
        if (this.muted) return;
        this.init();
        const bufSize = this.ctx.sampleRate * 1.5;
        const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buf;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 1);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.2);
        noise.connect(filter); filter.connect(gain); gain.connect(this.ctx.destination);
        noise.start();
    },
    playWin() {
        if (this.muted) return;
        this.init();
        [440, 554.37, 659.25].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (i * 0.1));
            gain.gain.setValueAtTime(0.1, this.ctx.currentTime + (i * 0.1));
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + (i * 0.1));
            osc.stop(this.ctx.currentTime + 0.5);
        });
    }
};

function init() {
    applyTranslations();
    const perfEntries = performance.getEntriesByType('navigation');
    const isReload = perfEntries.length > 0 && perfEntries[0].type === 'reload';
    if (isReload) loadState();
    else { 
        clearState(); 
        renderPlayerInputs();
        totalWires = 8; 
        if(wireCountDisplay) wireCountDisplay.textContent = totalWires;
    }
    setupEventListeners();
    SoundManager.updateMuteUI();
}

function saveState() {
    const state = { players, currentPlayerIndex, trapWireIndex, isGameOver, totalWires, remainingWiresCount, cutWires, setupVisible: setupSection ? !setupSection.classList.contains('hidden') : true };
    localStorage.setItem('zeze_timebomb_state', JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem('zeze_timebomb_state');
    if (!saved) { renderPlayerInputs(); return; }
    const state = JSON.parse(saved);
    players = state.players; currentPlayerIndex = state.currentPlayerIndex; trapWireIndex = state.trapWireIndex;
    isGameOver = state.isGameOver; totalWires = state.totalWires; remainingWiresCount = state.remainingWiresCount;
    cutWires = state.cutWires || []; renderPlayerInputs();
    if(wireCountDisplay) wireCountDisplay.textContent = totalWires;
    
    if (!state.setupVisible && setupSection) {
        setupSection.classList.add('hidden'); gameStage.classList.remove('hidden');
        resetUI(); updateTurnDisplay(); startTimerAnimation(); renderWires();
        if (isGameOver) { clearInterval(timerInterval); if (remainingWiresCount === 1) win(true); else explode(true); }
        else SoundManager.startTick();
    }
}

function clearState() {
    localStorage.removeItem('zeze_timebomb_state');
    SoundManager.stopTick();
}

function renderResultDesc() {
    if (!resultDesc) return;
    const name = players[currentPlayerIndex];
    const fullSuffix = translations[currentLang].lose_desc_suffix;
    
    if (currentLang === 'ko') {
        const namePart = name + "님이";
        const restPart = fullSuffix.replace("님이 ", "");
        resultDesc.innerHTML = `<span class="text-orange-500 text-xl font-black">${namePart}</span><br>${restPart}`;
    } else {
        resultDesc.innerHTML = `<span class="text-orange-500 text-xl font-black block mb-1">${name}</span>${fullSuffix}`;
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            if (key === 'turn_suffix') el.textContent = translations[currentLang][key];
            else el.innerHTML = translations[currentLang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-white/5', 'border', 'border-white/10', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) btn.classList.add('bg-primary', 'text-white', 'font-bold');
        else btn.classList.add('bg-transparent', 'border-transparent');
    });
    if (isGameOver) {
        updateTurnDisplay(); // 터진 상태 문구 반영
        if (remainingWiresCount === 1) { 
            resultTitle.textContent = translations[currentLang].win_title; 
            resultDesc.textContent = translations[currentLang].win_desc; 
        }
        else { 
            resultTitle.textContent = translations[currentLang].lose_text; 
            renderResultDesc();
        }
    }
}

function saveCurrentNames() {
    const inputs = document.querySelectorAll('.player-name-input');
    inputs.forEach((input, index) => { if (players[index] !== undefined) players[index] = input.value; });
}

function renderPlayerInputs() {
    if (!playerInputsContainer) return;
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
    if (playerCountDisplay) playerCountDisplay.textContent = `${players.length}/8`;
}

function startGame() {
    saveCurrentNames();
    const names = players.map(n => n.trim()).filter(n => n !== "");
    if (names.length < 2) { alert(translations[currentLang].error_min_players); return; }
    
    players = names; currentPlayerIndex = 0; isGameOver = false;
    remainingWiresCount = totalWires; trapWireIndex = Math.floor(Math.random() * totalWires);
    cutWires = new Array(totalWires).fill(false);
    
    if (setupSection) setupSection.classList.add('hidden'); 
    if (gameStage) gameStage.classList.remove('hidden');
    resetUI(); updateTurnDisplay(); startTimerAnimation(); renderWires(); saveState();
    SoundManager.startTick();
}

function resetUI() {
    if (bomb) bomb.classList.remove('exploded'); 
    document.body.classList.remove('screen-shake');
    if (resultBanner) {
        resultBanner.style.opacity = '0'; 
        resultBanner.style.pointerEvents = 'none'; 
        resultBanner.classList.add('scale-90');
    }
    if (resultTitle) {
        resultTitle.classList.remove('text-success'); 
        resultTitle.classList.add('text-primary');
    }
    // 인디케이터 초기화
    if (turnIndicatorBox) {
        turnIndicatorBox.classList.remove('bg-red-500/20', 'border-red-500/30');
        turnIndicatorBox.classList.add('bg-primary/10', 'border-primary/20');
    }
}

function updateTurnDisplay() {
    if (isGameOver) {
        if (remainingWiresCount > 1) { // 꽝
            if (turnIndicatorBox) {
                turnIndicatorBox.classList.remove('bg-primary/10', 'border-primary/20');
                turnIndicatorBox.classList.add('bg-red-500/20', 'border-red-500/30');
            }
            if (turnIndicatorTextContainer) {
                turnIndicatorTextContainer.innerHTML = `<span class="text-red-500 font-black animate-bounce">${translations[currentLang].bomb_exploded_status}</span>`;
            }
        }
    } else {
        if (currentPlayerNameDisplay) currentPlayerNameDisplay.textContent = players[currentPlayerIndex];
        // 차례 문구 복구 (언어 전환 등 대응)
        if (turnIndicatorTextContainer) {
            turnIndicatorTextContainer.innerHTML = `<span id="current-player-name" class="text-primary text-base mr-1">${players[currentPlayerIndex]}</span>${translations[currentLang].turn_suffix}`;
        }
    }
}

function renderWires() {
    if (!wiresGrid) return;
    wiresGrid.innerHTML = '';
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'white', 'red', 'blue', 'green', 'yellow'];
    for (let i = 0; i < totalWires; i++) {
        const wireRow = document.createElement('div');
        wireRow.className = 'wire-row';
        if (cutWires[i]) wireRow.classList.add('cut');
        wireRow.dataset.color = colors[i % colors.length];
        wireRow.innerHTML = `<div class="connector left"></div><div class="wire-cable"></div><div class="connector right"></div>`;
        wireRow.addEventListener('click', () => handleWireClick(i, wireRow));
        wiresGrid.appendChild(wireRow);
    }
}

function handleWireClick(index, element) {
    if (isGameOver || element.classList.contains('cut')) return;
    element.classList.add('cut'); cutWires[index] = true; remainingWiresCount--;
    const isMuted = localStorage.getItem('zeze_muted') === 'true';
    SoundManager.playCut();
    if (index === trapWireIndex) explode();
    else if (remainingWiresCount === 1) win();
    else {
        if (!isMuted && "vibrate" in navigator) navigator.vibrate(20);
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateTurnDisplay(); saveState();
    }
}

function explode(noAnim = false) {
    isGameOver = true; clearInterval(timerInterval); SoundManager.stopTick();
    if (bomb) bomb.classList.add('exploded');
    if (!noAnim) { document.body.classList.add('screen-shake'); setTimeout(() => document.body.classList.remove('screen-shake'), 500); SoundManager.playExplosion(); }
    
    updateTurnDisplay(); // 멘트 즉시 변경

    setTimeout(() => {
        if (resultTitle) {
            resultTitle.textContent = translations[currentLang].lose_text;
            resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-primary";
        }
        renderResultDesc();
        if (resultBanner) {
            resultBanner.style.opacity = '1'; 
            resultBanner.style.pointerEvents = 'auto'; 
            resultBanner.classList.remove('scale-90');
        }
        if (!noAnim) {
            const isMuted = localStorage.getItem('zeze_muted') === 'true';
            if (!isMuted && "vibrate" in navigator) navigator.vibrate([100, 50, 200, 50, 300]);
            confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 }, colors: ['#FF3D00', '#FFD600', '#FFFFFF', '#444444'] });
        }
        saveState();
    }, noAnim ? 0 : 200);
}

function win(noAnim = false) {
    isGameOver = true; clearInterval(timerInterval); SoundManager.stopTick();
    if (resultTitle) {
        resultTitle.textContent = translations[currentLang].win_title;
        resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-success";
    }
    if (resultDesc) resultDesc.textContent = translations[currentLang].win_desc;
    if (resultBanner) {
        resultBanner.style.opacity = '1'; 
        resultBanner.style.pointerEvents = 'auto'; 
        resultBanner.classList.remove('scale-90');
    }
    if (!noAnim) { SoundManager.playWin(); confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 }, colors: ['#00E676', '#FFFFFF', '#FFD600'] }); }
    saveState();
}

function startTimerAnimation() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (isGameOver || !digitalTimer) return;
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
    const addPlayerBtn = document.getElementById('add-player-btn');
    if (addPlayerBtn) addPlayerBtn.addEventListener('click', () => { if (players.length < 8) { saveCurrentNames(); players.push(""); renderPlayerInputs(); saveState(); } });
    
    if (playerInputsContainer) {
        playerInputsContainer.addEventListener('click', (e) => { if (e.target.closest('.remove-player-btn')) { saveCurrentNames(); const index = parseInt(e.target.closest('.remove-player-btn').dataset.index); players.splice(index, 1); renderPlayerInputs(); saveState(); } });
        playerInputsContainer.addEventListener('input', (e) => { if (e.target.classList.contains('player-name-input')) { saveCurrentNames(); saveState(); } });
    }
    
    const wirePlus = document.getElementById('wire-plus');
    const wireMinus = document.getElementById('wire-minus');
    
    if (wirePlus) {
        wirePlus.addEventListener('click', () => {
            if (totalWires < 20) {
                totalWires++;
                if (wireCountDisplay) wireCountDisplay.textContent = totalWires;
                saveState();
            }
        });
    }
    
    if (wireMinus) {
        wireMinus.addEventListener('click', () => {
            if (totalWires > 4) {
                totalWires--;
                if (wireCountDisplay) wireCountDisplay.textContent = totalWires;
                saveState();
            }
        });
    }

    const startGameBtn = document.getElementById('start-game-btn');
    if (startGameBtn) startGameBtn.addEventListener('click', startGame);
    
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => { 
            clearState(); 
            if (gameStage) gameStage.classList.add('hidden'); 
            if (setupSection) setupSection.classList.remove('hidden'); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const resetMenuBtn = document.getElementById('reset-game-menu');
    if (resetMenuBtn) {
        resetMenuBtn.addEventListener('click', () => { 
            clearState(); 
            if (gameStage) gameStage.classList.add('hidden'); 
            if (setupSection) setupSection.classList.remove('hidden'); 
            document.getElementById('sidebar-menu').classList.add('translate-x-full'); 
            document.getElementById('sidebar-overlay').classList.add('hidden'); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.addEventListener('click', () => { document.getElementById('sidebar-menu').classList.remove('translate-x-full'); document.getElementById('sidebar-overlay').classList.remove('hidden'); });
    
    const closeMenu = document.getElementById('close-menu');
    if (closeMenu) closeMenu.addEventListener('click', () => { document.getElementById('sidebar-menu').classList.add('translate-x-full'); if (sidebarOverlay) sidebarOverlay.classList.add('hidden'); });
    
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', () => { document.getElementById('sidebar-menu').classList.add('translate-x-full'); sidebarOverlay.classList.add('hidden'); });
    
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.addEventListener('click', () => setLanguage(btn.dataset.lang)); });
    
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) soundToggle.addEventListener('click', () => SoundManager.toggleMute());
}

document.addEventListener('DOMContentLoaded', init);
