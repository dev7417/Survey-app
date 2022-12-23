import React from 'react'
import {useState} from 'react'

import './data.css'

export default function Data() {


  const[toggle,setToggle] = useState()
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
}]
  return (
    <>
    
    
      <div className="data-main">
        <div className="data-content">
          <h4 onClick={()=>setToggle(!toggle)}><span>Data</span></h4>
        </div>
     
      {toggle &&(
        <>
       <div className="data-input-fields">
        <div className="data-fields">
          <label htmlFor="Clear Invisible values" className='data-label' id='browsers'>Clear Invisible Values</label>
          <div className="select">
          <select name="" id="">
            <option value="Never">Never</option>
            <option value="">When the survey is completed</option>
            <option value="">When the question becomes hidden</option>
            <option value="">When the question or its panel/page becomes...</option>
          </select>
          </div>
          <div className="btn-box">
            <div className="grp-box py-4">
              <label htmlFor="" className='data-label'>Update text question value</label>
            <div className="data-grp-btn">
              <button className='first-btn'>On blur</button>
              <button className='second-btn'>While typing</button>
            </div>
            </div>
          </div>
          <div class="checkbox-container" style={{paddingLeft:'30px'}}>
                <label class="checkbox-label">
                  <input type="checkbox" />
                  <span class="mark"></span>
                </label>

              </div>
              <div className='data'> <span>Save partial survey results in progress</span> </div>
              <div class="checkbox-container" style={{paddingLeft:'30px'}}>
                <label class="checkbox-label">
                  <input type="checkbox" />
                  <span class="mark"></span>
                </label>

              </div>
              <div className='data'> <span>Store the Others value in a separate field</span> </div>
              
              
        </div>
       </div>
        </>
      )}
       </div>
    </>
  )
}
