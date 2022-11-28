import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AdminHook from '../../Context/Hooks/AdminHook';
import BuyerHook from '../../Context/Hooks/BuyerHook';
import SellerHook from '../../Context/Hooks/SellerHook';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = AdminHook(user?.email);
    const [isSeller] = SellerHook(user?.email);
    const [isBuyer] = BuyerHook(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {/* <li><Link to='/dashboard/myorders'>My Orders</Link></li> */}
                        {
                            isAdmin ? <li><Link to='/dashboard/allusers'>All Users</Link></li> :
                                <>
                                    {isBuyer ? <li><Link to='/dashboard/myorders'>My Orders</Link></li>

                                        : <>

                                            <li><Link to={`/dashboard/allProducts/${user?.email}`}>My Products</Link></li>
                                            <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                                        </>}
                                </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;