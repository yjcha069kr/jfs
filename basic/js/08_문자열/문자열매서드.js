// 실행버튼::::::오른쪽 위에 옆으로 누운 삼각형
//                ctrl + alt + N
/**
 * 문자열.charAt(index)
 *      - 문자열에서 지정한 위치(index)의 문자 1개를 반환하는 메서드
 *      - 인덱스는 0부터 시작
 */
let str ="JavaScript";

console.log(str.charAt(0));// "J"
console.log(str.charAt(4));// "S"
console.log(str.charAt(20));// "" (빈 문자열)
console.log(str.charAt(-1));// "" (음수는 무시)


/**
 * 문자열.lenght
 *      - 문자열에 포함된 문자 개수를 반환하는 속성
 */
let text ="JavaScript";
console.log(text.length);// 10

let msg ="Hello World";
console.log(msg.length);// 11 (공백 포함)

"".length;// 0