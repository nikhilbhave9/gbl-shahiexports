import React, { useState } from 'react';
import { HiMenu, HiOutlineHome } from 'react-icons/hi';
import { BsGrid1X2 } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { AiOutlineBell } from 'react-icons/ai';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { Container, Nav, NavLink } from 'react-bootstrap';

import '../Main.css';

function NavbarV() {

    const sidebarItems = [
        {
            icon: <HiOutlineHome />
        },
        {
            icon: <BsGrid1X2 />
        },
        {
            icon: <GrDocumentText />
        },
        {
            icon: <AiOutlineBell />
        },
        {
            icon: <IoMdHelpCircleOutline />
        },
    ]


    return (

        <nav className="sidebar">
            <div className="sidebar-wrapper">

                {
                    sidebarItems.map((item, index) => (
                        <div className='icon p-3'>{item.icon}</div>
                    ))
                }

            </div>
        </nav>

    );


    // const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);

    // return (
    //     <>
    //         <div className='navbar'>
    //             <span>
    //                 <HiMenu onClick={setSidebar}/>
    //             </span>
    //         </div>
    //         <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
    //             <ul className='nav-menu-items'>
    //                 <li className='navbar-toggle'>

    //                 </li>
    //                 <li className='nav-text'>
    //                     <HiOutlineHome />
    //                 </li>
    //             </ul>
    //         </nav>
    //     </>
    // );
}

export default NavbarV;