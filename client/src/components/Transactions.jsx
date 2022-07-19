import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from '../utils/dummyData';
import { shortenAddress } from "../utils/shortenAdd";
import useFetch from "../hooks/useFetch";
import guy from "../images/guy.png";
const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="bg-[#181918]/10 m-4 flex flex-1 
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    flex-col p-3 rounded-md hover:shadow-xl  "
    >
      <div className="flex flex-col items-center w-full mt-3 ">
        <div className="w-full mb-6 p-2 text-2xl font-spot " >
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
            <p className="text-black text-base">FROM: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
            <p className="text-black text-base">TO: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-black text-base">AMOUNT: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-black text-base">MESSAGE: {message}</p>
            </>
          )}
        </div>
        <img src={gifUrl || url}
          alt="gif"
          className="w-full h-64 2x:h-96 rounded-lg object-cover shadow-md" />
        <div className=" p-3 px-5 w-max mt-2">
          <p className="text-[#808080] font-mono font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20">
      <div className="flex flex-col items-center md:p-12 py-12 px-4">
        {currentAccount ? (
          <div className="flex flex-col-reverse justify-between items-center " id="transaction">
            <h3 className="text-4xl leading-tight font-styrene font-bold uppercase text-center ">Latest Transactions</h3>
            <img src={guy} alt="picture of guy smoking" className="max-w-xs  object-contain" />
          </div>
        ) : (
          <h3 className="text-2xl leading-tight font-styrene font-bold text-red-500 text-center " id="transaction">Connect your wallet to see the latest transactions</h3>
        )}
        {/* Latest transactions */}
        {/* Connect your account to see the latest transactions */}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          )).reverse()}
        </div>
      </div>
    </div>
  );
};

export default Transactions;