// const kFoods= ['김치', '비빔밥', '김밥', '떡볶이', '순두부찌개'];

// let info = '꼭 먹어야 할 한국 음식: '
// for(let i = 0; i < kFoods.length; i++) {
// 	info += kFoods[i];
// 	// 조건문은 뒤에 나오는 내용이지만, 깔끔한 결과물 출력을 위해 넣어둡니다.
// 	if(i < kFoods.length - 1) info += ', ';
// }

// console.log(info);

// let sum = 0;
// let i = 0;

// do {
// 		i++;
// 		sum += i;
// } while (i < 10);

// console.log(sum);
// do while 문은 실행문을 작성하지 않아도 되는것?

// timestable:
// for (let x = 2; x < 10; x++) {
// 	for (let y = 1; y < 10; y++) {
// 		if (x === 4) break timestable;
// 		console.log(`${x} X ${y} = ${x * y}`);
// 	}
// }

const arr9 = [];
arr9.length = 3;
console.log(arr9[0]);
console.log(Object.getOwnPropertyDescriptors(arr9));