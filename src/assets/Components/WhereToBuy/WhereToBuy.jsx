import React from 'react'
import worldMap from '../../background-images/world-map.png'

const WhereToBuy = () => {
    return (
        <div className='container my-36'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
                {/* form section */}
                <div>

                </div>

                {/* world map section */}
                <div className='col-span-2'>
                    <img src={worldMap} alt="" className='w-full sm:w-[500px] mx-auto' />

                </div>
            </div>
        </div>
    )
}

export default WhereToBuy