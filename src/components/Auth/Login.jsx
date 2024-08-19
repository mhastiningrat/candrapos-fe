import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	let navigate = useNavigate();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const actionLogin = () => {
		if (user == "admin" && password == "admin") {
			navigate("/master");
		}
	};
	return (
		<form>
			<h2 className="text-2xl font-bold mb-4">Login</h2>
			<div className="mb-4">
				<label className="block text-gray-700">Username</label>
				<input
					type="email"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your email"
					onChange={(e) => setUser(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700">Password</label>
				<input
					type="password"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 rounded"
				onClick={() => actionLogin()}
			>
				Login
			</button>
		</form>
	);
};

export default Login;
