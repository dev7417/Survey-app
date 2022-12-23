import React from 'react'
import './Question.css'
import { AiFillAccountBook } from "react-icons/ai";
import { useState } from 'react'
export default function Question() {
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState()
    const [hide, setHide] = useState(false)
    const handleClick = (e) => {
        console.log(e.target.value)
        setShow(e.target.value)
    }
    return (
        <>
            <div className="question-main" tabIndex={12345}>
                <div className="ques-content" tabIndex={12345}>
                    <h4 onClick={() => setToggle(!toggle)}><span>Question</span></h4>
                </div>
           
            {
                toggle && (
                    <>
                        <div className="input-fields">
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Logo fit</label>
                                <div className="btn-group1">
                                    <div className="grp-btn">
                                        <button className='gen-fir-btn'>Top</button>
                                        <button className='gen-sec-btn'>Bottom</button>
                                        <button className='gen-thir-btn'>Left</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Question description location</label>
                                <div className='drop-div'>
                                    <div className='scroll-div'>
                                        <div className='main-div'>
                                            <div className='data-div1'>
                                                <select name="" id="" className='box'>
                                                    <option className='option'>Under the Input</option>
                                                    <option className='option'>Under the title</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Question numbering</label>
                                <div className='drop-div'>
                                    <div className='scroll-div'>
                                        <div className='main-div'>
                                            <div className='data-div1'>
                                                <select name="" id="" className='box'>
                                                    <option className='option'>Continue from the previous page</option>
                                                    <option className='option'>start on each page</option>
                                                    <option className='option'>Hide question numbers</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Question title pattern</label>
                                <div className='drop-div'>
                                    <div className='scroll-div'>
                                        <div className='main-div'>
                                            <div className='data-div1'>
                                                <select name="" id="" className='box'>
                                                    <option className='option'>Continue from the previous page</option>
                                                    <option className='option'>start on each page</option>
                                                    <option className='option'>Hide question numbers</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Required symbol(s)</label>
                                <input type="text" className='input' placeholder='*' />
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Start index(number or letter)</label>
                                <input type="text" className='input' placeholder='' />
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Error message location</label>
                                <div className="btn-group1">
                                    <div className="grp-btn">
                                        <button className='gen-fir-btn1'>Top</button>
                                        <button className='gen-sec-btn2'>Bottom</button>
                                    </div>
                                </div>
                            </div>
                            <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked />
                                    <span class="mark"></span>
                                </label>

                            </div>
                            <div className='data1'> <span>Focus first question on a new page</span> </div>

                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Element order on the page</label>
                                <div className="btn-group1">
                                    <div className="grp-btn">
                                        <button className='gen-fir-btn1'>Top</button>
                                        <button className='gen-sec-btn2'>Bottom</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Minimum answer length(in characters)</label>
                                <input type="number" className='input' placeholder='' />
                            </div>
                            <div className="fields py-2">
                                <label htmlFor="Title" className='label py-2'>Minimum comment length(in characters)</label>
                                <input type="number" className='input' placeholder='' />
                            </div>
                            <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked />
                                    <span class="mark"></span>
                                </label>

                            </div>
                            <div className='data1'> <span>Focus first question on a new page</span> </div>
                        </div>
                    </>
                )
            }
                            </div>


        </>
    )
}
