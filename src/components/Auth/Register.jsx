const Register = () => {
	return (
		<form>
			<h2 className="text-2xl font-bold mb-4">
				POS Candra <small className="text-slate-400">Register</small>
			</h2>
			<div className="mb-4">
				<label className="block text-gray-700">Username</label>
				<input
					type="email"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your username"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700">Password</label>
				<input
					type="password"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your password"
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-green-400 text-white py-2 rounded"
			>
				Register
			</button>
		</form>
	);
};

export default Register;
