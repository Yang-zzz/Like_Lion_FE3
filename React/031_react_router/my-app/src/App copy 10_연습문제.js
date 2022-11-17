import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";


function Index(){
  return <div>Home Page</div>
}

function ProductDetail(){
  const location = useLocation()
  const { id } = useParams();
  console.log(location);
  console.log({id});

  return <div>productDetail</div>
}

function ProductNotice() {
  return <div>productNotice</div>
}

function CartPage(){
  return <div>cartPage</div>
}

function CuponPage(){
  return <div>CuponPage</div>

}
function QuestionPage(){
  return <div>QuestionPage</div>
}

function NoticePage(){
  return <div>noticePage</div>
} 

function UserPage(){
  return <div>Userpage</div>
} 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/Products" element={< ProductDetail />}/>
        <Route path="/Products/:id" element={<ProductDetail />}/>
        <Route path="/Products/:id/Notice" element={<ProductNotice />}/>
        <Route path="/Cart" element={<CartPage />}/>
        <Route path="/User" element={<UserPage />}/>
        <Route path="/User/Cupon" element={<CuponPage />}/>
        <Route path="/User/Question" element={<QuestionPage />}/>
        <Route path="/User/Notice" element={<NoticePage />}/>

        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        {/* <Route path="/study/:num/chat" element={<Chat />}/>
        <Route path="/study/:num/memo" element={<Memo />}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;