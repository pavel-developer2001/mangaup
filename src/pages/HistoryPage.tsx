import React from 'react'
import UpdateList from '../components/UpdateList'

const HistoryPage = () => {
    return (
        <div className='history-page'>
            <h3 className='history-page__title title-component title-border'>История просмотров</h3>
            <UpdateList />
        </div>
    )
}
export default HistoryPage