import React from 'react'
import IconPage from '../Icons/IconPage'
import PeopleIcon from '../Icons/PeopleIcon'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <h1 className="navbar-brand pt-2"><IconPage/> NFT Marketplace</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Marketplace</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Ranking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Connect a Wallet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold bg-primary rounded-pill px-4" aria-current="page" href="#"><PeopleIcon/> Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
