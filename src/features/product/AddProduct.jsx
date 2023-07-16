import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './ProductSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    // state
    const [formValues, setFormValues] = useState({
        name: '',
        price: ''
    });
    const [image, setImage] = useState(null);
    const [previewImg, setPreviewImg] = useState(null);

    // take length from state
    const prodLength = useSelector(state => state.productReducer.length);

    // initialize dispatch
    const dispatch = useDispatch();

    // initialize navigate
    const navigate = useNavigate();

    // onchange form values
    const handleForm = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }
    // onchange image
    const handleImage = (e) => {
        // setImage(e.target.files[0]);
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputProdData = {
            id: prodLength + 1,
            ...formValues,
            image: image
        }
        
        dispatch(addProduct(inputProdData));

        navigate("/", {replace: true});
    }

    return (
        <section>
            <div>
                <h2>Add New Product:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={formValues.name} onChange={handleForm} />
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="text" name="price" value={formValues.price} onChange={handleForm} />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="file" name="image" onChange={handleImage} />
                        {
                            previewImg && 
                            <img src={previewImg} alt="image" width={80} />
                        }
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddProduct;