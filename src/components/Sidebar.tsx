import styled from '@emotion/styled'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import React, { useState } from 'react'

import menuList from '@/menu'

const FixList = styled(List)`
  position: fixed;
  top: 64px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 64px);
  width: 250px;
  overflow: auto;
  transition: left 0.5s;
  left: 0;
`

const Sidebar = ({ open }: any) => {
  return (
    <FixList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-labelledby="nested-list-subheader"
      style={{ left: open ? 0 : -250 }}
    >
      {menuList.map((item) => {
        const [open, setOpen] = useState(true)

        return (
          <React.Fragment key={item.label}>
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children?.map((child) => (
                  <ListItemButton sx={{ pl: 9 }} key={child.label}>
                    <ListItemText primary={child.label} secondary={child.description} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        )
      })}
    </FixList>
  )
}

export default Sidebar
