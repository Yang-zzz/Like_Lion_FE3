import {createStore} from 'redux'

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

const addNumber = () => {
    store.dispatch({type: 'ADD'})
}

const countReducer = (state = 0, action) => {
    swtich(action.type){
        case 'ADD': return state + 1
        case 'SUBSTRACT': return state - 1
        default : return state
    }
};

const store = createStore(countReducer)

// const countReducer = (state, action) => {
//     if (state === undefined) {
//         state = 0
//     }
// };

let count = 0;

// UI Update - text
const updateResult = (c) => {
    number.innerText = count;
    quantity.innerHTML = c;
    totalPrice.innerHTML = c * PRICE;
};

// State Change
const addNumber = () => {
    count += 1;
    minus.disabled = false;
    updateResult(count);
};

// State Change
const substractNumber = () => {
    count -= 1;
    plus.disabled = false;
    updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);