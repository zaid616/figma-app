import React from 'react'
import IconPage from '../Icons/IconPage'
import MailIcon from '../Icons/MailIcone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faStamp } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className='text-white' style={{ backgroundColor: "#495057" }}>
        <div className="container">
            <div className="row pt-5 pb-2">
                <div className="col-12 col-md-3">
                <h4 className="pt-2"><IconPage/> NFT Marketplace</h4>
                <p>NTF Mrketplace UI created with Amina and Figma.</p>
                <p>Join Our Community</p>
                <p>
                  <a href="#" className='text-white me-2'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                <a href="#" className='text-white me-2'>
                  <FontAwesomeIcon icon={faMailBulk} />
                  </a>
                <a href="#" className='text-white me-2'>
                  <FontAwesomeIcon icon={faStamp} />
                  </a>
                <a href="#" className='text-white me-2'>
                  <FontAwesomeIcon icon={faInbox} />
                  </a>
                </p>
                </div>
                <div className="col-12 col-md-3">
                <h4 className="pt-2">Explore</h4>
                <p>Marketplace.</p>
                <p>Ranking</p>
                <p>Connect A Wallet</p>
                </div>
                <div className="col-12 col-md-6">
                            <h4>Join Our Weekly <br /> Digest</h4>
                            <p className='fw-bold mt-3'>Get Exclusive Promotions & Updates Straights To Your Inbox.</p>
                            <form class="">
                                <div class="border border-0 mb-2 d-flex">
                                    <input type="email" className="rounded-start w-50 py-2 ps-2" placeholder="Enter Your Email"/>
                                <button type="submit" className="btn btn-primary w-50 py-2"><MailIcon/>Subscribe</button>
                                </div>
                            </form>
                </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className='fw-bold text-center'>&copy; NTF Market. Use This Template Freely</p>
              </div>
            </div>
        </div>
    </footer>
  )
}
