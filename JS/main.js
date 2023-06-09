const text = document.querySelector('.typing .text');

const letters = ["프론트엔드", "새로운 기술을 배우는 것을 좋아하는", "끈기와 열정이 있는", "포기하지 않는"];

const speed = 80;
let i = 0;


// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(speed);
    text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(speed);

    letter.pop();
    text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = letters[i + 1] ? i + 1 : 0;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1000);