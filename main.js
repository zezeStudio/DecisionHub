// Zeze Hub - Common Global Logic
// (Main page specific translations are now handled within index.html for better performance and reliability)

// Global Sound Management
const GlobalSound = {
    isMuted: localStorage.getItem('zeze_muted') === 'true',
    updateUI() {
        const icon = document.getElementById('global-sound-icon');
        if (icon) {
            icon.textContent = this.isMuted ? 'volume_off' : 'volume_up';
            if (this.isMuted) icon.classList.add('text-red-500');
            else icon.classList.remove('text-red-500');
        }
    },
    toggle() {
        this.isMuted = !this.isMuted;
        localStorage.setItem('zeze_muted', this.isMuted);
        this.updateUI();
        // Sync with tool-specific mute states if they exist
        window.dispatchEvent(new CustomEvent('zeze-mute-toggled', { detail: { isMuted: this.isMuted } }));
    }
};

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed', err));
    });
}

// Initial UI Setup
document.addEventListener('DOMContentLoaded', () => {
    GlobalSound.updateUI();
    const soundBtn = document.getElementById('global-sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => GlobalSound.toggle());
    }
});
