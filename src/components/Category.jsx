import { useEffect } from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
    const { categoryData } = getData() || {}


    return (
        <div className='bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 '>
            <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around  py-7 px-4">
                {categoryData?.map((item, index)=>{
                    return <div key={index} className="">
                        <button className="text-[white] uppercase bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 px-3 py-1 rounded-full cursor-pointer">{item}</button>
                    </div> 
                })}
            </div>
        </div>
    )
}

export default Category
