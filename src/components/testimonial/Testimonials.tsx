import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
    <section className='flex flex-col w-[1280px] h-[830.89px] gap-[80px] bg-[#F7F7F7] '>
        <div className='w-[560px] h-[109px] gap-[24px] py-[150px]'>
            <h2 className='w-[560px] h-[58px] font-roboto font-[700] text-[48px] leading-[57.6px] mx-[70px] '>Customer testimonials</h2>
            <p className='w-[560px] h-[27px] font-roboto font-[400] text-[18px] leading-[27px] mx-[70px] py-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-row justify-between mx-[70px] w-[1152px] h-[417.89px] gap-[48px] '>
            <div className='flex flex-col w-[362.67px] h-[321.89px] py-[20px] border-[1px] border-solid border-[#000000] gap-[24px] '>
                <div className='flex flex-row mx-[20px]  w-[116px] h-[18.89px] gap-[4px] '>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                </div>
                <div className='flex flex-col w-[298.67px] h-[215px] gap-24px '>
                    <p className='w-[352px] h-[108px] font-roboto font-[400] text-[18px] leading-[27px] mx-[20px] my-[20px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className='flex flex-row items-center justify-between w-[254px] h-[56px] gap-[20px] '>
                        <Image className='rounded-[50%] mx-[20px]' src={"/images/Image3.svg"} alt='' width={56} height={56}/>
                        <div className='flex flex-col justify-between w-[178px] h-[48px] '>
                            <p className='w-[111pxx] h-[24px] font-roboto font-[600] text-[16px] leading-[24px] '>James Nduku</p>
                            <p className='whitespace-nowrap w-[178pxx] h-[24px] font-roboto font-[400] text-[16px] leading-[24px]'>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[362.67px] h-[321.89px] py-[20px] border-[1px] border-solid border-[#000000] gap-[24px] '>
                <div className='flex flex-row mx-[20px]  w-[116px] h-[18.89px] gap-[4px] '>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                </div>
                <div className='flex flex-col w-[298.67px] h-[215px] gap-24px '>
                    <p className='w-[352px] h-[108px] font-roboto font-[400] text-[18px] leading-[27px]  mx-[20px] my-[20px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className='flex flex-row items-center justify-between w-[254px] h-[56px] gap-[20px] '>
                        <Image className='rounded-[50%] mx-[20px]' src={"/images/Image1.svg"} alt='' width={56} height={56}/>
                        <div className='flex flex-col justify-between w-[178px] h-[48px] '>
                            <p className='w-[111pxx] h-[24px] font-roboto font-[600] text-[16px] leading-[24px] '>Erick Kipkemboi</p>
                            <p className='whitespace-nowrap w-[178pxx] h-[24px] font-roboto font-[400] text-[16px] leading-[24px]'>Scrum Master</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[362.67px] h-[321.89px] py-[20px] border-[1px] border-solid border-[#000000] gap-[24px] '>
                <div className='flex flex-row mx-[20px]  w-[116px] h-[18.89px] gap-[4px] '>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                    <Image src={"/images/fivestar.svg"} alt='' width={20} height={18.89}/>
                </div>
                <div className='flex flex-col w-[298.67px] h-[215px] gap-24px '>
                    <p className='w-[352px] h-[108px] font-roboto font-[400] text-[18px] leading-[27px]  mx-[20px] my-[20px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className='flex flex-row items-center justify-between w-[254px] h-[56px] gap-[20px] '>
                        <Image className='rounded-[50%] mx-[20px]' src={"/images/Image6.svg"} alt='' width={56} height={56}/>
                        <div className='flex flex-col justify-between w-[178px] h-[48px] '>
                            <p className='w-[111pxx] h-[24px] font-roboto font-[600] text-[16px] leading-[24px] '>Stephen Kerubo</p>
                            <p className='whitespace-nowrap w-[178pxx] h-[24px] font-roboto font-[400] text-[16px] leading-[24px]'>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-between mx-[70px] w-[1280px] h-[48px]'>
                <div className='flex flex-row w-[72px] h-[8px] gap-[8px]'>
                    <div className='w-[8px] h-[8px] rounded-[50%] bg-[#000000] '></div>
                    <div className='w-[8px] h-[8px] rounded-[50%] bg-[#8D8D8D] '></div>
                    <div className='w-[8px] h-[8px] rounded-[50%] bg-[#8D8D8D] '></div>
                    <div className='w-[8px] h-[8px] rounded-[50%] bg-[#8D8D8D] '></div>
                    <div className='w-[8px] h-[8px] rounded-[50%] bg-[#8D8D8D] '></div>
                </div>
                <div className='flex flex-row mx-[130px] w-[111px] h-[48px] gap-[15px]'>
                    <Image className='gap-[8px] ' src="/images/LeftButton.svg" alt="" width={48} height={48} />
                    <Image className='gap-[8px] ' src="/images/RightButton.svg" alt="" width={48} height={48} />
                </div>
            </div>
    </section>
    </>
  )
}

export default Testimonials