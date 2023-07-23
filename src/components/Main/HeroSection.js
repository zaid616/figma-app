import React from 'react'
import Dog from '../../assets/images/image-placeholder-1@2x.png'
import Cat from '../../assets/images/image-placeholder-10@2x.png'
import Dancer from '../../assets/images/image-placeholder-12@2x.png'
import Anime from '../../assets/images/image-placeholder-20@2x.png'

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <div className="row text-light mt-5 pt-5 mb-5">
                    <div className="col-12">
                        <h1>Trending Collections</h1>
                        <p>Checkout Our Weekly Updated Trending Collections.</p>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={Dog} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Cat} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Dancer} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold text-white rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>DSGN Animals</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> Mr Fox</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={Cat} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Dog} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Dancer} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold text-white rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>Magic Cat</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> Shroome</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={Dancer} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Cat} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Dog} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold text-white rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>Dancing Dancer</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> BeKindRobot2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
