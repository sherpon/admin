/** libs */
import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
import './sidebar.scss';
/** files */
import menuIcon from './images/navigationMenu.svg';
import backToAccountIcon from './images/linkAccount.svg';
/** strings */

const Sidebar = ({strings, expanded, handleOnClickMenu, handleOnCollapseMenu}) => {
  const expandedClass = expanded ? 'expanded' : '' ;

  return(
    <div className="sidebar">

      <div className="sidebar__menu">
        <img src={menuIcon} onClick={ () => handleOnClickMenu() }/>
      </div>

      <div className="sidebar__link__list">

        <NavLink 
          exact to="/" 
          className="sidebar__link__item__home" 
          activeClassName="selected"
          onClick={ () => handleOnCollapseMenu() }
          >
          <div className={`sidebar__link__item__title ${expandedClass}`}>Home</div>
        </NavLink>

        <NavLink 
          exact to="/pages" 
          className="sidebar__link__item__pages" 
          activeClassName="selected"
          onClick={ () => handleOnCollapseMenu() }
          >
          <div className={`sidebar__link__item__title ${expandedClass}`}>Pages</div>
        </NavLink>

        <NavLink 
          exact to="/media" 
          className="sidebar__link__item__media" 
          activeClassName="selected"
          onClick={ () => handleOnCollapseMenu() }
          >
          <div className={`sidebar__link__item__title ${expandedClass}`}>Media</div>
        </NavLink>

        <NavLink 
          exact to="/settings" 
          className="sidebar__link__item__settings" 
          activeClassName="selected"
          onClick={ () => handleOnCollapseMenu() }
          >
          <div className={`sidebar__link__item__title ${expandedClass}`}>Settings</div>
        </NavLink>

      </div>

      <div className="sidebar__back-to-account">
        <Link to="/account" >
          <img src={backToAccountIcon}/>
          <div className={`sidebar__back-to-account__title ${expandedClass}`}>Account</div>
        </Link>
      </div>
      
    </div>
  );
};

Sidebar.propTypes = {
  strings: PropTypes.object.isRequired,
};

export default Sidebar;