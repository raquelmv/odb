import React, { useState } from "react";
import Draggable from 'react-draggable';
import imgOne from "../img/immpke.jpg";

import logoInmature from "../img/logo_02_immsp.png";

const Inmature = () => {
    const [positions, setPositions] = useState([
        { x: 100, y: 0 }, // Initial position for image one
        { x: 0, y: 0 }, // Initial position for image two
        { x: 300, y: 0 }, // Initial position for image three
        { x: 200, y: 0 }, // Initial position for image four
        { x: 0, y: 0 }, // Initial position for image five
        { x: 0, y: 0 }, // Initial position for image six
    ]);

    const onStop = (index, e, ui) => {
        const updatedPositions = [...positions];
        updatedPositions[index] = { x: ui.lastX, y: ui.lastY };
        setPositions(updatedPositions);
    };

    return (
        <div className="is-wrapper">

    <div className="inmatureTitle">
        <img src={logoInmature}  className="logo" />
    </div>

            {positions.map((position, index) => (
                <Draggable key={index} onStop={(e, ui) => onStop(index, e, ui)} position={position}>
                    <img src={getImageSource(index)} alt={`logo${index}`} className="logo" />
                </Draggable>
            ))}


        </div>
    );
};

const getImageSource = (index) => {
    switch (index) {
        case 0:
            return imgOne;
        case 1:
            return imgOne;
        case 2:
            return imgOne;
        case 3:
            return imgOne;
        case 4:
            return imgOne;
        case 5:
            return imgOne;
        default:
            return "";
    }
};

export default Inmature;
