import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MasterBarangPage from "./pages/MasterBarangPage";
import TransactionKulakPage from "./pages/TransactionKulakPage";
import MainLayout from "./Layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import MasterAccountPage from "./pages/MasterAccountPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route element={<MainLayout />}>
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/masteraccount" element={<MasterAccountPage />} />
					<Route path="/masterbarang" element={<MasterBarangPage />} />
					<Route path="/transaction-kulak" element={<TransactionKulakPage />} />
					{/* <Route path="/report" element={<ReportPage />} /> */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
