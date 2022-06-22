//1
const container = document.querySelector('.cta_container');
container.addEventListener('click', () => {
    console.log(container.nodeName);
});


//2
const button = document.querySelector('.cta_button');
button.addEventListener('click', (e) => {
    console.log(button.nodeName);
    e.stopPropagation()
})
