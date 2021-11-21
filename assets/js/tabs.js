const artTab = document.querySelector('.art-tab');
const artTabExpand = document.querySelector('.art-tab-expand');

const techTab = document.querySelector('.tech-tab');
const techTabExpand = document.querySelector('.tech-tab-expand');


artTab.addEventListener('mouseenter', () => {
    artTab.classList.add('art-tab-move')
})

artTab.addEventListener('mouseleave', () => {
    artTab.classList.remove('art-tab-move')
})


techTab.addEventListener('mouseenter', () => {
    techTab.classList.add('tech-tab-move')
})

techTab.addEventListener('mouseleave', () => {
    techTab.classList.remove('tech-tab-move')
})


artTab.addEventListener('click', () => {
    artTabExpand.classList.toggle('art-tab-expanded');
})

artTab.addEventListener('mouseenter', () => {

})

techTab.addEventListener('click', () => {
    techTabExpand.classList.toggle('tech-tab-expanded');
})
