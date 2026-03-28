# Zeze Hub Project Overview
Zeze Hub is a comprehensive decision-making platform that provides various tools like Magic Lamp, Coin Flip, Dice, and more to help users overcome decision fatigue. It also features a series of "Decision Insights" articles that provide psychological context and tips for better decision-making.

## Implemented Features
- **Magic Lamp:** Yes/No answers based on categories (Food, Love, Money, etc.).
- **3D Coin Flip:** Heads or Tails with 3D physics.
- **Dice of Destiny:** Custom dice for multiple choices.
- **Ladder Climb:** Fair role assignment and betting.
- **Team Maker:** Fairly divides teams.
- **Card Flip & Time Bomb:** High-tension games for fun and decision-making.
- **Daily Fortune:** A word of wisdom once a day.
- **Decision Insights:** A blog section with 18 articles on psychology and decision-making.
- **I18n:** Full support for Korean and English.

## Current Update: Fixed Language Switching in "Decision Insights"
- Fixed a bug where the "Decision Insights" articles would not switch language correctly due to a syntax error in the `applyLanguage` function (an extra `});` ending the function prematurely).
- Fixed 18 article files in the `insights/` directory:
    - ai-decision-making.html
    - cognitive-biases-in-choices.html
    - crypto-randomness.html
    - daily-fortune-philosophy.html
    - decision-fatigue.html
    - fairness-science.html
    - gamification-of-daily-life.html
    - group-decision-strategies.html
    - heuristics-and-biases.html
    - history-of-divination.html
    - history-of-games-of-chance.html
    - luck-vs-probability.html
    - lunch-menu-tips.html
    - mbti-decisions.html
    - mindfulness-and-decisions.html
    - paradox-of-choice.html
    - psychology-of-luck.html
    - regret-management.html
- Added missing article titles and descriptions for the main hub page in `main.js` so they switch correctly.
- Robust implementation of `applyLanguage` across the blog files that handles both simple and array-based summary content.

## Current Update: Service Worker v1.2.0
- Updated `CACHE_NAME` to `zeze-hub-v1.2.0` to trigger cache refresh.
- Added `about.html`, `privacy.html`, `terms.html`, and `hub-guide.html` to the `ASSETS` list for offline support.
- Implemented **Stale-While-Revalidate** caching strategy. This allows the app to load instantly from the cache while simultaneously fetching the latest version from the network in the background, ensuring the app is always up-to-date without sacrificing speed.
- Improved fetch event handling to skip non-GET requests and browser extensions.
