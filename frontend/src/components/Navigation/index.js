import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div className='home'>
        <div className='home-click'>
           <NavLink exact to="/">Home</NavLink>
        </div>
     
      </div>

      <div className='navigation-menu'>
        <ul className='navigation-list'>
          <li className='navigation-item'>
            <NavLink to="/create-event">Create Event</NavLink>
             </li>
             <li className='navigation-item'>
              <NavLink to={`/tickets/users/${sessionUser.id}`}>My Events</NavLink>
            </li>
            <li className='navigation-item'>
              <ProfileButton user={sessionUser} />
            </li>
            
           
            </ul>
            </div>
            
         
      
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <header className='navigation'>
     
        {isLoaded && sessionLinks}
    </header>
   
  );
}

export default Navigation;