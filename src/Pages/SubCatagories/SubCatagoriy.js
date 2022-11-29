import React from 'react';

const SubCatagoriy = ({ subCategory, setModalDetails }) => {
    console.log(subCategory);
    const { Product_Name, img, name, Location, Original_Price, Resell_Price, Years_of_Use } = subCategory;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>



            <div className="card-body">
                <h2 className="card-title font-bold text--slate-600 text-center">Mobile Name: {Product_Name}</h2>
                <p>Seller Name: {name}</p>
                <p>Location: {Location}</p>
                <p>Original Price: {Original_Price}</p>
                <p>Resell Price: {Resell_Price}</p>
                <p>Years of Use: {Years_of_Use}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setModalDetails(subCategory)} htmlFor="Booking-modal" className="btn btn-info">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SubCatagoriy;