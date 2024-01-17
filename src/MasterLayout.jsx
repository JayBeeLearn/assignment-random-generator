import React from 'react'
import { Outlet } from 'react-router-dom'

function MasterLayout() {
  return (
      <div>
          
          <div>
              <Outlet />
          </div>
    </div>
  )
}

export default MasterLayout