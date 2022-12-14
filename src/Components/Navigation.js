import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Input from './Input'
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
// import useAutocomplete from '@mui/material/Autocomplete';


import './Navigation.css'



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

export default function Navigation() {
    const theme = useTheme();
    const [toggle, setToggle] = useState(false)



    return (
        <>
            <div className="navigation-main" tabIndex={1234}>
                <div className="navigation-content" tabIndex={1234}>
                    <h4 onClick={() => setToggle(!toggle)}><span>Navigation</span></h4>
                </div>
                <div>
                    {
                        toggle && (
                            <>
                                <div className="input-fields">
                                    <div className="fields py-2">

                                        <label htmlFor="Title" className='label py-2'>Survey language</label>
                                        <div className='drop-div'>
                                            <div className='scroll-div'>
                                                <div className='main-div'>
                                                    <div className='data-div1'>
                                                        <select name="" id="" className='box'>
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
                                        <label htmlFor="Title" className='label py-2'>Previous Page button next</label>
                                        <input type="text" className='input' placeholder='Blaenorol' />
                                    </div>
                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Next Page button next</label>
                                        <input type="text" className='input' placeholder='Nesaf' />
                                    </div>
                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Complete Survey button next</label>
                                        <input type="text" className='input' placeholder='Cwblhau' />
                                    </div>
                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Preview Answers button next</label>
                                        <input type="text" className='input' placeholder='Rhagolwg' />
                                    </div>
                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Edit Answers button next</label>
                                        <input type="text" className='input' placeholder='Golygu' />
                                    </div>
                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Start Survey button next</label>
                                        <input type="text" className='input' placeholder='Dechrau' />
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
                                    <div class="checkbox-container">
                                        <label class="checkbox-label">
                                            <input type="checkbox" />
                                            <span class="mark"></span>
                                        </label>

                                    </div>
                                    <div className='data'> <span>Show the previous page button</span> </div>

                                    <div class="checkbox-container">
                                        <label class="checkbox-label">
                                            <input type="checkbox" />
                                            <span class="mark"></span>
                                        </label>

                                    </div>
                                    <div className='data'> <span>First page is a start page</span> </div>

                                    <div class="checkbox-container">
                                        <label class="checkbox-label">
                                            <input type="checkbox" />
                                            <span class="mark"></span>
                                        </label>

                                    </div>
                                    <div className='data'> <span>Proceed to the next page automatically</span> </div>


                                    <div className="fields py-2">
                                        <label htmlFor="Title" className='label py-2'>Progress bar location</label>
                                        <div className="btn-group1">
                                            <div className="grp-btn">
                                                <button className='fir-btn'>None</button>
                                                <button className='sec-btn'>Contain</button>
                                                <button className='thir-btn'>Cover</button>
                                                <button className='frt-btn'>Fill</button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="fields py-2">

                                        <label htmlFor="Title" className='label py-2'>Progress bar type</label>
                                        <div className='drop-div'>
                                            <div className='scroll-div'>
                                                <div className='main-div'>
                                                    <div className='data-div1'>
                                                        <select name="" id="" className='box'>
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

                                        <label htmlFor="Title" className='label py-2'>Survey structure</label>
                                        <div className='drop-div'>
                                            <div className='scroll-div'>
                                                <div className='main-div'>
                                                    <div className='data-div1'>
                                                        <select name="" id="" className='box'>
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

                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}
