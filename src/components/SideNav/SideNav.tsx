import { useState } from 'react'
import { useGetBoardsQuery } from '../../storage/apiSlice';
import { IBoard } from '../../storage/types';

function SideNav() {
    const [sideBar, setSideBar] = useState(true);

    const { data, isLoading } = useGetBoardsQuery('');

    console.log(data, isLoading);


    const showSideBar = () => {
        setSideBar(!sideBar)
    }
    if (isLoading === true) {
        return <div className='navbar'>Loading...</div>
    }
    return (
        <div className='navbar'>
            <a onClick={showSideBar}>DOIT</a>
            <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items' >
                    {data.map((item: IBoard) => <li key={item.id} className='nav-text'>{item.title}</li>)}
                    <li className='nav-text' >
                        <a style={{ borderStyle: 'solid' }} >Add New Board</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav