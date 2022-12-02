import React from 'react'
import './designer.css'
import { BsFillVinylFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { BsColumnsGap } from "react-icons/bs";
import { BsHddRack } from "react-icons/bs";
import { BsFillFolderFill } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { BsReceipt } from "react-icons/bs";
import { BsViewStacked } from "react-icons/bs";
import { BsFullscreen } from "react-icons/bs";
import { BsDice4 } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsUiRadiosGrid } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsGrid3X2Gap } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FaPaintBrush } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { OverlayTrigger } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';





import { CiGrid32 } from "react-icons/ci";



export default function Designer() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header style={{backgroundColor:'#fff'}} as="h3">
        <div className="pop-sec">
          <div className="pop-icons">
            <div className="icons">
              <span style={{fontSize:'20px', color:'#909090'}}><BsUiRadiosGrid/></span>
              <span className='px-2 py-3'  style={{paddingTop:'10px',fontWeight:'normal'}}>Single-Choice Matrix</span>
            </div>
            <div className="icons">
              <span style={{fontSize:'20px', color:'#909090'}}><BsFillGrid3X3GapFill/></span>
              <span className='px-2' style={{fontWeight:'normal'}}>Multiple-Choice Matrix</span>
            </div>
            <div className="icons">
              <span style={{fontSize:'20px', color:'#909090'}}><BsGrid3X2Gap/></span>
              <span className='px-2' style={{fontWeight:'normal'}}>Dynamic Matrix</span>
            </div>
           
          </div>
        </div>
      </Popover.Header>
      <Popover.Body>
      <div className="icons">
              <span style={{fontSize:'24px', color:'#909090'}}><BiCodeAlt/></span>
              <span className='px-2' style={{fontSize:'16px'}}>HTML</span>
            </div>
            <div className="icons">
              <span style={{fontSize:'24px', color:'#909090'}}><FaPaintBrush/></span>
              <span className='px-2' style={{fontSize:'16px'}}>Expression (read-only)</span>
            </div>
            <div className="icons">
              <span style={{fontSize:'24px', color:'#909090'}}><BsImage/></span>
              <span className='px-2' style={{fontSize:'16px'}}>Expression (read-only)</span>
            </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <div className="container-fluid --bg">
        <div className="row">
          <div className="col-md-2">
            <div className="side-tool">
              <div className="tool">
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{ fontSize: '20px', paddingLeft: '8px' }}><BsFillVinylFill /></span>
                      <span className='px-2 pt-2 span-txt' style={{ fontSize: '12px', paddingLeft: '4px' }}>RadioButton</span>
                    </div>

                  </div>

                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{ fontSize: '20px', paddingLeft: '8px' }}><BsStar /></span>
                      <span className='px-2 pt-2 span-txt' style={{ fontSize: '12px', paddingLeft: '4px' }}>Rating</span>
                    </div>

                  </div>

                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                    <span style={{ paddingLeft:'8px', fontSize: '20px' }}><BsCheck2Square /></span>
                  <span className='px-2 pt-1 span-txt' style={{ fontSize: '12px',  paddingLeft: '4px' }}>Checkbox</span>
                    </div>
                  </div>
                 
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                    <span style={{ paddingLeft:'8px', fontSize: '20px' }}><BsReverseLayoutTextWindowReverse /></span>
                  <span className='px-2 pt-1 span-txt' style={{ fontSize: '12px',  paddingLeft: '4px'}}>Dropdown</span>
                    </div>
                  </div>
                  
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                    <span style={{ paddingLeft:'8px', fontSize: '20px' }}><BsColumnsGap /></span>
                  <span className='px-2 pt-1 span-txt' style={{ fontSize: '12px', paddingLeft: '4px' }}>Tag Box</span>
                    </div>
                  </div>
                 
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                    <span style={{ paddingLeft:'8px', fontSize: '20px' }}><BsHddRack /></span>
                  <span className='px-2 pt-1 span-txt' style={{ fontSize: '12px', paddingLeft:'4px' }}>Boolean</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsFillFolderFill/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>File</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsFillImageFill/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Image Picker</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsBarChartLineFill/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Ranking</span>
                    </div>
                  </div>
                </div>
                <div className="hr-line">
                  {/* horizontal bar */}
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsCreditCard2Back/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Single Input</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsReceipt/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Comments</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsViewStacked/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Multiple text</span>
                    </div>
                  </div>
                </div>
                <div className="hr-line">
                  {/* horizontal bar */}
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsFullscreen/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Panel</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsDice4/></span>
                      <span className='px-2 pt-1 span-txt' style={{fontSize:'12px', paddingLeft:'4px'}}>Dynamic Panel</span>
                    </div>
                  </div>
                </div>
                <div className="tools-item my-2">
                  <div className="span">
                    <div className="span-icons">
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                      <span style={{paddingLeft:'8px', fontSize:'20px'}}><BsThreeDots/></span>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="center-content">
              <div className="data">
                <h2>Center Data</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
