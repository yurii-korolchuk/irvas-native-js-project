const modal = () => {
    const bindModal = (openTriggerSelector, modalQuerySelector, closeTriggerSelector) => {
        document.querySelectorAll(openTriggerSelector).forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
                openModal(modalQuerySelector, closeTriggerSelector);
            });
        });
    };
    
    const showModalAfterTime = (modalQuerySelector, closeTriggerSelector, time) => {
        setTimeout(() => {
            openModal(modalQuerySelector, closeTriggerSelector);
        }, time);
    };

    const calcScrollWidth = () => {
        let tmp = document.createElement('div');

        tmp.style.overflowY = 'scroll';
        tmp.style.width = '50px';
        tmp.style.height = '50px';
        tmp.style.visibility = 'hidden';

        document.body.appendChild(tmp);

        let scrollWidth = tmp.offsetWidth - tmp.clientWidth;

        tmp.remove();

        return scrollWidth;

    }
    
    const openModal = (modalQuerySelector, closeTriggerSelector) => {
        const modal = document.querySelector(modalQuerySelector);
        const scrollWidth = calcScrollWidth();

        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';

        document.body.style.marginRight = `${scrollWidth}px`;

        const closeModal = (modalQuerySelector) => {
            const modal = document.querySelector(modalQuerySelector);
            document.body.style.overflow = 'auto';
            modal.style.display = 'none';
            document.body.style.marginRight = ``;
        };
    
        document.querySelector(modalQuerySelector).addEventListener('click', (e) => {
            if(e.target && e.target === document.querySelector(modalQuerySelector)) {
                closeModal(modalQuerySelector);
            }
        });
    
        document.querySelector(closeTriggerSelector).addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(modalQuerySelector);
        });
    };

    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup_modal', '.popup_modal .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
    showModalAfterTime('.popup', '.popup .popup_close', 60000);
};

export default modal;

