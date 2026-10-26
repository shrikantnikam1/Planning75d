import { useState } from 'react';

 const product_name = "Coffee Mug"
    const Price = 299;
    const Stock = 5;

function ProductTest(){
    const [ qty, setQty ] = useState(1);
    // Const [ product, setProduct] = useState("")

    // const product_name = "Coffee Mug"
    // const Price = 299;
    // const Stock = 5;

    const Subtotal = Price * qty;

    const handleIncrease = () => {
        if (qty < Stock ) {
            setQty ( qty + 1)
        }
    }

    const handleDecrease = () => {
        if (qty > 1) {
            setQty (qty - 1)
        }
    }
    
    const handleReset = () => setQty(1);

    const isMaxStock = qty === Stock;

    const isMinStock = qty === 1;
return(
    <>
    <div>
        <div><img src="" alt="" /></div>
        <div>
            <h2>{product_name}</h2>
            <p>${Price}</p>
            <p>Available Stock: {Stock}</p>
        </div>
        <div>Quantity</div>
        <div>

            <p><button onClick={handleDecrease} disabled={isMinStock}>-</button>
            <p>{qty}</p>
            <button onClick={handleIncrease} disabled={isMaxStock}>+</button>
            <button onClick={handleReset} disabled={isMinStock} >Reset</button>
            </p>
            
            <div>
                <div>Subtotal</div>
                <div>${Subtotal}</div>
            </div>
            <p>Illustration of the features we will build</p>
        </div>
    </div>
    </>
)
}

export default ProductTest;