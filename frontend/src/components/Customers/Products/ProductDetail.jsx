import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // In real apps, you'd fetch product details by ID
  return (
    <div className="p-10 mt-20">
      <h1 className="text-3xl font-bold">Product Detail Page</h1>
      <p className="text-lg mt-4">Product ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
