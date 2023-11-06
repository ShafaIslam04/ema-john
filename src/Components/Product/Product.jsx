import './Product.css'

const Product = (props) => {
    const {name,seller,price,img,ratings} = props.product;
    const handleaddtoCart =props.handleaddtoCart;
    return (
        <div className="product">
            <div className='product-info'>
            <img src={img} alt=""  />
           <h4>{name}</h4>
           <p>Mnufacturer :{seller}</p>
           <p>Price :$ {price}</p>
           <p>rating: {ratings}</p>
           <button onClick={()=>handleaddtoCart(props.product)}>Add to Cart</button>
            </div>
           

        </div>
    );
};

export default Product;