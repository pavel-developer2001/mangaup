import React from 'react'

const UpdateListItem = () => {
    return (
        <div className='update-list-item'>
            <img className='update-list-item__img' src='https://api.remanga.org/media/titles/the-descent-of-the-demonic-master/ada5defe7f7b8b93de6a769f960ee1e9.jpg' />
            <div className='update-list-item__content'>
                <div className='update-list-item__content-head'>
                    <span className='update-list-item__content-head-title'>Нисхождение демонического мастера</span>
                    <span className='update-list-item__content-head-date'>20 минут назад</span>
                </div>
                <div className='update-list-item__content-body'>
                    <span className='update-list-item__content-body-number'>Том 1 Глава 70</span>
                    <div className='update-list-item__content-body-translate'>
                        <svg className='update-list-item__content-body-translate-icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3H10L9 0H2C0.9 0 0 0.9 0 2V17C0 18.1 0.9 19 2 19H10L11 22H20C21.1 22 22 21.1 22 20V5C22 3.9 21.1 3 20 3ZM6 15C3.24 15 1 12.76 1 10C1 7.24 3.24 5 6 5C7.35 5 8.48 5.5 9.35 6.3L8.03 7.57C7.65 7.21 6.99 6.79 6 6.79C4.26 6.79 2.85 8.23 2.85 10C2.85 11.77 4.26 13.21 6 13.21C8.01 13.21 8.84 11.77 8.92 10.8H6V9.09H10.68C10.75 9.4 10.8 9.7 10.8 10.11C10.8 12.97 8.89 15 6 15ZM12.17 9.58H15.87C15.44 10.83 14.76 12.01 13.82 13.05C13.51 12.7 13.22 12.33 12.96 11.95L12.17 9.58ZM20.5 19.5C20.5 20.05 20.05 20.5 19.5 20.5H13L15 18L13.96 14.9L17.06 18L17.98 17.08L14.68 13.83L14.7 13.81C15.83 12.56 16.63 11.12 17.1 9.59H19V8.29H14.47V7H13.18V8.29H11.74L10.46 4.5H19.5C20.05 4.5 20.5 4.95 20.5 5.5V19.5Z" fill="#E0E0E0"/>
                        </svg>
                        <p className='update-list-item__content-body-translate-author'>Ньюби</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateListItem