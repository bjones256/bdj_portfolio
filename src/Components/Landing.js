import React, { Component } from 'react';
import Contact from "./Contact";

//Show off some javascript parallax and shit here
//Highlight interests and strengths

class Landing extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    // console.log(window.scrollY)
    // alter project image image postiton
    document.getElementById("secondary-img").style.top=370-(parseInt(window.scrollY/5))+"px";
    document.getElementById("primary-img").style.top=800-(parseInt(window.scrollY/3))+"px";
    document.getElementById("project-text").style.paddingTop= (parseInt(window.scrollY/3.2))+"px";

    // alter project 2 image image postiton
    document.getElementById("secondary-img-2").style.top=550-(parseInt(window.scrollY/5))+"px";
    document.getElementById("primary-img-2").style.top=1100-(parseInt(window.scrollY/3))+"px";
// alter rubix cube on scroll

var rubix = 1;
if(window.scrollY>1050){
rubix = parseInt((window.scrollY-1050)/40)
}
    document.getElementById("primary-img-2").className="rub-"+rubix;
    
    document.getElementById("project-text-2").style.paddingTop= (parseInt(window.scrollY/3.2)-300)+"px";
    
    // alter contact information
    document.getElementById("contactName").style.marginTop=1564-(parseInt(window.scrollY/2))+"px";
    document.getElementById("contactPhone").style.marginTop=1564-(parseInt(window.scrollY/2))+"px";
    document.getElementById("contactEmail").style.marginTop=1564-(parseInt(window.scrollY/2))+"px";
    document.getElementById("contactLinkedIn").style.marginTop=1564-(parseInt(window.scrollY/2))+"px";
    document.getElementById("contactGithub").style.marginTop=1564-(parseInt(window.scrollY/2))+"px";
    // document.getElementById("contactGithub").style.marginTop=370-(window.scrollY/5)+"px";
    
    // contact form slide in from right
    document.getElementById("formComponent").style.left=3129-(parseInt(window.scrollY))+"px";
  }

  render() {
    return (
      <div className="landing">
        <div className="parallax-intro">
      <h1>Full Stack Web Development</h1>
        </div>
        <div className="projects">
{/* individual project */}

          <div className="project">
              <div className="project-bg-image">
              <div id="secondary-img" className="secondary-project-img"></div>
              <div id="primary-img" className="primary-project-img"></div>
              </div>
              <div id="project-text" className="project-text">
                  <div className="project-title">
                  fakebook
                  </div>
                  <div className="project-short-description">
                  A Facebook Clone
                  </div>
                  <div className="project-long-description">
                  Built from scatch using React, Postgres, Redux, Bcrypt .... To view sample profile use email: <strong>JulieShiller</strong> password: <strong>p</strong> 
                  </div>
                  <div className="project-link-button">
                  <button className="btn btn-primary">fakebook</button>
                  </div>
              </div>
          </div>
  {/* individual project */}

          <div className="project">
              
              <div id="project-text-2" className="project-text">
                  <div className="project-title">
                  jsRubix
                  </div>
                  <div className="project-short-description">
                  Rubix Cube
                  </div>
                  <div className="project-long-description">
                  Built from scatch using React, Postgres, Redux, Bcrypt .... To view sample profile use email: <strong>JulieShiller</strong> password: <strong>p</strong> 
                  </div>
                  <div className="project-link-button">
                  <button className="btn btn-primary">View on Github</button>
                  </div>
              </div>
              <div className="project-bg-image-2">
              <div id="secondary-img-2" className="secondary-project-img"></div>
              <div id="primary-img-2" className="primary-project-img"></div>
              </div>
          </div>

        </div>
        <div className="about">
        About
        <div>IOT</div>
        <div>eCommerce</div>
        <div>Mobile Apps</div>
        <div>StartUps</div>
        </div>

        <div className="hire">
        <div className="contactInfo">
          <div className="contactImage">
          </div>
          <div id="contactName">
          <h1>Brian Jones</h1>
          </div>
          <div id="contactPhone">
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <h3>555-555-5555</h3>
          </div>
          <div id="contactEmail">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <h3>bjones256@gmail.com</h3>
          </div>
          <div id="contactLinkedIn">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <h3><a target="_blank" href="https://www.linkedin.com/in/bjones256/">bjones256@gmail.com</a></h3>
          </div>
          <div id="contactGithub">
          <i className="fa fa-github" aria-hidden="true"></i>
         <h3><a target="_blank" href="https://github.com/bjones256">bjones256</a></h3>
          </div>
  
        </div>
        <div className="contactForm">
        
        
        <Contact/>
        </div>
        </div>

      </div>
    );
  }
}

export default Landing;
