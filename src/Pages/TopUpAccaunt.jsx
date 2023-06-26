import React from 'react';
import { Navbar2, Footer, OrderCard, YOURCONTENT, TOPUPACCAUNT, TOPUPCONTENT } from './index'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaRegistered,
    FaTwitter,
} from "react-icons/fa";
import {
    AiFillShopping,
    AiOutlineLeft,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { banner1 } from '../image';
function TopUpAccaunt(props) {

    return (
        <div className="w-full h-full bg-bleck ">
            {/* ************************************************* Navbar start  ******************************************************* */}
            <div className="navbar  border-b border-[#302F2F] m-0 p-0">
                <Navbar2 />
            </div>
            {/* ************************************************* Navbar end  ******************************************************* */}

            {/* ************************************************* body ded start ******************************************************* */}

            <div className=" w-[100%] min-height ">
                <div className='relative'>
                    <img className='mx-auto w-[100%]  bg-no-repeat bg-origin-border bg-center bg-contain h-[300px] -m-4' src={banner1} alt="#" />
                    <div className='container'>
                        <div className='absolute top-[100px] '>
                            <p className='text-neutral-400 text-[16px] font-normal uppercase leading-none'>Payment</p>
                            <strong className=' text-[#fff] text-[45px] font-bold capitalize leading-10'>Your account</strong>
                        </div>
                    </div>

                </div>
                {/* ************************************************* body start ******************************************************* */}

                <div className='container mt-2 min-h-[80vh]  pt-5 '>

                    <TOPUPCONTENT />


                </div>



                {/* ************************************************* body end ******************************************************* */}
            </div>
            {/* ************************************************* body ded ens  ******************************************************* */}

            {/* ************************************************* footer start******************************************************* */}
            <div className="w-[100%]  bg-[#0B0B0B]   border-t border-[#302F2F] ">
                <div>
                    <Footer />
                </div>
                <div className="bg-[#302F2F] w-[100%] h-[50px]">
                    <div className="container flex justify-between    h-[100%] content-center align-baseline    items-center">
                        <span className="flex justify-start items-center text-[14px] gap-4 cursor-pointer  leading-tight text-grayF w-[80%] ">
                            © 2022 Globex Telecom Group Limited: V-Tell Group of Companies.
                            <span className="text-grayF  items-center content-center flex gap-2 text-[14px] font-normal leading-tight">
                                <FaRegistered />
                                All rights reserved.
                            </span>
                        </span>
                        <span className="w-[20%] flex justify-between items-center content-center">
                            <span className="leading-tight text-[14px] text-grayF font-normal">
                                Follow Us
                            </span>
                            <a
                                className="no-underline text-white leading-5 text-[16px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
                                href="#"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                className="no-underline text-white leading-5 text-[16px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
                                href="#"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                className="no-underline text-white leading-5 text-[16px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
                                href="#"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                className="no-underline text-white leading-5 text-[16px] font-BeauSans font-normal flex justify-center content-center gap-2 text-center"
                                href="#"
                            >
                                <FaLinkedinIn />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {/* ************************************************* footer end ******************************************************* */}
        </div>
    );

}

export default TopUpAccaunt;



