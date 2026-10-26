
function ProductList() {
  const products = [
    { id: 1, name: "Phone", price: 45000 },
    { id: 2, name: "Headphones", price: 1400 },
    { id: 3, name: "Charger", price: 750 },
  ];

  // Step 1: Keep products priced below ₹2,000
  const productFiltered = products.filter(
    (product) => product.price < 2000
  );

  return (
    <>
      <h1>All Products</h1>

      {/* Step 2: Display all products */}
      {products.map((product) => (
        <div key={product.id}>
          <strong>{product.name}</strong>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}

      <hr />

      <h2>Products Under ₹2000</h2>

      {/* Step 3: Display only filtered products */}
      {productFiltered.map((product) => (
        <div key={product.id}>
          <strong>{product.name}</strong>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default ProductList;
