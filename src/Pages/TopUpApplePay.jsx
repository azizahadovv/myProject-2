import React from 'react';

function TopUpApplePay(props) {
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <div>
                    <strong className='text-white text-[22px] font-bold font-BeauSans capitalize leading-normal'>Apple pay</strong>
                    <p className='text-neutral-400 text-[16px] font-BeauSans font-normal leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Phone number:</span>
                    <input placeholder='phone number' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Replenishment amount not less than $100:</span>
                    <input placeholder='$100.00' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
               
                <label className='flex gap-3 items-center'>
                    <input className='w-4 h-4 accent-red' type="checkbox" />
                    <span className="text-neutral-200 text-[16px] font-normal leading-normal">Receipt required</span>
                </label>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Specify E-mail:</span>
                    <input placeholder='Ivanov@mail.ru  ' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='flex items-center justify-between'>
                        <p className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Connect auto payment:</p>
                        <span>
                            <input type="checkbox" id="switch##" className='switch hidden' />
                            <label htmlFor="switch##">
                            </label>
                        </span>
                    </span>
                    <input placeholder='$100.00' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='flex items-center justify-between'>
                        <p className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Connect auto-replenishment:</p>
                        <span>
                            <input type="checkbox" id="switch#" className='switch hidden' />
                            <label htmlFor="switch#">
                            </label>
                        </span>
                    </span>
                    <input placeholder='$100.00' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>

                <button className='btn btn-danger w-[250px] h-[50px]'>Pay</button>
            </div>
        </div>
    );
}

export default TopUpApplePay;