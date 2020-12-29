import React from 'react'

const NotificationItem = () => {
    return (
        <div className="notification-item">
            <img className='notification-item__img' src ='https://api.remanga.org/media/titles/how-the-demon-emperor-became-a-butler/high_cover.jpg' />
            <span className='notification-item__name'>Как демон-император стал дворецким</span>
            <span className='notification-item__add'>добавлены 151 и 152 главы в бесплатный доступ</span>
            <label className="notification-item__container">
            <input type="checkbox"/>
            <span className="notification-item__checkmark"></span>
            </label>
        </div>
    )
}
export default NotificationItem