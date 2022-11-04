class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }
    async setup(){
        await this.loadData((json)=> {
            this.colaFactory(json);
        });
    }
    // --------------------------------------------------------------------------------
    // AJEX 방식
    // loadData(callback) { // 요청시작 후 변화가 있을 때 콜백함수가 실행된다.
    //     const requestObj = new XMLHttpRequest();
    //     // 서버와 통신하기 위해 필요한 객체를 생성한다.
    //     requestObj.open('GET', '/src/js/item.json')
    //     // 서버로 open을 요청한다.
    //     requestObj.onreadystatechange = () => {
    //         if(requestObj.readyState === 4 && requestObj.status===200) {
    //             // readyState 서버로부터 요청상태 , status 요청 후 처리과정 상태를 나타냄
    //             callback(JSON.parse(requestObj.responseText));
    //         }
    //     }
    //     requestObj.send(null);
    // }
    // --------------------------------------------------------------------------------
    // Fetch 방식
    
    async loadData(callback) {
        const respose =  await fetch('/src/js/item.json');

        if(respose.ok) {
            callback(await respose.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
        } else {
            alert('통신에러' + respose.status);
        }
    }

    colaFactory(data) {
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="/src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            this.itemList.appendChild(item);
        });
    }
}

export default ColaGenerator;