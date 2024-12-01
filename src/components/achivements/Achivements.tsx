import React from "react";

const Achivements = () => {
  return (
    <>
      <section className="flex flex-col w-[1280px] h-[488px] gap-[80px] p-[112px 64px 112px 64px] bg-[#ffffff]">
        <div className="w[1152px] h[264px] flex flex-col gap-[24px] items-center">
          <div className="h[136px] w-full px-4 flex flex-col gap-[24px] items-center">
            <h2 className="w-[1152px] h-[58px] font-[700] text-[48px] font-roboto leading-[57.6px] text-center ">
              Our Achivements
            </h2>
            <p className="w-[1152px] h-[54px] font-[400] text-[18px] font-roboto leading-[27px] text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>

        <div className="w[1280px] h[445px] flex-row flex justify-between items-center">
          <div className=" flex w-[616px] h-[96px] gap-[24px] my-[8px] justify-between">
            <div className=" flex flex-col items-center justify-center w-[296px] h-[80px] gap-[8px]">
              <h3 className="w-[91px] h-[48px] font-roboto font-[700] text-[40px] leading-[48px]">
                +200
              </h3>
              <p className="w-[59px] h-[24px] font-roboto font-[400] text-[16px] leading-[24px] ">
                Courses
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[296px] h-[80px] gap-[8px]">
              <h3 className="w-[91px] h-[48px] font-roboto font-[700] text-[40px] leading-[48px]">
                50K
              </h3>
              <p className="w-[59px] h-[24px] font-roboto font-[400] text-[16px] leading-[24px] ">
                Mentors
              </p>
            </div>
          </div>
          <div className=" flex w-[616px] h-[96px] gap-[24px] my-[8px] justify-between">
            <div className=" flex flex-col items-center justify-center w-[296px] h-[80px] gap-[8px]">
              <h3 className="w-[91px] h-[48px] font-roboto font-[700] text-[40px] leading-[48px]">
                370k
              </h3>
              <p className="w-[59px] h-[24px] font-roboto font-[400] text-[16px] leading-[24px] ">
                Students
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-[296px] h-[80px] gap-[8px]">
              <h3 className="w-[91px] h-[48px] font-roboto font-[700] text-[40px] leading-[48px]">
                100+
              </h3>
              <p className="w-[59px] h-[24px] font-roboto font-[400] text-[16px] leading-[24px] ">
                Recognition
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achivements;
