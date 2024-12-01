import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <section className='flex flex-col justify-center items-center text-center w-[1280px] h-895px gap-[80px] bg-[#F7F7F7] '>
    <div className="h[136px] w-full px-4 flex flex-col gap-[24px] justify-center items-center text-center">
          <h1 className="w-[768px] h-[58px] font-[700] text-[48px] font-roboto leading-[67.2px] text-center ">
          Our team
          </h1>
          <p className="w-[768px] h-[27px] font-[400] text-[14px] font-roboto leading-[27px] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <div className='flex flex-col w-[1280px] h-[582px] gap-[64px] justify-between '>
            <div className='flex flex-row w-[1280px] h-[273px] gap-[48px] items-center '>
                <div className='w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image1.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>James Nduku</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>Marketing Coordinator</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
                <div className='w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image2.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>Joseph Munyambu</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>Nursing Assistant</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
                <div className=' w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image3.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>Joseph Ngumbau</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>Medical Assistant</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-[1280px] h-[273px] gap-[48px] items-center '>
                <div className='w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image4.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>Erick Kipkemboi</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>Web Designer</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
                <div className='w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image5.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>Stephen Kerubo</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>President of Sales</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
                <div className='w-[394.67px] h-[273px] gap-[24px] items-center'>
                    <div className='w-[80px] h-[80px] mx-[100px] '>
                        <Image className='text-center items-center mx-[60]' src={"/images/Image6.svg"} alt='' width={80} height={80} />
                    </div>
                    <div className='w-[394.67px] h-[57px] gap-[16px] '>
                        <p className='w-[394.67px] h-[30px] font-[600] font-roboto py-[20px] text-[18px] leading-[30px] text-center items-center '>John Leboo</p>
                        <p className='w-[394.67px] h-[27px] font-[400] font-roboto text-[18px] leading-[27px] text-center items-center py-[10px] '>Dog Trainer</p>
                    </div>
                    <div className='flex w-[100px] h-[24px] gap-[14px] mx[147.33px] py-[60px] mx-[150px]'>
                        <div className='flex items-center justify-center w-[24px] h-[24px] '>
                            <Image src={"/images/linkdin.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/twitter.svg"} alt='' width={18} height={18} />
                        </div>
                        <div className='flex items-center justify-center w-[24px] h-[24px]'>
                            <Image src={"/images/Vector.svg"} alt='' width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About