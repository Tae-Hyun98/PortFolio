const text = document.querySelector('.text');

const letters = ["프론트엔드", "배우는 것을 좋아하는", "끈기와 열정이 있는", "포기하지 않는"];

let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(100);
    text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(2000);

  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(80);

    letter.pop();
    text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = letters[i + 1] ? i + 1 : 0;
  typing();
}

// 딜레이 기능
function wait(time) {
  return new Promise(res => setTimeout(res, time))
}

setTimeout(typing, 1500);


countingType1(100)
function countingType1(num){
  const percent = document.querySelector('.percent')
  if(num == 0){
    percent.innerHTML = '0';
  } else {
    /* 입력한 숫자를 33번에 걸쳐 0부터 올림. */
    const each = Math.ceil(num/50);
    let time = 0

    for(let i=0; i<=num; i+=each){
      setTimeout(() => {
        percent.innerHTML = i+'%';
      }, 20*time);
      /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
      if(i+each>this.maxNum1){
        setTimeout(() => {
          percent.innerHTML = num;
        }, 20*(time+1));
      }
      time++;
    }
  }
}