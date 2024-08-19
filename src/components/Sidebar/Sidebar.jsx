import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	FaHome,
	FaBox,
	FaShoppingCart,
	FaChartBar,
	FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
	const location = useLocation();

	const menuItems = [
		{ name: "Dashboard", path: "/dashboard", icon: <FaHome size={20} /> },
		{ name: "Master Barang", path: "/master", icon: <FaBox size={20} /> },
		{
			name: "Transaksi",
			path: "/transaction-kulak",
			icon: <FaShoppingCart size={20} />,
		},
		// { name: "Laporan", path: "/report", icon: <FaChartBar size={20} /> },
		{ name: "Logout", path: "/", icon: <FaSignOutAlt size={20} /> },
	];

	return (
		<div className="h-screen w-64 bg-green-600 text-white flex flex-col">
			<div className="p-4 font-bold text-xl text-center border-b border-green-400">
				Candra POS
			</div>
			<nav className="mt-4 flex-1">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						to={item.path}
						className={`flex items-center p-4 hover:bg-green-500 transition-colors ${
							location.pathname === item.path ? "bg-green-500" : ""
						}`}
					>
						{item.icon}
						<span className="ml-3">{item.name}</span>
					</Link>
				))}
			</nav>
			<div className="p-4 border-t border-green-400 text-center">
				<small>© 2024 Candra POS</small>
			</div>
		</div>
	);
};

export default Sidebar;
