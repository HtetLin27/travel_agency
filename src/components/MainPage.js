import React, {useState} from 'react';
import './MainPage.css'
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';

function MainPage(props) {
    const [show, setShow] = useState(true);
  return (
    <>
    <div className={show ? 'mainpage' : 'main-active' }>
        <button onClick={()=>{setShow(!show)}}><MenuIcon/></button>

    </div>
    <Sidebar active={show}/>
    
    </>
  )
}

export default MainPage