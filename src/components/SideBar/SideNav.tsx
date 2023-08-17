import React, { useState } from 'react'

function SideNav() {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className='navbar'>
            <a onClick={showSideBar}>DOIT</a>
            <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items' >
                    <li className='nav-text'>
                        <a >Test Link</a>
                    </li>
                    <li className='nav-text'>
                        <a >Add New Board</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav