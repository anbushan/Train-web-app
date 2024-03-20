import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

const ReactSidebar = ({ sidebarItems, onClick }) => {
  const location = useLocation();

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const isActive = location.pathname === item.url;
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            className='fs-15 text-bolder'
            active={isActive}
            rootStyles={{
              backgroundColor: isActive ? 'white' : '#FFFFFF',
              color:"black",
              ':hover':{
                  color:"black",
              },
            }}
            key={item.id}
            title={item.label}
            label={item.label}
            icon={item.icon}
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Link
            className='textDecoration-none color-white'
            to={item.url}
            style={{ textDecoration: 'none' }} // Add this style to remove underline
          >
            <MenuItem
              onClick={onClick}
              className='fs-15 text-bolder'
              active={isActive}
              rootStyles={{
                backgroundColor: isActive ? '#dcf2fc' : '#FFFFFF',
                color: isActive ? 'black' : 'black',
                ':hover': {
                  color: 'black',
                 
                },
              }}
              key={item.id}
              icon={item.icon}
            >
              {item.label}
            </MenuItem>
          </Link>
        );
      }
    });
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
      <Sidebar
        backgroundColor='#FFFFFF'
        rootStyles={{
          backgroundColor: '#313947',
          color: 'white',
          fontWeight: 'bolder',
          width: '100%',
          maxHeight: 'calc(100vh - 4rem)', 
          borderColor: '#FFFFFF',
        }}
      >
        <div style={{ height: '100%' }}>
          <Menu iconShape='circle'>{renderMenuItems(sidebarItems)}</Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default ReactSidebar;
