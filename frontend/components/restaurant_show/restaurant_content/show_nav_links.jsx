import React from 'react';

class ShowNavLinks extends React.Component {
    constructor(props) {
        super(props)
        this.executeScroll = this.executeScroll.bind(this)
    }

    executeScroll(id) {
        document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
        console.log(id)
    }

    render() {
        return (
           <div id='nav-link-container'> 
                <p className='show-page-scroll-link'
                    onClick={(e)=> {e.preventDefault(); this.executeScroll('Overview');}}
                >Overview</p> 

                <p className='show-page-scroll-link'
                    onClick={(e)=> {e.preventDefault(); this.executeScroll('Photos');}}
                >Photos</p> 
                
                <p className='show-page-scroll-link'
                    onClick={(e)=> {e.preventDefault(); this.executeScroll('Reviews');}}
                >Reviews</p> 
           </div>
        )
    }

}

export default ShowNavLinks;

