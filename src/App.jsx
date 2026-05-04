import { useEffect, useState } from "react";

const App = () => {
  const [num1,setnum1] = useState(0);
  const [num2,setnum2] = useState(0);
  const [ans,setans] = useState(0);
  const [range,setrange] = useState(20);
  const [error,seterror] = useState("");
  const [Realans,setRealans] = useState();

 const RendomMath = () => {
   setnum1(Math.floor(Math.random() * range));
   setnum2(Math.floor(Math.random() * range));
 } 


  const ChecktheAns = (myans) => {
    const Realans = num1 * num2;
    setRealans(Realans);
    if(myans == Realans){
        seterror(`Good Wow !!!! Right Ans Real Ans is ${Realans} click Next`);
        RendomMath();
        setans(0);
    }else{
      seterror(`Ohh !! Wrong Ans Real Ans is ${Realans}`);
    }
  }
  return (
    <>
      <h1 className="text-center p-4 text-3xl text-blue-400">Simple Practice of My Self</h1>
      <div className="border-0 h-110 flex justify-center items-center flex-col gap-2 m-2">
        <p className="text-sm">Note : You Can Set the Range. By Default is 20</p>
           <div className="flex justify-center gap-10 items-center border-0 w-150 p-20">
            <h1 className="text-4xl">{num1}</h1>
           <h1 className="text-2xl">X</h1>
           <h1 className="text-4xl">{num2}</h1>
           <h1 className="text-4xl">=</h1>
           <input type="text" className="w-25 h-15 text-center text-4xl border-2 border-t-0 border-l-0 border-r-0 outline-0" value={ans} onChange={(e) => setans(e.target.value)}/>
            <input type="text" placeholder="Set Range" className="w-25 p-2 h-10 border-0 outline-2 outline-blue-200 rounded-md placeholder:text-center" value={range} onChange={(e) => setrange(e.target.value)}/>
           </div>
           <div className="border-0 w-175 h-20 flex justify-center items-center cursor-pointer gap-10">
                <button className="h-20 border-2 flex justify-center items-center w-50 rounded-md text-white bg-green-400 cursor-pointer active:bg-green-600" onClick={() => RendomMath()}>Next</button>
                <button className="h-20 border-2 flex justify-center items-center w-50 rounded-md text-white bg-black cursor-pointer active:bg-gray-400" onClick={() => ChecktheAns(ans)}>Check</button>
           </div>
      </div>
      <div className="border-0 m-2 h-40 flex justify-center items-center">
             <h1 className="text-2xl">{error}</h1>
      </div>
    </>
  );
};

export default App;
