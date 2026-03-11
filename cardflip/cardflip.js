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
        "mode_desc_number": "Use this to decide the order of turns or ranking. Numbers are hidden randomly.",
        "mode_desc_custom": "Enter your own penalties or rewards! Great for drinking games or picking chores.",
        "mode_desc_icon": "Check your luck for today with symbolic icons. Trust your intuition and pick one.",
        "mode_desc_advice": "Need a sign or mental remedy? Choose this mode for a special message for your heart.",
        "custom_label": "Enter Card Contents",
        "label_card_count": "Number of Cards",
        "start_btn": "Shuffle Cards",
        "reset_btn": "Reset",
        "reveal_all_btn": "Reveal All",
        "game_instruction": "Click a card to flip it!",
        "instruction_limit_1": "You can pick only <b>1</b> card for this mode.",
        "error_empty_custom": "Please fill in all card contents.",
        "last_result_label": "Last Result",
        "winner_text": "WINNER!",
        "fail_text": "FAIL",
        "fortune_disclaimer": "※ Please enjoy the results of this service for fun only.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "info_title1": "History and Symbolism of Cards",
        "info_desc1": "Card-based divination and decision-making have existed in various civilizations, including ancient China and India, long before the Tarot cards of medieval Europe. Cards symbolize 'unknown destiny' through the duality of a hidden back and a revealed front. The process of shuffling is an act of creating new order out of chaos, and choosing one is a psychological projection of deciding your own path among countless possibilities. Today, card flipping is widely used as a tool for self-reflection and awakening intuition beyond a simple game.",
        "info_title2": "Psychological Effects of Images and Language",
        "info_desc2": "Zeze Hub's Card Flip offers not just numbers but also Icon and Advice modes. Psychologically, visual images (icons) and short texts stimulate both the right and left brain simultaneously, helping you find creative answers that are hard to reach through logical thinking alone. The process of thinking 'What is this card trying to tell me?' serves as meditation that focuses you on your inner voice. Meet the message you need through a cryptographically protected random shuffle.",
        "info_title3": "Card Flip Usage Tips",
        "info_desc3": "<li>Deciding Order: Use 'Number Mode' to determine presentation orders or pick penalty-takers at gatherings.</li><li>Daily Guide: Get a positive message for your day through 'Advice Mode.'</li><li>Custom Mode: Create your own unique deck by entering bets or options directly.</li><li>Data Security: All custom text entered by the user is not stored on a server and is processed safely only on the device.</li>"
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
        "mode_desc_number": "발표 순서를 정하거나 등수를 매길 때 사용하세요. 숫자가 무작위로 숨겨집니다.",
        "mode_desc_custom": "벌칙이나 상품을 직접 입력해보세요! 술자리 게임이나 집안일 정하기에 좋습니다.",
        "mode_desc_icon": "오늘의 운세를 상징적인 아이콘으로 확인하세요. 직감을 믿고 한 장만 골라보세요.",
        "mode_desc_advice": "마음의 위로가 필요하거나 결정을 위한 신호가 필요할 때 사용하세요. 특별한 메시지를 전합니다.",
        "custom_label": "카드 내용 입력",
        "label_card_count": "카드 개수",
        "start_btn": "카드 셔플하기",
        "reset_btn": "초기화",
        "reveal_all_btn": "전체 공개",
        "game_instruction": "카드를 클릭하여 뒤집어보세요!",
        "instruction_limit_1": "이 모드에서는 <b>1장</b>의 카드만 고를 수 있습니다.",
        "error_empty_custom": "모든 카드 내용을 입력해주세요.",
        "last_result_label": "방금 확인한 카드",
        "winner_text": "당첨!",
        "fail_text": "꽝",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "info_title1": "카드의 역사와 상징성",
        "info_desc1": "카드를 이용한 점술과 결정은 중세 유럽의 타로 카드 이전부터 고대 중국과 인도 등 다양한 문명권에서 존재해왔습니다. 카드는 보이지 않는 뒷면과 드러나는 앞면이라는 이중성을 통해 '미지의 운명'을 상징합니다. 셔플(Shuffle) 과정은 혼돈 속에서 새로운 질서를 만드는 행위이며, 그중 하나를 선택하는 것은 수많은 가능성 중에서 자신만의 길을 결정하는 심리적 투영입니다. 오늘날 카드 뒤집기는 단순한 게임을 넘어 자아 성찰과 직관을 깨우는 도구로 널리 쓰이고 있습니다.",
        "info_title2": "이미지와 언어가 주는 심리적 효과",
        "info_desc2": "Zeze Hub의 카드 뒤집기는 단순한 숫자뿐만 아니라 아이콘과 조언(Advice) 모드를 제공합니다. 심리학적으로 시각적 이미지(아이콘)와 짧은 텍스트는 뇌의 우뇌와 좌뇌를 동시에 자극하여, 논리적인 생각만으로는 도달하기 힘든 창의적인 해답을 찾도록 돕습니다. \"이 카드가 나에게 무엇을 말하려 하는가?\"를 생각하는 과정 자체가 내면의 목소리에 집중하게 만드는 명상의 역할을 합니다. 암호학적으로 보호된 무작위 셔플을 통해 당신에게 꼭 필요한 메시지를 만나보세요.",
        "info_title3": "카드 뒤집기 활용 팁",
        "info_desc3": "<li>순서 정하기: 친구들과 모임에서 발표 순서나 벌칙자를 정할 때 '숫자 모드'를 사용하세요.</li><li>오늘의 가이드: '심리/조언 모드'를 통해 오늘 하루를 살아갈 긍정적인 메시지를 받아보세요.</li><li>커스텀 모드: 내기 내용이나 선택지를 직접 입력하여 당신만의 독특한 카드 덱을 만들 수 있습니다.</li><li>데이터 보안: 사용자가 입력한 모든 커스텀 텍스트는 서버에 저장되지 않으며 기기 내에서만 안전하게 처리됩니다.</li>"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let cardCount = 4;
