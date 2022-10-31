//## 스텍 구현하기
class Stack {
    constructor() {
        this.arr = []; // 연결리스트로 구현할 수 있지만, 지금은 배우지 않았기에 배열로 구현
        this.length = 0;
    }
    push(data) {
        this.arr.push(data);
        this.length +=1;
    }
    pop(index) {
        if(this.length===0) {
            return
        }
        if(index > this.arr.length - 1) {
            this.length -= 1
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        this.length -= 1
        return result
    }

    empty() {
        if (this.length === 0) {
            return 1
        } else () {
            return 0
        }
    }

    top() {
        return this.arr[this.length - 1]

    }

    bottom() {
        return this.arr[0]
    }

    display() {
        return this.arr
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.display()


// 여러분이 다 이해하실 수 있는 코드로 설명해보겠습니다.
// const list1 = {
//     head: {
//         value: 46,
//         next: {
//             value: 49,
//             next: {
//                 value: 97,
//                 next: {
//                     value: 12,
//                     next: null
//                 }
//             }
//         }
//     }
// }
// list.head.next.next.value
// list.head.next.next.next.value

// let list2 = {
//     head: null
// }

// let node1 = {value: 46, next: null}
// let node2 = {value: 49, next: null}
// let node3 = {value: 97, next: null}
// let node4 = {value: 12, next: null}

// node1.next = node2
// node2.next = node3
// node3.next = node4

// list2.head = node1

// let node4 = {value: 12, next: null}
// let node3 = {value: 97, next: node4}
// let node2 = {value: 49, next: node3}
// let node1 = {value: 46, next: node2}

// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.
    

// let head = {
//     value: 90,
//     next: {
//         value: 2,
//         next: {
//             vlaue: 77,
//             next: {
//                 value: 35,
//                 next: {
//                     value: 21,
//                     next: {
//                         value: null
//                     }
//                 },
//             },
//         },
//     },
// }
// head.next.next.next.value

// let list = {
//     head: null
// }

// let hnode5 = {value: 21, next: null}
// let hnode4 = {value: 35, next: hnode5}
// let hnode3 = {value: 77, next: hnode4}
// let hnode2 = {value: 2, next: hnode3}
// let hnode1 = {value: 90, next: hnode2}

// list.head = hnode1;
// hnode1.next.next.next.value

// 위 문제 처럼 만들어 보도록 하겠습니다.
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

node1 = new Node(90)
node2 = new Node(2)
node3 = new Node(77)
node4 = new Node(35)
node5 = new Node(21)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

node1.data
// 90
node1.next.next.data
// 77
node1.next.next.next.data
// 35

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkList {
    constructor() {
        let init = new Node('init')
        this.head = init
        this.tail = init
    }
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드
        
    }
}