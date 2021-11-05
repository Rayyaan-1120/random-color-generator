console.log(Math.random().toString(36).substr(2, 6))

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())

  const wrapper2 = document.querySelector('.main2')
  const hexbtn = document.querySelector('.hexbtn')
  const heading2 = document.querySelector('.changehexcode')
  const changehex = () => {
      wrapper2.style.backgroundColor = heading2.textContent = random_hex_color_code()
  }

  hexbtn.addEventListener('click',changehex)

  document.querySelector(`.changehexcode`).addEventListener('click', () => {
    const clipboard = navigator.clipboard;
    const copyingtext = document.querySelector(`.changehexcode`)
    clipboard.writeText(copyingtext.innerText)

})
