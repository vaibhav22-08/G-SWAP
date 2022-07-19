import { FaEthereum } from "react-icons/fa";
import { Loader } from ".";
import { TransactionContext } from '../context/TransactionContext';
import React, { useContext } from "react";
import { shortenAddress } from "../utils/shortenAdd";
import girl from "../images/girl.png";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md p-2 outline-none bg-[#f5f5f5] text-black border-none text-sm font-spot drop-shadow" />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();

  }
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 py-2 md:max-w-6xl mx-auto my-4  ">
      <div className="flex flex-col sm:my-8 md:my-2 flex-1">
        <div className=" ">
          <img src={girl} className="md:w-2/3  object-contain " />
        </div>
        <div className="flex flex-col space-y-2 pb-3">
          <h1 className="text-4xl leading-tight font-styrene font-bold uppercase">
            Send Crypto <br />across the World</h1>
          <p className="text-2xl font-spot">Send and Receive Crypto using G-SWAP</p>
        </div>
        <div className="flex justify-start">
          {!currentAccount && (<button
            type="button"
            onClick={connectWallet}
            className="text-white bg-black w-full px-4 py-2 mb-8 rounded-full font-spot text-lg uppercase 
          drop-shadow-md md:w-fit md:px-14 hover:bg-gray-800">Connect Wallet
          </button>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-1 justify-between items-center w-full ">
        <div className="flex flex-col w-full items-start bg-[#C03540] text-white font-spot p-4 mb-8 space-y-24 rounded-xl drop-shadow-lg md:w-80 ">
          <div className=" w-fit p-2 border rounded-full ">
            <FaEthereum className="text-3xl " />
          </div>
          <div>
            <p>{shortenAddress(currentAccount)}</p>
            <p>Ethereum</p>
          </div>
        </div>
        <div className="p-5 md:max-w-md w-full flex flex-col justify-start rounded-xl bg-black/10 drop-shadow-lg text-[#484848] items-center font-spot">
          <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
          <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleChange} />
          <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
          <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-black px-5 w-full mt-2 p-2 rounded-full font-spot uppercase hover:bg-gray-800">Send Now</button>
          )}
        </div>
      </div>
    </div>
  )
};

export default Welcome;