let currentMode = 'number';
let cards = []; // Array of { content: string, dataIndex: number|null, isWinner: boolean, isRevealed: boolean, originalPoolIndex: number|null }
let storytellingData = null;
let lastFlippedCardIndex = null;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const cardsContainer = document.getElementById('cards-container');
const cardCountDisplay = document.getElementById('card-count');
const customInputsArea = document.getElementById('custom-inputs-area');
const customInputsList = document.getElementById('custom-inputs-list');
const storyResultSection = document.getElementById('story-result-section');
const instructionText = document.getElementById('game-instruction-text');
const modeDescription = document.getElementById('mode-description');

async function init() {
    await loadStorytellingData();
    applyLanguage();
    setupEventListeners();
    renderCustomInputs();
    updateModeDescription();
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
    }
};

function renderCustomInputs() {
    customInputsList.innerHTML = '';
    for (let i = 0; i < cardCount; i++) {
        const div = document.createElement('div');
        div.className = 'flex gap-2';
        div.innerHTML = `
            <div class="w-8 h-10 flex items-center justify-center font-black text-gray-400 text-xs">${i + 1}</div>
            <input type="text" class="custom-card-input flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-primary outline-none transition-all" 
                placeholder="내용 입력" maxlength="20">
        `;
        customInputsList.appendChild(div);
    }
}

function updateModeDescription() {
    const key = `mode_desc_${currentMode}`;
    modeDescription.innerHTML = translations[currentLang][key] || "";
}

function applyLanguage() {
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
    applyLanguage();
    updateModeDescription();
}

