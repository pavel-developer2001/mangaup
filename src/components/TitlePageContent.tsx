import React from 'react'

const TitlePageContent = () => {
    return (
        <div className='title-page-content'>           
        <div className="tab-wrap">
            <input type="radio" name="tabs" id="tab1" checked />
            <div className="tab-label-content" id="tab1-content">
            <label htmlFor="tab1">Описание</label>
                <div className="tab-content">
                Издревле демон-император возвышался над всеми и поэтому его титул передавался по наследству. Однажды он умер из-за предательства близкого человека. Возродившись, он потерял свои силы, но с ним остался его внутренний демон, который втягивал его в неприятности. Он замкнулся в себе. Ему пришлось стать личным дворецким старшей дочери одной важной семьи. Пройдя путь от демона-императора до дворецкого, как же ему теперь уживаться с Госпожой и демоном внутри него? Как возглавить гибнущий клан? Каким образом они вместе вернутся на вершину этого мира?!
                </div>
            </div>
            
            <input type="radio" name="tabs" id="tab2" />
            <div className="tab-label-content" id="tab2-content">
            <label htmlFor="tab2">Главы</label>
                <div className="tab-content">
                    Том 2 глава 148
                </div>
            </div>
            
            <input type="radio" name="tabs" id="tab3" />
            <div className="tab-label-content" id="tab3-content">
            <label htmlFor="tab3">Комментарии</label>
                <div className="tab-content">
                    когда новые главы
                </div>
            </div>
        
            
            
            <div className="slide"></div>
        
        </div>



            
        </div>
       
    )
}
export default TitlePageContent