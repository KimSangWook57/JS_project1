// 버튼 위치.
const randomButton = document.querySelector(".ran_btn");

// 주사위 이미지 폴더.
const imgArray = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

// 주사위 이미지 출력위치.
const diceImg = document.querySelector(".ran_img");

// 랜덤 함수.
function randomDiceRoll() {
    const diceRollImg = imgArray[Math.floor(Math.random() * imgArray.length)];
    diceImg.src = `./02/images/${n}.png`;
}

// 코드 실행.
// DOM의 로딩이 끝났다면...
document.addEventListener("DOMContentLoaded", () => {
    randomButton.addEventListener("click", randomDiceRoll);
});