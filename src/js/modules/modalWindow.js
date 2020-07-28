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
    
    const openModal = (modalQuerySelector, closeTriggerSelector) => {
        const modal = document.querySelector(modalQuerySelector);
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    
        const closeModal = (modalQuerySelector) => {
            const modal = document.querySelector(modalQuerySelector);
            document.body.style.overflow = 'auto';
            modal.style.display = 'none';
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
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalAfterTime('.popup', '.popup .popup_close', 60000);
};

export default modal;

