import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="flex">
			{/* Sidebar */}
			<Sidebar />

			{/* Konten Halaman */}
			{/* fix type make changes */}
			<div className="flex-1 p-8 bg-gray-100">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
