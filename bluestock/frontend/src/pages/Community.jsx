import { Breadcrumb, Button, Card } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import Navbars from "../components/Navbars";
import photo from '../men_photo.jpg'

const Community = () => {
  return (
    <div>
      <Navbars val={"IPO"} link={'/ipohomepage'} val2={"DASHBOARD"} link2={"/dashboard"}/>

      <div className="container">
        <Breadcrumb className="my-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Community</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="container">
        <div className="community-head row d-flex justify-content-evenly align-items-center">
          <div className="left col-lg-6 col-md-12 col-12">
            <div className="col-lg-8 col-md-12 col-12">
              <h1 className="fw-bold">The Most Active Community of Traders & Investors</h1>
              <small>
                Join now to interact with thousands of active traders and investors to learn and share your knowledge on out buzzing forum.
              </small>
            </div>
            <Button className="bg-primary text-white my-2">Join Our Community</Button>
          </div>

          <div className="right col-lg-6 col-md-12 col-8 border-1">
            <div className="msg"></div>
            
            <div className="row m-auto">
              <div className="message bg-secondary-subtle py-1 rounded-1 px-2 shadow-sm col-lg-11 col-md-8 my-3">

                <div className="messagetitle d-flex justify-content-between pt-3">
                  <div className="d-flex">
                    <img src={photo} alt="someimage" className="circleFace1 circle"/>
                    <p className="fw-bold">Om Jaiswal</p>
                  </div>
                  <small className="text-end">Asked 21 minutes ago</small>
                </div>

                <p className="question px-5">What is long term investments?</p>
                <p className="stats d-flex justify-content-between mx-3">
                  <small className="likes">1300 likes</small>
                  <small className="replies">264 replies</small>
                </p>

              </div>

              <div className="message1 bg-secondary-subtle p-1 rounded-1 px-2 shadow-sm my-2 col-lg-11 col-md-8 mx-5">
                <div className="messagetitle d-flex justify-content-between pt-3">
                  <div className="d-flex">
                    <img src={photo} alt="someimage" className="circleFace1 circle"/>
                    <p className="fw-bold">Anish Walke</p>
                  </div>
                  <small className="text-end">Asked 2 minutes ago</small>
                </div>
                <p className="question px-5">What is option trading?</p>
                <p className="stats d-flex justify-content-between mx-3">
                  <small className="likes">134 likes</small>
                  <small className="replies">26 replies</small>
                </p>
              </div>
              
              <div className="message2 bg-secondary-subtle p-1 rounded-1 px-2 shadow-sm col-lg-11 col-md-8 mx-4">
                <div className="messagetitle d-flex justify-content-between pt-3">
                  <div className="d-flex">
                    <img src={photo} alt="someimage" className="circleFace1 circle"/>
                    <div>
                      <p className="fw-bold">Ganesh Karale</p>
                      <small>CEO Bluestock</small>
                    </div>
                  </div>
                  <Button className="btn my-1">Bluetstock Team</Button>
                </div>
                <div className="question px-4">Options trading is the trading of instrumentsthat give you the right to buy or sell a specificsecurity at a specific price on a specific date.Hope this helps!</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="discount container my-5">

        <div className="row d-flex">
          <div className="invest-club col-lg-5 col-md-12 col-12">
            <div>
              <h1>Be a part of trading & investments club</h1>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className='d-flex'>
                <TiTick size={30} className='col-2'/>
                <p className='10'>rich environment for knowledge exchange.</p>
              </div>
              <div className='d-flex'>
                <TiTick size={30} className='col-2'/>
                <p className='10'>stay connected about the latest stock market</p>
              </div>
              <div className='d-flex'>
                <TiTick size={30} className='col-2'/>
                <p className='10'>Access exclusive community events, webinars, and meet-ups</p>
              </div>
              
            </div>
          </div>

          <div className="float-card col-lg-6 col-md-12 col-12 mx-4">
            <div className="row mt-5">
              <div className="floating col pt-3">Dynamic<br/>Discussions</div>
              <div className="floating col my-5 pt-3">Expert<br/>Insights</div>
              <div className="floating col my-4 pt-3">Expert<br/>Interaction</div>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="text-center my-5">
          <h2 className="fw-bold">Team Bluestock Cares</h2>
          <small>Interact with our members to engage,<br/> clarify and contribute</small>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="fw-bold">Interact With Our Experts</h2>
            <div className="list">
              <div className="d-flex align-items-center">
                <div className="list-circle"></div>
                Get valid suggestions
              </div>
              <div className="d-flex align-items-center">
              <div className="list-circle"></div>
                Raise issues or concerns
              </div>
              <div className="d-flex align-items-center">
                <div className="list-circle"></div>
                Ask your questions
              </div>
            </div>
          </div>

          <div className="col">
            <div className="message1 bg-secondary-subtle p-1 px-2 my-2 col-lg-11 col-md-8 mx-5 sh">
                <div className="messagetitle d-flex justify-content-between pt-3">
                  <div className="d-flex">
                    <img src={photo} alt="someimage" className="circleFace1 circle"/>
                    <p className="fw-bold">Pravin Deshmukh</p>
                  </div>
                  <small className="text-end">Asked 2 minutes ago</small>
                </div>
                <p className="question px-5">What is option trading?</p>
                <p className="stats d-flex justify-content-between mx-3">
                  <small className="likes">134 likes</small>
                  <small className="replies">26 replies</small>
                </p>
            </div>

            <div className="message2 bg-secondary-subtle p-1 rounded-1 px-2 col-lg-11 col-md-8 mx-4 sh margin">
              <div className="messagetitle d-flex justify-content-between pt-3 col-lg-11 col-md-8">
                <div className="d-flex">
                  <img src={photo} alt="someimage" className="circleFace1 circle"/>
                  <div>
                    <p className="fw-bold">Ganesh Karale</p>
                    <small>CEO Bluestock</small>
                  </div>
                </div>
                <Button className="btn my-1 bg-gold">Bluetstock Team</Button>
              </div>
              <div className="question px-4">Options trading is the trading of instrumentsthat give you the right to buy or sell a specificsecurity at a specific price on a specific date.Hope this helps!</div>
            </div>
            <div className="msg-2 bg-secondary-subtle p-1 rounded-1 px-2 col-lg-11 col-md-8"></div>
            <div className="msg-3 bg-secondary-subtle p-1 rounded-1 px-2 col-lg-11 col-md-8"></div>
            <div className="msg-4 bg-secondary-subtle p-1 rounded-1 px-2 col-lg-11 col-md-8"></div>
            <div className="msg-5 bg-secondary-subtle p-1 rounded-1 px-2 col-lg-11 col-md-8"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Community