import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col w-full  max-w-[1280px] h-[684px] p-[80px] gap-[80px] mt-[50px]">
        <div className="flex flex-col w-[1280px] h-[684px] ">
          <div className="flex w-[1120px] h-[82px] items-start justify-between gap-3">
            <div className="w-[500px] h-[51px] ">
              <p className="font-roboto font-semibold text-[18px] leading-[27px] w-[500px] h-[27px] ">
                Subscribe to our newsletter
              </p>
              <p className="w-[500px] h-[24px] font-roboto font-normal text-xs leading-[24px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-[400px] h[82px] flex flex-col gap-[16px]">
              <div className="h--[48px] flex w-[400px] gap-[16px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[265px] h-[48px] border-[1px] border-[#000000] rounded-[5px] p-[12px] leading-[24px] "
                />
                <button className="w-[119px] h-[48px] border-[1px] rounded-[5px] border-[#000000] gap-[16px] ">
                  Subscribe
                </button>
              </div>
              <p className="w-[400px] h-[18px] font-roboto font-normal text-[12px] leading-[18px] ">
                By subscribing you agree to with our{" "}
                <span className="underline"> Privacy Policy</span>
              </p>
            </div>
          </div>
          <div className="w-[1120px] h-[225px] flex gap-2 justify-between py-[40px] mt-[40px]">
            <div className="w-[250px] h-[40px]">
              <Image src={"/images/logo.svg"} alt="" height="80" width="80" />
            </div>
            <div className="flex flex-col w-[250px] h-[225px] gap-[16px]  ">
              <p className="w-[250px] h-[24px] text-[16px] font-roboto leading-[24px] font-semibold">Courses</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Business</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Development</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Technology</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Design</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Programming</p>
            </div>
            <div className="flex flex-col w-[250px] h-[225px] gap-[16px]  ">
              <p className="w-[250px] h-[24px] text-[16px] font-roboto leading-[24px] font-semibold">Resources</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Career</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Resume</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Learning</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Interview Preparation</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Jobs</p>
            </div>
            <div className="flex flex-col w-[250px] h-[225px] gap-[16px]  ">
              <p className="w-[250px] h-[24px] text-[16px] font-roboto leading-[24px] font-semibold">About Us</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Contact</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Help/Support</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">FAQ</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Terms and Conditions</p>
              <p className="w-[250px] h-[21px] text-[14px] font-roboto leading-[21px] font-normal">Partners</p>
            </div>
          </div>
          <div className="w[1120px] h-[57px] mr-[80px] items-end border-solid border-[#000000] border-t-[1px] pt-[33px] mt-[100px]">
            <div className="h-[24px] flex justify-between py-[10px] pr-[60px]">
            <div className="h-[21px] flex gap-[24px]">
                <p className="text-[14px] leading-[21px]">2023 Ddsgnr. All right reserved.</p>
              <Link className="text-[14px] leading-[21px] underline" href="#">Privacy Policy</Link>
              <Link className="text-[14px] leading-[21px] underline" href="#">Terms of Service</Link>
              <Link className="text-[14px] leading-[21px] underline" href="#">Cookies Settings</Link>
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
