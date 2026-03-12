/**
 * Ladder Climb Audio System - Procedural Sound Generation
 * Fixed Speaker Toggle and Event Hooking Issues
 */

const LadderSoundManager = {
    ctx: null,
    muted: localStorage.getItem('zeze_muted') === 'true',

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
            if (this.muted) {
                icon.classList.add('text-red-500');
                icon.classList.remove('text-gray-600');
            } else {
                icon.classList.remove('text-red-500');
                icon.classList.add('text-gray-600');
            }
        }
    },

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('zeze_muted', this.muted);
        this.updateMuteUI();
        console.log("Ladder Sound Muted:", this.muted);
    },

    playClick() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.1);
    },

    playStart() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.2);
    },

    playMove() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.05);
    },

    playFinish() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.3);
    },

    playWin() {
        if (this.muted) return;
        this.init();
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = f;
            gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.1);
            gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + i * 0.1 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.4);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.1); osc.stop(this.ctx.currentTime + i * 0.1 + 0.4);
        });
    }
};

// Define SoundManager globally
window.SoundManager = {
    toggleMute: () => LadderSoundManager.toggleMute()
};

// 🎣 Hooking via Event Listeners instead of overwriting window.init
document.addEventListener('DOMContentLoaded', () => {
    // 1. UI Setup
    LadderSoundManager.updateMuteUI();
    
    // 2. Sound Toggle Click
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', (e) => {
            e.stopImmediatePropagation(); // 기존 리스너 방해 금지
            LadderSoundManager.toggleMute();
        }, true); // Capture phase로 우선권 확보
    }

    // 3. Button Click Sounds
    ['start-btn', 'reset-btn', 'sequential-btn', 'all-results-btn', 'player-plus', 'player-minus', 'auto-fill-btn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => LadderSoundManager.playClick());
    });

    // 4. TracePath Interception (Late Binding)
    const checkTracePath = setInterval(() => {
        if (typeof window.tracePath === 'function' && !window.tracePath._hooked) {
            const originalTracePath = window.tracePath;
            window.tracePath = async function(playerIndex) {
                if (typeof isAnimating !== 'undefined' && isAnimating) return originalTracePath.apply(this, arguments);
                if (typeof completedPlayers !== 'undefined' && completedPlayers.has(playerIndex)) return originalTracePath.apply(this, arguments);
                
                LadderSoundManager.playStart();
                const interval = setInterval(() => {
                    if (typeof isAnimating !== 'undefined' && isAnimating) {
                        LadderSoundManager.playMove();
                    } else {
                        clearInterval(interval);
                    }
                }, 150);

                const result = await originalTracePath.apply(this, arguments);
                
                clearInterval(interval);
                LadderSoundManager.playFinish();

                setTimeout(() => {
                    if (typeof playerResultMap !== 'undefined' && typeof results !== 'undefined') {
                        const endIdx = playerResultMap[playerIndex];
                        const resText = results[endIdx];
                        if (resText && (resText.includes('당첨') || resText.toLowerCase().includes('win'))) {
                            LadderSoundManager.playWin();
                        }
                    }
                }, 50);
                return result;
            };
            window.tracePath._hooked = true;
            clearInterval(checkTracePath);
        }
    }, 100);
});
