import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const MyProducts = () => {


    const data = useLoaderData();
    console.log(data)

    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = () => {
        setDeleteProduct(null);
    }

    const handleDelete = id => {
        fetch(`https://reselling-web-server.vercel.app/allProducts/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Product Deleted');

            })
    }
    console.log(data);
    return (
        <div>
            <h3 className="text-3xl mb-5">My All Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((myorder, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{myorder.name}</td>
                                <td>{myorder.Product_Name}</td>
                                <td>{myorder.email}</td>

                                <td>{myorder.Resell_Price}</td>
                                <td><label onClick={() => setDeleteProduct(myorder._id)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Delete</label></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`By deleting this product it will be permanently unavailable. Please confirm.`}
                    successAction={handleDelete}
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;

