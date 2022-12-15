import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
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



import './surveycomplete.css'

export default function Surveycomplete() {
    const [toggle, setToggle] = useState()
    const [increment, setIncrement] = useState(1)
    const [surveyData, setSurveyData] = useState([{
        id: 1
    }])
    const [expData, setExpData] = useState([{
        id: 1
    }])
    const [centredModal, setCentredModal] = useState(false);
    const [show, setShow] = useState()
    const [expIncrement, setexpIncrement] = useState(1)

    const toggleShow = () => setCentredModal(!centredModal);
    const [showExpression, setExpression] = useState()
    console.log(surveyData)
    const handleAddSurvey = () => {
        setSurveyData([...surveyData, { id: increment }])
        setIncrement(increment + 1)
    }
    const handlesurveydel = (index) => {
        const newData = surveyData.filter((item) => {
            return (item.id !== index)
        })
        setSurveyData(newData)
    }
    const handleexpAdd = () => {
        setExpData([...expData, { id: expIncrement }])
        setexpIncrement(expIncrement + 1)
    }
    return (

        <>

            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <div className="survey-main">
                <div className="survey-content">
                    <h4 onClick={(() => setToggle(!toggle))}><span>Survey Complete</span></h4>
                </div>
            </div>
            {
                toggle && (
                    <>
                        <div className="survey-input-field my-2">
                            <div className="survey-label py-2">
                                <label htmlFor="" className='survey-input-label'>Navigate to URL</label>
                            </div>
                            <div className="survey-input-box">
                                <input type="text" />
                            </div>
                            <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox" />
                                    <span class="mark"></span>
                                </label>
                            </div>
                            <div className='check-text'> <span >Show the survey complete page</span> </div>
                            <div className="survey-label label2">
                                <label htmlFor="">Survey Complete page markup</label>
                            </div>
                            <div className="textarea">
                                <textarea placeholder='<h3>Diolch am lenwi’r holiadur!</h3>'></textarea>
                            </div>

                            <div className="dynamic-sec">
                                <span className='dy-label'>Dynamic URL</span>
                                <span style={{ fontSize: '24px' }} onClick={handleAddSurvey}><IoIosAddCircleOutline /></span>
                            </div>

                            {
                                surveyData.map((item) => {
                                    return (
                                        <div key={item.id} className='survey-exp-main'>
                                            <div className="dyn-input-sec py-1">

                                                <div className="input1">
                                                    <input type="text" />
                                                </div>
                                                <div className="input2">
                                                    <input type="text" />
                                                </div>
                                                <div className="dyn-icon-sec">
                                                    <span className='survey-edit' style={{ fontSize: '24px', padding: '0px 7px', cursor: 'pointer' }} onClick={() => setExpression(!showExpression)}><BsPencil /></span>
                                                    <span className='survey-del' onClick={() => handlesurveydel(item.id)} style={{ fontSize: '24px', padding: '0px 7px', cursor: 'pointer' }}><BsFillTrashFill /></span>
                                                </div>

                                            </div>
                                            {
                                                showExpression && (

                                                    <div className="survey-exp-label">
                                                        <div className="survey-exp-label">
                                                            <label htmlFor="" className='py-2 px-4'>Expression</label>
                                                            <span style={{ fontSize: '24px', cursor: 'pointer' }} className='px-4' onClick={toggleShow}><AiOutlineMonitor /></span>
                                                        </div>
                                                        <div className="survey-exp-textarea px-4">
                                                            <textarea></textarea>
                                                        </div>
                                                        <div className="survey-expr-input">
                                                            <div className="surveys-inputs">
                                                                <label htmlFor="" className=' py-2'>Service URl</label>
                                                                <input type="text" className='px-4' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>

                                    )
                                })
                            }

                            <div className="main-survey2 my-2">
                                <div className="main-survey2-content">
                                    <label htmlFor="" className='py-3'>Dynamic Survey Complete page markup</label>
                                    <span style={{ fontSize: '24px' }} className='py-2' onClick={handleexpAdd}><IoIosAddCircleOutline /></span>
                                </div>
                                {expData.map((item) => {
                                    return (
                                        <div key={item.id} className="survey2-input">
                                            <div className="border-box">


                                                <div className="survey2-input-1">
                                                    <input type="text" />
                                                </div>
                                                <div className="survey-2-input-2">
                                                    <input type="text" />
                                                </div>
                                                <div className="survey2-dyn-icons">
                                                    <span className='survey-edit' style={{ fontSize: '24px', padding: '0px 7px', cursor: 'pointer' }} onClick={()=>setShow(!show)}><BsPencil /></span>
                                                    <span className='survey-del' style={{ fontSize: '24px', padding: '0px 7px', cursor: 'pointer' }} ><BsFillTrashFill /></span>
                                                </div>
                                            </div>
                                            {show &&(
                                                 <div className="surv-2-expr">
                                                 <div className="survey2-exp-label">
                                                     <label htmlFor="" className='py-2'>Expression</label>
                                                     <span style={{ fontSize: '24px', cursor:'pointer' }} onClick={toggleShow}><AiOutlineMonitor /></span>
                                                 </div>
                                                 <div className="textarea">
                                                     <textarea></textarea>
                                                 </div>
                                                 <div className="survey2-exp-label2">
                                                    <div className="survey-label">
                                                        <label htmlFor="">HTML markup</label>
                                                    </div>
                                                    <div className="textarea">
                                                       <textarea></textarea>
                                                    </div>
                                                 </div>
                                             </div>
                                            )}


                                        </div>
                                    )
                                })}
                                    <div className="markup-div">
                                       <div className="markup-text">
                                        <label htmlFor="" className='p-text'>Markup to show while survey model is loading</label>
                                       </div>
                                       <div className="textarea">
                                        <textarea placeholder='<h3>Memuat survei...</h3>'></textarea>
                                       </div>
                                       <div className="markup-text">
                                        <label htmlFor="" className='p-text'>Markup to show if the user already filled out this <br /> survey</label>
                                       </div>
                                       <div className="textarea">
                                        <textarea placeholder='<h3>Catatan kami menunjukkan bahwa Anda telah menyelesaikan survei ini.</h3>'></textarea>
                                       </div>
                                    </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
