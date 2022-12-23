import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineHolder } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import { IoIosAddCircleOutline } from "react-icons/io";

import './pages.css'
export default function Pages() {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)
  const [increment, setIncrement] = useState(3)
  // const [counter, setCounter] = useState();
  const [input, addInput] = useState([{
    name: 'page',
    id: 2
  }


  ])
  // const [todos, newTodos] = useState()
  // console.log(input)
  console.log(input)

  const handleAdd = () => {
    addInput([...input, { id: increment, name: 'page' }]);
    setIncrement(increment + 1)
    // setShow(!show)
    // setCounter(newData)
  }
  const deleteInput = (index) => {
    const newData = input.filter((item) => {
      // console.log(index)
      return (item.id !== index);
    })
    addInput(newData)
    console.log(addInput)
  }



  return (
    <>
      <div className="pages-main">
        <div className="pages-content">
          <h4 onClick={() => setToggle(!toggle)}><span>pages</span></h4>

        </div>
    
      {
        toggle && (
          <>
            <div className="input-fields">
              <div className="fields py-2">
                <label htmlFor="Title" className='label py-2'>Page</label>
                <span className='spanInd' style={{ fontSize: '24px', float: 'right' }} ><IoIosAddCircleOutline onClick={handleAdd} /></span>
                <div className='span-item'>
                </div>
                <div className='drop-icons'>
                  <div className='drop-icons2'>
                    <div className='doted-icon'>
                      <AiOutlineHolder />
                    </div>
                    <div className='input-box'>
                      <input type="text" className='input' placeholder='page 1' />
                    </div>
                    <div className='input-box-2'>
                      <input type="text" className='input' />
                    </div>
                    <div className="input-box-3">
                      <span></span>
                    </div>

                  </div>
                </div>

                {/* <button onClick={() => setCounter(counter + 1)}>click</button> */}


                <div>
                  {
                    input.map((item, index) => {
                      console.log(item)
                      return (
                        <>
                          <div key={index} className='py-1'>
                            <div className='drop-icons'>
                              <div className='drop-icons1'>
                                <div className='doted-icon'>
                                  <AiOutlineHolder />
                                </div>
                                <div className='input-box'>
                                  <input type="text" className='input' placeholder={`${item.name} ${item.id}`} />
                                </div>
                                <div className='input-box'>
                                  <input type="text" className='input' />
                                </div>
                                <div className='del-icon'>
                                  <span onClick={() => deleteInput(item.id)} className='delete-jnj'><BsFillTrashFill /></span>
                                </div>
                              </div>
                            </div>


                          </div>
                        </>

                      )
                    })
                  }
                </div>

              </div>

              <div class="checkbox-container">
                <label class="checkbox-label">
                  <input type="checkbox" />
                  <span class="mark"></span>
                </label>

              </div>
              <div className='data'> <span>Show Page title</span> </div>
              <div class="checkbox-container">
                <label class="checkbox-label">
                  <input type="checkbox" />
                  <span class="mark"></span>
                </label>

              </div>
              <div className='data'> <span>Show page numbers </span> </div>
            </div>
          </>
        )
      }
        </div>
    </>
  )
}
