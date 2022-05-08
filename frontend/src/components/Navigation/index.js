import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const homePage = () => {
    history.push('/')
  }
  const loginPage = () => {
    history.push("/login")
  }
  const signupPage = () => {
    history.push('/signup')
  }
  const createEventPage = () =>{
    history.push("/create-event")
  }

  const myEventsPage = () => {
    history.push(`/tickets/users/${sessionUser.id}`)
  }
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div className='home'>
        <div className='home-click'>
          <button onClick={homePage}>Home</button>
           
        </div>
     
      </div>

      <div className='navigation-menu'>
        <ul className='navigation-list'>
          <li className='navigation-item'>
            <button onClick={createEventPage}>Create Event</button>
            
             </li>
             <li className='navigation-item'>
               <button onClick={myEventsPage}>My Events</button>
              
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
      <div>
          <button className="home-button" onClick={loginPage} style={{cursor:'pointer'}}>Log In</button>
          
        
       <button className="home-button"style={{cursor:'pointer'}} onClick={signupPage}>Sign Up</button>
          
        </div>
        
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