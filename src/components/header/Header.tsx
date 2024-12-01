import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="w-[1280px] h-[54px] flex flex-col">
        <div className="flex px-[62px] mr[64px] bg-[#F7F7F7] justify-between items-center border-solid border-b-[1px] border-[#000000]">
          <div className="flex font-roboto text-[14px] font-normal py-[12px]   ">
            <p className="leading-[21px] text-[14px] py-[4.5px] pr-[16px] border-solid border-r-[1px] border-[#676767] w-[205px] tracking-tighter">
              Phone Number: 956 742 455 678
            </p>
            <p className="leading-[21px] py-[4.5px] ml-[16px] w-[149px]">
              Email:info@ddsgnr.com
            </p>
          </div>
          <div className="w-[132px] h-[24px] gap-[12px] flex flex-row ">
          <div className="w-[12px] h-[18px]">
                <Image
                  className=""
                  src={"/images/facebook.svg"}
                  alt=""
                  height={18}
                  width={12}
                />
              </div>
            <div className="w-[24px] h-[24px]">
              <Image
                className=""
                src={"/images/insta.svg"}
                alt=""
                height={24}
                width={24}
              />
            </div>
            <div className="w-[24px] h-[24px]">
              <Image
                className=""
                src={"/images/twitter.svg"}
                alt=""
                height={24}
                width={24}
              />
            </div>
            <div className="w-[24px] h-[24px]">
              <Image
                className=""
                src={"/images/linkdin.svg"}
                alt=""
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        <div className="w-[1280px] h-[72px] py-[14px] flex flex-row">
          <div className="w-[1280px] h-[72px] bg-[#F7F7F7] flex items-center">
            <div className="w-[130.6px] h-[41px] py-[6.81px]">
              <Image
                className="ml-[60px]"
                src={"/images/logo.svg"}
                alt="logo"
                width={80}
                height={80}
              />
            </div>
            <div className=" h-[44px] flex bg-white items-center ml-[270px]">
              <nav className="font-roboto text-[16px]">
                <ul className="flex gap-[20px]">
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[64px] h-[44px] border-b-[1px] border-solid border-[#000000]"
                      href="#"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[79px] h-[44px]"
                      href="#"
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[79px] h-[44px]"
                      href="#"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[79px] h-[44px]"
                      href="#"
                    >
                      Achievement
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[79px] h-[44px]"
                      href="#"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      className="py-[10px] flex justify-center w-[79px] h-[44px]"
                      href="#"
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className='h-[40px] w-[191px] flex py-[1px] ml-[60px]'>
            <button className='w-[80px] h-[40px] rounded-[5px] border-solid border-black border-[1px]'>Login</button>
            <button className='w-[95px] h-[40px] rounded-[5px] bg-black text-white ml-[16px]'>Sign Up</button>
          </div>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Header;
