import React from 'react';
import { Link } from 'react-router-dom';

const Category = (single) => {


    // const { data: allProducts = [], refetch, isLoading } = useQuery({
    //     queryKey: ['allProducts', date],
    //     queryFn: () => fetch(`http://localhost:5000/allProducts?date=${date}`)
    //         .then(res => res.json())
    // });


    const { img, Category_id, Brand_name } = single.single;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>



            <div className="card-body">
                <h2 className="card-title">{Brand_name}</h2>
                <p></p>
                <div className="card-actions justify-center w-full my-2">
                    <Link to={`/allProducts/${Category_id}`}><button className="btn btn-info text-white ">See all available phones</button></Link>
                    {/* to={`/allProducts/${category_id}`}><button className="btn btn-info" */}
                </div>
            </div>
        </div>
    );
};

export default Category;
