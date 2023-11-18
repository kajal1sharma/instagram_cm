import React from 'react'

const SavedStatus = ({savedStatus}) => {
  return (
    <div style={{display:"flex", marginTop:"2vh", gap:"10vh", marginLeft:"10vh"}}>
      {savedStatus.map((status)=>{
        return <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                <img src={`${status.status[0]}`} alt="" style={{width:'10vh',height:"10vh", borderRadius:"50%"}}/>
                <span>{status.statusName}</span>
            </div>
      })}
    </div>
  )
}

export default SavedStatus
