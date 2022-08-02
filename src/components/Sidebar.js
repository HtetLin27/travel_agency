import React from 'react';
import MainPage from './MainPage';
import './Sidebar.css'

function Sidebar(props) {
  return (
    <>
    <div className={props.active ?'sidebar-active':'sidebar'}><h3>Admin Dashboard</h3>
    <div className=" ">
    <div className="">
    <a className=" " href="#addServices" data-toggle="collapse"  aria-expanded="false"><i className="fa-solid fa-list-check"></i> Services<i className="fa-solid fa-angle-down down-arr1"></i></a>
    </div>
<div className="" id="addServices">
    <div className="">
        <a href="" > Add Service</a>
    </div>
    <div className="">
        <a href="" > Service List</a>
    </div>
</div>
</div>
    </div>
    
    

    </>
 
  )
}

export default Sidebar