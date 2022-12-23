import React from 'react'
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineBlock } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { AiOutlineDash } from "react-icons/ai";
import { BsGrid3X2Gap } from "react-icons/bs";
import { useState } from 'react';

import './centerData.css';

export default function CenterData() {
    const [show, setShow] = useState('hidden')
    const [showQuest, setShowQues] = useState('block')
    const [show2, setShow2] = useState('none')
    console.log(show)
    const handleIconClick = () => {
        setShow('visible')
    }
    const handleRemove = () => {
        setShow('hidden')
    }
    const handleShow = () => {
        setShowQues('none');
        setShow2('block')
    }
    return (
        <>
            <div className="question-container" style={{ display: `${showQuest}` }}>
                <div className="content">
                    <div className="p-content">
                        <p>The survey is empty. Drag an element from the toolbox or click the button below</p>
                        <div className="content-button">
                            <button className='content-btn' onClick={handleShow}>Add Question <span><AiOutlineDash /></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-center" style={{ display: `${show2}` }}>
                <div className="main-div">
                    <div className='edit-span'>
                        <span className='span1' contentEditable={true} placeholder='Survey Title' suppressContentEditableWarning={true} tabIndex={12345}>Survey Title</span>
                        <div>
                            <span className='span2' contentEditable={true} suppressContentEditableWarning={true}>Description</span>
                        </div>
                    </div>
                    <div className="choose-file">
                        <label for="file-input">
                            <span><AiOutlinePicture /></span>
                        </label>
                        <input type="file" id="file-input" />
                    </div>

                </div>
                <div className="main-border my-2"></div>

                <div className="page-div" tabIndex={12345} onFocus={handleIconClick} onBlur={handleRemove}>
                    <div className="center-side-icons">
                        <div className='icons' style={{ visibility: `${show}` }} >
                            <div className="del-icon1">
                                <AiOutlineBlock className='copy-icons' />  <span>Duplicate</span>
                            </div>
                            <div className="edit-icon1">

                                <BiTrash className='del-icons' /> <span>Delete</span>
                            </div>
                        </div>
                        <div className="page1-span">
                            <div className="span1-span-content">
                                <div className="centerpage-span1 mx-2">
                                    <span className='span2' contentEditable={true} suppressContentEditableWarning={true}>Page-1</span>
                                </div>
                                <div className="centerpage-span2 mx-2">
                                    <span className='span3' contentEditable={true} suppressContentEditableWarning={true}>Description</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="question-div" tabIndex={0}>
                        <div className="ques-content-div" >
                            <div className="ques-icons">
                                <span><BsGrid3X2Gap /></span>
                            </div>
                            <div className="main-question">
                                <div className="question1">
                                    <span className='span2' contentEditable={true} suppressContentEditableWarning={true}>question</span>
                                </div>
                                <div className="ques-input">
                                    <input type="text" disabled />
                                </div>
                                <div className="hidden-buttons">
                                    <div className="single-input">
                                        <button>Single Input</button>
                                    </div>
                                    <div className="three-buttons">
                                        <div className="duplicate mx-2">
                                            <AiOutlineBlock />  <span className='dup'>Duplicate</span>
                                        </div>
                                        <div className="radio-btn d-flex">
                                            <div className="btn56 mx-2">
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider round"></span>
                                            </label>
                                            </div>
                                            <span className='req'>Required</span>
                                           
                                              
                                        </div>
                                        <div className="delete mx-2">
                                            <BiTrash/>
                                            <span className='del'>Delete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
