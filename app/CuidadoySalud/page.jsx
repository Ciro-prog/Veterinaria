import HeaderServicio from '@/components/HeaderServicio';
import React from 'react';
import CardService from '@/components/CardService';
const CuidadoySalud = () => {
    return (
        <div>
                <HeaderServicio/>
                <div className='flex justify-around items-center p-10 pt-20 pb-2    0'>

                <CardService/>
                <CardService/>
                </div>
        </div>
    );
};

export default CuidadoySalud
