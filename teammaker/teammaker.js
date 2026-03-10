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
        "input_notice_desc": "Please separate participant names by <b>newline (Enter)</b> or <b>comma (,)</b>.",
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
        "footer_copyright": "© 2024 Zeze Decision Hub."
    },
    "ko": {
        "app_title": "무작위 팀 나누기 - Zeze Hub",
        "app_name": "Team Maker",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "무작위 팀 나누기",
        "main_description": "명단을 입력하고 공정하게 팀을 나눠보세요.",
        "input_notice_title": "필수 확인",
        "input_notice_desc": "참가자 이름을 <b>줄바꿈(Enter)</b> 또는 <b>쉼표(,)</b>로 구분하여 입력해주세요.",
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
        "footer_copyright": "© 2024 Zeze Decision Hub."
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentMode = 'teamCount'; 
let targetValue = 2;
let players = [];

// DOM Elements
const playerInput = document.getElementById('player-list-input');
const teamNamesInput = document.getElementById('team-names-input');
const inputCountDisplay = document.getElementById('input-count');
const targetValueDisplay = document.getElementById('target-value');
const controlLabel = document.getElementById('control-label');
const setupSection = document.getElementById('setup-section');
const resultStage = document.getElementById('result-stage');
const teamsContainer = document.getElementById('teams-container');

// New Helper: Dynamic guide for team names
const teamNamesGuideArea = document.createElement('div');
teamNamesGuideArea.className = 'flex justify-between items-center mt-1 px-1';
teamNamesGuideArea.innerHTML = `
    <span id="team-needed-guide" class="text-[10px] text-gray-400"></span>
    <span id="team-entered-count" class="text-[10px] text-primary font-bold"></span>
`;

function init() {
    // Insert guide area after teamNamesInput
    teamNamesInput.parentNode.appendChild(teamNamesGuideArea);
    
    applyTranslations();
    setupEventListeners();
    updateTeamNameGuide();
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    if (playerInput) playerInput.placeholder = translations[currentLang].input_placeholder;
    if (teamNamesInput) teamNamesInput.placeholder = translations[currentLang].team_names_placeholder;
    
    updateControlUI();
    updateTeamNameGuide();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    applyTranslations();
}

function setupEventListeners() {
    playerInput.addEventListener('input', () => {
        const list = parseInput(playerInput.value);
        inputCountDisplay.textContent = list.length;
        updateTeamNameGuide();
    });

    teamNamesInput.addEventListener('input', updateTeamNameGuide);

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMode = btn.dataset.mode;
            document.querySelectorAll('.mode-btn').forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-primary');
                b.classList.add('text-gray-500');
            });
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-gray-500');
            updateControlUI();
            updateTeamNameGuide();
        });
    });

    document.getElementById('val-plus').addEventListener('click', () => {
        if (targetValue < 20) {
            targetValue++;
            targetValueDisplay.textContent = targetValue;
            updateTeamNameGuide();
        }
    });
    document.getElementById('val-minus').addEventListener('click', () => {
        if (targetValue > 1) {
            targetValue--;
            targetValueDisplay.textContent = targetValue;
            updateTeamNameGuide();
        }
    });

    document.getElementById('make-teams-btn').addEventListener('click', generateTeams);
    document.getElementById('reset-btn').addEventListener('click', () => {
        resultStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
    });
    document.getElementById('reshuffle-btn').addEventListener('click', generateTeams);

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

function calculateNeededTeams() {
    const list = parseInput(playerInput.value);
    if (list.length < 2) return 0;

    if (currentMode === 'teamCount') {
        return Math.min(targetValue, list.length);
    } else {
        return Math.ceil(list.length / targetValue);
    }
}

function updateTeamNameGuide() {
    const needed = calculateNeededTeams();
    const entered = parseInput(teamNamesInput.value).length;
    
    const guideEl = document.getElementById('team-needed-guide');
    const countEl = document.getElementById('team-entered-count');
    
    if (needed > 0) {
        guideEl.innerHTML = translations[currentLang].team_names_guide.replace('{n}', needed);
        countEl.textContent = translations[currentLang].team_names_count.replace('{m}', entered);
        
        // Highlight if numbers match
        if (entered === needed) countEl.className = 'text-[10px] text-secondary font-black';
        else countEl.className = 'text-[10px] text-primary font-bold';
    } else {
        guideEl.textContent = '';
        countEl.textContent = '';
    }
}

function updateControlUI() {
    const key = currentMode === 'teamCount' ? 'label_team_count' : 'label_member_count';
    if (controlLabel) {
        controlLabel.textContent = translations[currentLang][key];
    }
}

function parseInput(val) {
    return val.split(/[\n,]+/).map(name => name.trim()).filter(name => name !== '');
}

function generateTeams() {
    const list = parseInput(playerInput.value);
    const customTeamNames = parseInput(teamNamesInput.value);
    
    if (list.length < 2) {
        alert(translations[currentLang].error_min_players);
        return;
    }
    const uniqueNames = new Set(list);
    if (uniqueNames.size !== list.length) {
        alert(translations[currentLang].error_duplicate_name);
        return;
    }

    const uniqueTeamNames = new Set(customTeamNames);
    if (uniqueTeamNames.size !== customTeamNames.length) {
        alert(translations[currentLang].error_duplicate_team);
        return;
    }

    players = [...list];
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }

    const teamCount = calculateNeededTeams();

    const teams = Array.from({ length: teamCount }, (_, i) => {
        return {
            name: customTeamNames[i] || `${translations[currentLang].team_name_prefix}${i + 1}`,
            members: []
        };
    });

    players.forEach((player, index) => {
        teams[index % teamCount].members.push(player);
    });

    renderTeams(teams);
    setupSection.classList.add('hidden');
    resultStage.classList.remove('hidden');
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#6200EE', '#03DAC6', '#FF9800'] });
}

function renderTeams(teams) {
    teamsContainer.innerHTML = '';
    const colors = ['#6200EE', '#03DAC6', '#FF9800', '#FF0266', '#4CAF50', '#2196F3'];
    teams.forEach((team, i) => {
        const color = colors[i % colors.length];
        const card = document.createElement('div');
        card.className = 'team-card bg-white p-5 rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative';
        card.style.borderTop = `4px solid ${color}`;
        let membersHtml = team.members.map(m => `<div class="member-chip px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold inline-block m-1">${m}</div>`).join('');
        card.innerHTML = `<div class="flex justify-between items-center mb-4"><h3 class="font-black text-sm" style="color: ${color}">${team.name}</h3><span class="text-[10px] font-bold text-gray-300 uppercase">${team.members.length} Members</span></div><div class="flex flex-wrap -m-1">${membersHtml}</div>`;
        teamsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', init);
