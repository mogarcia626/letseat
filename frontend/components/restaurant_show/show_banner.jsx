import React from 'react';
import { selectBackground } from '../../util/general_utils';

function ShowBanner( {cuisine} ) {
    
    return (
        <div className={selectBackground(cuisine)}>
        </div>
    )
}

export default ShowBanner;