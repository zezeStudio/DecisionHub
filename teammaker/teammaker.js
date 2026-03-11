// Team Maker Logic

const translations = {
    "en": {
        "app_title": "Team Maker - Zeze Hub",
        "app_name": "Team Maker",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Random Team Maker",
        "main_description": "Input list and divide teams fairly.",
        "input_notice_title": "Required",
        "input_notice_desc": "Please separate participant names by <b class='text-red-500'>newline (Enter)</b> or <b class='text-red-500'>comma (,)</b>.<br>If there are duplicate names, we recommend using labels like <b class='text-primary'>Alex A, Alex B</b>.",
        "input_label": "Participants",
        "input_placeholder": "Ex) Alex, Jordan, Taylor, Riley, Quinn",
        "team_names_label": "Custom Team Names (Optional)",
        "team_names_placeholder": "Ex) Team A, Team B, Team C",
        "team_names_guide": "Total <b>{n}</b> team names are needed.",
        "team_names_count": "({m} entered)",
        "count_unit": "entered",
        "mode_team_count": "By Team Count",
        "mode_member_count": "By Members/Team",
        "label_team_count": "Number of Teams",
        "label_member_count": "Members per Team",
        "make_btn": "Make Teams!",
        "reset_btn": "Edit List",
        "reshuffle_btn": "Reshuffle",
        "team_name_prefix": "Team ",
        "error_min_players": "Please enter at least 2 participants.",
        "error_invalid_value": "Invalid team/member count.",
        "error_duplicate_name": "Duplicate names found in the list.",
        "error_duplicate_team": "Team names cannot be duplicated.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "mission_label": "Mission / Bet / Selection Content",
        "mission_placeholder": "e.g., What is the penalty? ☕️",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "info_title1": "Importance of Random Team Allocation",
        "info_desc1": "Subjective judgment or bias in team partitioning can harm group harmony. Random allocation is essential to prevent 'clustering by friendship' or 'stacking by skill.' In sports, group projects, or gaming parties, randomness creates unexpected combinations, acting as a trigger for new relationships and synergy. Zeze Hub's Team Maker maximizes this serendipity in group composition to help start fair and enjoyable cooperation.",
        "info_title2": "Psychology of Team Building and Chance",
        "info_desc2": "Psychologically, people tend to have higher acceptance and a sense of belonging towards 'fateful assignments' rather than their own choices. Known as the 'shared fate effect,' members grouped randomly often perceive each other as 'comrades destined by fate' and bond more quickly. Zeze Hub guarantees true random team composition without any artificial intervention through high-level random number generation using the Web Crypto API. A fair start builds the best teamwork.",
        "info_title3": "Using Team Maker Efficiently",
        "info_desc3": "<li>Input Convenience: Copy and paste large lists at once using newlines or commas.</li><li>Two Modes: Optimize for your situation by setting either the desired number of teams or members per team.</li><li>Custom Team Names: Add fun by entering witty team names instead of defaults (Team 1, Team 2).</li><li>Data Volatility: Zeze Hub does not store input lists on any server, ensuring safe use without privacy leaks.</li>"
    },
    "ko": {
        "app_title": "무작위 팀 나누기 - Zeze Hub",
        "app_name": "Team Maker",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "무작위 팀 나누기",
        "main_description": "명단을 입력하고 공정하게 팀을 나눠보세요.",
        "input_notice_title": "필수 확인",
        "input_notice_desc": "참가자 이름을 <b class='text-red-500'>줄바꿈(Enter)</b> 또는 <b class='text-red-500'>쉼표(,)</b>로 구분하여 입력해주세요.<br>동일한 이름이 있을 경우 <b class='text-primary font-bold'>홍길동A, 홍길동B</b>와 같이 구분하여 입력하시는 것을 추천합니다.",
        "input_label": "참가자 명단",
        "input_placeholder": "예) 강백호, 서태웅, 채치수, 송태섭, 정대만",
        "team_names_label": "팀 이름 지정 (선택 사항)",
        "team_names_placeholder": "예) A팀, B팀, C팀",
        "team_names_guide": "총 <b>{n}</b>개의 팀 이름이 필요합니다.",
        "team_names_count": "({m}개 입력됨)",
        "count_unit": "명 입력됨",
        "mode_team_count": "팀 개수 기준",
        "mode_member_count": "팀원 수 기준",
        "label_team_count": "나눌 팀 개수",
        "label_member_count": "팀별 인원수",
        "make_btn": "팀 나누기 시작!",
        "reset_btn": "명단 수정",
        "reshuffle_btn": "다시 나누기",
        "team_name_prefix": "팀 ",
        "error_min_players": "최소 2명 이상의 참가자를 입력해주세요.",
        "error_invalid_value": "팀 또는 인원수 설정이 올바르지 않습니다.",
        "error_duplicate_name": "중복된 이름이 명단에 포함되어 있습니다.",
        "error_duplicate_team": "중복된 팀 이름이 있습니다.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "mission_label": "오늘의 미션 / 내기 내용 / 추첨 내용",
        "mission_placeholder": "예) 이번 내기 벌칙은? ☕️",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "info_title1": "무작위 팀 배정의 중요성: 주관을 배제한 완벽한 화합",
        "info_desc1": "조직이나 친목 모임에서 팀을 나누는 과정은 생각보다 민감한 문제입니다. 인간의 주관적인 판단이나 편견이 개입될 경우, 팀 구성 단계에서부터 갈등이 생기거나 팀워크가 저해될 수 있습니다. 특히 '친한 사람끼리' 혹은 '실력이 뛰어난 사람끼리' 쏠리는 현상은 집단의 역동성을 떨어뜨립니다. 무작위 팀 배정은 이러한 불확실성을 역이용하여 예상치 못한 조합을 만들어내고, 새로운 인간관계와 창의적인 시너지를 형성하는 강력한 촉매제가 됩니다. Zeze Hub의 팀 메이커는 모든 참가자에게 평등한 기회를 제공하여 가장 즐겁고 공정한 협력의 시작을 돕습니다.",
        "info_title2": "팀 빌딩과 우연의 심리학: '운명 공유 효과'",
        "info_desc2": "심리학적으로 사람들은 자신이 직접 선택한 결과보다 '운명적으로 주어진 환경'에 대해 더 높은 수용성과 소속감을 느끼는 경향이 있습니다. 이를 '운명 공유 효과(Shared Fate Effect)'라고 합니다. 무작위로 한 팀이 된 멤버들은 서로를 '운명이 맺어준 동료'로 인식하며, 인위적으로 짜인 팀보다 더 빠르게 결속하고 서로를 돕는 행동을 보입니다. Zeze Hub는 Web Crypto API를 사용한 고도의 난수 생성을 통해, 그 어떤 인위적 개입도 없는 진정한 무작위 팀 구성을 보장합니다. 공정한 시작이 최고의 팀워크를 만드는 첫 단추가 됩니다.",
        "info_title3": "팀 메이커 효율적으로 활용하기: 상황별 최적화 팁",
        "info_desc3": "<li><strong>대량 명단도 한 번에:</strong> 복잡하게 한 명씩 입력할 필요 없습니다. 엑셀이나 텍스트 파일의 명단을 복사하여 줄바꿈이나 쉼표로 한 번에 붙여넣으세요. 수십 명의 팀 구성도 1초 만에 끝납니다.</li><li><strong>두 가지 모드의 선택:</strong> 원하는 팀의 개수를 고정하거나, 혹은 한 팀당 인원수를 고정하는 두 가지 방식을 지원합니다. 조별 과제, 게임 파티, 스포츠 경기 등 상황에 맞는 최적의 배정이 가능합니다.</li><li><strong>재치 있는 팀 이름 설정:</strong> 기본 이름 대신 직접 팀명들을 입력해 보세요. 무작위로 배정된 팀원들과 재미있는 팀명을 공유하는 과정 자체가 하나의 즐거운 이벤트가 됩니다.</li><li><strong>철저한 데이터 보안:</strong> Zeze Hub는 입력된 명단을 별도의 서버에 저장하거나 수집하지 않습니다. 모든 데이터는 당신의 브라우저에서만 처리되므로 개인정보 유출 걱정 없이 안전하게 사용하세요.</li>"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentMode = 'teamCount'; 
let targetValue = 2; 
let players = [];

const teamColors = [
    { border: 'border-primary', bg: 'bg-primary/5', text: 'text-primary', dot: 'bg-primary', chip: 'bg-primary/10' },
    { border: 'border-secondary', bg: 'bg-secondary/5', text: 'text-secondary', dot: 'bg-secondary', chip: 'bg-secondary/10' },
    { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-500', chip: 'bg-orange-100' },
    { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-600', dot: 'bg-teal-500', chip: 'bg-teal-100' },
    { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-500', chip: 'bg-blue-100' },
    { border: 'border-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-500', chip: 'bg-emerald-100' },
    { border: 'border-rose-500', bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-500', chip: 'bg-rose-100' },
    { border: 'border-indigo-500', bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-500', chip: 'bg-indigo-100' }
];

// DOM Elements
const playerInput = document.getElementById('player-list-input');
const teamNamesInput = document.getElementById('team-names-input');
const missionInput = document.getElementById('mission-input');
const missionSection = missionInput.parentElement;
const inputCountDisplay = document.getElementById('input-count');
const targetValueDisplay = document.getElementById('target-value');
const controlLabel = document.getElementById('control-label');
const setupSection = document.getElementById('setup-section');
const resultStage = document.getElementById('result-stage');
const teamsContainer = document.getElementById('teams-container');

const teamNamesGuideArea = document.createElement('div');
teamNamesGuideArea.className = 'flex justify-between items-center mt-1 px-1';
teamNamesGuideArea.innerHTML = `
    <span id="team-needed-guide" class="text-[10px] text-gray-400"></span>
    <span id="team-entered-count" class="text-[10px] text-primary font-bold"></span>
`;

function init() {
    if (teamNamesInput && teamNamesInput.parentNode) {
        teamNamesInput.parentNode.appendChild(teamNamesGuideArea);
    }
    targetValueDisplay.textContent = targetValue;
    applyTranslations();
    setupEventListeners();
}

function parseInput(text) {
    return text.split(/[\n,]+/).map(name => name.trim()).filter(name => name !== "");
}

function updateInputCount() {
    const list = parseInput(playerInput.value);
    inputCountDisplay.textContent = list.length;
    updateTeamNamesGuide();
}

function updateTeamNamesGuide() {
    const playersList = parseInput(playerInput.value);
    const customTeamNames = parseInput(teamNamesInput.value);
    const t = translations[currentLang];
    
    let needed = 0;
    if (currentMode === 'teamCount') {
        needed = targetValue;
    } else {
        needed = playersList.length > 0 ? Math.ceil(playersList.length / targetValue) : 0;
    }

    const guideEl = document.getElementById('team-needed-guide');
    const countEl = document.getElementById('team-entered-count');
    
    if (guideEl && countEl) {
        guideEl.innerHTML = t.team_names_guide.replace('{n}', needed);
        countEl.innerHTML = t.team_names_count.replace('{m}', customTeamNames.length);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'bg-gray-50', 'border', 'border-gray-200', 'bg-transparent', 'border-transparent');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('bg-primary', 'text-white', 'font-bold');
        } else {
            btn.classList.add('bg-transparent', 'border-transparent');
        }
    });

    playerInput.placeholder = translations[currentLang].input_placeholder;
    teamNamesInput.placeholder = translations[currentLang].team_names_placeholder;
    missionInput.placeholder = translations[currentLang].mission_placeholder;
    controlLabel.textContent = currentMode === 'teamCount' ? translations[currentLang].label_team_count : translations[currentLang].label_member_count;
    updateTeamNamesGuide();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

function makeTeams() {
    players = parseInput(playerInput.value);
    const customTeamNames = parseInput(teamNamesInput.value);
    const missionText = missionInput.value.trim();

    if (players.length < 2) {
        alert(translations[currentLang].error_min_players);
        return;
    }

    if (new Set(players).size !== players.length) {
        alert(translations[currentLang].error_duplicate_name);
        return;
    }

    let numTeams = 0;
    if (currentMode === 'teamCount') {
        numTeams = targetValue;
    } else {
        numTeams = Math.ceil(players.length / targetValue);
    }

    if (numTeams < 2) {
        alert(translations[currentLang].error_invalid_value);
        return;
    }

    const shuffled = [...players];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const teams = Array.from({ length: numTeams }, () => []);
    shuffled.forEach((player, index) => {
        teams[index % numTeams].push(player);
    });

    renderTeams(teams, customTeamNames, missionText);
    
    setupSection.classList.add('hidden');
    missionSection.classList.add('hidden');
    resultStage.classList.remove('hidden');
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6200EE', '#FF0266', '#FF9800', '#03DAC6']
    });
}

function renderTeams(teams, customTeamNames, missionText) {
    teamsContainer.innerHTML = '';
    const t = translations[currentLang];

    // Add Mission display at the top if exists
    if (missionText) {
        const missionDisplay = document.createElement('div');
        missionDisplay.className = 'w-full mb-6 bg-white p-5 rounded-[32px] border border-primary/20 text-center shadow-sm animate-slideUp';
        missionDisplay.innerHTML = `<span class="text-[10px] text-primary font-black uppercase tracking-widest block mb-1">Current Mission</span><span class="text-xl font-bold text-gray-800">${missionText}</span>`;
        teamsContainer.appendChild(missionDisplay);
    }

    const teamsGrid = document.createElement('div');
    teamsGrid.className = 'grid grid-cols-1 gap-4';
    teamsContainer.appendChild(teamsGrid);

    teams.forEach((members, index) => {
        const teamName = customTeamNames[index] || (t.team_name_prefix + (index + 1));
        const color = teamColors[index % teamColors.length];
        
        const card = document.createElement('div');
        card.className = `team-card ${color.bg} p-5 rounded-3xl border ${color.border} shadow-sm animate-fadeIn`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-black ${color.text} flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full ${color.dot}"></span>
                    ${teamName}
                </h3>
                <span class="text-[10px] font-bold px-2 py-0.5 ${color.chip} ${color.text} rounded-full">${members.length} Members</span>
            </div>
            <div class="flex flex-wrap gap-2">
                ${members.map(m => `<span class="px-3 py-1.5 bg-white/80 border ${color.border}/20 rounded-xl text-xs font-bold ${color.text}">${m}</span>`).join('')}
            </div>
        `;
        teamsGrid.appendChild(card);
    });
}

function setupEventListeners() {
    playerInput.addEventListener('input', updateInputCount);
    teamNamesInput.addEventListener('input', updateTeamNamesGuide);

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-primary');
                b.classList.add('text-gray-500');
            });
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-gray-500');
            
            currentMode = btn.dataset.mode;
            targetValue = 2; 
            targetValueDisplay.textContent = targetValue;
            applyTranslations();
        });
    });

    document.getElementById('val-plus').addEventListener('click', () => {
        const list = parseInput(playerInput.value);
        const max = list.length > 0 ? list.length : 50;
        if (targetValue < max) {
            targetValue++;
            targetValueDisplay.textContent = targetValue;
            updateTeamNamesGuide();
        }
    });

    document.getElementById('val-minus').addEventListener('click', () => {
        if (targetValue > 2) { 
            targetValue--;
            targetValueDisplay.textContent = targetValue;
            updateTeamNamesGuide();
        }
    });

    document.getElementById('make-teams-btn').addEventListener('click', makeTeams);
    document.getElementById('reshuffle-btn').addEventListener('click', makeTeams);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        resultStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
        missionSection.classList.remove('hidden');
    });

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