function shuffleCards() {
    const inputs = document.querySelectorAll('.custom-card-input');
    const customContents = Array.from(inputs).map(i => i.value.trim());

    if (currentMode === 'custom' && customContents.some(c => c === "")) {
        alert(translations[currentLang].error_empty_custom);
        return;
    }

    cards = [];
    let pool = [];

    if (currentMode === 'number') {
        pool = Array.from({ length: cardCount }, (_, i) => ({ content: (i + 1).toString(), isWinner: false }));
    } else if (currentMode === 'custom') {
        pool = customContents.map(c => ({ content: c, isWinner: false }));
    } else if (currentMode === 'icon' || currentMode === 'advice') {
        const source = storytellingData[currentMode][currentLang];
        // Cryptographically random pick from source
        const randomValues = new Uint32Array(cardCount);
        window.crypto.getRandomValues(randomValues);
        pool = Array.from(randomValues).map(v => {
            const idx = v % source.length;
            return { content: source[idx].title, originalPoolIndex: idx, isWinner: false };
        });
    }

    // Fisher-Yates Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    cards = pool.map(p => ({ ...p, isRevealed: false }));

    renderCards();
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    storyResultSection.classList.add('hidden');
    instructionText.innerHTML = translations[currentLang].game_instruction;
}

function renderCards() {
    cardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-wrapper aspect-[3/4] perspective-1000';
        cardEl.innerHTML = `
            <div class="card-inner relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer">
                <div class="card-front absolute inset-0 bg-primary rounded-2xl flex items-center justify-center border-4 border-white/20 shadow-lg backface-hidden">
                    <span class="material-icons text-white text-4xl opacity-40">style</span>
                </div>
                <div class="card-back absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center border-2 border-primary/20 shadow-xl backface-hidden rotate-y-180 overflow-hidden p-2">
                    ${currentMode === 'icon' ? `<span class="material-icons text-primary text-3xl mb-1">${storytellingData.icon[currentLang][card.originalPoolIndex]?.icon || 'stars'}</span>` : ''}
                    <span class="card-content-text font-black text-gray-800 text-center break-keep leading-tight ${card.content.length > 6 ? 'text-xs' : 'text-lg'}">${card.content}</span>
                </div>
            </div>
        `;
        cardEl.addEventListener('click', () => flipCard(index, cardEl));
        cardsContainer.appendChild(cardEl);
    });
}

function flipCard(index, element) {
    if (cards[index].isRevealed) return;

    // Limit check for icon/advice mode (only 1 pick allowed)
    if ((currentMode === 'icon' || currentMode === 'advice') && cards.some(c => c.isRevealed)) {
        instructionText.innerHTML = translations[currentLang].instruction_limit_1;
        return;
    }

    cards[index].isRevealed = true;
    const inner = element.querySelector('.card-inner');
    inner.classList.add('rotate-y-180');
    SoundManager.playFlip();

    if (currentMode === 'icon' || currentMode === 'advice') {
        showStoryResult(index);
    }
}

function showStoryResult(index) {
    const card = cards[index];
    const data = storytellingData[currentMode][currentLang][card.originalPoolIndex];
    
    document.getElementById('story-icon').textContent = (currentMode === 'icon' ? storytellingData.icon[currentLang][card.originalPoolIndex]?.icon : 'auto_fix_high') || 'auto_fix_high';
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-desc').textContent = data.desc;
    
    storyResultSection.classList.remove('hidden');
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.8 }, colors: ['#6200EE', '#FF0266', '#FFFFFF'] });
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-primary');
                b.classList.add('text-gray-500');
            });
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-gray-500');
            
            currentMode = btn.dataset.mode;
            customInputsArea.classList.toggle('hidden', currentMode !== 'custom');
            updateModeDescription();
        });
    });

    document.getElementById('count-plus').addEventListener('click', () => {
        if (cardCount < 12) {
            cardCount++;
            cardCountDisplay.textContent = cardCount;
            renderCustomInputs();
        }
    });

    document.getElementById('count-minus').addEventListener('click', () => {
        if (cardCount > 2) {
            cardCount--;
            cardCountDisplay.textContent = cardCount;
            renderCustomInputs();
        }
    });

    document.getElementById('start-btn').addEventListener('click', shuffleCards);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        setupSection.classList.remove('hidden');
        gameStage.classList.add('hidden');
        storyResultSection.classList.add('hidden');
    });

    document.getElementById('reveal-all-btn').addEventListener('click', () => {
        document.querySelectorAll('.card-inner').forEach((el, i) => {
            if (!cards[i].isRevealed) {
                cards[i].isRevealed = true;
                el.classList.add('rotate-y-180');
            }
        });
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
}

document.addEventListener('DOMContentLoaded', init);
