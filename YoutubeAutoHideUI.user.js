// ==UserScript==
// @name         YouTube Hide UI on Arrow Keys, Show on Mouse Move
// @version      2.5
// @namespace    https://github.com/KaanAlper/youtube-ui-hide
// @license      GPL-3.0
// @description  Prevent the YouTube UI from appearing when using arrow keys, but make it visible on mouse movement (automatically detects all .ytp- elements)
// @author       Kaan Alper Karaaslan
// @match        http://*.youtube.com/*
// @match        http://youtube.com/*
// @match        https://*.youtube.com/*
// @match        https://youtube.com/*
// @grant        none
// @updateURL    https://gist.github.com/KaanAlper/b49d2e4bbf9880f3774081977d50c3fe/raw/35c8ca163ff58cb28c914853fa7649e82d46f399/YoutubeAutoHideUI.user.js
// @downloadURL  https://gist.github.com/KaanAlper/b49d2e4bbf9880f3774081977d50c3fe/raw/35c8ca163ff58cb28c914853fa7649e82d46f399/YoutubeAutoHideUI.user.js
// ==/UserScript==

(function() {
    'use strict';

    let elements = [];

    const updateElements = () => {
        elements = document.querySelectorAll(`
            .ytp-doubletap-tooltip, .ytp-chrome-bottom, .ytp-gradient-bottom,
            .ytp-title-text, .ytp-share-button, .ytp-right-controls,
            .ytp-watch-later-button, .ytp-doubletap-ui-legacy
        `);
    };

    let hideTimeout, cursorTimeout;

    const toggleUI = (show) => {
        elements.forEach(el => {
            if (el) {
                el.style.opacity = show ? '1' : '0';
                el.style.pointerEvents = show ? 'auto' : 'none';
            }
        });
        document.body.style.cursor = show ? 'auto' : 'none';
    };

    const resetTimers = () => {
        clearTimeout(hideTimeout);
        clearTimeout(cursorTimeout);
        hideTimeout = setTimeout(() => toggleUI(false), 2000);
        cursorTimeout = setTimeout(() => document.body.style.cursor = 'none', 2000);
    };

    document.addEventListener('keydown', (e) => {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'F'].includes(e.key)) {
            clearTimeout(hideTimeout);
            clearTimeout(cursorTimeout);
            toggleUI(false);
        }
    });

    document.addEventListener('mousemove', () => {
        toggleUI(true);
        resetTimers();
    });

    // MutationObserver ile yeni öğeler yüklendiğinde güncelleme yap
    const observer = new MutationObserver(() => {
        updateElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    updateElements();
})();
