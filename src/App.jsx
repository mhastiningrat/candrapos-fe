import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MasterPage from "./pages/MasterPage";
import TransactionKulakPage from "./pages/TransactionKulakPage";
// import ReportPage from './pages/ReportPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/master" element={<MasterPage />} />
				<Route path="/transaction-kulak" element={<TransactionKulakPage />} />
				{/* <Route path="/report" element={<ReportPage />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
