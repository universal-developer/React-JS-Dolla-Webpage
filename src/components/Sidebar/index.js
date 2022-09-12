import React from 'react'
import {
  SidebarContainer, 
  CloseIcon, 
  Icon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>

        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about'>About</SidebarLink>
            <SidebarLink to='discover'>Discover</SidebarLink>
            <SidebarLink to='services'>Services</SidebarLink>
            <SidebarLink to='signup'>Sign Up</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>

        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>


      </SidebarContainer>
    </>
  )
}

export default Sidebar