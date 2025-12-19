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
 *      - 문자열에서 (찾을_내용)을 (바꿀_내용)으로 대체하여 반환
 */
text = "Hello World";
let result = text.replace("World", "JavaScript");
console.log(result); // Hello JavaScript

let t = "apple apple apple";
console.log(t.replace("apple", "banana")); // banana apple apple

/** 
 * 문자열.replace(정규식, "문자열")
 * 문자열.replace(/문자열/g/, "문자열")
 * g는 global로 같은 문자열을 모두 대치
*/
t = "apple apple apple";
console.log(t.replace(/apple/g, "banana")); // banana banana banana

// 0~9와 .를 제외한 문자는 모두 공백으로 대치
"3.6k".replace(/[^0-9.]/g, '') // "3.6"
"1,234명".replace(/[^0-9.]/g, '') // "1234"

String(12345).replace("234", "000");  // "10005"

/**
 * 문자열.substring(시작인덱스, 끝인덱스)
- 문자열에서 지정한 인덱스 구간의 문자열을 추출하여 새로운 문자열로 반환
-> 시작인덱스 ~ 끝인덱스
 */
text ="JavaScript";

console.log(text.substring(0,4));// "Java"
console.log(text.substring(4));// "Script"
console.log(text.substring(4,10));// "Script"
// 인덱스 순서 자동 교환
console.log(text.substring(10,4));// "Script"
// 음수는 0으로 처리
console.log(text.substring(-3,4));// "Java"


/**
 * 문자열.includes(검색할_문자, 시작_위치)
 * - 문자열(String)이나 배열(Array) 안에 특정 값이 포함되어 있으면 true, 아니면 false
 */
text = "Hello World";

console.log(text.includes("World")); // true
// 대소문자 구분
console.log(text.includes("world")); // false 
// 1번째 문자부터 검색
console.log(text.includes("Hello", 1)); // false

/**
 * 문자열.split(구분자, [배열항목최대수])
 * - 문자열을 지정한 구분자(separator)를 기준으로 나누어 배열로 변환
 */
console.log("apple,banana,orange".split(","));
// ["apple", "banana", "orange"]

console.log("2025-12-16".split("-"));
// ["2025", "12", "16"]

console.log("hello world".split(" "));
// ["hello", "world"]

console.log("abc".split(""));
// ["a", "b", "c"]

console.log("a-b-c-d".split("-",2));
// ["a", "b"]



// length
console.log("hello".length);              // 5

// at(인덱스)
// 인덱스를 음수로 지정하면 오른쪽에서 부터
console.log("apple".at(-1));              // "e"

// slice()
// 인덱스를 음수로 지정하면 오른쪽에서 부터
console.log("abcdef".slice(-3));          // "def"

// lastIndexOf()
// 끝에서 시작방향으로 찾는다.
console.log("banana".lastIndexOf("na"));  // 4

// startsWith()
console.log("hello".startsWith("he"));    // true

// endsWith()
console.log("hello".endsWith("lo"));      // true

// toUpperCase()
console.log("Hello".toUpperCase());       // "HELLO"

// toLowerCase()
console.log("Hello".toLowerCase());       // "hello"

// replaceAll()
console.log("a-a-a".replaceAll("a","b")); // "b-b-b"

// trim()
// 앞,뒤 공백 제거
console.log("  hi  ".trim());             // "hi"

// trimStart()
// 시작(왼쪽) 공백 제거
console.log("  hi".trimStart());          // "hi"

// trimEnd()
// 끝(오른쪽) 공백 제거
console.log("hi  ".trimEnd());            // "hi"

// 문자열.repeat(숫자)
// 문장열을 숫자 만큼 반복
console.log("ha".repeat(3));              // "hahaha"

// 문자열.concat("문자열")
// 문자열 결합 연산자 +와 같다.
// "a" + "b" -> "ab"
console.log("a".concat("b"));             // "ab"
