// 전역변수
let n ;

// 요소 보이기 함수
const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;
}

// 주사위 번호 선택
const showDice = () => {
    n = Math.floor(Math.random() * 6 + 1);
    const s1 = document.querySelector("#s1");
    show("none", "block", "none", "none", "block")
    s1.innerHTML = `<img src="./images/${n}.png" />`
    console.log(n);
}

// 주사위 번호 결과 확인
const showOk = () => {
    const radios = document.querySelectorAll("input[type=radio]");

    // 사용자가 선택한 숫자
    let user_n;
    for(let r of radios) {
        if (r.checked) {
            // 문자열을 숫자로 바꾸어 준다.
            user_n = parseInt(r.value) ;
            break; 
        }
    }
    console.log(n, user_n);
    // 결과 공개.
    let tag;
    // == -> 데이터 타입 상관 x, === -> 데이터 타입 상관 o.
    if (n === user_n) {
        tag = 'o';
    } else {
        tag = 'x';
    }

    document.querySelector("form").reset();

    document.querySelector("#s1").innerHTML = `<img src="./images/${n}.png" />`
    document.querySelector("#s3").innerHTML = `<img src="./images/${tag}.png" />`
    show("block", "none", "block", "block", "none")
}

// DOM이 로드된 후...
document.addEventListener("DOMContentLoaded", () => {
    show("none", "none", "none", "block", "none")
});