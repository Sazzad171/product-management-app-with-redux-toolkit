import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
                    <tr>
                        <td>Egg</td>
                        <td>200</td>
                        <td>null</td>
                        <td>
                            <button>Edit</button>
                            <button>remove</button>
                        </td>
                    </tr>
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