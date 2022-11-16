function One(){
  return <h1>hello world</h1>
}
function Two(props) {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
)
}
function App() {
  return (
    <div>
      hello
      {console.log(<One/>)}
      <Two>
        <h1 className="twoclass" key="100">hello world</h1>
        <p>hello world</p>
      </Two>
    </div>
  )
}
export default App;
