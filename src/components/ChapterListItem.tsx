import React from 'react'

const ChapterListItem = () => {
    return (
        <div className='chapter-list-item'>
            <span className='chapter-list-item__tom'>2</span>
            <span className='chapter-list-item__chapter'>Глава 148</span>
            <span className='chapter-list-item__date'>09.12.2020</span>
            <span className='chapter-list-item__translate'>Google Translate</span>
            <div className='chapter-list-item__like'>
                <svg className='chapter-list-item__icon' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#EB5757"/>
                </svg>
                <span className='chapter-list-item__likes'>3.3K</span>
            </div>
            
        </div>
    )
}
export default ChapterListItem