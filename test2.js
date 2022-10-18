arr1 = ["a", "b", "c"];
arr2 = ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
    let empty = 0;
    for(let i=0; i<s1.length; i++) {
        for(let j=0; j<s2.length; j++) {
            if(s1[i] === s2[j]) {
                empty += 1;
            }
        }
    }return console.log(empty)
}

solution(arr1,arr2)