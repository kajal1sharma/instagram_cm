import React from 'react'
import "../../styles/suggestion.css"

import SuggestionData from "../../data/suggestions"
const Suggestion = () => {
  return (
    <div style={{width:'15vw',marginTop:'5vh', marginRight:'5vh'}}>
      {
        SuggestionData.map(user=>{
            return<div style={{paddingLeft:'1vw',marginTop:'1vh',border:"1px solid grey",height:"100px" , display:'flex', justifyContent:"space-between", alignItems:'center'}}>
                    <div style={{height:"100px", display:"flex", flexDirection:"column",
                    justifyContent:"center",gap:'10px'
                }}>
                        <span>{user.username}</span>
                        <img  src={`${user.profilePic}`} width="40px" height="40px" style={{borderRadius:"50%"}}/>
                    </div>

                    <span className='followLink'>Follow</span>
                </div>
        })
      }
    </div>
  )
}

export default Suggestion
