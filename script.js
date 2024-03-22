const covers = document.querySelectorAll('.accord-child__top')
const replies = document.querySelectorAll('.reply')
const icons = document.querySelectorAll('.icon')
covers.forEach((cover, i) => {
    cover.addEventListener('click', () => {
        replies[i].classList.toggle('showMe')
        changeIcon(icons[i])
    })
})

const changeIcon = function(icon) {
    if (icon.src.match('assets/images/icon-plus.svg')) {
        icon.src = 'assets/images/icon-minus.svg'
    } else {
        icon.src = 'assets/images/icon-plus.svg'
    }
}

const dating = new Date('1984-9-24')
const date = new Date()
console.log(dating);
console.log(date);
console.log(date - dating);

