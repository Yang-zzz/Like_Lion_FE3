import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";


function Index(){
  return <div>Home Page</div>
}

function A(){
  const location = useLocation()
  const { id } = useParams();
  console.log(location);

  return <div>A_page</div>
}

function B() {
  return <div>B_page</div>
}

function C(){
  const location = useLocation()
  // const { id } = useParams();
  console.log(location);
  // const number = location.pathname.split('/')[1]
  // console.log({id});
  // console.log(number);
  return <div>C_page</div>
}

function D(){
  return <div>D_page</div>

}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/a" element={<A />}/>
        <Route path="/b" element={<B />}/>
        <Route path="/c" element={<C />}/>
        <Route path="/d" element={<C />}/>
        <Route path="/c/d" element={<D />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;