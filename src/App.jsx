import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

const App = () => {
  const [num1,setnum1] = useState(0);
  const [num2,setnum2] = useState(0);
  const [ans,setans] = useState(0);
  const [range,setrange] = useState(20);
  const [error,seterror] = useState("");
  const [Realans,setRealans] = useState();
  const [operations,setoperations] = useState("*");

 const RendomMath = () => {
   setnum1(Math.floor(Math.random() * range));
   setnum2(Math.floor(Math.random() * range));
 } 

  const ChecktheAns = (myans) => {
    let Realans;
    switch (operations) {
      case "+":
        Realans = num1 + num2;  
        break;
      case "-":
        Realans = num1 - num2;  
        break;
      case "/":
        Realans = num1 / num2;  
        break; 
       case "%":
        Realans = num1 % num2;  
        break; 
      case "*":
        Realans = num1 * num2;  
        break;
      default:
        break;
    }
    setRealans(Realans);
        if(myans == Realans){
        seterror(`Good Wow !!!! Right Ans Real Ans is ${Realans}  click Next`);
        RendomMath();
        setans(0);
    }else{
      seterror(`Ohh !! Wrong Ans X Real Ans is ${Realans}`);
    }
  }
  return (
    <div className="h-screen">
      <h1 className="text-center p-4 text-2xl lg:text-3xl text-blue-400 font-style">Simple Practice of My Self</h1>
      <div className="border-0 h-110 flex justify-center items-center flex-col gap-2 m-2">
        <p className="text-sm p-10 font-style">Note : You Can Set the Range. By Default is 20</p>
           <div className="flex justify-center gap-2 items-center border-0 w-100 sm:w-100 p-20 lg:flex lg:justify-center lg:items-center lg:gap-10 lg:w-190 rounded-md lg:rounded-3xl shadow-2xl">
            <h1 className="lg:text-4xl text-2xl font-style">{num1}</h1>
           <h1 className="text-2xl font-style">{operations}</h1>
           <h1 className="lg:text-4xl text-2xl font-style">{num2}</h1>
           <h1 className="text-4xl">=</h1>
           <input type="text" className="w-15 lg:w-25 text-2xl h-15 text-center lg:text-4xl border-2 border-t-0 border-l-0 border-r-0 outline-0 font-style" value={ans} onChange={(e) => setans(e.target.value)}/>
            <input type="text" placeholder="Set Range" className="w-15 lg:w-25 p-2 h-10 border-0 outline-2 outline-blue-200 rounded-md placeholder:text-center font-style" value={range} onChange={(e) => setrange(e.target.value)}/>
            <select className="p-2 border-0 outline-2 w-100 h-11 rounded-md cursor-pointer font-style text-center outline-blue-200" value={operations} onChange={(e) => setoperations(e.target.value)}>
              <option className="cursor-pointer text-center" value="*">X</option>
              <option className="cursor-pointer text-center" value="+">+</option>
              <option className="cursor-pointer text-center" value="-">-</option>
              <option className="cursor-pointer text-center" value="/">/</option>
              <option className="cursor-pointer text-center" value="%">%</option>
            </select>
           </div>
           <div className="border-0 w-80 h-25 flex justify-center items-center cursor-pointer gap-2 lg:w-150 lg:gap-10">
                <button className="h-15 border-0 flex justify-center items-center w-30 rounded-md text-white bg-green-400 cursor-pointer active:bg-green-600 lg:h-20 lg:w-50" onClick={() => RendomMath()}>Next <GrFormNextLink className="text-2xl"/></button>
                <button className="h-15 border-0 flex justify-center items-center w-30 rounded-md text-white bg-black cursor-pointer active:bg-gray-400 lg:h-20 lg:w-50" onClick={() => ChecktheAns(ans)}>Check</button>
           </div>
      </div>
      <div className="border-0 m-2 h-40 flex justify-center items-center">
             <h1 className="text-sm lg:text-2xl">{error}</h1>
      </div>
    </div>
  );
};

export default App;
