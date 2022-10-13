import React from 'react'

import { Helmet } from 'react-helmet'

import Container3 from '../components/container3'
import Instagram from '../components/instagram'
import VisitStore from '../components/visit-store'
import NavigationLinks from '../components/navigation-links'
import Store from '../components/store'
import OurDiscord from '../components/our-discord'
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
      <div className="home-container1">
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
        <div className="home-container2">
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
      </div>
      <div id="about-us" className="home-container3">
        <div className="home-container4 content">
          <Container3></Container3>
          <Container3></Container3>
          <Container3></Container3>
        </div>
        <div className="home-about-us">
          <h1 className="home-text12">ABOUT US</h1>
          <span className="home-text13">
            <span className="home-text14">
              We offer High Quality Graphic Designs for as low as
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text15">$15.00 USD</span>
            <span className="home-text16">
              {' '}
              with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text17">satisfaction</span>
            <span className="home-text18">. </span>
            <span className="home-text19">
              Whether you are looking for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text20">High Quality</span>
            <span className="home-text21">
              {' '}
              GFX Designs or
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text22">
              Simple Quality
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text23">
              GFX Designs, we are the perfect solution for what you&apos;re
              looking for. Our Development Team will not only help you achieve
              your overall goals, but will also provide you with the confidence
              you need in knowing that you are with a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text24">reliable</span>
            <span className="home-text25">
              {' '}
              graphic designing platform. With providing Customer Service we
              ensure that our Customers are met with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text26">satisfaction</span>
            <span className="home-text27">. </span>
            <br className="home-text28"></br>
            <br className="home-text29"></br>
            <span className="home-text30">
              We
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text31">
              encourage
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text32">
              our Members and Customers to not only help us become a bigger
              platform, but to showoff the amazing work that
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text33">Morris&apos; Designs</span>
            <span className="home-text34">
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
          <div className="home-container5">
            <Instagram></Instagram>
            <VisitStore></VisitStore>
          </div>
        </div>
        <div className="home-container6">
          <img
            alt="image"
            src="/playground_assets/3d logo.png"
            className="home-image"
          />
        </div>
      </div>
      <header
        data-role="Header"
        className="home-header sticky animation-slide-in-down-2"
      >
        <img
          alt="logo"
          src="/playground_assets/logo.png"
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
          <Store></Store>
          <OurDiscord></OurDiscord>
        </div>
        <div data-type="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container7">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image2"
              />
              <div data-type="CloseMobileMenu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
