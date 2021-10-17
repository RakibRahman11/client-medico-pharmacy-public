import React from 'react';

const Equipment = (props) => {
    const { title, description, price, img } = props.equipment;
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
            </div>
        </div>
    );
};

export default Equipment;