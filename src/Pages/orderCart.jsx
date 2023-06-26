import React from 'react';
import { FaAddressCard, FaPen } from 'react-icons/fa'
import { AiFillFileAdd, AiFillPlusSquare } from 'react-icons/ai'
function OrderCart({setBtn}) {
    return (
        <div className='flex flex-col justify-around gap-3 w-[100%] min-h-[550px] px-10'>
            <div className='border-b border-[#444444] pb-5'>
                <div className='flex flex-col gap-1'>
                    <strong className=' text-white text-[22px] font-BeauSans font-bold capitalize leading-normal'>Cart</strong>
                    <p className='text-neutral-400 font-BeauSans text-[16px] font-normal leading-normal'>Please review all items before proceeding with the order. </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex gap-2'>
                            <span className='text-neutral-400 font-BeauSans text-[16px] font-normal leading-normal'>Tariff:</span>
                            <strong className='text-white text-[16px] font-BeauSans font-normal leading-normal'>Silver Plan</strong>
                            <button className='text-red flex font-BeauSans  items-center gap-1'><FaPen />Edit</button>
                        </div>
                        <span className="text-right text-white font-BeauSans text-[16px] font-bold leading-normal">$98</span>
                    </div>
                    <div className='flex justify-between bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex gap-2'>
                            <span className='text-neutral-400 font-BeauSans text-[16px] font-normal leading-normal'>Number (Russia):</span>
                            <strong className='text-white text-[16px] font-BeauSans font-normal leading-normal'>+7 (958) 389 7090</strong>
                            <button className='text-red flex font-BeauSans  items-center gap-1'><FaPen />Edit</button>
                        </div>
                        <span className="text-right text-white font-BeauSans text-[16px] font-bold leading-normal uppercase">FREE </span>
                    </div>
                    <div className='flex justify-between bg-neutral-900 bg-opacity-50 rounded-lg px-3 py-2'>
                        <div className='flex gap-2'>
                            <span className='text-neutral-400 font-BeauSans text-[16px] font-normal leading-normal'>Overseas Phone Number:</span>
                            <button className='text-red flex font-BeauSans  items-center gap-1'><AiFillPlusSquare />Add Overseas Phone Number</button>
                        </div>
                        <span className="text-right text-white font-BeauSans text-[16px] font-bold leading-normal uppercase">FREE </span>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-evenly gap-5  w-[100%] h-[40%] '>
                <div className='flex justify-between items-center '>
                    <div className='flex flex-col gap-'>
                        <strong className='text-white font-BeauSans text-[18px] font-bold leading-tight'>Summary</strong>
                        <span className="text-neutral-200 font-BeauSans text-[14px] font-normal leading-tight">Payment by credit/debit card
                            <span className="text-neutral-400 font-BeauSans text-[14px] font-normal leading-tight"> upon receipt at the office or delivery to the specified address.</span>
                        </span>
                    </div>
                    <div className='flex items-end align-baseline'>
                        <span className='text-white text-[24px] font-BeauSans font-bold leading-7'> $ </span>
                        <strong className='text-white text-[42px] font-BeauSans font-bold leading-10'>98</strong>
                    </div>
                </div>
                <div className=' flex justify-between gap-3'>
                    <button onClick={()=>(setBtn(2))} className='btn btn-outline-light w-50'>Back </button>

                    <button onClick={()=>(setBtn(4))} className='btn btn-danger w-50'>Set Up Delivery</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCart;