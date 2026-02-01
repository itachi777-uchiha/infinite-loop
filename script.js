document.getElementById('arrow').addEventListener('click', () => {
    document.getElementById('do').scrollIntoView({
        behavior: "smooth"
    })
})

const header = document.getElementById('header')

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 50) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})