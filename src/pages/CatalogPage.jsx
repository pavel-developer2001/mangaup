import React from 'react'
import GridList from '../components/GridList'
import SliderList from '../components/SliderList'

const CatalogPage = () => {

    const DATA_VIEW_MODES = {
        TABLE: "table",
        GRID: "grid",
    }

    const [dataView, setDataView] = React.useState(DATA_VIEW_MODES.GRID)

    const handleChangeView = (_, nextView) => {
          setDataView(nextView);
    }
  
    return (
        <div className='catalog-page'>
            <div className='catalog-page__head'>
                <h3 className='catalog-page__title title-component'>Каталог</h3>
                <div className='catalog-page__head-params'>
                    <div className='catalog-page__head-params-block'>
                        <span className="catalog-page__head-params-block-item">Типы</span>
                        <svg className="catalog-page__head-params-block-item-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#E0E0E0"/>
                        </svg>
                    </div>
                    <div className='catalog-page__head-params-block'>
                        <span className="catalog-page__head-params-block-item">Жанры</span>
                        <svg className="catalog-page__head-params-block-item-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#E0E0E0"/>
                        </svg>
                    </div>
                    <div className='catalog-page__head-params-block'>
                        <span className="catalog-page__head-params-block-item">Категории</span>
                        <svg className="catalog-page__head-params-block-item-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#E0E0E0"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='catalog-page__body'>
                <div className='catalog-page__body-filter'>
                    <span className='catalog-page__body-filter-name'>По популярности</span>
                    <svg className='catalog-page__body-filter-icon' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#E0E0E0"/>
                    </svg>
                </div>
                <div className='catalog-page__body-layout' value={dataView} onChange={handleChangeView}>
                    <button value={DATA_VIEW_MODES.GRID} aria-label={DATA_VIEW_MODES.GRID} className='catalog-page__body-layout-btn' type='button'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.6H2.22222V6.4H0V9.6ZM0 16H2.22222V12.8H0V16ZM0 3.2H2.22222V0H0V3.2ZM4.44444 9.6H20V6.4H4.44444V9.6ZM4.44444 16H20V12.8H4.44444V16ZM4.44444 0V3.2H20V0H4.44444Z" fill="#BDBDBD"/>
                        </svg>
                    </button>
                    <button value={DATA_VIEW_MODES.TABLE} aria-label={DATA_VIEW_MODES.TABLE} className='catalog-page__body-layout-btn' type='button'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.38462H5.88235V0H0V7.38462ZM0 16H5.88235V8.61539H0V16ZM7.05882 16H12.9412V8.61539H7.05882V16ZM14.1176 16H20V8.61539H14.1176V16ZM7.05882 7.38462H12.9412V0H7.05882V7.38462ZM14.1176 0V7.38462H20V0H14.1176Z" fill="#BDBDBD"/>
                        </svg>
                    </button>
                </div>
            </div>
           {/* {() => {
               if (dataView === DATA_VIEW_MODES.TABLE) {
                    return <SliderList />;
              }
              if (dataView === DATA_VIEW_MODES.GRID){
                    return <GridList />;
              }
           }   
           } */}
           {dataView === DATA_VIEW_MODES.TABLE && <SliderList />}
           {dataView === DATA_VIEW_MODES.GRID && <GridList />}
        </div>
    )
}

export default CatalogPage