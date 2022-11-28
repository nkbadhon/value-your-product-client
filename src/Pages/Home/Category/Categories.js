import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';



const Categories = () => {


    const { data: datas = [] } = useQuery({
        queryKey: ['allCategory'],
        queryFn: () => fetch('http://localhost:5000/allCategory')
            .then(res => res.json())
    });

    const { data: datasall = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
    });

    return (
        <div>
            <div>
                ALl Available Categories: {datas.length}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(single =>
                        <Category
                            key={single.Category_id}
                            single={single}
                        ></Category>)
                }
                <Link to='/allavailableproducts'><button className='btn btn-primary'>See All Products</button></Link>
            </div>
        </div>
    );
};

export default Categories;