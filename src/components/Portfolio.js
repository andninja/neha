import React, { Component } from 'react';

// import portfolio from '../../public/images/portfolio.pdf';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a>
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
              {
                // resumeData.portfolio && resumeData.portfolio.map((item)=>{
                // return(

                // )
                // })
              }
            </div>
            <div className='portfolio-download'>
            <a
              href={'images/portfolio.pdf'}
              download="Sakshi_Portfolio_2023"
              target="_blank"
              rel="noreferrer"
            >
              <button className='portfolio-btn'>  Download Portfolio <img style={{marginLeft:'10px'}} src={'images/downloads.png'}/></button>
            </a>
            </div>
           
          </div>
        </div>
      </section>
    );
  }
}