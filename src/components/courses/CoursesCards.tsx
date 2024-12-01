import React from "react";
import Image from "next/image";

const CoursesCards = () => {
  return (
    <>
      <section className="flex flex-col w-[1280px] h-[1742px] gap-[60px] bg-[#ffffff]">
        <div className="h[136px] w-full px-4 flex flex-col gap-[24px] justify-center items-center text-center">
          <h1 className="w-[768px] h-[67px] font-[700] text-[56px] font-roboto leading-[67.2px] text-center ">
            Courses
          </h1>
          <p className="w-[768px] h-[27px] font-[400] text-[18px] font-roboto leading-[27px] text-center ">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="flex flex-col items-center w-[1152px] h-[1340px] gap-[64px] ">
          <div className="flex w-[336px] h-[40px] mx-[472] ">
            <div className="flex flex-col justify-between items-center text-center w-[87px] h-[40px] gap-[8px] border-b-[1px] border-solid border-[#676767]">
              Popular
            </div>
            <div className="flex flex-col justify-between items-center text-center w-[140px] h-[40px] gap-[8px]">
              Recommended
            </div>
            <div className="flex flex-col justify-between items-center text-center w-[109px] h-[40px] gap-[8px]">
              Best Price
            </div>
          </div>
          <div className="flex flex-row w-[1152px] h-[534px] gap-[64px]">
            <div className="flex flex-row w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[384px] h-[300px]">
                  <Image
                    src={"/images/card1.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[382px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px] text-[14px] leading-[21px] font-roboto">
                        Design
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                      UX/UI Design 201
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px]  h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400]  text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px] pr-[170px] py-[10px]  ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[384px] h-[300px]">
                  <Image
                    src={"/images/card2.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[382px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px]  text-[14px] leading-[21px] font-roboto">
                      Programmimg
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                    Introduction to Python
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px]  h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400] text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px] pr-[170px] py-[10px]  ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[384px] h-[300px]">
                  <Image
                    src={"/images/card3.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[382px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px]  text-[14px] leading-[21px] font-roboto">
                      Business
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                    Data Analysis for Beginners
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px] h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400] text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px]  pr-[170px] py-[10px] ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[1152px] h-[534px] gap-[64px]">
            <div className="flex flex-row w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[384px] h-[300px]">
                  <Image
                    src={"/images/card4.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[384px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px]  text-[14px] leading-[21px] font-roboto">
                      Art
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                    Art Specialization
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px] h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400] text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px] pr-[170px] py-[10px]  ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[400px] h-[300px]">
                  <Image
                    src={"/images/card5.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[382px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px]  text-[14px] leading-[21px] font-roboto">
                      Law
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                    Rule of Law
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px] h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400] text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px] pr-[170px] py-[10px]  ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[1152px] h-[534px] gap-[32px]">
              <div className="flex flex-col w-[384px] h-[534px] gap-[24px] bg-[#F7F7F7] rounded-[5px]">
                <div className="w-[384px] h-[300px]">
                  <Image
                    src={"/images/card6.svg"}
                    alt=""
                    width={384}
                    height={300}
                  />
                </div>
                <div className="flex flex-col w-[384px] h-[210px] gap-[24px]">
                  <div className="flex flex-col w-[382px] h-[122px] gap-[8px]">
                    <div className="flex items-center justify-between h-[24px] w-full">
                      <p className="font-[600] pl-[20px]  text-[14px] leading-[21px] font-roboto">
                      Tech
                      </p>
                      <Image
                        className="w-[48px] h-[24px] gap-[4px] mr-[20px]"
                        src={"/images/Star1.svg"}
                        alt=""
                        width={48}
                        height={24}
                      />
                    </div>
                    <h5 className="w-full pl-[20px]  font-roboto font-[700] text-[24px] leading-[33.6px]">
                    Introduction to webflow
                    </h5>
                    <p className="w-full pl-[20px]  font-roboto font-[400] text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                  <div className="flex flex-row justify-between pl-[20px]  w-[382px] h-[40px] gap-[16px] ">
                    <div className="flex w-[117px] h-[40px] gap-[8px] rounded-[5px] border-[1px] border-solid border-[#000000] ">
                      <button className="font-[400] text-[16px] leading-[24px] font-roboto justify-center items-center text-center w-full h-full ">Enroll Now</button>
                    </div>
                    <div className="roundede-[5px] gap-[8px] pr-[170px] py-[10px]  ">
                    <p className="leading-[24px] font-[500] font-roboto text-[16px] w-[37px] h-[24px] justify-between">$400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-center w-[152px] h-[70px] rounded-[5px] border-[1px] border-[#000000] gap-[8px] ">
            <button className="w-[120px] h-[24px] leading-[24px] text-[16px]font-[400] font-roboto ">View All Courses</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesCards;
