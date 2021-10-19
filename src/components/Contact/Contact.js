import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='mt-5 contact'>
            <h1>Get connected with Medico Pharmacy</h1>
            <a href='https://goo.gl/maps/e4t3QPdYKarLFZ1v7'><i className="fas fa-map-marker-alt"></i> Meher Tower, 164 Sonargaon Road, Dhaka 1205</a>
            <h4>Official Page: <a href='https://www.facebook.com/silswa'>Facebook</a> <a href='https://www.linkedin.com/company/silswa/'>LinkedIn</a></h4>

            <h4><i className="fas fa-phone-alt"></i> Helpline: 09639-189159</h4>
            <h4><i className="far fa-envelope"></i> Official: medico2017@gmail.com</h4>
        </div>
    );
};

export default Contact;