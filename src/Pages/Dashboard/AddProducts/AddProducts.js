import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import DayPick from '../../DayPick/DayPick';

const AddProducts = () => {
    const Conditions = ['Excellent', 'Good', 'Fair'];

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm('');

    const { data: catagories, isLoading, refetch } = useQuery({

        queryKey: ['Catagory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/brands`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddProducts = data => {

        const product = {
            Category_id: data.Category_id,
            Location: data.Location,
            Original_Price: data.Original_Price,
            Product_Name: data.Product_Name,
            Resell_Price: data.Resell_Price,
            Years_of_Use: data.Years_of_Use,
            email: data.email,
            img: data.img,
            name: data.name,
            Description: data.Description,
            Mobile_Number: data.Mobile_Number,
            Condition_Type: data.Condition_Type,

        }
        console.log(product);
        fetch('http://localhost:5000/allProducts',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Your product added successfully');
                refetch();
                // if (data.acknowledged) {

                // }
            })
    }
    if (isLoading) {
        return <progress className='progress w-56'></progress>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add Products</h2>
            <form onSubmit={handleSubmit(handleAddProducts)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Please enter your name" })} defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Please enter valid Email address" })} defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register("Product_Name", { required: "Please enter your loaction" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Product_Name && <p className='text-red-600'>{errors.Product_Name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register("Location", { required: "Please enter your loaction" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Location && <p className='text-red-600'>{errors.Location?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text" {...register("Original_Price", { required: "Original Price of the product" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Original_Price && <p className='text-red-600'>{errors.Original_Price?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Asking Price</span>
                    </label>
                    <input type="text" {...register("Resell_Price", { required: "Asking Price of the product" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Resell_Price && <p className='text-red-600'>{errors.Resell_Price?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Years of Use</span>
                    </label>
                    <input type="text" {...register("Years_of_Use", { required: "How many years you used your product?" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Years_of_Use && <p className='text-red-600'>{errors.Years_of_Use?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text" {...register("Mobile_Number", { required: "Your Phone Number" })} className="input input-bordered w-full max-w-xs" />
                    {errors.Mobile_Number && <p className='text-red-600'>{errors.Mobile_Number?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" {...register("Description",)} className="input input-bordered w-full max-w-xs" />
                    {errors.Description && <p className='text-red-600'>{errors.Description?.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>

                    </label>
                    <select {...register('Category_id')} className="select select-bordered w-full max-w-xs">

                        {
                            catagories.map(catagory =>
                                <option key={catagory._id}
                                    value={catagory.Category_id}>{catagory.Category_id}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Condition</span>

                    </label>
                    <select {...register('Condition_Type')} className="select select-bordered w-full max-w-xs">

                        {
                            Conditions.map(Type => <option key={Type._id}
                                value={Type}>{Type}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" {...register("img", { required: "Please enter your name" })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">


                    {/* {registrationError && <p className='text-red-600'>{registrationError}</p>} */}

                </div>
                <input className='btn btn-info mt-4 w-full text-white' value="Add" type="submit" />


            </form>
        </div>
    );
};

export default AddProducts;