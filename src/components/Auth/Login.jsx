import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "../../config/environment";
import Loading from "../Utilities/Loading";

const Login = () => {
	let navigate = useNavigate();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [loading,setLoading] = useState(false);

	const actionLogin = async(e) => {
		e.preventDefault()
		setLoading(true);
		try {
			let payload = {
				"userName": user,
				"passWord": password
			  }
			  
			let res = await axios.post(env.api + "auth/login",payload);
			console.log(res)
			setLoading(false);
		} catch (error) {
			console.log(error)
			setLoading(false);
		}
	};
	return (
		<form>
			{loading ? <Loading/> : ""}
			
			<h2 className="text-2xl font-bold mb-4">
				POS Candra <small className="text-slate-400">Login</small>
			</h2>

			<div className="mb-4">
				<label className="block text-gray-700">Username</label>
				<input
					type="text"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your username"
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
				onClick={(e) => actionLogin(e)}
			> 
			
				Login
			</button>
			
		</form>
	);
};

export default Login;
