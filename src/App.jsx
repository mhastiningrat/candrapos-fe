import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MasterPage from "./pages/MasterPage";
import TransactionKulakPage from "./pages/TransactionKulakPage";
import MainLayout from "./Layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route element={<MainLayout />}>
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/master" element={<MasterPage />} />
					<Route path="/transaction-kulak" element={<TransactionKulakPage />} />
					{/* <Route path="/report" element={<ReportPage />} /> */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
