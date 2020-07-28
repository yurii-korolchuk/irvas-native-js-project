const tabs = () => {

    const bindTab = (parentTabSelector, tabSelector, contentSelector, activeClass) => {

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
                        showTabContent(contentSelector, i);
                    }
                });
            }
        });

    };  

    const hideTabContent = (contentSelector) => {
        document.querySelectorAll(contentSelector).forEach(item => {
            item.style.display = 'none';
        });
    };
    
    const showTabContent = (contentSelector, i = 0) => { 
        hideTabContent(contentSelector);
        document.querySelectorAll(contentSelector).forEach((item, count) => {
            if(i == count) {
                item.style.display = 'block';
            }
        });
    };

    bindTab('.glazing_slider', '.glazing_block', '.glazing_content');
    bindTab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
};

export default tabs;