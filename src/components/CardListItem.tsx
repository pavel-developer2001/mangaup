import React from 'react'
import {Link} from 'react-router-dom'

const CardListItem = () => {
    return (
        <div className="slider-list-item">
            <Link to='/title'>
                <img className='slider-list-item__img' src='https://api.remanga.org/media/titles/how-the-demon-emperor-became-a-butler/high_cover.jpg' />
                <p className='slider-list-item__title'>Как демон-император стал дворецким</p>
            </Link>
            
        </div>
    )
}

export default CardListItem