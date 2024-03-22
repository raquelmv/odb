import React, { useState } from "react";
import Draggable from 'react-draggable';
import imgOne from "../img/00001.png";
import imgTwo from "../img/000001-03.png";
import imgThree from "../img/000001-05.png";
import imgFour from "../img/00002.png";
import imgFive from "../img/0003.png";
import imgSix from "../img/00006.png";
import logoInmature from "../img/PARED_ORION.png";

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
    <div className="inmatureTitle">        <img src={logoInmature}  className="logo" /></div>
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
            return imgTwo;
        case 2:
            return imgThree;
        case 3:
            return imgFour;
        case 4:
            return imgFive;
        case 5:
            return imgSix;
        default:
            return "";
    }
};

export default Inmature;
