import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';



const Categories = () => {

    const { data: datas = [] } = useQuery({
        queryKey: ['allCategory'],
        queryFn: () => fetch('https://reselling-web-server.vercel.app/allCategory')
            .then(res => res.json())
    });

    const { data: datasall = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('https://reselling-web-server.vercel.app/allProducts')
            .then(res => res.json())
    });

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    datas.map(single =>
                        <Category
                            key={single.Category_id}
                            single={single}
                        ></Category>)
                }

            </div>
            <Link to='/allavailableproducts'><button className='btn w-full'>See All Products</button></Link>
        </div>
    );
};

export default Categories;