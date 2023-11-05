
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Image from 'next/image';

export default function PapularArticlesSection() {
    return (
        <>
            <div className="flex items-center justify-center mt-24">
                <div className="w-[95%]">
                    <div className="text-center flex items-center justify-center flex-col gap-4">
                        <h5 className="text-3xl font-bold">
                            Most popular artist
                        </h5>
                        <p className="w-1/2 sm:w-full mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco .
                        </p>
                    </div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 10,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper w-1/2 sm:w-full md:w-full flex items-center justify-center  "
                    >
                        <SwiperSlide className='border w-[450px] rounded-xl overflow-hidden sm:w-full mb-8'>
                            <div className='relative'>
                            <Image 
                            className='w-full'
                            src={"/bgArticle1.png"} width={300} height={100} alt='...'/>
                            <Image
                            className='absolute top-[70%] left-[37%] sm:left-[35%]'
                            src={"/user-1.png"} width={120} height={190} alt='...'/>
                            </div>
                            <div className='p-4 mt-[68px] flex flex-col items-center justify-center gap-4 '>
                                <span className='text-gray-400'>Follow</span>
                                <span className='text-xl font-bold'>Selina Geames</span>
                                <p className='w-3/4 text-center text-gray-300 sm:w-5/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fuga.
                                </p>
                                <div className='w-full h-[1px] bg-violet-600'></div>
                                <div className='flex items-center justify-between w-full '>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Art Work</span>
                                        <span className='text-gray-400'>55</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Follower</span>
                                        <span className='text-gray-400'> 32K</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Following</span>
                                        <span className='text-gray-400'> 155</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border w-[450px] rounded-xl overflow-hidden sm:w-full'>
                            <div className='relative'>
                            <Image 
                            className='w-full'
                            src={"/bgArticle2.png"} width={300} height={100} alt='...'/>
                            <Image
                            className='absolute top-[70%] left-[37%] sm:left-[35%]'
                            src={"/user-2.png"} width={120} height={190} alt='...'/>
                            </div>
                            <div className='p-4 mt-[68px] flex flex-col items-center justify-center gap-4 '>
                                <span className='text-gray-400'>Follow</span>
                                <span className='text-xl font-bold'>Abdolla Ghasemi</span>
                                <p className='w-3/4 text-center text-gray-300 sm:w-5/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fuga.
                                </p>
                                <div className='w-full h-[1px] bg-violet-600'></div>
                                <div className='flex items-center justify-between w-full '>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Art Work</span>
                                        <span className='text-gray-400'>55</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Follower</span>
                                        <span className='text-gray-400'> 32K</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Following</span>
                                        <span className='text-gray-400'> 155</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border w-[450px] rounded-xl overflow-hidden sm:w-full'>
                            <div className='relative'>
                            <Image 
                            className='w-full'
                            src={"/bgArticle3.png"} width={300} height={100} alt='...'/>
                            <Image
                            className='absolute top-[70%] left-[37%] sm:left-[35%]'
                            src={"/user-3.png"} width={120} height={190} alt='...'/>
                            </div>
                            <div className='p-4 mt-[68px] flex flex-col items-center justify-center gap-4 '>
                                <span className='text-gray-400'>Follow</span>
                                <span className='text-xl font-bold'>Anabella Heydari</span>
                                <p className='w-3/4 text-center text-gray-300 sm:w-5/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fuga.
                                </p>
                                <div className='w-full h-[1px] bg-violet-600'></div>
                                <div className='flex items-center justify-between w-full '>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Art Work</span>
                                        <span className='text-gray-400'>55</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Follower</span>
                                        <span className='text-gray-400'> 32K</span>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <span>Following</span>
                                        <span className='text-gray-400'> 155</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}