import { useState,useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products , setProducts]= useState([]);
    const [cart,setCart] = useState([]);
    // const saveCart = [];

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    useEffect(()=>{
        const savedCart = [];
         const stored = getShoppingCart()
         console.log(stored)
         //step 1 : get id
         for(const id in stored){
            //step 2: get the product by using id
            const savedProduct = products.find(product =>product.id===id)
            if(savedProduct){
            //step 3: get quantity of the product
               const quantity = stored[id]
               savedProduct.quantity=quantity
            //step 4: add the added product to the saved cart
               savedCart.push(savedProduct)
               console.log('added product',savedCart)
            }
      
            
         }
         
      //step 5: set the cart  
      setCart(savedCart)


    },
    [products])
  
    const handleaddtoCart =(product)=>{
        let newCart = [];
    //   const newCart = [...cart,product];
    //if product doesn't exist in the cart, then set quantity = 1
    //if exist then update by 1
    const exists = cart.find(pd=>pd.id===product.id);
    // console.log(exists)
    if(!exists){
        product.quantity = 1;
        newCart = [...cart,product];
    }
    else{
        exists.quantity = exists.quantity+1;
        const remaining = cart.filter(pd=>pd.id!==product.id)
        //The filtering is necessary because of replacing an existing product with an updated version that has a different quantity
        newCart = [...remaining,exists]

    }
      setCart(newCart)
      addToDb(product.id)
      

    }
    return (
        <div className='shop'>
            <div className='all-product'>
               {products.map(product=><Product 
               key={product.id}
               product={product}
               handleaddtoCart={handleaddtoCart}
               ></Product>)}
            </div>
            <div className='cart'>
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;