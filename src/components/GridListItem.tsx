import React from 'react'

const GridListItem = () => {
    return (
        <div className='grid-list-item'>
            <img className='grid-list-item__img' src='https://api.remanga.org/media/titles/how-the-demon-emperor-became-a-butler/high_cover.jpg' />
            <div className='grid-list-item__content'>
                <span className='grid-list-item__content-number'>6</span>
                <p className='grid-list-item__content-type'>Маньхуа</p>
                <span className='grid-list-item__content-name'>Как демон-император стал дворецким</span>
                <div className='grid-list-item__content-params'>
                    <div className='grid-list-item__content-params-star'>
                        <svg className='grid-list-item__content-params-star-icon' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11.9783L14.565 15.5L12.435 9.81304L18 6.36957H11.175L9 0.5L6.825 6.36957H0L5.565 9.81304L3.435 15.5L9 11.9783Z" fill="#F2C94C"/>
                        </svg>
                        <span className='grid-list-item__content-params-count'>9.4</span>
                    </div>
                    <div className='grid-list-item__content-params-love'>
                        <svg className='grid-list-item__content-params-love-icon' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15.5L7.695 14.421C3.06 10.6035 0 8.08583 0 4.99591C0 2.4782 2.178 0.5 4.95 0.5C6.516 0.5 8.019 1.16213 9 2.20845C9.981 1.16213 11.484 0.5 13.05 0.5C15.822 0.5 18 2.4782 18 4.99591C18 8.08583 14.94 10.6035 10.305 14.4292L9 15.5Z" fill="#EB5757"/>
                        </svg>
                        <span className='grid-list-item__content-params-count'>499.4K</span>
                    </div>
                    <div className='grid-list-item__content-params-watch'>
                        <svg className='grid-list-item__content-params-watch-icon' width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.5C6.54545 0.5 1.88727 3.61 0 8C1.88727 12.39 6.54545 15.5 12 15.5C17.4545 15.5 22.1127 12.39 24 8C22.1127 3.61 17.4545 0.5 12 0.5ZM12 13C8.98909 13 6.54545 10.76 6.54545 8C6.54545 5.24 8.98909 3 12 3C15.0109 3 17.4545 5.24 17.4545 8C17.4545 10.76 15.0109 13 12 13ZM12 5C10.1891 5 8.72727 6.34 8.72727 8C8.72727 9.66 10.1891 11 12 11C13.8109 11 15.2727 9.66 15.2727 8C15.2727 6.34 13.8109 5 12 5Z" fill="#E0E0E0"/>
                        </svg>
                        <span className='grid-list-item__content-params-count'>2.9M</span>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default GridListItem    