// import LoginStatus from "./Components/LoginStatus";
// import ProductTest from "./Components/ProductTest";
// import SelfForm from "./Components/SelfForm";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <>
      <div>
        {/* <SelfForm/> */}
        {/* <ProductTest/> */}
        {/* <LoginStatus/> */}
        <ProductList/>

      </div>
    </>
  );
}

export default App;

// Requirements:
// 1. Keep the same three products.
// 2. Create a new array containing only products priced below ₹2,000.
// 3. Use filter() to select those products.
// 4. Use map() to display the filtered products.
// 5. Display the heading Products Under ₹2000.