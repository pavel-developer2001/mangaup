import React from 'react'
import ChapterList from './ChapterList'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const TitlePageContent = () => {
    return (
        <div className='title-page-content'>           
         <div className="tab-wrap">
            <input type="radio" className="title-page-content__input" name="tabs" id="tab1" checked />
            <div className="tab-label-content" id="tab1-content">
            <label className="title-page-content__label" htmlFor="tab1">Описание</label>
                <div className="tab-content">
                    <div className='title-page-content__container'>
                        <p className='title-page-content__container-text'>
                        Издревле демон-император возвышался над всеми и поэтому его титул передавался по наследству. Однажды он умер из-за предательства близкого человека. Возродившись, он потерял свои силы, но с ним остался его внутренний демон, который втягивал его в неприятности. Он замкнулся в себе. Ему пришлось стать личным дворецким старшей дочери одной важной семьи. Пройдя путь от демона-императора до дворецкого, как же ему теперь уживаться с Госпожой и демоном внутри него? Как возглавить гибнущий клан? Каким образом они вместе вернутся на вершину этого мира?!
                        </p>
                        <div className='title-page-content__container-tags'>
                            <span className='title-page-content__container-tags-tag'>Веб</span>
                            <span className='title-page-content__container-tags-tag'>В цвете</span>
                            <span className='title-page-content__container-tags-tag'>Реинкарнация</span>
                            <span className='title-page-content__container-tags-tag'>Демоны</span>
                            <span className='title-page-content__container-tags-tag'>Культивация</span>
                            <span className='title-page-content__container-tags-tag'>Антигерой</span>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <input className="title-page-content__input" type="radio" name="tabs" id="tab2" />
            <div className="tab-label-content" id="tab2-content">
            <label className="title-page-content__label" htmlFor="tab2">Главы</label>
                <div className="tab-content">
                    <div className='title-page-content__container'>
                        <ChapterList />
                    </div>
                </div>
            </div>
            
            <input className="title-page-content__input" type="radio" name="tabs" id="tab3" />
            <div className="tab-label-content" id="tab3-content">
            <label className="title-page-content__label" htmlFor="tab3">Комментарии</label>
                <div className="tab-content">
                    <div className='title-page-content__container'>
                        <CommentForm />
                        <CommentList />
                    </div>
                </div>
            </div>
           
        
         </div> 
        
        </div>
       
    )
}
export default TitlePageContent