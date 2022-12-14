import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHolder } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineMonitor } from "react-icons/ai";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


import './Logic.css'

export default function Logic() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [toggle, setToggle] = useState();
  const [increment, setincrement] = useState(2);
  const [show, setShow] = useState()
  const [ques, setQues] = useState()
  const [logicdisplay, setDisplay] = useState('block')
  const [logicIncrement, setLogicIncrement] = useState(2);
  const [logicShow, setLogicShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [logicAdd, setLogicAdd] = useState([{ id: 1 }])
  console.log(logicAdd)
  const [input, addInput] = useState([{
    name: 'value',
    autoComplete: false,
    id: 1
  }])
  console.log(input)

  const handleAdd = () => {
    addInput([...input, { name: 'value', id: increment }])
    setincrement(increment + 1)
  }

  const deleteInput = (index) => {
    const newData = input.filter((item) => {
      return item.id !== index
    })
    addInput(newData)
  }
  const handleShow = () => {
    addInput(input.autoComplete = true)
  }
  const handleLogicAdd = () => {
    setDisplay('none')

  }
  const handleLogicEdit = () => {

  }
  const handletriggerAdd = () => {
    setLogicAdd([...logicAdd, { id: logicIncrement }])
    setLogicIncrement(logicIncrement + 1)
  }
  const handleLogicDel = (index) => {
    const newData = logicAdd.filter((item) => {
      return item.id !== index;
    })
    setLogicAdd(newData)
  }
  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div className="logic-main" tabIndex={12345}>
        <div className="logic-content" tabIndex={12345}>
          <h4 onClick={() => setToggle(!toggle)}> <span>Logic</span> </h4>
        </div>
        <div>
          {
            toggle && (
              <>
                <div className="input-fields">
                  <div className="fields py-2">
                    <label htmlFor="Title" className='label py-2'>Calculated Values</label>
                    <span className='spanInd' style={{ fontSize: '24px', float: 'right' }} ><IoIosAddCircleOutline onClick={handleAdd} /></span>
                    {
                      input.map((item, index) => {
                        console.log(item.id)
                        return (
                          <>
                            <div key={index} className=' main-drop py-1'>
                              <div className='drop-icons'>
                                <div className='drop-icons-1'>

                                  <div className='input-box'>
                                    <input type="text" className='input' placeholder={`${item.name} ${item.id}`} />
                                  </div>
                                  <div className='input-box'>
                                    <input type="text" className='input' />
                                  </div>
                                  <div className="edit-icon">

                                  </div>
                                  <div className='deleted-icon'>
                                    <span className='edit' onClick={() => setShow(!show)}><BsPencil /></span>
                                    <span onClick={() => deleteInput(item.id)} className='delete-jnj'><BsFillTrashFill /></span>
                                  </div>
                                </div>
                              </div>

                              {

                                show && (
                                  <>
                                    <div className="hidden-div">
                                      <div className="name-div py-4">
                                        <label htmlFor="Name" className='py-2'>Name</label>
                                        <input type="text" placeholder={`${item.name} ${item.id}`} />
                                      </div>
                                      <div className="exp-div">

                                        <label htmlFor="Expression">Expression</label>


                                        <span onClick={toggleShow}><AiFillQuestionCircle /></span>
                                      </div>
                                      {ques && (
                                        <>
                                          <p className='text-center para' style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum iste ullam quod <br /> ea maxime alias nisi aspernatur incidunt modi.</p>
                                        </>
                                      )}
                                      <div className="textarea">
                                        <textarea></textarea>
                                        <div class="checkbox-container">
                                          <label class="checkbox-label">
                                            <input type="checkbox" />
                                            <span class="mark"></span>
                                          </label>
                                        </div>
                                        <div> <span >Show Page title</span> </div>
                                      </div>
                                    </div>

                                  </>

                                )
                              }

                            </div>

                          </>
                        )

                      })
                    }
                    <div className="logic-trigger-div py-2 text-center" >
                      <label htmlFor="Expression">Triggers</label>
                      <span style={{ fontSize: '24px' }} onClick={handletriggerAdd}><IoIosAddCircleOutline /></span>
                    </div>
                    <div className="logic-box text-center" style={{ display: `${logicdisplay}` }}>
                      <div className="content">
                        <div className='para'>
                          <p>Lorem, ipsum dolor.</p>

                        </div>
                        <div className='addNew'>
                          <p className='text-center' onClick={handleLogicAdd}>Add New</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {(logicdisplay === 'none') ?


                  <div className='logic-input1' >

                    {logicAdd.map((item, index) => {
                      console.log(item)
                      return (
                        <div className='logic-input'>
                          <div className='column' key={item.id}>
                            <div className='input-box'>
                              <div className='dot-icon'>
                                <span style={{ fontSize: '25px', padding: '10px', color: 'grey' }}><AiOutlineHolder /></span>
                              </div>
                              <div className='input-select'>
                                <select name="cars" id="cars" form="carform">
                                  <option>Complete survey</option>
                                  <option>Set answer</option>
                                  <option>Copy answer</option>
                                  <option>Skip to question</option>
                                  <option>Run Expression</option>
                                </select>
                              </div>
                              <div className='logic-icons'>
                                <div className='edit-btn'>
                                  <span style={{ fontSize: '24px', padding: '4px 10px', }} onClick={() => setLogicShow(!logicShow)}><BsPencil /></span>
                                </div>
                                <div className='del-btn'>
                                  <span style={{ fontSize: '24px', padding: '10px', padding: '4px 10px', }} onClick={() => handleLogicDel(item.id)}><BsFillTrashFill /></span>
                                </div>
                              </div>
                            </div>
                            <div>
                              {logicShow && (
                                <>
                                  <div className='logic-exp-div'>
                                    <div className='logic-label-div'>
                                      <div className='label'>
                                        <label htmlFor="Expression">Expression</label>
                                      </div>
                                      <div className="icons" style={{ fontSize: '24px' }}>
                                        <span onClick={toggleShow}><AiOutlineMonitor /></span>
                                      </div>

                                    </div>

                                  </div>

                                  <textarea rows='2'></textarea>
                                </>
                              )}
                            </div>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                  :
                  <></>
                }
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
