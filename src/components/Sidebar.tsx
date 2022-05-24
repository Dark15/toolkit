import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
  const menuFuncList: Array<React.Dispatch<React.SetStateAction<boolean>>> = []
  const [fold, setFold] = useState(false)
  return (
    <FixList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-labelledby="nested-list-subheader"
      style={{ left: open ? 0 : -250 }}
    >
      <ListItemButton
        onClick={() => {
          setFold(!fold)
          menuFuncList.forEach((func) => {
            fold ? func(true) : func(false)
          })
        }}
      >
        <ListItemIcon>{fold ? <AddIcon /> : <HorizontalRuleIcon />}</ListItemIcon>
        <ListItemText primary={fold ? '全部展开' : '全部收起'} />
      </ListItemButton>
      {menuList.map((item) => {
        const [open, setOpen] = useState(true)
        menuFuncList.push(setOpen)
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
                  <ListItemButton
                    component={Link}
                    to={child.path as string}
                    sx={{ pl: 9 }}
                    key={child.label}
                  >
                    <ListItemText
                      primary={child.label}
                      secondary={child.description}
                      classes={{ secondary: 'truncate' }}
                    />
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
