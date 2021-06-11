import React from 'react';

class ShowBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    selectBackground() {
        switch (this.props.cuisine) {
            case 'Thai':
                return 'banner-thai'
            case 'Chinese':
                return 'banner-chinese'
            case 'Japanese':
                return 'banner-japanese'
            case 'Sea Food & Steakhouses':
                let choice = ['steak', 'sea']
                return `banner-${choice[Math.floor(Math.random() * 2)]}`
            case 'Latin American Cuisine':
                return 'banner-latin'
            default:
                return 'banner-steak';
        };
    };

    render() {
        return (
            <div className={this.selectBackground()}>
                <p>.</p>
            </div>
        )
    }
}

export default ShowBanner;