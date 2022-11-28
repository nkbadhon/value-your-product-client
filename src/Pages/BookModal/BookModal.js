import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookModal = ({ modaldetails, setModalDetails }) => {
    const { Brand_name, Resell_Price } = modaldetails;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;

        const booking = {
            categoryName: '',
            userName: name,
            email,
            itemName: item,
            price,
            phone,
            meeting
        }

        fetch('http://localhost:5000/myOrders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setModalDetails(null);
                    toast.success('Your order placed successfully')
                }
            })




    }

    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Item Name: {Brand_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input name='name' type="text" disabled value={user?.displayName} className="input w-full " />
                        <input name='email' type="text" disabled value={user?.email} className="input w-full " />
                        <input name='item' type="text" disabled value={Brand_name} className="input w-full " />
                        <input name='price' type="text" disabled value={Resell_Price} className="input w-full " />
                        <input name='phone' type="text" placeholder="Give Your Phone Number" className="input w-full " />
                        <input name='meeting' type="text" placeholder="Provide Meeting Location" className="input w-full " />
                        <br />
                        <input className='btn btn-info w-full ' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;