import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: <RiSecurePaymentFill />,
      title: "Secure International Transaction",
      paragraph: "we give You best level Security for your money ",
    },
    {
      id: 2,
      icon: <MdAddCall />,
      title: "24/7 Support from the Expert Team",
      paragraph: "we give You best level Security for your money ",
    },
    {
      id: 3,
      icon: <FaMoneyBillAlt />,
      title: "Lowest Processing Fee than Other Banks",
      paragraph: "we give You best level Security for your money ",
    },
    {
      id: 4,
      icon: <CiTimer />,
      title: "Less Time in any Loans Approval",
      paragraph: "we give You best level Security for your money ",
    },
  ];
  return (
    <div id="About" className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 mt-10">
      {cards.map((card) => (
        <div className="flex flex-col items-center justify-center overflow-hidden hover:h-full p-2 rounded-lg transition-all duration-1000 ease-in-out hover:bg-sky-500 hover:text-white">      
            <p className=" text-6xl  bg-sky-600 justify-center rounded-full p-3 my-2">
            {card.icon}
          </p>
          <p className="text-2xl font-semibold py-2">{card.title}</p>
          <p className="text-xl py-2">{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
