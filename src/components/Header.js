import React, { Component, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Typewriter from 'typewriter-effect';
import Confetti from 'react-confetti'

const Header = () => {

  const [showParty, setShowParty] = useState(false)
  const { width, height } = useWindowSize()


  return (
    <React.Fragment>

      <header id="home">

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi
              <Typewriter
                options={{
                  strings: ['Neha Mangla'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>This valentine I wanted to give you something interesting and valuable but then I realized you already have me in your life
            </h3>

            <h3 style={{ marginTop: "50px", color: "antiquewhite" }}>
              You are the best thing happened to me this year, I can feel my heartbeat when I am with you.
              I am more than excited to spend the next adventure together called life with you.
              If you accept my proposal, click on the button below
            </h3>

            <button style={{ marginTop: "50px", background: "#AA336A" }} onClick={() => setShowParty(true)}> Yes I am all yours</button>


            {showParty && <Confetti
              width={width}
              height={height}
            />}
            {/* <hr/> */}
            {/* <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul> */}
          </div>
        </div>


      </header>
    </React.Fragment>
  );
}


export default Header