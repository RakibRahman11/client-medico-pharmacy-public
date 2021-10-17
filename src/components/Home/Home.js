import React from 'react';
import banner from '../../Images/banner.jpg'
import Equipments from '../Equipments/Equipments';
const Home = () => {
    return (
        <div>
            <div className="mt-5 text-black border-0 card">
                <img src={banner} className="mx-auto card-img w-75" alt="..." width="100" height="500"/>
                <div className="p-5 mx-auto card-img-overlay text-start w-75">
                    <h2 className="card-title">Medico Pharmacy</h2>
                    <p className="w-25 card-text">Medicine can be defined as anything that addresses a health issue, be it of the body, mind or spirit of a human being and helps them get better by treating the illness. There are many kinds of health and hence many categories of medicine.</p>
                    <button type="button" className="btn btn-outline-dark">See more <i className="fas fa-angle-double-right"></i></button>
                </div>
            </div>
            <Equipments></Equipments>
        </div>
    );
};

export default Home;