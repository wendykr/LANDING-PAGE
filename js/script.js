const heroItemElm = document.querySelectorAll('.hero__item');

const activateHover = (event) => {
    heroItemElm.forEach((item) => {
        if (item === event.currentTarget) {
            const iconSvgElm = item.querySelector('.icon_svg');
            iconSvgElm.classList.toggle('scale');

            const itemTextElm = item.querySelector('.hero__item--text');
            itemTextElm.classList.toggle('none');
        }
    })
}

heroItemElm.forEach((item) => {
  item.addEventListener('mouseover', activateHover);
});

heroItemElm.forEach((item) => {
    item.addEventListener('mouseout', activateHover);
});

const scrollToSection = (event) => {
    event.preventDefault();
    const clickedLink = event.target.closest('.hero__item--link');
    const targetSectionId = clickedLink.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    const scrollGoal = targetSection.offsetTop;

    window.scrollTo({
        top: scrollGoal,
        behavior: 'smooth'
    });
};

const heroItemLinks = document.querySelectorAll('.hero__item--link');
  heroItemLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

const section1Elm = document.querySelectorAll('.section_1');
const section2Elm = document.querySelectorAll('.section_2');

const showSections = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    section1Elm.forEach((box, i) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            setTimeout(() => {
                box.classList.add('show');
            }, i * 500);
        }
    })

    section2Elm.forEach((box, i) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            setTimeout(() => {
                box.classList.add('show');
            }, i * 500);
        }
    })
}

window.addEventListener('scroll', showSections);