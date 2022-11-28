import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Singlefromall from './Singlefromall';
const AllAvailableProducts = () => {


    const { data: datas = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
    });

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                datas.map(single =>
                    <Singlefromall key={single._id}
                        single={single}></Singlefromall>)
            }
        </div>
    );
};

export default AllAvailableProducts;