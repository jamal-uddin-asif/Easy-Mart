import Container from '@/Components/Shared/Container';
import React from 'react';
import data from '../../../../public/data.json'
import ItemsCard from './ItemsCard';


const ItemsSection = () => {
    console.log(data)
    return (
        <div>
            <Container>
                <div className='mt-30 '>
                    data
                    {
                        data.map(product=> <ItemsCard key={product?.id} product={product}/>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default ItemsSection;