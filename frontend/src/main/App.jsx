import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Menu from '../template/Menu'
import Routers from '../main/routes'
import '../template/custom.css'


export default props=>
    <div className="container">
       <Menu/>
    
      <Routers/>
    </div>