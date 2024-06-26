import { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Header from '../Dashboard/Components/header.js'
import Sidebar from '../Dashboard/Components/sidebar.js'

import FullFeaturedCrudGrid from '../Reports/datagrid.js'
import StockIssue from '../StockIssue/StockIssue.js'

function StockIssueScreen() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <main className='main-container'>
        <Box
          sx={{
            height: 400,
            width: '100%',
            '& .actions': {
              color: 'text.secondary',
            },
            '& .textPrimary': {
              color: 'text.primary',
            },
          }}

        >
        <StockIssue/>
        
        </Box>
       
        </main>
      
    </div>
  )
}

export default StockIssueScreen