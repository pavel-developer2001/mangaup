import React from 'react'
import SliderList from '../components/SliderList'

const PersonPage = () => {
    return (
        <div className='person-page'>
            <div className='person-page__head'>
                <div className='person-page__head-avatar'>
                    <svg className='person-page__head-avatar-icon' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 5V7.99C16 7.99 14.01 8 14 7.99V5H11C11 5 11.01 3.01 11 3H14V0H16V3H19V5H16ZM13 9V6H10V3H2C0.9 3 0 3.9 0 5V17C0 18.1 0.9 19 2 19H14C15.1 19 16 18.1 16 17V9H13ZM2 17L5 13L7 16L10 12L14 17H2Z" fill="black"/>
                    </svg>
                    <img className='person-page__head-avatar-img' src='https://freemangareads.com/uploads/m/magic-emperor/chapters/78/03.jpg'/>
                </div>
                <div className='person-page__head-content'>
                    <span className='person-page__head-content-name'>Heodark</span>
                    <span className='person-page__head-content-status'>
                        Ранг:
                        <span className='person-page__head-content-rang'>Читатель</span>
                    </span>
                    <div className='person-page__head-content-count'>
                        <div className='person-page__head-content-count-progress'>
                            <span className='person-page__head-content-count-progress-chap'>Прочитано глав: </span>
                            <span className='person-page__head-content-count-progress-counts'>4572</span>
                        </div>
                        <div className='person-page__head-content-count-money'>
                            <span className='person-page__head-content-count-progress-chap'>Баланс: </span>
                            <span className='person-page__head-content-count-progress-counts person-page__head-content-count-money-counts'>0 руб</span>
                        </div>
                    </div>
                    <div className='person-page__head-content-btns'>
                        <button className='person-page__head-content-btn' type='button'>
                            Добавить мангу 
                            <svg className='person-page__head-content-btn-icon' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#2F80ED"/>
                            </svg>
                        </button>
                        <button className='person-page__head-content-btn second' type='button'>
                            Добавить команду переводчиков
                            <svg className='person-page__head-content-btn-icon' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#2F80ED"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='person-page__body'>
            <div className="tab-wrap person-page__body-wrap">
            <input type="radio" className="title-page-content__input" name="tabs" id="tab1" checked />
            <div className="tab-label-content" id="tab1-content">
            <label className="title-page-content__label person-page__body-label" htmlFor="tab1">Читаю 32</label>
                <div className="tab-content person-page__body-content">
                    <div className='title-page-content__container person-page__body-content-container'>
                        <SliderList />
                    </div>
                </div>
            </div>
            
            <input className="title-page-content__input" type="radio" name="tabs" id="tab2" />
            <div className="tab-label-content" id="tab2-content">
            <label className="title-page-content__label person-page__body-label" htmlFor="tab2">Прочитано</label>
                <div className="tab-content person-page__body-content">
                    <div className='title-page-content__container person-page__body-content-container'>
                         <SliderList />
                    </div>
                </div>
            </div>
            
            <input className="title-page-content__input" type="radio" name="tabs" id="tab3" />
            <div className="tab-label-content" id="tab3-content">
            <label className="title-page-content__label person-page__body-label" htmlFor="tab3">Брошено</label>
                <div className="tab-content person-page__body-content">
                    <div className='title-page-content__container person-page__body-content-container'>
                        <SliderList />
                    </div>
                </div>
            </div>
           
        
         </div> 
            </div>
        </div>
    )
}

export default PersonPage