import React from 'react'
import "../../styles/header.css"
import SavedStatus from './SavedStatus';
 import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
const Header = ({myInfo}) => {
  return (
    <div  style={{display:"flex",flexDirection:"column",marginTop:"10vh",width:'100%'}}>
        <div style={{display:"flex",justifyContent:"flex-start",gap:"10vh",marginLeft:"10vh"}} >
            <img style={{width:'25vh' , height:"25vh", borderRadius:"50%", objectFit:"cover"}} src={`${myInfo.profilePic}`} alt=""/>
            <div>
                <div style={{height:"80px",display:"flex", gap:"20px",alignItems:"center"}}>
                    <span style={{fontSize:'20px'}}>{myInfo.username}</span>
                    <span class="profile_header_buttons">Edit Profile</span>
                    <span class="profile_header_buttons">View Archive</span>
                    <span><SettingsApplicationsIcon/></span>
                </div>
                <div style={{display:'flex', justifyContent:'space-around', marginTop:"20px"}}>
                    <span>{myInfo.post} posts</span>
                    <span>{myInfo.followers} followers</span>
                    <span>{myInfo.following} following</span>
                </div>
                <div style={{marginTop:"20px", marginLeft:"20px"}}> 
                    {myInfo.name}
                </div>
                <p style={{ marginLeft:"20px"}}>
                    {myInfo.Bio}
                </p>

            </div>
        </div>
        <SavedStatus savedStatus={myInfo.savedStatus}/>
    </div>
  )
}

export default Header
