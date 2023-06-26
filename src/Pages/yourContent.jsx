import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { YOURCONTENTBODY, YOURDERCYPTION } from '.';

function YourContent(props) {
    const [btnCard, setBtnCard] = useState(true)


    return (
        <div className='flex flex-col gap-3  justify-start'>
            <div className='w-[100%]  b flex gap-3 items-center '>
                <button onClick={() => (setBtnCard(true))} className={`btn ${btnCard === true ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '} font-BeauSans w-25 h-12`}>Your account</button>
                <button onClick={() => (setBtnCard(false))} className={`btn ${btnCard === false ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '} font-BeauSans w-25 h-12`}>Decryption of your account</button>
            </div>

            <div>
                {
                    btnCard ? <YOURCONTENTBODY /> : <YOURDERCYPTION />
                }

            </div>

        </div>
    );
}

export default YourContent;
