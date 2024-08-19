import React from "react";

const ProductList = () => {
	// Contoh data produk yang bisa diambil dari API atau state
	const products = [
		{ id: 1, name: "Produk A", price: 10000, qty: 20, stock: 20 },
		{ id: 2, name: "Produk B", price: 15000, qty: 15, stock: 15 },
		{ id: 3, name: "Produk C", price: 20000, qty: 10, stock: 10 },
	];

	return (
		<div className="mt-4 p-4 border rounded bg-white">
			<div className="flex justify-between mb-10">
				<h3 className="text-lg font-semibold mb-2">Daftar Barang</h3>
				<div className="flex gap-2 items-center">
					<input
						type="text"
						placeholder="Cari Barang"
						className="w-25 p-2 border rounded "
					/>
					<button className="bg-orange-400 text-white px-4 py-2 rounded">
						Cari
					</button>
				</div>
			</div>

			<table className="min-w-full bg-white">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b">ID</th>
						<th className="py-2 px-4 border-b text-left">Nama Produk</th>
						<th className="py-2 px-4 border-b text-left">Harga</th>
						<th className="py-2 px-4 border-b">Qty</th>
						<th className="py-2 px-4 border-b">Stok</th>
						<th className="py-2 px-4 border-b text-right">Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td className="py-2 px-4 border-b text-center">{product.id}</td>
							<td className="py-2 px-4 border-b">{product.name}</td>
							<td className="py-2 px-4 border-b">
								Rp {product.price.toLocaleString()}
							</td>
							<td className="py-2 px-4 border-b text-center">{product.qty}</td>
							<td className="py-2 px-4 border-b text-center">
								{product.stock}
							</td>
							<td className="py-2 px-4 border-b text-right">
								<button className="bg-blue-400 text-white px-4 py-2 rounded me-1">
									Update
								</button>
								<button className="bg-red-500 text-white px-4 py-2 rounded">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
