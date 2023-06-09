/* const menuBar = document.querySelector('.menubar');
const navi = document.getElementById('nav');
let state = 0;
menuBar.addEventListener('click', () => {
  if (state === 0) {
    navi.style.left = 0
    state = 1
  } else {
    navi.style.left = '-200px'
    state = 0
  }
}) */



const text = document.querySelector(".text");

const letters = [
  "프론트엔드",
  "배우는 것을 좋아하는",
  "끈기와 열정이 있는",
  "포기하지 않는",
];

let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(100);
    text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(2000);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(80);

    letter.pop();
    text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = letters[i + 1] ? i + 1 : 0;
  typing();
};

// 딜레이 기능
function wait(time) {
  return new Promise((res) => setTimeout(res, time));
}

setTimeout(typing, 1500);



//헤더 스크롤
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});


const fade = document.querySelector('.intro_box p');
const fadeImg = document.querySelector('.intro_img');
setTimeout(() => {
  gsap.to(fade, 3, {
    opacity: 1,
  })
  gsap.to(fadeImg, 3, {
    opacity: 1,
  })

}, 500)


//마우스클릭시아래로
const intro = document.getElementById("intro");
const profile = document.getElementById("profile");
const skill = document.getElementById("skill");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

const navEl = document.querySelectorAll(".navigation a");

//navigaion on
window.addEventListener('scroll', () => {
  const introP = intro.offsetTop;
  const profileP = profile.offsetTop - 70
  const skillP = skill.offsetTop - 70
  const projectP = project.offsetTop - 70
  const contactP = contact.offsetTop - 70

  for (let el of navEl) {
    el.classList.remove('on')
  }
  if (window.scrollY >= introP & window.scrollY <= profileP) {
    navEl[0].classList.add('on')
  } else if (window.scrollY >= profileP & window.scrollY <= skillP) {
    navEl[1].classList.add('on')
  } else if (window.scrollY >= skillP & window.scrollY <= projectP) {
    navEl[2].classList.add('on')
  } else if (window.scrollY >= projectP & window.scrollY <= contactP) {
    navEl[3].classList.add('on')
  } else if (window.scrollY >= contactP) {
    navEl[4].classList.add('on')
  }

})


navEl.forEach((item, idx) => {
  item.addEventListener("click", () => {
    if (idx === 0) {
      scroller(intro);
    } else if (idx === 1) {
      scroller(profile);
    } else if (idx === 2) {
      scroller(skill);
    } else if (idx === 3) {
      scroller(project);
    } else if (idx === 4) {
      scroller(contact);
    }
  });
});

//마우스모양 클릭시 바로아래섹션
const down = document.querySelector(".down");
down.addEventListener("click", () => {
  scroller(profile);
});

//탑버튼
const Top = document.getElementById("top");

window.addEventListener('scroll', () => {
  if (window.scrollY >= profile.offsetTop) {
    gsap.to(Top, 1, {
      opacity: 1
    })
  } else {
    gsap.to(Top, 1, {
      opacity: 0
    })
  }
})

Top.addEventListener("click", () => {
  scroller(0);
});

function scroller(value) {
  gsap.to(window, 0.4, {
    scrollTo: {
      y: value,
      offsetY: 50
    },
  });
}

//프로필 스르륵
const profileImg = document.querySelector('.profile_img');
const aboutMe = document.querySelector('.about_me');
const history = document.querySelector('.history');
const certificate = document.querySelector('.certificate');
const row = document.querySelector('.row')

gsap.registerPlugin(ScrollTrigger);

gsap.from(row, 1, {
  scrollTrigger: {
    trigger: profile,
    start: 'top 30%'
  },
  y: 100,
  opacity: 0
})


gsap.from(skill, 1, {
  scrollTrigger: {
    trigger: skill,
    start: 'top 30%',
  },
  y: 100,
  opacity: 0,
})

gsap.from(project, 1, {
  scrollTrigger: {
    trigger: project,
    start: 'top 30%',
  },
  y: 100,
  opacity: 0,
})


//숫자 올라가는거
const percent = document.querySelectorAll(".percent");

gsap.from(percent, 2, {
  textContent: 0, //시작숫자
  scrollTrigger: {
    trigger: skill,
    start: 'top 30%',
  },
  stagger: {
    onUpdate: function () {
      this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent) + '%';
    }
  }
});




//skill 다운
$(function () {

  $(".skill_header").click(function () {

    $('.skill_text p').slideUp();
    $('.skill_header i').removeClass('fa-chevron-up').addClass('fa-chevron-down');

    if ($(this).siblings('.skill_text').children('p').is(':hidden')) {
      $(this).siblings('.skill_text').children('p').slideDown();
      $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }

  });

});


//프로젝트 스와이퍼
const projectSwiper = new Swiper(".project-Swiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true,

    },
  },
});