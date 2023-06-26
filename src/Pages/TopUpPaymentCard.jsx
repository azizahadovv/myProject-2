import React from 'react';
import { cardpay } from '../image';

function TopUpPaymentCard(props) {
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <div>
                    <strong className='text-white text-[22px] font-bold font-BeauSans capitalize leading-normal'>Link card</strong>
                    <p className='text-neutral-400 text-[16px] font-BeauSans font-normal leading-normal'>Link a new card
                        and top up your account</p>
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Phone number:</span>
                    <input placeholder='phone number' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Replenishment amount not less than $100:</span>
                    <input placeholder='$100.00' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Card number:</span>
                    <input placeholder='0000 0000 0000 0000' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>Validity:</span>
                    <input placeholder='MM/YY' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
                </div>
                <div>
                    <span className='text-neutral-50 text-[18px] font-semibold font-BeauSans leading-normal'>CVC:</span>
                    <input placeholder='000' type="text" className='w-[100%] px-2 outline-none h-10 rounded border bg-bleck text-neutral-200 font-BeauSans  border-neutral-400' />
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
                <div className="w-[100%]">
                    <span className="text-neutral-400 text-[14px] font-normal leading-tight">When using bank cards of </span>
                    <span className="text-white text-[14px] font-normal leading-tight">Visa</span>
                    <span className="text-neutral-400 text-[14px] font-normal leading-tight"> and </span>
                    <span className="text-white text-[14px] font-normal leading-tight">MasterCard</span>
                    <span className="text-neutral-400 text-[14px] font-normal leading-tight"> payment systems, online payments are processed via the authorized server of processing center of PayOnline. Payment information is transmitted in encrypted form directly to the bank server on a secure channel via SSL communication.
                        <br />
                        <br />For payment communications V-Tell is using certified internet security payments technology </span>
                    <span className="text-white text-[14px] font-normal leading-tight">Verified by Visa</span>
                    <span className="text-neutral-400 text-[14px] font-normal leading-tight"> and </span>
                    <span className="text-white text-[14px] font-normal leading-tight">MasterCard SecureCode</span>
                    <span className="text-neutral-400 text-[14px] font-normal leading-tight">. All transactions on your card are carried out in full compliance with the requirements of Visa international and MasterCard Worldwide. Secure processing of online payments is guaranteed by international certificate PCI DSS security.
                        <br />
                        <br />If you have any questions, please feel free to </span>
                    <span className="text-red-500 text-[14px] font-normal leading-tight">contact our customer support team</span><span className="text-neutral-400 text-[14px] font-normal leading-tight">.</span>
                </div>
                <img className="w-[300px] h-[119.01px]" src={cardpay} alt="cardPay" />
                <button className='btn btn-danger w-[250px] h-[50px]'>Pay</button>
            </div>
        </div>
    );
}

export default TopUpPaymentCard;