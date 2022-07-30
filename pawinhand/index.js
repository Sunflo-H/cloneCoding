const main1 = document.querySelector('#main1');
const main2 = document.querySelector('#main2');

// var style = getComputedStyle(document.body);
// console.log(style.getPropertyValue('--x'));
// console.log(style.getPropertyValue('--y'));


window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
})
