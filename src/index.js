import './styles.css';
import homeLoader from './homeLoader.js';
import menuLoader from './menuLoader.js';
import aboutLoader from './aboutLoader.js';

(() => {
    const content = document.querySelector('#content');
    const buttons = document.querySelectorAll('.tab-btn');

    const loaders = {
        home: homeLoader,
        menu: menuLoader,
        about: aboutLoader,
    };

    function switchTab(activeBtn, loader) {
        content.replaceChildren();
        loader();
        buttons.forEach(btn => btn.classList.remove('active-tab'));
        activeBtn.classList.add('active-tab');
    }

    homeLoader();

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn, loaders[btn.id]);
        });
    });
})();
