import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);

    // const url = `http://localhost:5000/allProducts?email=${user?.email}`;

    // const { data: orders = [] } = useQuery({
    //     queryKey: ['allProducts', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    const data = useLoaderData();
    console.log('dddddddd', data)
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
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
                            data?.map((order, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.Product_Name}</td>
                                <td>{order.email}</td>
                                <td>{order.Resell_Price}</td>
                                <td><label htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Delete</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyProducts;