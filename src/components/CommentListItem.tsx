import React from 'react'

const CommentListItem = () => {
    return (
        <div className='comment-list-item'>
            <img className='comment-list-item__avatar' src='https://freemangareads.com/uploads/m/magic-emperor/chapters/81/09.jpg' />
            <div className='comment-list-item__content'>
                <div className='comment-list-item__content-head'>
                    <span className='comment-list-item__content-head-name'>Чжо фань</span>
                    <span className='comment-list-item__content-head-date'> · 11 часов назад</span>
                </div>
                <span className='comment-list-item__content-body'>Когда новые главы? На анлейте уже дня как 3-4 есть</span>
                <div className='comment-list-item__content-settings'>
                    <div className='comment-list-item__content-settings-like'>
                        <svg className='comment-list-item__content-settings-like-icon' width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14.7222H1.7C2.1675 14.7222 2.55 14.3722 2.55 13.9444V6.94439C2.55 6.51661 2.1675 6.16661 1.7 6.16661H0V14.7222ZM16.8555 9.18439C16.949 8.98995 17 8.77995 17 8.56217V7.72217C17 6.86661 16.235 6.16661 15.3 6.16661H10.625L11.407 2.54995C11.4495 2.37883 11.424 2.19217 11.339 2.03661C11.1435 1.68661 10.897 1.36772 10.591 1.08772L10.2 0.722168L4.7515 5.70772C4.4285 6.00328 4.25 6.39995 4.25 6.81217V12.9099C4.25 13.9055 5.1425 14.7222 6.239 14.7222H13.1325C13.7275 14.7222 14.2885 14.4344 14.5945 13.9677L16.8555 9.18439Z" fill="#E0E0E0"/>
                        </svg>
                        <span className='comment-list-item__content-settings-like-number'>9</span>
                        <svg className='comment-list-item__content-settings-like-icon' width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0.722168H15.3C14.8325 0.722168 14.45 1.07217 14.45 1.49995V8.49995C14.45 8.92772 14.8325 9.27772 15.3 9.27772H17V0.722168ZM0.1445 6.25995C0.0510001 6.45439 0 6.66439 0 6.88217V7.72217C0 8.57772 0.765 9.27772 1.7 9.27772H6.375L5.593 12.8944C5.5505 13.0655 5.576 13.2522 5.661 13.4077C5.8565 13.7577 6.103 14.0766 6.409 14.3566L6.8 14.7222L12.2485 9.73661C12.5715 9.44106 12.75 9.04439 12.75 8.63217V2.54217C12.75 1.53883 11.8575 0.722168 10.761 0.722168H3.876C3.2725 0.722168 2.72 1.00995 2.414 1.47661L0.1445 6.25995Z" fill="#E0E0E0"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentListItem