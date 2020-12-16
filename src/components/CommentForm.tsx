import React from 'react'

const CommentForm = () => {
    return (
        <div className='comment-form'>
            <input className='comment-form__input' placeholder='Оставить комментарий' type='text' />
            <span className='comment-form__symbols'>0/500 символов</span>
            <div className='comment-form__settings'>
                <div className='comment-form__settings-spoiler'>
                    <span className='comment-form__settings-name'>Спойлер</span>
                    <div className='comment-form__settings-checkbox'>
                        <input type="checkbox" id="switch" className='comment-form__settings-checkbox-input'/>
                        <label className='comment-form__settings-checkbox-label' htmlFor="switch"></label>
                    </div>    
                </div>
                <button type='submit' className='comment-form__settings-btn'>Отправить</button>
            </div>
        </div>
    )
}
export default CommentForm