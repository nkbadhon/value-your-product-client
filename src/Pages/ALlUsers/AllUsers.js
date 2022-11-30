import React, { useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';



const AllUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null);
    const closeModal = () => {
        setDeleteUser(null);
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://reselling-web-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = user => {
        fetch(`https://reselling-web-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('User Deleted');
                refetch();
            })
    }

    return (
        <div>
            AllUsers

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>
                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Delete</label>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name}. It cannot be undone.`}
                    successAction={handleDelete}
                    modalData={deleteUser}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;