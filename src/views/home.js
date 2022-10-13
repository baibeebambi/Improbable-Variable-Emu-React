import React from 'react'

import { Helmet } from 'react-helmet'

import Instagram from '../components/instagram'
import VisitStore from '../components/visit-store'
import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Morris' Designs - Home</title>
        <meta property="og:title" content="Morris' Designs - Home" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a2d50ac4-8faa-4df2-a94a-5d16b0bd899d/d8777ad0-c7c8-44c9-b181-4f1e4768353a?org_if_sml=1"
        />
      </Helmet>
      <div className="home-container01">
        <h1 className="home-text">
          <span className="home-text01">HIGH QUALITY</span>
          <span className="home-text02"> PRODUCED PRODUCTS</span>
          <br></br>
        </h1>
        <h1 className="home-heading">MORRIS&apos; DESIGNS</h1>
        <h1 className="home-text04">
          <span className="home-text05">REASONABLE</span>
          <span className="home-text06">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            AND
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text08">AFFORDABLE</span>
          <span className="home-text09">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>PRICING</span>
          <br></br>
        </h1>
        <div className="home-container02">
          <a href="#about-us" className="home-read-more button">
            READ MORE
          </a>
          <a
            href="https://discord.gg/mTXAC6gmvY"
            target="_blank"
            rel="noreferrer noopener"
            className="home-join-our-discord button"
          >
            JOIN OUR DISCORD
          </a>
        </div>
        <div className="home-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<body>\r\n\r\n    <div class="glowing">\r\n\r\n        <span style="--i:1;"></span>\r\n\r\n        <span style="--i:2;"></span>\r\n\r\n        <span style="--i:3;"></span>\r\n\r\n    </div>\r\n\r\n    <div class="glowing">\r\n\r\n        <span style="--i:1;"></span>\r\n\r\n        <span style="--i:2;"></span>\r\n\r\n        <span style="--i:3;"></span>\r\n\r\n    </div>\r\n\r\n    <div class="glowing">\r\n\r\n        <span style="--i:1;"></span>\r\n\r\n        <span style="--i:2;"></span>\r\n\r\n        <span style="--i:3;"></span>\r\n\r\n    </div>\r\n\r\n    <div class="glowing">\r\n\r\n        <span style="--i:1;"></span>\r\n\r\n        <span style="--i:2;"></span>\r\n\r\n        <span style="--i:3;"></span>\r\n\r\n    </div>\r\n\r\n</body>\r\n<style>\r\n* {\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n\r\nbody {\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nwidth: 100%;\r\nmin-height: 100vh;\r\noverflow: hidden;\r\n}\r\n\r\n.glowing {\r\nposition: relative;\r\nmin-width: 700px;\r\nheight: 550px;\r\nmargin: -150px;\r\ntransform-origin: right;\r\nanimation: colorChange 5s linear infinite;\r\n}\r\n\r\n.glowing:nth-child(even) {\r\ntransform-origin: left;\r\n}\r\n\r\n@keyframes colorChange {\r\n0% {\r\nfilter: hue-rotate(0deg);\r\ntransform: rotate(0deg);\r\n}\r\n100% {\r\nfilter: hue-rotate(360deg);\r\ntransform: rotate(360deg);\r\n}\r\n}\r\n\r\n.glowing span {\r\nposition: absolute;\r\ntop: calc(80px * var(--i));\r\nleft: calc(80px * var(--i));\r\nbottom: calc(80px * var(--i));\r\nright: calc(80px * var(--i));\r\n}\r\n\r\n.glowing span::before {\r\ncontent: "";\r\nposition: absolute;\r\ntop: 100%;\r\nleft: -8px;\r\nwidth: 15px;\r\nheight: 15px;\r\nbackground: #f00;\r\nborder-radius: 50%;\r\n}\r\n\r\n.glowing span:nth-child(3n + 1)::before {\r\nbackground: rgba(134,255,0,1);\r\nbox-shadow: 0 0 20px rgba(134,255,0,1),\r\n0 0 40px rgba(134,255,0,1),\r\n0 0 60px rgba(134,255,0,1),\r\n0 0 80px rgba(134,255,0,1),\r\n0 0 0 8px rgba(134,255,0,.1);\r\n}\r\n\r\n.glowing span:nth-child(3n + 2)::before {\r\nbackground: rgba(255,214,0,1);\r\nbox-shadow: 0 0 20px rgba(255,214,0,1),\r\n0 0 40px rgba(255,214,0,1),\r\n0 0 60px rgba(255,214,0,1),\r\n0 0 80px rgba(255,214,0,1),\r\n0 0 0 8px rgba(255,214,0,.1);\r\n}\r\n\r\n.glowing span:nth-child(3n + 3)::before {\r\nbackground: rgba(0,226,255,1);\r\nbox-shadow: 0 0 20px rgba(0,226,255,1),\r\n0 0 40px rgba(0,226,255,1),\r\n0 0 60px rgba(0,226,255,1),\r\n0 0 80px rgba(0,226,255,1),\r\n0 0 0 8px rgba(0,226,255,.1);\r\n}\r\n\r\n.glowing span:nth-child(3n + 1) {\r\nanimation: animate 10s alternate infinite;\r\n}\r\n\r\n.glowing span:nth-child(3n + 2) {\r\nanimation: animate-reverse 3s alternate infinite;\r\n}\r\n\r\n.glowing span:nth-child(3n + 3) {\r\nanimation: animate 8s alternate infinite;\r\n}\r\n\r\n@keyframes animate {\r\n0% {\r\ntransform: rotate(180deg);\r\n}\r\n50% {\r\ntransform: rotate(0deg);\r\n}\r\n100% {\r\ntransform: rotate(360deg);\r\n}\r\n}\r\n\r\n@keyframes animate-reverse {\r\n0% {\r\ntransform: rotate(360deg);\r\n}\r\n\r\n50% {\r\ntransform: rotate(180deg);\r\n}\r\n\r\n100% {\r\ntransform: rotate(0deg);\r\n}\r\n}\r\n</style>',
            }}
          />
        </div>
      </div>
      <div id="about-us" className="home-container03">
        <div className="home-container04 content">
          <div className="home-container05">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
            </svg>
            <h1 className="home-text12">High Quality</h1>
            <span className="home-text13">
              With the reassurance from our positive reviews at Morris&apos;
              Designs, we ensure to satisfaction and High Quality products are
              produced to our Customers.
            </span>
          </div>
          <div className="home-container06">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
            </svg>
            <h1 className="home-text14">Fast Delivery</h1>
            <span className="home-text15">
              We are eligible to provide Standardized Commissioned Game Server
              Logo&apos;s and more in under just 3 Business Days!
            </span>
          </div>
          <div className="home-container07">
            <div className="home-container08">
              <svg
                viewBox="0 0 1073.7371428571428 1024"
                className="home-icon04"
              >
                <path d="M1073.714 544c0 13.714-8.571 27.429-17.714 37.714l-192 226.286c-33.143 38.857-100.571 69.714-150.857 69.714h-621.714c-20.571 0-49.714-6.286-49.714-32 0-13.714 8.571-27.429 17.714-37.714l192-226.286c33.143-38.857 100.571-69.714 150.857-69.714h621.714c20.571 0 49.714 6.286 49.714 32zM877.714 347.429v91.429h-475.429c-71.429 0-160 40.571-206.286 95.429l-195.429 229.714c0-4.571-0.571-9.714-0.571-14.286v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h310.857c70.286 0 128 57.714 128 128z"></path>
              </svg>
            </div>
            <h1 className="home-text16">Self Organized</h1>
            <span className="home-text17">
              Morris&apos; Designs has been a self organized Business for over a
              year, this is done to keep the flow of proper and expected Quality
              to our Customers.
            </span>
          </div>
        </div>
        <div className="home-container09 content">
          <div className="home-container10">
            <div className="home-container11">
              <span className="home-text18">
                <span className="home-text19">1</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
            </div>
            <span className="home-text21">
              <span className="home-text22">
                Join The Morris&apos; Designs Discord
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <span className="home-text24">
                <span className="home-text25">2</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
            </div>
            <span className="home-text27">
              <span className="home-text28">
                Open a Support Ticket in Our Discord
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <span className="home-text30">
                <span className="home-text31">3</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
            </div>
            <span className="home-text33">
              <span className="home-text34">Provide Requested Information</span>
              <br></br>
            </span>
          </div>
          <div className="home-container16">
            <div className="home-container17">
              <span className="home-text36">
                <span className="home-text37">4</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
            </div>
            <span className="home-text39">
              <span className="home-text40">
                Payment Details will be forwarded to you
              </span>
              <br></br>
            </span>
          </div>
          <h1 className="home-text42">
            <span className="home-text43">
              HIRE US TO PROVIDE YOUR EXPECTATIONS
            </span>
            <br></br>
          </h1>
        </div>
        <div className="home-about-us">
          <h1 className="home-text45">ABOUT US</h1>
          <span className="home-text46">
            <span className="home-text47">
              We offer High Quality Graphic Designs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text48">
              with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text49">satisfaction</span>
            <span className="home-text50">. </span>
            <span className="home-text51">
              Whether you are looking for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text52">High Quality</span>
            <span className="home-text53">
              {' '}
              GFX Designs or
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text54">
              Simple Quality
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text55">
              GFX Designs, we are the perfect solution for what you&apos;re
              looking for. Our Development Team will not only help you achieve
              your overall goals, but will also provide you with the confidence
              you need in knowing that you are with a reliable 
            </span>
            <span className="home-text56">
              Graphic Designing platform. With providing Customer Service we
              ensure that our Customers are met with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text57">satisfaction</span>
            <span className="home-text58">. </span>
            <br className="home-text59"></br>
            <br className="home-text60"></br>
            <span className="home-text61">
              We
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text62">
              encourage
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text63">
              our Members and Customers to not only help us become a bigger
              platform, but to showoff the amazing work that
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text64">Morris&apos; Designs</span>
            <span className="home-text65">
              {' '}
              and the Development Team create.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
          <div className="home-container18">
            <Instagram></Instagram>
            <VisitStore></VisitStore>
          </div>
          <img
            alt="image"
            src="/playground_assets/3d%20logo-300h.png"
            className="home-image"
          />
        </div>
        <div className="home-container19">
          <div className="home-container20">
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<script>\r\n      let valueDisplays = document.querySelectorAll(".num");\r\n      let interval = 4500;\r\n\r\n      valueDisplays.forEach((valueDisplay) => {\r\n      let startValue = 0;\r\n      let endValue = parseInt(valueDisplay.getAttribute("data-val"));\r\n      let duration = Math.floor(interval / endValue);\r\n      let counter = setInterval(function () {\r\n          startValue += 1;\r\n          valueDisplay.textContent = startValue;\r\n      if (startValue == endValue) {\r\n          clearInterval(counter);\r\n      }\r\n      }, duration);\r\n  });\r\n</script>\r\n\r\n<body>\r\n  <span class="num" data-val="600" style="font-family:russo one; color:white; font-size:64px;">000</span>\r\n</body>\r\n',
                }}
              />
            </div>
            <span className="home-text68">Discord Members</span>
          </div>
          <div className="home-container21">
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<script>\r\n      let valueDisplays = document.querySelectorAll(".num");\r\n      let interval = 4500;\r\n\r\n      valueDisplays.forEach((valueDisplay) => {\r\n      let startValue = 0;\r\n      let endValue = parseInt(valueDisplay.getAttribute("data-val"));\r\n      let duration = Math.floor(interval / endValue);\r\n      let counter = setInterval(function () {\r\n          startValue += 1;\r\n          valueDisplay.textContent = startValue;\r\n      if (startValue == endValue) {\r\n          clearInterval(counter);\r\n      }\r\n      }, duration);\r\n  });\r\n</script>\r\n\r\n<body>\r\n  <span class="num" data-val="3" style="font-family:russo one; color:white; font-size:64px;">0</span>\r\n</body>\r\n',
                }}
              />
            </div>
            <span className="home-text69">Years of Experience</span>
          </div>
          <div className="home-container22">
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<script>\r\n      let valueDisplays = document.querySelectorAll(".num");\r\n      let interval = 4500;\r\n\r\n      valueDisplays.forEach((valueDisplay) => {\r\n      let startValue = 0;\r\n      let endValue = parseInt(valueDisplay.getAttribute("data-val"));\r\n      let duration = Math.floor(interval / endValue);\r\n      let counter = setInterval(function () {\r\n          startValue += 1;\r\n          valueDisplay.textContent = startValue;\r\n      if (startValue == endValue) {\r\n          clearInterval(counter);\r\n      }\r\n      }, duration);\r\n  });\r\n</script>\r\n\r\n<body>\r\n  <span class="num" data-val="50" style="font-family:russo one; color:white; font-size:64px;">000</span>\r\n</body>\r\n',
                }}
              />
            </div>
            <span className="home-text70">Verified Customers</span>
          </div>
        </div>
        <div className="home-container23 content"></div>
      </div>
      <div className="home-container24">
        <div className="home-container25">
          <header
            data-role="Header"
            className="home-header sticky animation-slide-in-down-2"
          >
            <img
              alt="logo"
              src="/playground_assets/logo-200h.png"
              className="home-image1"
            />
            <div className="home-nav">
              <NavigationLinks
                text="HOME"
                text1="FAQ"
                text2="SHOP"
                text3="ABOUT"
                text4="TEAM"
                rootClassName="rootClassName10"
              ></NavigationLinks>
            </div>
            <div className="home-btn-group">
              <a
                href="https://shop.morrisdesigns.art/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container26">
                  <button className="home-store button">
                    <span className="home-text71">STORE</span>
                  </button>
                </div>
              </a>
              <a
                href="https://discord.gg/mTXAC6gmvY"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container27">
                  <button className="home-our-discord button">
                    <span className="home-text72">OUR DISCORD</span>
                  </button>
                </div>
              </a>
            </div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-nav1">
                <div className="home-container28">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image2"
                  />
                  <div data-type="CloseMobileMenu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon16">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon18"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon20"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon22"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Home
