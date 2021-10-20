import React from 'react';
import banner from '../../Images/banner.jpg'
import Equipments from '../Equipments/Equipments';
import chairmen from '../../Images/chairmen.jpg';
import ambulance from '../../Images/ambulance.jpg';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="mt-5 text-black border-0 card">
                <img src={banner} className="mx-auto card-img w-75" alt="..." width="100" height="500" />
                <div className="p-5 mx-auto text card-img-overlay text-start w-75">
                    <h2 className="card-title">Medico Pharmacy</h2>
                    <p className="w-25 card-text ">Medicine can be defined as anything that addresses a health issue, be it of the body, mind or spirit of a human being and helps them get better by treating the illness.</p>
                    <button type="button" className="btn btn-outline-dark">See more <i className="fas fa-angle-double-right"></i></button>
                </div>
            </div>
            <Equipments></Equipments>
            <h1 className='my-5'>Governing Body</h1>
            <div className="mx-5 mb-3 card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={chairmen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h2 className="card-title font-monospace">PROF. DR. CHOWDHURY MOHAMMAD ALI</h2>
                            <h5 className="card-title font-monospace">MBBS, DDV (DU)</h5>
                            <p className="card-text">Health is the biggest wealth for a human being in his/her entire lifetime. One can survive without excess money but can’t survive without good health. Health is something that we can’t buy with money but we can take care of it and we can cure it when needed with the help of the money. If a person is not having good health, he will not be able to enjoy his/her life to the fullest. Money doesn’t make a person rich and happy but good health does. Moreover, a person can’t feel complete and happy without good health.</p>
                            <p className="card-text">Finally, we all are aware that our health is the most important wealth that we have. We know that we can earn money if once we lose it, but we can’t get back our good health easily if we lose it due to carelessness. Health is the only wealth we are born with and we even die with our health. So make a healthy lifestyle a priority.</p>
                            <p className="card-text">More than 27 years of clinical experience in the field of Dermatology Venereology and Sexual Medicine
                                Obtained MBBS from Dhaka University in 1982
                                Achieved DDV from IPGMR, Dhaka University in 1993
                                Professor Chowdhury has 22 years of teaching experience in different medical colleges as registrar, Assistant Professor, Associate Professor and Professor. 8 years teaching experience at Dhaka Medical College for Undergraduate and Post Graduate students</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="emg-card mt-5">
                <img src={ambulance} class="emg-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-text">EMERGENCY?</h3>
                    <h6 class="card-text"><i class="fas fa-briefcase-medical"></i> CALL AMBULANCE</h6>
                    <p class="card-text">10666 or +880 1914 001234</p>
                </div>
            </div>
        </div>
    );
};

export default Home;