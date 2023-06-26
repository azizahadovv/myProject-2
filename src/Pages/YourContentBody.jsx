import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function YourContentBody(props) {
    const [checkbox1, setCheckbox1] = useState(false)
    const [change1, setChange1] = useState(true)
    const [checkbox2, setCheckbox2] = useState(false)
    const [change2, setChange2] = useState(true)
    var navigate = useNavigate()

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <strong className='text-white text-[22px] font-bold capitalize leading-normal'>Current balance</strong>
                <p className='text-neutral-400 text-[16px] font-normal leading-normall'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex flex-col gap-2'>
                    <div className='h-2.5 w-[100%] bg-red rounded-[36px]'><div className='w-[25%] h-2.5  bg-green-600 rounded-[36px]'> </div> </div>
                    <div className='w-[100%] flex justify-between items-stretch'>
                        <div className='flex justify-between items-center w-[29%]'>
                            <p className='text-neutral-300 text-[18px] font-semibold leading-normal'>$0.00</p>
                            <p className='text-neutral-300 text-[18px] font-semibold leading-normal'>$123.00</p>
                        </div>
                        <FaInfinity className='w-[3%] text-red' />
                    </div>
                </div>
            </div>
            <div className='flex  flex-col gap-3'>
                <div className=' w-[100%] min-h-[130px] bg-zinc-800 rounded flex flex-col justify-between items-center px-4 py-3'>
                    <div className='w-[100%] flex justify-between items-center'>
                        <div>
                            <strong className='text-white text-[22px] font-bold capitalize leading-normal'>Auto payment</strong>
                            <p className='text-neutral-400 text-[16px] font-normal leading-normall'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <span>
                            <input onChange={(e) => (setCheckbox1(e.target.checked))} type="checkbox" id="switch1" className='switch hidden' />
                            <label htmlFor="switch1">
                            </label>
                        </span>
                    </div>

                    <div className={`w-[100%] ${checkbox1 === true ? 'flex' : 'hidden'}  ${change1 === false ? 'hidden' : ''} flex-col justify-start items-start gap-3`}>
                        <div className='flex w-[300px] justify-between '>
                            <span className='text-white text-[18px] font-light leading-snug'>30-11-2020</span>
                            <span className='text-right text-white text-[18px] font-light leading-snug'>14000 руб.</span>
                        </div>
                        <button onClick={() => setChange1(false)} className='btn btn-outline-danger w-25'>Change</button>
                    </div>

                    <div className={`w-[100%] ${change1 === false && checkbox1 ? 'flex' : 'hidden'}    flex-col justify-start items-start gap-3`}>
                        <div className='flex flex-col gap-3'>
                            <div className=' w-80 h-10 px-2 rounded border flex items-center justify-between  border-neutral-400'>
                                <span className='text-neutral-200 text-[14px] font-normal leading-tight'>11/12/2021</span>
                                <AiOutlineDown color='#E5E5E5' />
                            </div>
                            <div className=' w-80 h-10 px-2 rounded border flex items-center justify-between  border-neutral-400'>
                                <span className='text-neutral-200 text-[14px] font-normal leading-tight'>$123.00</span>
                                <AiOutlineDown color='#E5E5E5' />
                            </div>
                        </div>
                        <button onClick={() => (setChange1(true))} className='btn btn-danger w-[250px] flex justify-center '>Save Changes</button>

                    </div>

                </div>
                <div className=' w-[100%] min-h-[130px] bg-zinc-800 rounded flex flex-col justify-between items-center px-4 py-3'>
                    <div className='w-[100%] flex justify-between items-center'>
                        <div>
                            <strong className='text-white text-[22px] font-bold capitalize leading-normal'>Automatinis papildymas</strong>
                            <p className='text-neutral-400 text-[16px] font-normal leading-normall'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <span>
                            <input onChange={(e) => (setCheckbox2(e.target.checked))} type="checkbox" id="switch2" className='switch hidden' />
                            <label htmlFor="switch2">
                            </label>
                        </span>
                    </div>

                    <div className={`w-[100%] ${checkbox2 === true ? 'flex' : 'hidden'}  ${change2 === false ? 'hidden' : ''} flex-col justify-start items-start gap-3`}>
                        <div className='flex w-[300px] justify-between '>
                            <span className='text-white text-[18px] font-light leading-snug'>30-11-2020</span>
                            <span className='text-right text-white text-[18px] font-light leading-snug'>14000 руб.</span>
                        </div>
                        <button onClick={() => setChange2(false)} className='btn btn-outline-danger w-25'>Change</button>
                    </div>

                    <div className={`w-[100%] ${change2 === false && checkbox2 ? 'flex' : 'hidden'}    flex-col justify-start items-start gap-3`}>
                        <div className='flex flex-col gap-3'>
                            <div className=' w-80 h-10 px-2 rounded border flex items-center justify-between  border-neutral-400'>
                                <span className='text-neutral-200 text-[14px] font-normal leading-tight'>11/12/2021</span>
                                <AiOutlineDown color='#E5E5E5' />
                            </div>
                            <div className=' w-80 h-10 px-2 rounded border flex items-center justify-between  border-neutral-400'>
                                <span className='text-neutral-200 text-[14px] font-normal leading-tight'>$123.00</span>
                                <AiOutlineDown color='#E5E5E5' />
                            </div>
                        </div>
                        <button onClick={() => (setChange2(true))} className='btn btn-danger w-[250px] flex justify-center '>Save Changes</button>

                    </div>

                </div>
            </div>
            <button onClick={() => navigate('/top-up-accaunt')} className='btn btn-danger w-[250px] h-11'>Top up account</button>

        </div>
    );
}

export default YourContentBody;
