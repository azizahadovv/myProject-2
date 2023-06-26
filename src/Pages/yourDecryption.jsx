import React from 'react';
import { yourCard1, yourCard2 } from '../map';

function YourDecryption(props) {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <strong className='text-white text-[22px] font-bold capitalize font-BeauSans leading-normal'>Payments for the current month</strong>
                <p className='text-neutral-400 text-[16px] font-normal font-BeauSans leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[100%] h-[305px] flex flex-col gap-3 bg-zinc-800 rounded py-2 px-4 " >
                {
                    yourCard1.map((item) => {
                        return <div key={item.id} className={`flex justify-between items-center cursor-pointer align-baseline ${item.id !== yourCard1.length ? 'border-b' : ''}  border-GrayF py-2`}>
                            <p className=' text-neutral-400 text-[18px] font-BeauSans font-normal leading-normal'>{item.key}   </p>
                            <b className='text-right text-neutral-50 font-BeauSans text-[18px] font-bold capitalize leading-normal'>{item.value} </b>
                        </div>
                    })
                }

            </div>

            {/* ************************************* */}

            <div>
                <strong className='text-white text-[22px] font-bold capitalize font-BeauSans leading-normal'>Subscription fee</strong>
                <p className='text-neutral-400 text-[16px] font-normal font-BeauSans leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-[100%] h-[305px] flex flex-col gap-3 bg-zinc-800 rounded py-2 px-4 " >
                {
                    yourCard2.map((item) => {
                        return <div key={item.id} className={`flex justify-between items-center cursor-pointer align-baseline ${item.id !== yourCard2.length ? 'border-b' : ''}  border-GrayF py-2`}>
                            <p className=' text-neutral-400 text-[18px] font-normal font-BeauSans leading-normal'>{item.key}   </p>
                            <b className='text-right text-neutral-50 text-[18px] font-BeauSans font-bold capitalize leading-normal'>{item.value} </b>
                        </div>
                    })
                }

            </div>
            <div className='flex flex-col gap-5'> 
                <div>
                    <strong className='text-white text-[22px] font-bold capitalize leading-normal'>Detailing</strong>
                    <p className='text-neutral-400 text-[16px] font-normal leading-normal font-BeauSans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex  gap-5 items-stretch'>
                    <div className='w-40 h-10 border border-[#E63739]  cursor-pointer rounded-full py-2'>
                        <span className=' h-[100%] w-[100%] flex items-center font-BeauSans text-red  justify-center '>July 2020</span>
                    </div>

                    <div className='w-40 h-10 border border-grayF  cursor-pointer rounded-full py-2'>
                        <span className=' h-[100%] w-[100%] flex items-center font-BeauSans text-grayF  justify-center '>August 2020</span>
                    </div>
                    <div className='w-52 h-10 border border-grayF  cursor-pointer rounded-full py-2'>
                        <span className=' h-[100%] w-[100%] flex items-center font-BeauSans text-grayF  justify-center '>September 2020</span>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className='btn btn-danger py-2 w-52 px-5 text-[16px] font-bold font-BeauSans'>Download</button>
                    <button className='btn btn-outline-light  border py-2 w-52 px-5 text-[16px] font-bold font-BeauSans'>Save</button>
                    <button className='btn btn-outline-light  border py-2 w-52 px-5 text-[16px] font-bold font-BeauSans'>Send</button>

                </div>

            </div>
        </div>
    );
}

export default YourDecryption;