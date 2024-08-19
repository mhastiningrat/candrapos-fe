import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-96">
				{isLogin ? <Login /> : <Register />}
				<button
					className="mt-4 text-blue-500"
					onClick={() => setIsLogin(!isLogin)}
				>
					{isLogin
						? "Don't have an account? Register"
						: "Already have an account? Login"}
				</button>
			</div>
		</div>
	);
};

export default AuthPage;
