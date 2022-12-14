import React from 'react'
import './rightSide.css'
import { Scrollbar } from 'react-scrollbars-custom';
import General from './General'
import Pages from './Pages';
import LogoInSurvey from './LogoInSurvey'
import Navigation from './Navigation';
import Question from './Question';
import Logic from './Logic';
import Data from './Data';

export default function RightSide() {
  return (
    <>
    {/* <div className='scroll'> */}
    {/* <Scrollbar style={{ width: '250px' }}> */}
    <div className="data-div">
        <div className="content">
        <General/>
        <LogoInSurvey/>
        <Navigation/>
        <Question/>
        <Pages/>
        <Logic/>
        <Data/>
        </div>
    </div>
    {/* </Scrollbar> */}
    
    {/* </div> */}
    
    </>
  )
}
