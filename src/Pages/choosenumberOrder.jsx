import React from 'react';
import { ChooseNumberOrder1, tarif } from '../map';
import { useState } from 'react';
import { Modal } from 'antd';
// 

import { orderINCLUDED } from '../map';
import { Link, useNavigate } from 'react-router-dom';
import { orderBtn } from "../map";
import { INCLUDEDINPACKAGE, OrderPlan } from ".";
import { lineRight } from '../image';
import { AiOutlineSearch } from 'react-icons/ai';


function ChooseNumberOrder({ setBtn }) {
    const [btnId, setBtnId] = useState(1)
    let navigate = useNavigate()
    const [modalVisivled, setModalVisibled] = useState(false)
    return (
        <div className='w-[100%] '>
            <div className='w-[100%] mt-3 flex flex-col gap-3'>
                <span>
                    <b class="w-[414px] h-[25px] text-white text-[22px] font-bold capitalize leading-normal">Choose Your Phone Number</b>
                    <p class="w-[697px] h-[25px] text-neutral-400 text-[16px] font-normal leading-normal">You are offered a random simple number from the free category.</p>
                </span>
            </div>
            <div className='flex flex-col gap-3'>
                <div className="w-[90%] h-[50px] flex justify-between items-center px-3 bg-neutral-900 bg-opacity-50 rounded-lg">
                    <label className='flex items-center  gap-4'>
                        <span className='h-4 w-4 overflow-hidden rounded-full  flex justify-center items-center content-center'>
                            <input defaultChecked type="checkbox" className='w-5 h-5  accent-red overflow-hidden ' />
                        </span>
                        <p className=' h-[100%]  flex items-center mt-3 justify-center text-white text-[16px] font-normal leading-normal'>+7 (958) 389 7090</p>
                    </label>
                    <span class="text-right text-neutral-400 text-[16px] font-normal leading-normal">Free basic phone number</span>
                </div>
                <a href='#' class=" text-red text-[16px] font-normal underline leading-normal">Or you can search an specific number combination<br /></a>
                <p class="w-[697px] h-[17px] text-neutral-400 text-[16px] font-normal leading-normal">Also, you can choose from one of the following categories:</p>
            </div>
            <div className='w-[90%] h-[100%] rounded border border-[#444444]'>
                <div>
                    {
                        tarif.map((item) => {
                            return <button onClick={() => setBtnId(item.id)} key={item.id} className={`w-[20%] h-[50px] origin-top-left  ${btnId == item.id ? 'bg-red text-white' : 'bg-lightBlack text-grayF'} text-center  text-[18px] font-bold leading-tight border border-[#444444]  rounded-br`}>{item.name}</button>
                        })
                    }

                </div>
                <div className=' w-[100%] h-[100%] flex flex-col gap-3 px-3 pt-2 pb-3'>
                    {
                        btnId === 1 ? <div className=' flex  flex-col gap-3 w-[100%] h-[100%]'>
                            {
                                ChooseNumberOrder1.map((item) => {
                                    return <div key={item.id} className='flex w-[100%] h-[45px] justify-between items-center  border-b border-[#444444]'>
                                        <label className='flex gap-3 items-center'>
                                            <span className='w-4 h-4 overflow-hidden rounded-full  flex justify-center items-center content-center'>
                                                <input className='w-5 h-5 accent-red overflow-hidden' type="checkbox" />

                                            </span>
                                            <span className='text-white text-[16px] font-normal leading-normal'>{item.number}</span>
                                        </label>
                                        <span className=" text-right text-white text-[16px] font-medium leading-normal">{item.title}</span>
                                    </div>
                                })
                            }
                            <div className='flex justify-between items-center'>
                                <span className='text-neutral-400 text-opacity-40 text-[16px] font-bold"'>Show Previous Numbers</span>
                                <span className='text-right text-red text-[16px] font-bold'>
                                    Show New Numbers
                                </span>
                            </div>

                        </div> : ''

                    }


                </div>
            </div>
            <div className='w-[90%] flex gap-3 py-4'>
                <button onClick={() => (setBtn(1))} className='btn btn-outline-light w-50'>
                    Back
                </button>
                <button onClick={() => (setModalVisibled(true))} className='btn btn-danger w-50'>
                    Select  Phone Number
                </button>
            </div>

            <Modal
                className='backdrop-blur-sm container '
                width={'70%'}
                footer=''
                bodyStyle={{ minHeight: "40px", background: "#302F2F" }}
                centered
                open={modalVisivled}

            >
                <div className='flex w-[100%] '>
                    <button
                        onClick={() => setModalVisibled(false)}
                        className={`ModalOrder bg-[#252323] text-white  
                             flex justify-between w-[50%] items-center btnOrder  uppercase    text-center text-[16px] font-bold  leading-none`}
                    >
                        <p className="text-center flex justify-center items-center my-2 w-[90%]">
                            Choose number

                        </p>
                        <img width={10} color="#3E3D3D" src={lineRight} alt="" />
                    </button>
                    <button
                        className={`ModalOrder bg-red text-white  
                             flex justify-between w-[50%] items-center btnOrder  uppercase    text-center text-[16px] font-bold  leading-none`}
                    >
                        <p className="text-center flex justify-center items-center my-2 w-[90%]">transfer number
                        </p>
                        <img width={10} color="#3E3D3D" src={lineRight} alt="" />

                    </button>
                </div>
                <div className='w-[100%] h-[80%] mt-3 bg-lightBlack flex gap-5'>
                    <div className='w-[30%] h-[100%]  bg-lightBlack'>
                        <OrderPlan />
                    </div>
                    <div className='w-[62%]  flex flex-col gap-4 pt-3 pb-5'>
                        <div>
                            <h3 className='text-white text-[22px] font-bold capitalize leading-normal'>
                                Find Your number combination
                            </h3>
                            <p className='text-neutral-400 text-[16px] font-normal leading-normal'>
                                You can search an specific number combination.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label className='rounded border bg-lightBlack border-neutral-200 w-[100%] h-[35px] flex items-center'>
                                <input className='w-[100%] h-[100%] text-grayF ml-1 border-none outline-none bg-lightBlack' type="text" placeholder='Search numeric character set' />
                                <button className='btn btn-outline border-none' type='button'><AiOutlineSearch color='#A7A7A7' /></button>
                            </label>
                            <textarea className='w-[100%] max-h-[70px] min-h-[70px] flex items-center justify-center text-grayF bg-lightBlack rounded border  border-neutral-700 leading-5 pt-1 px-2' placeholder='Please enter a minimum of two characters to see results'></textarea>

                        </div>
                        <div className='flex flex-col justify-around  h-[100%] '>

                            <div className='flex  gap-3'>
                                <button onClick={() => (setModalVisibled(false))} className='btn btn-outline-light w-50'>Back</button>
                                <button onClick={() => (setBtn(3))} className='btn btn-danger w-50'>Select  Phone Number</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Modal>
        </div>
    );
}

export default ChooseNumberOrder;