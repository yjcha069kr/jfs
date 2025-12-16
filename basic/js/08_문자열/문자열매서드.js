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


/**
 * 문자열.replace(찾을_내용, 바꿀_내용)
 *      - 문자열에서 찾을_내용을 바꿀_내용으로 대체하여 반환
 */
text = "Hello World";
let result = text.replace("World", "JavaScript");
console.log(result); // Hello JavaScript

let t = "apple apple apple";
console.log(t.replace("apple", "banana")); // banana apple apple

// 문자열.replace(정규식, "문자열")
// 문자열.replace(/문자열/g/, "문자열")
// g는 global로 같은 문자열을 모두 대치
t = "apple apple apple";
console.log(t.replace(/apple/g, "banana")); // banana banana banana

// 0~9와 .를 제외한 문자는 모두 공백으로 대치
"3.6k".replace(/[^0-9.]/g, '') // "3.6"
"1,234명".replace(/[^0-9.]/g, '') // "1234"

String(12345).replace("234", "000");  // "10005"

