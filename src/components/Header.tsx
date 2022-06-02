import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const FixBox = styled(Box)`
  position: fixed;
  width: 100%;
  height: 64px;
  z-index: 2;
`

const Header = (props: any) => {
  return (
    <FixBox sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: '0px 3px 8px 0px #8ea7be' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              props.setOpen(!props.open)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Toolkit
          </Typography>
        </Toolbar>
      </AppBar>
    </FixBox>
  )
}

export default Header
