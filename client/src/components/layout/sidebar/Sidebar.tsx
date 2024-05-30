import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Link as CustomLink } from '@mui/material'
import Navigation from './navigation/Navigation'
// import logo from '%PUBLIC_URL%/logo.png';
import "./Sidebar.scss"

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  return (
    <aside className='sidebar'>
        <CustomLink component={Link} color="inherit" underline='none' className='sidebar__logo' to="/">
            <div className='sidebar__media'>
                <img src="./logo.png" />
            </div>
            <span className='sidebar__text'>
                File manager
            </span>
        </CustomLink>
        <Navigation />
    </aside>
  )
}

export default Sidebar