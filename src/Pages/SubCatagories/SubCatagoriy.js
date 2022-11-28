import React from 'react';

const SubCatagoriy = ({ subCategory, setModalDetails }) => {
    console.log(subCategory);
    const { Product_Name, img, Seller_name, Location, Original_Price, Resell_Price, Years_of_Use, Posted_Time, isVerified, Category_id } = subCategory;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>



            <div className="card-body">
                <h2 className="card-title font-bold text-info text-center">{Product_Name}</h2>
                <p className='text-lime-800'>Seller Name: {Seller_name}</p>
                <p className='text-lime-800'>Location: {Location}</p>
                <p className='text-lime-800'>Original Price: {Original_Price}</p>
                <p className='text-lime-800'>Resell_Price: {Resell_Price}</p>
                <p className='text-lime-800'>Years_of_Use: {Years_of_Use}</p>
                <p className='text-lime-800'>Posted_Time: {Posted_Time}</p>
                <p className='text-lime-800'>category_id: {Category_id}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setModalDetails(subCategory)} htmlFor="Booking-modal" className="btn btn-info">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SubCatagoriy;