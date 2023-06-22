import * as React from "react";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider2";
import Slider3 from "../../components/Slider3";
import Button from "../littleComponent/Button";
import Typography from "../littleComponent/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

// const backgroundImage = "images/background.jpg";

export default function ProductHero() {
  return (
   <div className="sm:flex justify-between m-4 h-[400px]">
    {/* <Slider2/>
    <Slider3/> */}
    <div className="w-[100%] rounded-lg border-2 p-2 border-primary flex justify-">
      <div className="w-[30%] bg-red-400">123</div>
      <div className="w-[70%] bg-blue-400 flex text-justify items-center p-5">A blockchain is a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions and a reference to the block that came before it. This creates a permanent and unchangeable record of every transaction that has ever occurred on the blockchain.

SmartXBlockchain is utilizing the power of blockchain technology to revolutionize the way businesses operate. By providing secure and transparent transactions on our blockchain platform, SmartXBlockchain is enabling companies to streamline their operations, cut costs and improve efficiency. With SmartXBlockchain, businesses can trust that their transactions are secure, transparent and tamper-proof.

Our platform is built on cutting-edge blockchain technology, which ensures that every transaction is recorded and verified in real-time. This eliminates the need for intermediaries, such as banks, to verify transactions and reduces the time and costs associated with traditional transactions.

SmartXBlockchain is also providing solutions in various industries such as Supply chain management, Real-estate, voting, Gaming and more. SmartXBlockchain is making it easy for businesses of all sizes to take advantage of the benefits of blockchain technology.

In summary, SmartXBlockchain is a blockchain-based platform that provides secure and transparent transactions for businesses. It utilizes cutting-edge blockchain technology to enable companies to streamline their operations, cut costs and improve efficiency. With SmartXBlockchain, businesses can trust that their transactions are secure, transparent and tamper-proof and it also providing solutions in various industries.
</div>
    </div>
   </div>
  );
}
