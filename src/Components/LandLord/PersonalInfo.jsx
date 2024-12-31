import React, { useEffect, useRef } from 'react'
import { Input, Select } from '../Ui/Fields'
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
const PersonalInfo = () => {
    const cityRef = useRef();
    const countryRef = useRef();
    useEffect(() => {
        $(cityRef.current).niceSelect();
        $(countryRef.current).niceSelect();
    }, []);
    return (
        <div className='personal-info'>
            <h3 className='mb-3 sub-title'>Personal Information</h3>
            <div className="row">
                <div className="col-12">
                    <Input type={"text"} placeholder={"Name"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"email"} placeholder={"Email"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"number"} placeholder={"Phone Number"} />
                </div>
                <div className="col-lg-6">
                    <select ref={countryRef} name="" className='wide' id="">
                        <option value="Egypt">Egypt</option>
                    </select>
                </div>
                <div className="col-lg-6">
                    <select ref={cityRef} name="" className='wide' id="">
                        <option value="Cairo">Cairo</option>
                    </select>
                </div>
                <div className="col-12">
                    <Input type={"text"} placeholder={"Location"} />
                </div>
                <div className="col-12">
                    <Select options={[{ value: "Country", label: "Country" }]} ><h1>ssssss</h1></Select>
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo