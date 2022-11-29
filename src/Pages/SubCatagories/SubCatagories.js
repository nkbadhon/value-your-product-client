import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import SubCatagoriy from './SubCatagoriy';

const SubCatagories = () => {
    const data = useLoaderData();
    const [modaldetails, setModalDetails] = useState(null);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(subCategory =>
                        <SubCatagoriy
                            key={subCategory.Category_id}
                            subCategory={subCategory}
                            setModalDetails={setModalDetails}
                        >
                        </SubCatagoriy>)
                }
            </div>
            {modaldetails &&
                <BookModal
                    modaldetails={modaldetails}
                    setModalDetails={setModalDetails}
                ></BookModal>}
        </div>
    );
};

export default SubCatagories;