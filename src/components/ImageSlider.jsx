import { React, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80",
      title: "Lobster",
    },
    {
      url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Sushi",
    },
    {
      url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Pasta",
    },
    {
      url: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Salmon",
    },
  ];
  const [currentindex, setcurrentindex] = useState(0);

  const preslide = () => {
    const isfirstslide = currentindex === 0;
    const newindex = isfirstslide ? slides.length - 1 : currentindex - 1;
    setcurrentindex(newindex);
  };

  const nextslide = () => {
    const islastlide = currentindex === slides.length - 1;
    const newindex = islastlide ? 0 : currentindex + 1;
    setcurrentindex(newindex);
  };

  return (
    <div className=" max-w-screen-lg mx-auto h-[580px] my-24 py-16 px-4 relative group">
      <div
        className="w-full h-full bg-cover bg-center duration-500 rounded-2xl"
        style={{ backgroundImage: `url(${slides[currentindex].url})` }}
      ></div>

      <div
        onClick={preslide}
        className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] p-2 group-hover:bg-black/20 left-5 text-2xl rounded-full cursor-pointer"
      >
        {" "}
        <BsChevronCompactLeft size={30} />{" "}
      </div>

      <div
        onClick={nextslide}
        className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] p-2 group-hover:bg-black/20 right-5 text-2xl rounded-full cursor-pointer"
      >
        {" "}
        <BsChevronCompactRight size={30} />{" "}
      </div>
    </div>
  );
};

export default ImageSlider;
