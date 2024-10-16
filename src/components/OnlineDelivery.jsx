import React from "react";
import Card from "./Card";

// Manually importing the images
import img1 from "../assets/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg";
import img2 from "../assets/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg";
import img3 from "../assets/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg";
import img4 from "../assets/eillc7d7hbrzcuussus5.jpeg";
import img5 from "../assets/6e04be27387483a7c00444f8e8241108.jpeg";
import img6 from "../assets/w7ndo1dkkk6kf4qfz2p1.jpeg";
import img7 from "../assets/f1bc9ddf53de574cdc35ab2f717df234.jpeg";
import img8 from "../assets/919cb3be0e7406f86f6741ebe7c30128.jpeg";
import img9 from "../assets/535fc9f9c135f7982317bbb6a64a1ffc.jpeg";
import img10 from "../assets/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg";

const OnlineDelivery = () => {
  const data = [
    {
      image: img1,
      offer: "ITEMS AT TK179",
      title: "Pizza Hut",
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: "Pizza",
      place: "Dhanmondi",
    },
    {
      image: img2,
      offer: "TK50 OFF ABOVE TK199",
      title: "Janta Sweet Home",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Mishti (Sweets)",
      place: "Gulshan",
    },
    {
      image: img3,
      offer: "TK85 OFF ABOVE TK149",
      title: "Parihaar Bhojnalay",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      name: "Thali (Mixed Dishes)",
      place: "Mirpur",
    },
    {
      image: img4,
      offer: "TK70 OFF ABOVE TK149",
      title: "Kwality Walls Frozen",
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      name: "Ice Cream",
      place: "Chittagong",
    },
    {
      image: img5,
      offer: "TK1-5 OFF ABOVE TK179",
      title: "The Good Bowl",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "Biryani",
      place: "Sylhet",
    },
    {
      image: img6,
      offer: "TK100 OFF ABOVE TK499",
      title: "NIC Ice Creams",
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      name: "Ice Cream",
      place: "Khulna",
    },
    {
      image: img7,
      offer: "Items at TK109",
      title: "Dosh Center",
      rating: 4.0,
      minTime: 35,
      maxTime: 40,
      name: "Dosa",
      place: "Rajshahi",
    },
    {
      image: img10,
      offer: "TK100 OFF ABOVE TK449",
      title: "Kajal's Cake",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Cake",
      place: "Barisal",
    },
    {
      image: img8,
      offer: "TK125 OFF ABOVE TK349",
      title: "Lunch Box - Meals and Thalis",
      rating: 4.3,
      minTime: 30,
      maxTime: 35,
      name: "Biryani",
      place: "Narayanganj",
    },
    {
      image: img9,
      offer: "TK70 OFF ABOVE TK249",
      title: "McDonald's",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "Burger",
      place: "Bogura",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold md:mx-0 mx-3">
          Restaurants with online food delivery in Dhaka
        </div>
      </div>
      <div className="md:max-w-[1200px] flex my-4 gap-4 md:items-start items-center md:w-full mx-auto">
        <div className="p-3 rounded-md shadow">Filter</div>
        <div className="p-3 rounded-md shadow">Search</div>
        <div className="p-3 rounded-md shadow">Top</div>
        <div className="p-3 rounded-md shadow">Free</div>
        <div className="p-3 rounded-md shadow">Filter</div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {data.map((d, i) => {
          return <Card {...d} customClass = 'md:w-[273px] mx-3 shrink-0 grow mt-6' key={i} />;
        })}
      </div>
    </div>
  );
};

export default OnlineDelivery;
