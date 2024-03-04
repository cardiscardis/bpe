import React from "react"

export default function HomePage() {

  const [parameters, setParameters] = React.useState()
  const [walletAddress, setWalletAddress] = React.useState(false)
  const [maticBalance, setMaticBalance] = React.useState()``
  const [centBalance, setCentBalance] = React.useState()
  const [isConnected, setIsConnected] = React.useState()
  const [messageFromFlutter, setMessageFromFlutter] = React.useState()
  const [messageHandler, setMessageHandler] = React.useState()
  const [messageToFlutter, setMessageToFlutter] = React.useState()
  const [message,setMessage]=React.useState()
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
  window.Flutter.postMessage();
}

React.useEffect(() => {
  function handleReceiveMessage(event) {
    setMessageFromFlutter(event.data);
  }

  window.addEventListener('message', handleReceiveMessage);


  return () => {
    window.removeEventListener('message', handleReceiveMessage);
  };
}, []);



  return (
    <>
      <div className="text-2xl">isConnected: {walletAddress ? walletAddress : ''} </div>
      <div className="flex-col justify-center align-center pt-3">
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
          placeholder="amount"
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
        />
        MATIC
        <button
          onClick={() => {}}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 pb-1 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button> 

        
      <div className="text-md">Matic tx: {messageFromFlutter}</div> {/* Display message here */}
    </div>

        <div className="text-md">Matic tx : </div>
      
         

    </>
  )
}