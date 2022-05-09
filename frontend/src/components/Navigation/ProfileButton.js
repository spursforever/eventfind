import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    
       {/* <i className="fas fa-user-circle avatar" onClick={openMenu}></i> */}
      <button className="profileuser" onClick={openMenu}>Hi {user.username}!</button>
      <div className="profile">

      </div>
      {showMenu && (
        <ul className="coolstuff" onMouseLeave={closeMenu}>
          <li className="username">{user.username}</li>          
          <li className="userLogout">
            <button className="logout_button" style={{cursor:'pointer'}} onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;