import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProducts } from '../features/product/ProductSlice';

const Home = () => {
    // call state value
    const productList = useSelector(state => state.productReducer);

    // initialize dispatch
    const dispatch = useDispatch();

    // handle delete
    const handleDelete = (e, id) => {
        e.preventDefault();

        dispatch(deleteProducts(id));
    }

    return (
        <section>
            <div>
                <h3>Product list is here</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList && productList.map((item, i) => {
                                const { id, name, price, image } = item;
                                return <tr key={i}>
                                    <td>{ name }</td>
                                    <td>{ price }</td>
                                    <td>
                                        <img src={ image } width={80} alt="product" />
                                    </td>
                                    <td>
                                        <Link to={'/edit-product'} className='btn' state={{id, name, price, image}}>
                                            Edit
                                        </Link>
                                        <button onClick={(e) => handleDelete(e, id)}>remove</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <p>
                    <Link to={"/add-product"} className="btn">Add new product</Link>
                </p>
            </div>
        </section>
    )
}

export default Home;