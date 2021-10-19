import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleDetails = () => {
    const { id } = useParams()
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('/equipment.json')
            .then(response => response.json())
            .then(data => setEquipments(data))
    })
    const find = equipments?.find(equipment => equipment.id === +id)
    return (
        <div>
            <div className="p-3 mx-auto my-5 rounded shadow bg-body card checkout-details col-lg-4">
                <div>
                    <img src={find?.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{find?.title}</h5>
                    <p className="card-text">{find?.description}</p>
                    <p>Price: ${find?.price}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;