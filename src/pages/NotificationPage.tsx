import React from 'react'
import NotificationItem from '../components/NotificationItem'

const NotificationPage = () => {
    return (
        <div className='notification-page'>
            <h3 className='notification-page__title title-component title-border'>Уведомления</h3>
            <div className='notification-page__content'>
                <button className='notification-page__content-btn'>
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.57143 23.1111C1.57143 24.7 2.98571 26 4.71429 26H17.2857C19.0143 26 20.4286 24.7 20.4286 23.1111V5.77778H1.57143V23.1111ZM22 1.44444H16.5L14.9286 0H7.07143L5.5 1.44444H0V4.33333H22V1.44444Z" fill="#E0E0E0"/>
                    </svg>
                </button>
                <div className='notification-list'>
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                </div>
            </div>
        </div>
    )
}
export default NotificationPage