import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <>
      <section className='w-[1280px] h-[1049px] gap-[80px]'>
        <div className="flex flex-col gap-[12px]">
          <div className="h-[413px] py-[200px] pl-[300px]">
            <div className="w-[768px] h-[109px] gap-[357px]">
              <h2 className="w-[768px] h-[58px] font-roboto font-[700] text-[40px] leading-[57.6px] justify-items-center">
                Explore Courses By Category
              </h2>
              <p className="w-[768px] h-[27px] font-roboto font-[400] text-[16px] leading-[27px] justify-items-center py-[20px]  ">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
          </div>
          <div className=" w-[1280px] h-[636px] gap-[20px] ">
            <div className="flex flex-row  gap-[20px]">
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Design & Development
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame2.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Marketing
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame3.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Development
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  gap-[20px] mt-[20px]">
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame4.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Communication
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame5.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Digital Marketing
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame6.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Self Development
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[20px] mt-[20px] ">
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame7.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Business
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame8.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Finance
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-[132px] gap-[24px] ">
                <div className="flex w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] bg-[#F7F7F7] ">
                  <Image
                    src={"/images/Frame9.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div className="w-[246.67px] h-[57px] gap-[24px] py-[20px]">
                    <p className="w-[246.67px] h-[30px] font-[600] font-roboto text-[20px] leading-[30px] ">
                      Consulting
                    </p>
                    <p className="w-[246.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] ">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-center w-[155px] h-[48px] rounded-[5px] border-[#000000] border-[1px] ml-[560px] mt-[90]">
              <button className="w-[120px] h-[24px] leading-[24px] text-[16px] font-normal font-roboto text-[#000000]">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
