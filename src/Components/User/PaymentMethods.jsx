import React, { useEffect, useRef } from 'react'
import { Select } from '../Ui/Fields'
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
const PaymentMethods = () => {
    const selectRef = useRef();
    useEffect(() => {
        $(selectRef.current).niceSelect();
    }, []);
    return (
        <section className='payment-method'>
            <h3 className='mb-3 sub-title '>Your Payment Methods</h3>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="my-payment bg-white mb-3  rounded">
                        <h5 className='text-payment text-center mb-4'>Master Card</h5>
                        <ul className='list-unstyled'>
                            <li className='d-flex justify-content-between align-items-center  pb-2'>
                                <span>Name On Card</span>
                                <span>Ahmed Ali</span>
                            </li>
                            <li className='d-flex justify-content-between align-items-center  pb-2'>
                                <span>Card Number</span>
                                <span>27*******39</span>
                            </li>
                            <li className='d-flex justify-content-between align-items-center  pb-2'>
                                <span>Expiry Date</span>
                                <span>02/25</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <select className="wide" ref={selectRef} id="">
                        <option value="Master Card">Master Card</option>
                        <option value="stripe">Stripe</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Payoneer">Payoneer</option>
                    </select>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethods