import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import homelogo from "../../images/home_logo.jpg"
import { searchingForEvent } from "../../store/event"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const homePage = () => {
    history.push('/')
  }

  const loginPage = () => {
    history.push("/login")
  }

  const signupPage = () => {
    history.push('/signup')
  }

  const createEventPage = () => {
    history.push("/create-event")
  }

  const myEventsPage = () => {
    history.push(`/tickets/users/${sessionUser.id}`)
  }

  const searchingforAEvent = () => {
    const belovedSearchbar = document.querySelector('.searchingEvent')
    dispatch(searchingForEvent(belovedSearchbar.value));
    window.scroll({
      top:625,
      left:0,
      behavior: 'smooth'
    })
  } 

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <button className='navigation-create' onClick={createEventPage} style={{ cursor: 'pointer' }}>Create Event</button>
        <button className='navigation-myevents' onClick={myEventsPage} style={{ cursor: 'pointer' }}>My Events</button>
        <ProfileButton user={sessionUser} />
      </>
    );
  }
  else {
    sessionLinks = (
      <>
        <button className="home-login" onClick={loginPage} style={{ cursor: 'pointer' }}>{" "}Log In{" "}</button>

        <button className="home-signup" style={{ cursor: 'pointer' }} onClick={signupPage}>{" "}Sign Up{" "}</button>

      </>
    );
  }

  return (
    <div className='homepage'>
      <div className='home_container'>
        <div className='navbar_home'>
          <img className='home-logo' onClick={homePage} src={homelogo} style={{ cursor: 'pointer' }} alt="" />
        
        <div className="searchbar">
          <input
          className="searchingEvent" 
          type="search"
          placeholder="Search your desired event"          
          />
          <img
            className="search_icon"
            alt=""
            src="../images/searchicon.png"
            style={{ cursor: "pointer" }}
            onClick={searchingforAEvent}
            ></img>
        </div>
        </div>
        <div className='home-detail'>
          <div className='home-details'>{isLoaded && sessionLinks}</div></div>
      </div>
    </div>

  );
}

export default Navigation;