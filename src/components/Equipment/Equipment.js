import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = (props) => {
    const { id, title, description, price, img } = props.equipment;
    // console.log(props);
    return (
        <div className="p-3 mb-5 rounded shadow bg-body card checkout-details col-lg-4">
            <div>
                <img src={img} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p>Price: ${price}</p>
                <Link to={`/details/${id}`}><button type="button" className="btn btn-outline-dark">Details <i class="fas fa-angle-right"></i></button></Link>
            </div>
        </div>
    );
};

export default Equipment;