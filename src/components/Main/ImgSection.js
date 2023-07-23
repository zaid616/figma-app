import React from 'react'
import Music from '../../assets/images/attachment_56303289.png'
import Reading from '../../assets/images/photo@2x.png'
import MailIcon from '../Icons/MailIcone'

export default function ImgSection() {
    return (
        <div>
            <div className="container">
                <div className="row text-white mb-5">
                    <div className="col-12 mt-2 col-md-4 text-center" >
                        <div className="container rounded py-3" style={{ backgroundColor: "#6c757d" }}>
                            <img src={Music} alt="" className='img-fluid rounded-circle' />
                            <p className='text-center fw-bold h5 mt-3'>Music Collection</p>
                            <p>Set Up Your Music Playlist.So, You Can Enjoy Any Type Of Music At Any Time You Want.</p>
                        </div>
                    </div>
                    <div className="col-12 mt-2 col-md-4 text-center" >
                        <div className="container rounded py-3" style={{ backgroundColor: "#6c757d" }}>
                            <img src={Music} alt="" className='img-fluid rounded-circle' />
                            <p className='text-center fw-bold h5 mt-3'>Music Collection</p>
                            <p>Set Up Your Music Playlist.So, You Can Enjoy Any Type Of Music At Any Time You Want.</p>
                        </div>
                    </div>
                    <div className="col-12 mt-2 col-md-4 text-center" >
                        <div className="container rounded py-3" style={{ backgroundColor: "#6c757d" }}>
                            <img src={Music} alt="" className='img-fluid rounded-circle' />
                            <p className='text-center fw-bold h5 mt-3'>Music Collection</p>
                            <p>Set Up Your Music Playlist.So, You Can Enjoy Any Type Of Music At Any Time You Want.</p>
                        </div>
                    </div>
                </div>
                <div className="row rounded text-white mb-5" style={{ backgroundColor: "#495057" }}>
                    <div className="col-12 col-lg-6 py-5">
                        <div className="container">
                            <img src={Reading} alt="" className='img-fluid rounded' />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="container mt-5 pt-5">
                            <h1>Join Our Weekly <br /> Digest</h1>
                            <p className='fw-bold mt-3'>Get Exclusive Promotions & Updates Straights To Your Inbox.</p>
                            <form class="">
                                <div class="border border-0 mb-2 d-flex">
                                    <input type="email" className="rounded-start w-50 py-2 ps-2" placeholder="Enter Your Email"/>
                                <button type="submit" className="btn btn-primary w-50 py-2"><MailIcon/>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
