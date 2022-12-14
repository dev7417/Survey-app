import React, { useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { AiFillQuestionCircle } from "react-icons/ai";
import { spanBsXOctagon } from "react-icons/bs";
import './general.css'
import { useRef } from 'react';


export default function General() {
    const [toggle, setToggle] = useState(false)
    const  [show, setShow] = useState(false)
    const inputRef = useRef();
    const [data, setData] = useState('')
    console.log(data)

    const Countrydata = [{

        text: 'Barry Lyon',
        value: '42976',
        avatar: 'm1'
    }, {
        text: 'Hortense Tinker',
        value: '45290',
        avatar: 'f1'
    }, {
        text: 'Carl Hambledon',
        value: '76208',
        avatar: 'm2'
    }, {
        text: 'Arlene Sharman',
        value: '47883',
        avatar: 'f2'
    }, {
        text: 'Keila Delores',
        value: '33379',
        avatar: 'f3'
    }, {
        text: 'Paula Bush',
        value: '16076',
        avatar: 'f4'
    }, {
        text: 'Gene Cortez',
        value: '62551',
        avatar: 'm3'
    }, {
        text: 'Pete Nichols',
        value: '20929',
        avatar: 'm4'
    },
    ]




    return (


        <>
            <div className="gen-main">
                <div className="gen-content" tabIndex={12345} >
                    <h4 onClick={() => setToggle(!toggle)}>
                        <span>General</span>
                    </h4>
                </div>

                <div>

                    {toggle && (
                        <>
                            <div className="input-fields">
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Name</label>
                                    <input type="text" className='input'/>
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Title</label>
                                    <textarea></textarea>
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Description</label>
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="checkbox">
                                <div>
                                    <input type="checkbox" style={{ width: '24px' }} />
                                </div>
                                <div className='px-2'>
                                    <label htmlFor="valeu">Show The Title</label>
                                </div>
                            </div>
                            <div className="input-fields">
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Survey language</label>
                                    <div className='drop-div'>
                                        <div className='scroll-div'>
                                            <div className='main-div'>
                                                <div className='data-div1'>
                                                    <select name="" id="" className='select'>
                                                        {
                                                            Countrydata.map((data) => {
                                                                return (
                                                                    <option className='option' value="">{data.text}</option>
                                                                )
                                                            })
                                                        }

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Editable or read-only</label>
                                    <div className="btn-group1">
                                    {/* <ButtonGroup aria-label="Basic example" className='main-group' > */}
                                    <div className="grp-btn">
                                    <button className='left-btn'>Editable</button>
                                    <button className='right-btn'>Read-only</button>
                                    </div>
                                     
                                              {/* </ButtonGroup> */}
                                    </div>
                                    
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Name</label>
                                    <input type="text" className='input'/>
                                </div>



                                <div className="fields py-2">
                                   
                                    <label htmlFor="Title" className='label py-2'>Cookie Name</label> 
                                
                                    
                                    <span className='spanInd' tabIndex={1234} style={{float:'right', fontSize:'20px'}} onClick={()=>setShow(!show)}><AiFillQuestionCircle/></span>
                                   

                                   {show  &&( 
                                    <div className="txt">
                                    <span>Cookies prevent users from filling out the same survey twice.</span>

                                    </div>
                                    )}
                                    <input type="text" className='input'/>
                                </div>
                                        

                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2 '>Width mode</label>
                                    <div className="btn-group1">
                                    {/* <ButtonGroup aria-label="Basic example" className='main-group' > */}
                                    <div className="grp-btn">
                                    <button className='left-btn1'>Auto</button>
                                    <button className='middle-btn'>Static</button>
                                    <button className='right-btn1'>Responsive</button>
                                    </div>
                                     
                                              {/* </ButtonGroup> */}
                                    </div>
                                    
                                </div>
                                <div className="fields py-2">
                                    <label htmlFor="Title" className='label py-2'>Width (in CSS-accepted values)</label>
                                    <input type="text" className='input'  />
                                </div>

                            </div>
                        </>

                    )}
                    
                </div>
              
                
            </div>

        </>
    )
}
