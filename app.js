const wrapper = document.querySelector('.main')
const heading = document.querySelector('.changecode')

    const funcing = () => {
        const randomint = (min,max) => Math.floor(Math.random() * (max-min + 1) + min)
        const randomColor = () => {
        return `rgba(${randomint(0,255)},${randomint(0,255)},${randomint(0,255)})`
       }

        console.log(randomColor(0,255))
        wrapper.style.backgroundColor = heading.textContent = randomColor(0,255)
         
    }


const btn = document.querySelector('.rgbabtn')
btn.addEventListener('click',funcing)

const changecode = document.querySelector(`.changecode`)

 document.querySelector(`.changecode`).addEventListener('click', () => {
        const clipboard = navigator.clipboard;
        const copyingtext = document.querySelector(`.changecode`)
        clipboard.writeText(copyingtext.innerText)
        changecode.classList.add('tooltip')
        changecode.classList.add('fade')

    })



// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const result = ""
// const charactersLength = characters.length;

// for ( var i = 0; i < 5 ; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }

// console.log(result)

