const tabs = () => {

    const bindTab = (parentTabSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

        const tabs = document.querySelectorAll(tabSelector);

        document.querySelector(parentTabSelector).addEventListener('click', (e) => {            
            if(e.target && e.target.classList.contains(tabSelector.replace(/\./, "")) || 
            e.target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
                tabs.forEach((item, i) => {
                    if(activeClass && item.classList.contains(activeClass)) {
                        item.classList.remove(activeClass);
                    }

                    if(e.target == item || e.target.parentNode == item) {
                        if(activeClass) {
                            item.classList.add(activeClass);
                        }
                        showTabContent(contentSelector, display, i);
                    }
                });
            }
        });

        showTabContent(contentSelector, display);

    };  

    const hideTabContent = (contentSelector) => {
        document.querySelectorAll(contentSelector).forEach(item => {
            item.style.display = 'none';
        });
    };
    
    const showTabContent = (contentSelector, display, i = 0) => { 
        hideTabContent(contentSelector);
        document.querySelectorAll(contentSelector).forEach((item, count) => {
            if(i == count) {
                item.style.display = display;
            }
        });
    };

    bindTab('.glazing_slider', '.glazing_block', '.glazing_content');
    bindTab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    bindTab('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
};

export default tabs;