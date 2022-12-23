import React, { useState } from 'react'
import './timer.css'

export default function Timer() {
    const [show, setShow] = useState()
    return (
        <>
            <div className="timer-main" tabIndex={12345}>
                <div className="timer-content" tabIndex={12345}>
                    <h4 onClick={() => setShow(!show)}><span>Timer/Quiz</span></h4>
                </div>
          
            {show && (
                <>
                    <div className="timer-input">
                        <div className="input-label">
                            <label htmlFor="">Time limit to finish the survey(in seconds)</label>
                        </div>
                        <div className="timer-input-box">
                            <input type="number" />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Time limit to finish one page(in seconds)</label>
                        </div>
                        <div className="timer-input-box">
                            <input type="number" />
                        </div>

                        <div className="input-label">
                            <label htmlFor="">Timer location</label>
                        </div>
                        <div className="timer-input-buttons">
                            <div className="buttons-2" tabIndex={12345}>
                                <button className='btn1'>Hidden</button>
                                <button className='btn2'>Top</button>
                                <button className='btn3'>Bottom</button>
                            </div>
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Timer mode</label>
                        </div>
                        <div className="timer-input-buttons">
                            <div className="buttons-2" tabIndex={12345}>
                                <button className='btn1'>Both</button>
                                <button className='btn2'>Page</button>
                                <button className='btn3'>Survey</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
              </div>
        </>
    )
}
