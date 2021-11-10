import React from 'react'
import Navbar from '../components/Navbar'
import "./style.css"

const PrivateLayout = ({children}) => {
    return (
        <div  class = "Panel-principal">
            <Navbar/>            
            {children}
        </div>
    )
}

export default PrivateLayout
