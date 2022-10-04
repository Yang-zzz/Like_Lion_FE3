let str = "hello world"
// 첫번째 인자(start)가, 두번쨰(end) 인자보다 클 경우
// substring 의 경우 (5,0) 을 (0,5) 로 변환
let a = str.substring(5, 0);

// slice 는 빈문자열 반환
let b = str.slice(5, 0);

console.log("substring : " + a); // hello
// 첫번째 인자 (start) -> index[0] == 'h' 부터
// 두번째 (end) -1 -> index[5-1] == index[4] == o 까지 잘라내어 출력 

console.log("slice : " + b);
//s

let c = 'werr';
console.log(isNaN(NaN)); //넘버가 아니다
