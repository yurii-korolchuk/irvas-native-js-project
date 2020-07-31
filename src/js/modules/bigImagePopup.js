const bigImagePopup = () => {
    const bindBigImagePopup = (parentSelector, imageClass) => {
        const bigImageContainer = document.createElement('div');
        const bigImage = document.createElement('img');
        const parent = document.querySelector(parentSelector);

        bigImageContainer.classList.add('popup', 'fadeIn');
        bigImageContainer.appendChild(bigImage);
        bigImageContainer.style.justifyContent = 'center';
        bigImageContainer.style.alignItems = 'center';

        bigImage.style.width = '50%';
        bigImage.style.height = '70%';

        parent.appendChild(bigImageContainer);


        parent.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains(imageClass)) {
                e.preventDefault();
                bigImage.setAttribute('src', e.target.parentNode.getAttribute('href'))
                bigImageContainer.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            if(e.target && e.target.classList.contains('popup')) {
                bigImageContainer.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    bindBigImagePopup('.works', 'preview');



}

export default bigImagePopup;