function solution(dot) {
    const arr = [];
    dot.forEach((el) => {
        const arr = [el];
        if(arr[0]>0 && arr[1]>0) {
            return 1
        } else if(arr[0]<0 && arr[1]>0) {
            return 2
        } else if(arr[0]<0 && arr[1]<0) {
            return 3
        } else if(arr[0]>0 && arr[1]<0) {
            return 4
        }
    })
}

solution([2,4]);