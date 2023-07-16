import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editProduct } from './ProductSlice';

const EditProduct = () => {
    // get form data
    const location = useLocation();

    const [prodInfo, setProdInfo] = useState({
        id: location.state.id,
        name: location.state.name,
        price: location.state.price,
    });
    const [prodImg, setProdImg] = useState(location.state.image);

    // initialize dispatch
    const dispatch = useDispatch();

    // initialize navigate
    const navigate = useNavigate();

    // onchange form data
    const handleForm = (e) => {
        setProdInfo({
            ...prodInfo,
            [e.target.name]: e.target.value
        });
    }
    // onchange image
    const handleImage = (e) => {
        // setProdImg(e.target.files[0]);
        // setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputProdData = {
            id: prodInfo.id,
            ...prodInfo,
            image: prodImg
        }
        
        dispatch(editProduct(inputProdData));

        navigate("/", {replace: true});
    }

    return (
        <section>
            <div>
                <h2>Edit Product:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={prodInfo.name} onChange={handleForm} />
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="text" name="price" value={prodInfo.price} onChange={handleForm} />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="file" name="image" onChange={handleImage} />
                        {
                            prodImg && <img src={prodImg} alt="product" width={80} />
                        }
                    </div>
                    <div>
                        <button type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditProduct;