describe('클릭이벤트 및 뷰를 담당하는 클래스입니다.', ()=> {

    it('viewManage의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.', ()=>{
        const textManager = null;
        const btnEl = documnent.createElement('button');
        const viewerEl = document.createElement('h2');
        const inpTxt = document.createElement('input');

        const actual = () => new ViewManager(text.Manager, { btnEl})
    })
})