import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myOrders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

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
                            <th>Location</th>
                            <th>Confirmation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.phone}</td>
                                <td>{order.email}</td>
                                <td>{order.meeting}</td>
                                <td><label htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Pay</label></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyOrders;