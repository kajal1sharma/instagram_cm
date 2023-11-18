import React from 'react'
import "../../styles/sidebar.css"
const SideBar = () => {
  return (
    <div className='sidebarContainer'>
        <ul>
            <li style={{marginBottom:"20px"}}><img width="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhthVRsc7qX-SXY1daSBCN5F1vBxIjlbziulVZn3cv&s"/></li>
            <li>Home</li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notification</li>
            <li>Create</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default SideBar
