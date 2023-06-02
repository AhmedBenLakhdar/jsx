import React from 'react'
import Image from 'react-bootstrap/Image'

import L1 from '../Profile/homme.jpg'

const ProfilePhoto = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}> 

      <Image src={L1} fluid />

    </div>
  )
}

export default ProfilePhoto
