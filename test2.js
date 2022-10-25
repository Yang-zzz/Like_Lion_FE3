//   //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

// const oneTwoThree = [1, 2, 3, 4, 5];
// result = oneTwoThree.reduce((acc, cur, i, el) => {
//     console.log(acc, cur, i, el);
//     return acc * cur;
//   }, 1);

//   // 누적값:0 현잿값:1 인덱스:0 
//   // 누적값:1 현잿값:2 인덱스:1
//   // 누적값:3 현잿값:3 인덱스:2

//   result; // 6


  // reduce 연습
  // 1~10까지 배열에서 짝수만 다시 리턴

  const arr = [1,2,3,4,5,6,7,8,9,10];

  const every = arr.reduce((acc,cur,index) => {
      if (cur%2 === 0) acc.push(cur);
      console.log(index)
      return acc
  },[]);
  console.log(every)