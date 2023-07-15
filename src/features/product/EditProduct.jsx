import React from 'react';

const EditProduct = () => {
    return (
        <section>
            <div>
                <h2>Edit Product:</h2>
                <form>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="" />
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="text" name="" />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="file" name="" />
                    </div>
                    <div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditProduct;