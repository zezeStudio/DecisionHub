// Card Flip Logic

const translations = {
    "en": {
        "app_title": "Card Flip - Zeze Hub",
        "app_name": "Card Flip",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
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
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "footer_copyright": "© 2024 Zeze Decision Hub."
    },
    "ko": {
        "app_title": "카드 뒤집기 - Zeze Hub",
        "app_name": "Card Flip",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
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
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "footer_copyright": "© 2024 Zeze Decision Hub."
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let cardCount = 4;
let currentMode = 'number';
let cards = [];
let flippedCount = 0;
let storytellingData = null;

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
    applyTranslations();
    setupEventListeners();
    renderCustomInputs();
    updateModeDescription();
}

async function loadStorytellingData() {
    try {
        const response = await fetch('cardflip_data.json');
        storytellingData = await response.json();
    } catch (e) {
        console.error("Failed to load storytelling data:", e);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    updateModeDescription();
}

function updateModeDescription() {
    const key = `mode_desc_${currentMode}`;
    if (modeDescription && translations[currentLang][key]) {
        modeDescription.textContent = translations[currentLang][key];
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    renderCustomInputs();
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMode = btn.dataset.mode;
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-primary');
                b.classList.add('text-gray-500');
            });
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-gray-500');
            
            updateModeDescription();
            customInputsArea.classList.toggle('hidden', currentMode !== 'custom');
            
            const maxAvailable = currentMode === 'number' || currentMode === 'custom' ? 12 : 6;
            if (cardCount > maxAvailable) {
                cardCount = maxAvailable;
                cardCountDisplay.textContent = cardCount;
            }
        });
    });

    document.getElementById('count-plus').addEventListener('click', () => {
        const maxLimit = (currentMode === 'icon' || currentMode === 'advice') ? 6 : 12;
        if (cardCount < maxLimit) {
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

    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('reset-btn').addEventListener('click', () => {
        gameStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
        storyResultSection.classList.add('hidden');
    });
    document.getElementById('reveal-all-btn').addEventListener('click', revealAll);

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.remove('translate-x-full');
        document.getElementById('sidebar-overlay').classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

function renderCustomInputs() {
    customInputsList.innerHTML = '';
    for (let i = 0; i < cardCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'custom-text-input w-full p-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary outline-none text-sm transition-all';
        input.placeholder = `${translations[currentLang].mode_custom} ${i + 1}`;
        customInputsList.appendChild(input);
    }
}

function startGame() {
    flippedCount = 0;
    const isLimited = currentMode === 'icon' || currentMode === 'advice';
    
    if (currentMode === 'custom') {
        const inputs = document.querySelectorAll('.custom-text-input');
        const vals = Array.from(inputs).map(i => i.value.trim());
        if (vals.some(v => v === '')) {
            alert(translations[currentLang].error_empty_custom);
            return;
        }
        cards = vals.map(v => ({ content: v, isRevealed: false }));
    } else if (currentMode === 'number') {
        cards = Array.from({ length: cardCount }, (_, i) => ({ content: (i + 1).toString(), isRevealed: false }));
    } else {
        const dataKey = currentMode === 'icon' ? 'icon_fortune' : 'advice';
        let pool = [...storytellingData[dataKey][currentLang]];
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        cards = pool.slice(0, cardCount).map(item => ({ ...item, content: item.title, isRevealed: false }));
    }

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    renderCards();
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    storyResultSection.classList.add('hidden');
    
    if (isLimited) {
        instructionText.innerHTML = translations[currentLang].instruction_limit_1;
        document.getElementById('reveal-all-btn').classList.add('hidden');
    } else {
        instructionText.textContent = translations[currentLang].game_instruction;
        document.getElementById('reveal-all-btn').classList.remove('hidden');
    }
}

function renderCards() {
    cardsContainer.innerHTML = '';
    const cols = cardCount <= 4 ? 'grid-cols-2' : (cardCount <= 9 ? 'grid-cols-3' : 'grid-cols-4');
    cardsContainer.className = `grid ${cols} gap-3 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100`;

    cards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'card-item animate-pop';
        div.innerHTML = `
            <div class="card-inner w-full h-full">
                <div class="card-front"></div>
                <div class="card-back flex flex-col items-center justify-center p-2">
                    ${card.icon ? `<span class="material-icons text-primary mb-1">${card.icon}</span>` : ''}
                    <span class="text-[10px] font-black text-gray-800 leading-tight">${card.content}</span>
                </div>
            </div>
        `;
        div.addEventListener('click', () => handleCardClick(index, div));
        cardsContainer.appendChild(div);
    });
}

function handleCardClick(index, element) {
    const isLimited = currentMode === 'icon' || currentMode === 'advice';
    if (cards[index].isRevealed || (isLimited && flippedCount >= 1)) return;

    cards[index].isRevealed = true;
    flippedCount++;
    element.classList.add('flipped');

    if (cards[index].desc) {
        showStoryResult(cards[index]);
    }

    if (currentMode === 'icon') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function showStoryResult(data) {
    storyResultSection.classList.remove('hidden');
    document.getElementById('story-icon').textContent = data.icon;
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-desc').textContent = data.desc;
    setTimeout(() => {
        storyResultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

function revealAll() {
    const items = document.querySelectorAll('.card-item');
    items.forEach((item, index) => {
        if (!cards[index].isRevealed) {
            cards[index].isRevealed = true;
            item.classList.add('flipped');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
