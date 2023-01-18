// DOM 요소 생성 함수
/*
function domAdd() {
    console.log('domAdd') ;
}
*/

// const(상수) -> 변수 정의.
const domAdd = () => {
    console.log('domAdd')
    const btn1 = document.createElement("button") ;
    btn1.innerHTML = "버튼1" ;
    btn1.id = "bt1" ;
    btn1.className = "btc" ;

    document.getElementById("content").append(btn1) ;

    const btn2 = document.createElement("button") ;
    btn2.innerHTML = "버튼2" ;
    btn2.id = "bt2" ;
    btn2.className = "btc" ;

    document.getElementById("content").append(btn2) ;

    const btn3 = document.createElement("button") ;
    btn3.innerHTML = "버튼3" ;
    btn3.id = "bt3" ;
    btn3.className = "btc" ;

    document.getElementById("content").append(btn3) ;
}

// DOM 요소 접근 함수
const domRead = () => {
    const btc = document.querySelectorAll(".btc") ;
    console.log(btc);

    // for 순회(변수=let, 상수=const)
    console.log("**for**")
    for(let i = 0; i < btc.length; i++) {
        console.log(btc[i]) ;
    }

    // for in 순회 (파이썬 문법)
    console.log("**for in**")
    for (let k in btc) {
        console.log(btc[k]) ;
    }

    // for each 순회
    console.log("**for each**")
    btc.forEach((item, k) => console.log(item, k))

    // for ... of (추천)
    console.log("**for of**")
    for (let [k,item] of btc.entries()) {
        console.log(k, item.innerHTML) ;
        if (k == 1) break; // 특정 값까지만 알고 싶을 때.
    }

}
/*  // 클릭함수
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click", () => {
        div0.innerHTML = `<h1>${bt0.innerHTML}<h1>`;
        console.log(bt0.innerHTML);
    });
}
*/


// DOM 요소 수정
const domUpdate = () => {
    const div1 = document.querySelector("#div1")
    // div1.innerHTML = "요소를 수정하고 있습니다..."

    /* // 함수 호출로 이벤트 달기
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    const bt3 = document.querySelector("#bt3");
    clickBtn("div1", bt1);
    clickBtn("div2", bt2);
    clickBtn("div3", bt3);
    */

    const btc = document.querySelectorAll(".btc");
    for (let bt of btc) {
        console.log(bt) ;
        bt.addEventListener("click", () => {
            div1.innerHTML = `<h1>${bt.innerHTML}<h1>`;
            console.log(bt.innerHTML);
        });
    }
    console.log(btc);

}

// 자바스크립트 렌더링 제어
// DOM의 로딩이 끝났다면...
document.addEventListener("DOMContentLoaded", () => {
    // DOM 요소 생성
    domAdd();

    // DOM 요소 접근
    domRead();

    // DOM 요소 변경
    domUpdate();

});

