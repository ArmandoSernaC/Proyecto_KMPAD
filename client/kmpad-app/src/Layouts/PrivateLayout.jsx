import React from 'react'
import Navbar from '../components/Navbar'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            
            {children}
        </div>
    )
}

export default PrivateLayout
