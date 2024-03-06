import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState(false);
  const [messageFromFlutter, setMessageFromFlutter] = useState('');



  useEffect(() => {
    if (typeof document !== 'undefined') {
      window.addEventListener('message', function(event) {
        if (event.data.fromFlutter) {
          setMessageFromFlutter(event.data.message);
          console.log('message from flutter', event.data.message);
        }
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', function(event) {
          setMessageFromFlutter('');
        });
      }
    };
  }, []);


  /*
  React.useEffect(() => {
    const handleStorageChange = () => {
      // Update parameters state when local storage changes
      const walledtAddress = localStorage.getItem('walletAddress');
      const maticBalance = localStorage.getItem('maticBalance');
      const centBalance = localStorage.getItem('centBalance');
      // const otherParamsJSON = localStorage.getItem('otherParams');
      // const otherParams = otherParamsJSON ? JSON.parse(otherParamsJSON) : [];

      // Set parameters state
      setParameters({ walledtAddress, maticBalance, centBalance });
    }

    // Listen for changes in local storage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  console.log(isConnected, maticBalance, centBalance)
*/

  function sendMessageToFlutter(message) {
    window.Flutter.postMessage(message);
  }

  return (
    <>
      <div className="text-2xl">isConnected: {walletAddress ? walletAddress : ''} </div>
      <div className="flex-col justify-center align-center pt-3">

      <p>Message from Flutter span is: <span id="messagesFromFlutter"></span></p>
        <input
          id="cela"
          type="text"
          placeholder="cela amount"
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
        />


        TOKEN
        <button
          onClick={() => {
            const amount = document.getElementById('cela').value;
            sendMessageToFlutter(amount);
          }}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button>
        <div className="text-md">Token tx : </div>
      </div>
      <div className="flex-col justify-center align-center pt-3">
        <input
          id="matic"
          type="text"
          placeholder={messageFromFlutter.text}
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
          
        />
        MATIC
        <button
          onClick={() => {
          // const second= document.getElement.
           // sendSecondMessageToFlutter(messageFromFlutter.text);

          }}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 pb-1 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button>
        {/* <div>Message from Flutter: {messageFromFlutter.text}</div>
        <div className="text-md">Matic tx :{messageFromFlutter.text} </div> */}
       
           
    </div>
    </>
  );
}
