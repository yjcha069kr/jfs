// 디지털 시계, clock.js

// 선언적 함수
/* 
    function 함수명(){
        코드;
    }
*/
function digitalClock() {

    // 변수 선언
    // const: 재선언❌, 재할당❌. 선언하면서 할당도 바로 해야됨
    // let:   재선언❌, 재할당⭕
    // new Date(): 날짜와 시간 객체
    const date = new Date();
    console.log(new Date()); // Tue Nov 04 2025 14:27:33 GMT+0900 (한국 표준시)
    // document: 문서 객체
    // getElementById('아이디'): 메서드(매개변수, ...)
    const clockBox = document.getElementById('clock');
    let day; // 요일을 담을 변수
    let clock; // 출력 변수

    // ⬜날짜
    let yy = date.getFullYear(); // 년
    let mm = date.getMonth() + 1; // 월 0~11 +1 -> 1~12
    let dd = date.getDate() // 일

    // 🕑시간
    let hour = date.getHours(); // 시
    let minute = date.getMinutes(); // 분
    let second = date.getSeconds(); // 초

    // 처리 -  getDay(): 요일을 숫자로, 일(0)~토(6)
    // if (date.getDay() === 0) {
    //     day = '일';
    // } else if (date.getDay() === 1) {
    //     day = '월';
    // } else if (date.getDay() === 2) {
    //     day = '화';
    // } else if (date.getDay() === 3) {
    //     day = '수';
    // } else if (date.getDay() === 4) {
    //     day = '목';
    // } else if (date.getDay() === 5) {
    //     day = '금';
    // } else if (date.getDay() === 6) {
    //     day = '토';
    // }
    // } else {
    //     day = '토';
    // }

    // switch~case 문으로 변경
    // 요일: 숫자에서 문자열로 변경
    switch (date.getDay()) {
        case 0: day = '일'; break;
        case 1: day = '월'; break;
        case 2: day = '화'; break;
        case 3: day = '수'; break;
        case 4: day = '목'; break;
        case 5: day = '금'; break;
        default: day = '토';
    }

    
    
    // AM/PM: 3항 연산자 사용하기
    const ampm = hour >=12 ? 'PM' : 'AM';
    // 12시간제로 바꾸기
    hour = hour % 12;
    // 0~11까지는 나머지가 0~11
    // 12~23까지는 나머지가 0~11
    hour = hour ? hour : 12;

        // 🕑두자리 맞추기: 0~9(10부터는 두자리)
        // 시간
    // if (hour < 10) {
    //     hour = '0' + hour;
    // } else {
    //     hour = hour;
    // }
        // 분
    // if (minute < 10) {
    //     minute = '0' + minute;
    // } else {
    //     minute = minute;
    // }
        // 초
    // if (second < 10) {
    //     second = '0' + second;
    // } else {
    //     second = second;
    // }
    
    // 함수: 반복 코드를 재사용할때
    // 선언적 함수 사용
    // 함수명-> twoDigits (카멜)
    // 매개변수(parameter)-> timePara
    function twoDigits(timePara) {
        if (timePara < 10) {
            timePara = '0' + timePara;
        } else {
            timePara = timePara;
        }
        // 삼항 연산자: (조건) ? 표현식1 : 표현식2;
        // timePara = (timePara < 10) ? timePara = "0" = timePara : timePara;
        return timePara; // timePara를 호출문에 돌려준다.
    }
    // 함수 호출
    hour = twoDigits(hour);
    minute = twoDigits(minute);
    second = twoDigits(second);

    // 출력
    // 1️⃣문자열 연결 연산자
    clock = yy + '년 ' + mm + '월 ' + dd + '일 ' + '(' + day + ') ' + ampm + hour + ':' + minute + ':' + second;
    // 2️⃣템플릿 리터럴 (ver.ES6): 기호는 백틱(`, backtick), 전부 문자열 처리됨
    // 문자열과 표현식(변수, 연산, 함수호출) 구별: ${표현식}
    // 불필요한 문자열(+, ", ' 등) 제거
    clock = `${yy}년 ${mm}월 ${dd}일(${day}) ${ampm} ${hour}:${minute}:${second}`;

    clockBox.innerHTML = clock;
}

// setInterval(함수, 시간);
// 자바스크립트는 시간을 밀리초 단위로 표현한다.
setInterval(digitalClock, 1000);