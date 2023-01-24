
const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxPaletteBoxes = 32;

// 0xffffff == number 16777215
const generatePalette = () => {
  // 초기화
  container.innerHTML = ''; 
  for(let i = 0; i < maxPaletteBoxes; i++) {
    // 컬러 코드를 랜덤으로 만든다.
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6,'0')}`;
    
    // 태그들을 만든다.
    const color = document.createElement('li');
    color.classList.add('color');
    color.innerHTML = `<div class="rect-box" style='background: ${randomHex}'></div>
                      <span class="hex-value">${randomHex}</span>`;

    container.appendChild(color);
  }
}
generatePalette();

refreshBtn.addEventListener('click', generatePalette);
