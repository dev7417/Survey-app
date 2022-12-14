import React from 'react'
import { useState } from 'react'
import './Logo.css'

export default function LogoInSurvey() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="survey-main" tabIndex={1234}>
                <div className="survey-content" tabIndex={1234}>
                    <h4 onClick={() => setToggle(!toggle)}> <span>Logon In Survey Title</span> </h4>
                </div>
                <div>
                    {toggle && (
                        <>
                            <div className="input-fields">
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Logo(URL or base64-encoded string)</label>
                                    <input type="text" className='input' />
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Logo width (in CSS-accepted values)</label>
                                    <input type="text" className='input' placeholder='300px' />
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Logo height(in CSS-accepted values)</label>
                                    <input type="text" className='input' placeholder='200px' />
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Logo fit</label>
                                    <div className="btn-group1">
                                        <div className="grp-btn">
                                            <button className='fir-btn'>None</button>
                                            <button className='sec-btn'>Contain</button>
                                            <button className='thir-btn'>Cover</button>
                                            <button className='frt-btn'>Fill</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}
