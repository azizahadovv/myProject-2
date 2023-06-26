import React, { useState } from 'react';
import { TOPUPAPPLEPAY, TOPUPPAYMENTCARD } from '.';

function TOPUPACCAUNTCONTENT(props) {
    const [PaymentCard, setPaymentCard] = useState(true)
    return (
        <div>
            <div className=' flex flex-col gap-4 w-[50%] min-h-[400px] '>
                <div>
                    <button onClick={() => (setPaymentCard(true))} className={`btn ${PaymentCard === true ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '} font-BeauSans w-50 h-12`}>Payment by card</button>
                    <button onClick={() => (setPaymentCard(false))} className={`btn ${PaymentCard !== true ? 'btn-danger' : 'btn-outline-secondary text-white border border-grayF '} font-BeauSans w-50 h-12`} >Apple pay</button>
                </div>

                <div>
                    {
                        PaymentCard ? <TOPUPPAYMENTCARD /> : <TOPUPAPPLEPAY />

                    }
                </div>

            </div>
        </div>
    );
}

export default TOPUPACCAUNTCONTENT;