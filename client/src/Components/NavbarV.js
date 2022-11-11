import React, {useState} from 'react';
import { HiMenu, HiOutlineHome } from 'react-icons/hi';


function NavbarV() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <span>
                    <HiMenu onClick={setSidebar}/>
                </span>
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>

                    </li>
                    <li className='nav-text'>
                        <HiOutlineHome />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavbarV;