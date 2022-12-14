import React, { useState } from 'react'
import './validate.css'

export default function Validation() {
    const [toggle, seTToggle] = useState()
    return (
        <>
            <div className="validate-content">
                <div className="main-validate">
                    <h4 onClick={() => seTToggle(!toggle)}><span>Validation</span></h4>
                </div>
                {
                    toggle && (
                        <>
                            <div className="val-input-field">
                                <div className="input-fields">
                                    <div class="checkbox-container">
                                        <label class="checkbox-label">
                                            <input type="checkbox" />
                                            <span class="mark"></span>
                                        </label>
                                    </div>
                                    <div className='check-text'> <span >Show the survey complete page</span> </div>
                                    <div className="val-label-div">
                                    <label htmlFor="">Run validation</label>
                                    </div>
                                    <div className="val-select">
                                        <select name="" id="">
                                            <option value="" style={{fontSize:'15px'}}>When Switching to the next page</option>
                                            <option value="" style={{fontSize:'15px'}}>After an answer is changed</option>
                                            <option value="" style={{fontSize:'15px'}}>Before an answer is changed</option>
                                            <option value="" style={{fontSize:'15px'}}>When the  survey is completed</option>
                                            
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}
