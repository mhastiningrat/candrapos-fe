import ProductList from "../components/Master/ProductList";
import AddProduct from "../components/Master/AddProduct";

const MasterPage = () => {
	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Master Barang</h2>
			<AddProduct />
			<ProductList />
		</div>
	);
};

export default MasterPage;
