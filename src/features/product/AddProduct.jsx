import React from 'react';

const AddProduct = () => {
  return (
    <section>
        <div>
            <h2>Add New Product:</h2>
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
                    <button>Save</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AddProduct;