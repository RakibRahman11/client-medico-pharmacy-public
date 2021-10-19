import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('/equipment.json')
            .then(response => response.json())
            .then(data => setEquipments(data))
    })
    return (
        <div className='mt-5'>
            <h1 className='mb-3'>Services</h1>
            <div className="container">
                <div className="row">
                    {
                        equipments.map(equipment => <Equipment key={equipment.id} equipment={equipment}></Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Equipments;