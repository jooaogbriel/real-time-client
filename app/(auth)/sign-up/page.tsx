import React from 'react'
import Image from 'next/image'
import logo from '@/app/images/logo.jpg'

const page = () => {
  return (
    <div>
        <Image src={logo} alt='logo' width={400} className=' bg-black'  />
        <div id="g_id_onload"
            data-client_id="YOUR_GOOGLE_CLIENT_ID"
            data-login_uri="https://your.domain/your_login_endpoint"
            data-your_own_param_1_to_login="any_value"
            data-your_own_param_2_to_login="any_value">
        </div>
    </div>
  )
}

export default page