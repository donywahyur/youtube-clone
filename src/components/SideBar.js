import React from 'react'
import { categories } from '../utils/Utility'

const SideBar = (props) => {
    const { selectCategori, setSelectCategori } = props
    return (
        <>
            {categories.map((categories,index) => {
                return <button 
                onClick={() => setSelectCategori(categories.name)}
                key={index} 
                className="flex p-2 flex-row items-center sm:justify-start sm:py-3 sm:px-4" style={{backgroundColor: selectCategori === categories.name ? "red" : "white",color: selectCategori === categories.name ? "white" : "red"}}>
                    <span className='mr-2'>{categories.icon}</span>
                    <span>{categories.name}</span>
                    </button>
            })}
        </>
    )
}

export default SideBar