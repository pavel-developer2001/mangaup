import React from 'react'
import TitlePageContent from '../components/TitlePageContent'

const TitlePage = () => {
    return (
        <div className='title-page'>
            <img className='title-page__img' src='https://api.remanga.org/media/titles/how-the-demon-emperor-became-a-butler/high_cover.jpg' />
            <div className='title-page__head'>
                <span className='title-page__head-name'>Как демон-император стал дворецким</span>
                <span className='title-page__head-foreign'>How the Demon Emperor became a Butler / Mô huang daguanjia / Magic Emperor / Devil Housekeeper / 魔皇大管家</span>
                <div className='title-page__head-infopop'>
                    <div className='title-page__head-infopop-rating'>
                        <svg className='title-page__head-infopop-rating-icon' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#F2C94C"/>
                        </svg>
                        <span className='title-page__head-infopop-text'>9.4 (голосов: 1989)</span>
                    </div>
                    <div className='title-page__head-infopop-rating'>
                        <svg className='title-page__head-infopop-likes-icon' width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15L8.55 13.921C3.4 10.1035 0 7.58583 0 4.49591C0 1.9782 2.42 0 5.5 0C7.24 0 8.91 0.662125 10 1.70845C11.09 0.662125 12.76 0 14.5 0C17.58 0 20 1.9782 20 4.49591C20 7.58583 16.6 10.1035 11.45 13.9292L10 15Z" fill="#EB5757"/>
                        </svg>
                        <span className='title-page__head-infopop-text'>485.2K</span>
                    </div>
                    <div className='title-page__head-infopop-rating'>
                        <svg className='title-page__head-infopop-watch-icon' width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="#E0E0E0"/>
                        </svg>
                        <span className='title-page__head-infopop-text'>2.9M</span>
                    </div>
                    <div className='title-page__head-infopop-rating'>
                        <svg className='title-page__head-infopop-bookmark-icon' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 17L18 18V2C18 0.9 17.1 0 16 0H5.99C4.89 0 4 0.9 4 2H14C15.1 2 16 2.9 16 4V17ZM12 4H2C0.9 4 0 4.9 0 6V22L7 19L14 22V6C14 4.9 13.1 4 12 4Z" fill="#E0E0E0"/>
                        </svg>
                        <span className='title-page__head-infopop-text'>21.6K</span>
                    </div>
                    <span className='title-page__head-infopop-rating'>Маньхуа</span>
                    <span className='title-page__head-infopop-rating'>2019</span>
                </div>
                <TitlePageContent />
            </div>
        </div>
    )
}
export default TitlePage