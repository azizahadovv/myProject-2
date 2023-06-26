import React, { useState } from 'react';
import { orderINCLUDED } from '../map';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { orderBtn } from "../map";
import { INCLUDEDINPACKAGE, OrderPlan } from ".";
import { lineRight } from '../image';

function OrderINCLUDED({setBtn}) {
    let navigate = useNavigate()
    const [modalVisivled, setModalVisibled] = useState(false)
    // const [btn1, setBtn1] = useState(1);
    // const [btn2, setBtn2] = useState(1);

    return (
        <div>
            <div className='flex flex-col items-baseline gap-3 w-[100%] mt-5 px-4 '>

                {
                    orderINCLUDED.map((item) => {
                        return <div key={item.id} className=' w-[100%] h-7 border-b flex justify-between items-center content-center  border-[#444444] p-3 pb-4 cursor-pointer'>
                            <span className={`${item.img === "" ? "text-neutral-50  text-[18px] font-bold leading-tight" : ' text-neutral-200 flex justify-start gap-3 text-[16px] font-normal leading-normal'}`}> <img src={item.img} alt="" /> {item.key}	</span>
                            <span className={`${item.img === "" ? 'text-right text-neutral-50 text-[18px] font-bold leading-tight' : 'text-right text-neutral-200 text-[16px] font-normal leading-normal'}`}>{item.value}</span>
                        </div>
                    })
                }
            </div>

            <div className="w-[100%] h-40  px-4 flex flex-col justify-around ">
                <div className='flex justify-between flex-col h-16'>
                    <a href='#' className="text-[#E63739] text-[16px] font-normal underline leading-normal">Check countries where V-Tell provides communication services</a>
                    <div className="text-neutral-400 text-[14px] font-normal leading-tight">You can choose your new V-Tell phone number or transfer your existing phone number to V-Tell.
                    </div>
                </div>
                <div className='flex justify-between gap-5'>
                    <button className=" btn btn-outline-light w-50 text-center text-neutral-50 text-[16px] font-bold">Transfer Your Phone Number</button>
                    <button onClick={() => (setModalVisibled(true))} className=" btn btn-danger w-50 text-center text-white text-[16px] font-bold">Choose Phone Number</button>
                </div>
            </div>

            <Modal
                className='backdrop-blur-sm container bg-black'
                width={'100%'}
                footer=''

                bodyStyle={{ height: "700px", background: "#302F2F" }}
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
                            Connection Type

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
                    <div className='w-[62%]  flex flex-col gap-4'>
                        <div className='w-[100%]'>
                            <b class=" h-[25px] text-white text-[22px] font-bold capitalize leading-normal">Transfer Your Phone Number</b>
                            <p class=" h-[25px] text-neutral-400 text-[16px] font-normal leading-normal">Dear subscriber,
                                please fill out the following form to transfer your existing phone number.</p>
                        </div>
                        <div className='flex flex-col justify-around  h-[100%] '>
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="text" placeholder='Number being transferred' />
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="text" placeholder='First name' />
                            <label className='flex gap-2 justify-start items-center '>
                                <input type="checkbox" />
                                <span className='text-neutral-200 text-[16px] font-normal leading-none'>I confirm my consent to the processing of personal data</span>
                            </label>
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="number" placeholder='Contact phone number' />
                            <input className='w-[100%] h-10 rounded border placeholder:text-[#A7A7A7] bg-lightBlack outline-none text-grayF border-neutral-400' type="email" placeholder='Email' />
                            <div className='flex  gap-3'>
                                <button onClick={() => (setModalVisibled(false))} className='btn btn-outline-light w-50'>Back</button>
                                <button onClick={()=>(setBtn(2))} className='btn btn-danger w-50'>Submit Request</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Modal>


        </div >
    );
}

export default OrderINCLUDED;