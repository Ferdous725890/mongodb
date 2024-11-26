
import './App.css'

function App() {
  const handeladduser = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    console.log({name, email});
    const user = {name, email}
    fetch("http://localhost:5000/users",{
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then( data =>{
      console.log("data", data );
    } )
  }
  return (
    <>
     <h2>hello first</h2>
     <form onSubmit={handeladduser} >
      <input type="text" name="name" id="" /> <br></br>
      <input type="email" name="email" id="" /> <br></br>
      <input type="submit" value="add user" /> <br></br>
     </form>
    </>
  )
}

export default App



