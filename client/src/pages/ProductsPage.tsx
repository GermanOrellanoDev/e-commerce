import ProductsListContainer from "../components/product/ProductsListContainer";

const ProductsPage = () => {
  return (
    <div className="flex flex-col w-auto min-h-screen bg-gradient-to-b from-40% from-gray-700 to-gray-300 mt-16 items-center">
      <ProductsListContainer />
    </div>
  );
};

export default ProductsPage;
