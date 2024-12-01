import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section id="home" className="w-[1280px] h-[800px] ">
        <div className=" w-[1280px] h-[800px] flex flex-row items-center justify-between">
          <div className="w-[720px] h-[327px] gap-[24px] py-[60px]  ">
            <div className="w-[580px] h-[239px] gap-[24px]  ">
              <h1 className="w-[580px] h-[134px] font-[700] font-roboto text-[56px] leading-[67.2px] pl-[60px]  text-[#000000]  ">
                Learn new skills online with ease
              </h1>
              <p className="w-[580px] h-[81px] font-[400] font-roboto text-[18px] leading-[27px] pl-[60px] pr-[60px] py-[20px] text-[#000000]  ">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
            <div className="flex flex-row w-[408px] h-[64px] gap-[16px] py-[20px] pl-[60px] ">
              <button className="w-[180px] h-[48px] gap-[8px] rounded-[5px] border-[1px] bg-[#000000] text-[#ffffff] text-[16px] leading-[24px]  ">
                Start learning now
              </button>
              <button className="w-[180px] h-[48px] gap-[8px] rounded-[5px] border-solid border-black border-[1px]  text-[16px] leading-[24px]  ">
                Explore Courses
              </button>
            </div>
          </div>
          <div className="w-[720px] h-[900px] flex justify-end ">
            <Image
              src="/images/Image.svg"
              alt="hero image"
              width={450}
              height={350}
            />
          </div>
        </div>
        <div className="w-[1280px] h-[128px] flex flex-row gap-[64px] bg-[#F7F7F7]">
            <div className="w-[340px] h-[68px]">
              <h5 className="font-[700] font-roboto text-[24px] leading-[33.6px] text-start py-[30px]">Trusted by 2000+ companies worldwide.</h5>
            </div>
            <div className="w-[880px] h-[56px] gap-[19.12px] flex flex-row py-[40px] ">
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb.svg"} alt="" width={80} height={80}/></div>
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb2.svg"} alt="" width={80} height={80}/></div>
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb3.svg"} alt="" width={80} height={80}/></div>
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb4.svg"} alt="" width={80} height={80}/></div>
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb5.svg"} alt="" width={80} height={80}/></div>
                <div className="w-[123.8px] h-[38.52px]"><Image src={"/images/Airbnb6.svg"} alt="" width={80} height={80}/></div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
