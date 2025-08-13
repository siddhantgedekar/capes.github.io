import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className='container'>
      <div className="links w-100 row mb-5 d-flex justify-content-between">
        <div className="contain col text-secondary">
          <span className='fw-bold text-dark'>Resouces</span>
          <div className="mt-3 resources d-flex justify-content-start flex-column">
            <span>Trading View</span>
            <span>NSE Holidays</span>
            <span>e-Voting CDSL</span>
            <span>e-Voting NSDL</span>
            <span>Market Timings</span>
          </div>
        </div>

        <div className="contain1 col text-secondary">
          <span className='fw-bold text-dark'>Company</span>
          <div className="mt-3 resources d-flex justify-content-start flex-column">
            <span>
              <a href="/carrers" className="text-decoration-none text-secondary">Carrers</a>
            </span>
            <span>
              <a href="/contactus" className="text-decoration-none text-secondary">Contact Us</a>
            </span>
            <span>
              <a href="/aboutus" className="text-decoration-none text-secondary">About Us</a>
            </span>
            <span>
              <a href="/community" className="text-decoration-none text-secondary">Community</a>
            </span>
            <span>
              <a href="/blogs" className="text-decoration-none text-secondary" >Blogs</a>
            </span>
          </div>
        </div>
        <div className="contain2 col text-secondary">
          <span className='fw-bold text-dark'>Offerings</span>
          <div className="mt-3 resources d-flex justify-content-start flex-column">
            <span>Compare Broker</span>
            <span>Fin Calculators</span>
            <span>
              <a href="/ipohomepage" className="text-decoration-none text-secondary">IPO</a>
            </span>
            <span>All Brokers</span>
            <span><a href="/products" className="text-decoration-none text-secondary">Products</a></span>
          </div>
        </div>
        <div className="contain3 col text-secondary">
          <span className='fw-bold text-dark'>Links</span>
          <div className="mt-3 resources d-flex justify-content-start flex-column">
            <span>Shark Investor</span>
            <span>
              <a href="/mutualfunds" className="text-decoration-none text-secondary">Mutual Funds</a>
            </span>
            <span>Sitemap</span>
            <span>Indian Indices</span>
            <span>Bug Bounty Program</span>
          </div>
        </div>
        <div className="contain4 col text-secondary">
          <span className='fw-bold text-dark'>Policy</span>
          <div className="mt-3 resources d-flex justify-content-start flex-column">
            <span>
              <a href="https://bluestock.in/terms-conditions/" className="text-decoration-none text-secondary">Terms & Conditions</a>
            </span>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
            <span>Disclaimer</span>
            <span>Trust & Security</span>
          </div>
        </div>
      </div>

      <div className="w-100 mt-5 row d-flex">
        <div className="social-handles col-lg-3 col-md-4">
          <div className="w-100">
            <span className="twitter mx-1"><a href="https://www.twitter.com" target="_blank"><FaXTwitter size={20}/></a></span>
            <span className="facebook mx-1"><a href="https://www.facebook.com" target="_blank"><FaFacebookF size={20}/></a></span>
            <span className="youtube mx-1"><a href="https://www.youtube.com" target="_blank"><FaYoutube size={20}/></a></span>
            <span className="linkedin mx-1"><a href="https://www.linkedin.com" target="_blank"><FaLinkedin size={20}/></a></span>
            <span className="instagram mx-1"><a href="https://www.instagram.com" target="_blank"><FaInstagram size={20}/></a></span>
            <span className="telegram mx-1"><a href="https://web.telegram.org" target="_blank"><FaTelegram size={20}/></a></span>
          </div>

          <div className="w-100 company-details">
            <div className="col-md-6 col-lg-6 col-4">
              <a href="/"><img src="https://bluestock.in/static/assets/logo/logo.webp" className="my-4 w-100" alt="BlueStock logo"/></a>
            </div>

            <span className="location">
              <span>
                <p>Bluestock Fintech <br/> Pune, Maharashtra</p>
              </span>

              <span>
                <p>MSME Registration No: <br/> UDYAM-MH-01-v0138001</p>
              </span>
            </span>

          </div>
        </div>

        <div className="disclaimer text-secondary col-lg-9 col-md-8">
          <p>
            Investment in securities markets are subject to market risks, read all the realted documents carefully before investing as prescribed by SERI. Issued in the interest of the investors.
          </p>
          <p>
            The users can write to <a href="mailto:hello@bluestock.in">hello@bluestock.in</a> for any app, website related queries. Also you can send IT/Tech related feedback to <a href="mailto:cto@bluestock.in">cto@bluestock.in</a>
          </p>

          <br/>
          <br/>

          <p>Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only. 
            <br />
            Before making any investment in the financial market, it is advisable to consult with your financial advisor. "Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors."</p>
        </div>
      </div>
      <hr/>
      <div className="row d-flex justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">Bluestock Fintech All Rights Reserved</div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">Made with ❤ in Pune, Maharashtra</div>
      </div>
    </footer>
  )
}

export default Footer