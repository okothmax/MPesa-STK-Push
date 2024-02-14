// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
import './index.css'
import Axios from 'axios'

function App() {
const [phone, setPhone] = useState();
const [amount, setAmount] = useState();

const [data, setData] = useState();
// const [error, setError] = useState();
const [ buttonText,setButtonText]=useState("Pay")

const payHandler = (event) => {
  event.preventDefault();
  setButtonText("Processing")
  // Axios.post("https://railwaympesa.up.railway.app/token", {

  Axios.post("http://localhost:5000/token", {
    amount,
    phone,
})
.then((res) => {
  setData(res.data.CustomerMessage);
  console.log(res)
setButtonText("Pay")
})
.catch((error) => {
  console.log(error);
setButtonText("Pay")
});
};
  return (
    <div className='mt-10 justify-center items-center flex flex-col'>
    <h1 className="text-2xl">
      Pay with <span className="text-green-600  font-bold">Mpesa</span></h1>

      <form className='flex flex-col space-y-5'>
        <input 
        onChange={(e) => setPhone(e.target.value)}
        placeholder="phone" 
        className=" bg-slate-100 text-center rounded-xl" 
        />
      
       <input 
       onChange={(e) => setAmount(e.target.value)}
       placeholder="Amount" 
       className='bg-slate-100 py-1 outline-none text-center rounded-xl'
        />

      <button 
      onClick={payHandler}
      className='bg-green-600 text-white px-2 py-1 rounded-2xl'>
       {buttonText}
      </button>
      </form>
      <p className="mt-4">{data}</p>
      <p className=" mt-40">Mpesa Stk Push with Nodejs</p>
      <p className="">Made with ❤ by Jacky </p>
    </div>

  );
}

export default App
