import React from 'react'
import './Mainpage.css'
import logo from './logo.jpg';


function Mainpage () {
    return (
        <div>
            <div className='back-photo'>
                <h6>We found for you...</h6>
                <div className='container'>
                    <ul className='nav-list'>
                        <li><a>efood</a></li>
                        <li><a>Account</a></li>
                    </ul>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className='main-content-flex'>
                        <div className='need-to-hide-it'>
                            <div className='flex-left-side shop-options'>
                                <h6>Shops</h6>
                                <ul className='left-nav'>
                                    <li> food and coffee</li>
                                    <li> efood market</li>
                                    <li> super market</li>
                                    <li> local shops</li>
                                </ul>
                            </div>
                            <div className='shop-options-2'>
                                <h6>options</h6>
                                <ul className='left-nav-2'>
                                    <div className='check-it-out'>
                                        <li>
                                            <input type="checkbox"></input>
                                            <label>something</label>
                                        </li>
                                    </div>
                                    <div className='check-it-out'>
                                        <li>
                                            <input type="checkbox"></input>
                                            <label>something</label>
                                        </li>
                                    </div>
                                    <div className='check-it-out'>
                                        <li>
                                            <input type="checkbox"></input>
                                            <label>something</label>
                                        </li>
                                    </div>
                                    <div className='check-it-out'>
                                        <li>
                                            <input type="checkbox"></input>
                                            <label>something</label>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <input type="search" placeholder=' Search something here' className='search'></input>
                            <div className='flex-logo-options'>
                                <div className='flex-logo-images'>
                                    <img src={logo}/>
                                    <img src={logo}/>
                                    <img src={logo}/>
                                    <img src={logo}/>
                                </div>
                            </div>
                            <div className='options-for-delivery'>
                                <div className='option-1'>
                                    <p>photo</p>
                                    <div>
                                        <p>Name</p>
                                        <p>Minimum time</p>
                                    </div>
                                    <p>Stars</p>
                                </div>
                                <div className='option-2'>
                                    <p>photo</p>
                                    <div>
                                        <p>Name</p>
                                        <p>Minimum time</p>
                                    </div>
                                    <p>Stars</p>
                                </div>
                                <div className='option-3'>
                                    <p>photo</p>
                                    <div>
                                        <p>Name</p>
                                        <p>Minimum time</p>
                                    </div>
                                    <p>Stars</p>
                                </div>
                                <div className='option-4'>
                                    <p>photo</p>
                                    <div>
                                        <p>Name</p>
                                        <p>Minimum time</p>
                                    </div>
                                    <p>Stars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Mainpage;