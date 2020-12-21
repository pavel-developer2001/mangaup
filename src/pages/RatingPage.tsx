import React from 'react'
import GridList from '../components/GridList'

const RatingPage = () => {
    return (
        <div className='rating-page'>
            <h3 className='rating-page__title title-component'>Рейтинг популярности</h3>
            <GridList />
        </div>
    )
}

export default RatingPage