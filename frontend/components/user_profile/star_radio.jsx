import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

function StarRadio({ val, rating, setRating, setStarSave, starSave }) {
    let star = <BsStar size={20} />
    if (rating >= val) star = <BsStarFill size={20} />

    return (
        <div className='star'>
            {star}
        </div>
    )
}

export default StarRadio

function starClick(str, newRating,i) {
        setStarSave(food_rating);
        setFoodRating(i);
    }

    function starEnter(str, newRating, i) {
        setStarSave(food_rating);
        setFoodRating(i);
    }

    function starLeave(str) {setFoodRating(starSave)}

    function setValue(str) {
        switch (str) {
            case 'food':
                console.log('food');
                break;
            case 'service':
                console.log('service');
                break;
            case 'ambience':
                console.log('ambience');
                break;
            case 'value':
                console.log('value');
                break;
            default: console.log('star');
                break;
        }
    }