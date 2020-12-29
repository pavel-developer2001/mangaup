import React from 'react'
import {Link} from 'react-router-dom'

const ChapterSidebar = () => {
    return (
        <div className='chapter-sidebar'>
            <span className='chapter-sidebar__count'>1/9</span>
            <button className='chapter-sidebar__btn'>
                <svg className='chapter-sidebar__icon' width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.511963 16.5417H2.89361V17.1459H1.70278V18.3542H2.89361V18.9584H0.511963V20.1667H4.08443V15.3334H0.511963V16.5417ZM1.70278 5.66671H2.89361V0.833374H0.511963V2.04171H1.70278V5.66671ZM0.511963 9.29171H2.65544L0.511963 11.8292V12.9167H4.08443V11.7084H1.94095L4.08443 9.17088V8.08338H0.511963V9.29171ZM6.46607 2.04171V4.45838H23.1376V2.04171H6.46607ZM6.46607 18.9584H23.1376V16.5417H6.46607V18.9584ZM6.46607 11.7084H23.1376V9.29171H6.46607V11.7084Z" fill="#E0E0E0"/>
                </svg>
            </button>
            <button className='chapter-sidebar__btn'>
                <svg className='chapter-sidebar__icon' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6812 13.7187C20.725 13.3281 20.7542 12.9219 20.7542 12.5C20.7542 12.0781 20.725 11.6719 20.6666 11.2813L23.1324 9.21875C23.3513 9.03125 23.4096 8.6875 23.2783 8.42187L20.9438 4.09375C20.7979 3.8125 20.4915 3.71875 20.2289 3.8125L17.3254 5.0625C16.7126 4.5625 16.0707 4.15625 15.3557 3.84375L14.918 0.53125C14.8742 0.21875 14.6262 0 14.3344 0H9.66546C9.37365 0 9.14021 0.21875 9.09644 0.53125L8.65872 3.84375C7.94379 4.15625 7.28723 4.57812 6.68902 5.0625L3.78553 3.8125C3.5229 3.70313 3.2165 3.8125 3.0706 4.09375L0.736134 8.42187C0.590229 8.70312 0.648591 9.03125 0.882038 9.21875L3.34782 11.2813C3.28946 11.6719 3.24568 12.0938 3.24568 12.5C3.24568 12.9062 3.27486 13.3281 3.33323 13.7187L0.867447 15.7813C0.648591 15.9688 0.59023 16.3125 0.721543 16.5781L3.05601 20.9063C3.20191 21.1875 3.50831 21.2813 3.77094 21.1875L6.67443 19.9375C7.28723 20.4375 7.9292 20.8437 8.64413 21.1562L9.08185 24.4687C9.14021 24.7812 9.37365 25 9.66546 25H14.3344C14.6262 25 14.8742 24.7812 14.9034 24.4687L15.3411 21.1562C16.0561 20.8437 16.7126 20.4219 17.3108 19.9375L20.2143 21.1875C20.477 21.2969 20.7834 21.1875 20.9293 20.9063L23.2637 16.5781C23.4096 16.2969 23.3513 15.9688 23.1178 15.7813L20.6812 13.7187V13.7187ZM11.9999 17.1875C9.59251 17.1875 7.62281 15.0781 7.62281 12.5C7.62281 9.92188 9.59251 7.8125 11.9999 7.8125C14.4073 7.8125 16.377 9.92188 16.377 12.5C16.377 15.0781 14.4073 17.1875 11.9999 17.1875Z" fill="#E0E0E0"/>
                </svg>
            </button>
            <button className='chapter-sidebar__btn'>
                <svg className='chapter-sidebar__icon' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 0C5.73593 0 0.6521 5.6 0.6521 12.5C0.6521 19.4 5.73593 25 11.9999 25C18.2639 25 23.3478 19.4 23.3478 12.5C23.3478 5.6 18.2639 0 11.9999 0ZM13.1347 18.75H10.8651V16.25H13.1347V18.75ZM13.1347 13.75H10.8651V6.25H13.1347V13.75Z" fill="#E0E0E0"/>
                </svg>
            </button>
            
            
            

        </div>
    )
}
const ChapterPage = () => {
    return (
        <div className='chapter-page'>
            <ChapterSidebar />
            <div className='chapter-page__content'>
                <img className='chapter-page__content-img' src='https://img.remanga.org/images/how-the-demon-emperor-became-a-butler/62c08327df2740bbcdb044f740361cd5/9c5937deaf672af4786991126dc95960.jpeg' />
                <div className='chapter-page__content-end'>
                    <span className='chapter-page__content-end-title'>-- Конец главы --</span>
                    <p className='chapter-page__content-end-speak'>Понравилась глава? Скажите спасибо переводчику!</p>
                    <button className='chapter-page__content-end-btn'>
                        Спасибо
                        <svg className='chapter-page__content-end-btn-icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 19.6997L8.55 18.3106C3.4 13.3963 0 10.1551 0 6.17732C0 2.93615 2.42 0.389526 5.5 0.389526C7.24 0.389526 8.91 1.24191 10 2.58889C11.09 1.24191 12.76 0.389526 14.5 0.389526C17.58 0.389526 20 2.93615 20 6.17732C20 10.1551 16.6 13.3963 11.45 18.3212L10 19.6997Z" fill="#EB5757"/>
                        </svg>
                    </button>
                    <div className='chapter-page__content-end-foot'>
                        <span className='chapter-page__content-end-foot-thank'>Сказали спасибо:</span>
                        <span className='chapter-page__content-end-foot-count'>4758</span>
                    </div>
                </div>
                <div className='chapter-page__content-translate'>
                    <span className='chapter-page__content-translate-title'>Для вас старались:</span>
                    <div className='chapter-page__content-translate-cont'>
                        <img className='chapter-page__content-translate-cont-img' src='https://api.remanga.org/media/publishers/google-translate/high_cover.jpg' />
                        <span className='chapter-page__content-translate-cont-text'>Google Translate</span>
                    </div>
                </div>
                <div className='chapter-page__content-navigator'>
                    <button className="chapter-page__content-navigator-btn">
                        <svg className="chapter-page__content-navigator-btn-iconLeft" width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.9975L9.7166 0L0 8.5L9.7166 17L12 15.0025L4.583 8.5L12 1.9975Z" fill="#E0E0E0"/>
                        </svg>
                        Назад
                    </button>
                    <Link to='/title'><span className="chapter-page__content-navigator-title">К тайтлу</span></Link>
                    
                    <button className="chapter-page__content-navigator-btn">
                        Вперёд
                        <svg className="chapter-page__content-navigator-btn-iconRight" width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.2834 0L0 1.9975L7.417 8.5L0 15.0025L2.2834 17L12 8.5L2.2834 0Z" fill="#E0E0E0"/>
                        </svg>

                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default ChapterPage