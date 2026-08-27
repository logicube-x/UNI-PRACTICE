import React, { useState } from 'react'

const App = () => {

let[formData,setFormdata]=useState({
  
})
let handelChange=(e)=>{
 let{name,value}=e.target
  
  setFormdata({ ...formData,[name]:value})
}
console.log(formData);


  return (
    <div>
      <form action="" className="border-2 w-90 flex flex-col gap-4 m-5 p-3">
        <input onChange={handelChange} className="border-2 rounded" type="text" name="name" placeholder="name" />
        <input onChange={handelChange} className="border-2 rounded" name="email" type="text" placeholder="email" />

        <input onChange={handelChange} className="border-2 rounded"  name="pass"type="text" placeholder="password" />
        <button className='p-2 text-white bg-red-500 rounded-2xl'>Submit</button>
      </form>
      {/* <h1>The name is -{name}</h1>
      <h1>The email is -{email}</h1>
      <h1>The password is -{pass}</h1> */}
    </div>
  );
}

export default App