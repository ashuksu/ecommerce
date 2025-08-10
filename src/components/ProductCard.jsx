import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { addCart } from '../redux/action';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

    const addProductToCart = () => {
        toast.success("Added to cart");
        dispatch(addCart(product));
    };

    const isOutOfStock = product.stock === 0;

    return (
        <div id={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
                <img
                    className="card-img-top p-3 object-fit-contain"
                    src={product.image}
                    alt={product.title}
                    height={300}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">
                        {product.description.substring(0, 90)}...
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">$ {product.price}</li>
                    <li className="list-group-item">
                        <select className="form-select form-select-sm">
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                    </li>
                </ul>
                <div className="card-body">
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-dark m-1"
                    >
                        Buy Now
                    </Link>
                    {isOutOfStock ? (
                        <button className="btn btn-danger m-1" disabled>
                            Out of Stock
                        </button>
                    ) : (
                        <button
                            className="btn btn-dark m-1"
                            onClick={addProductToCart}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;