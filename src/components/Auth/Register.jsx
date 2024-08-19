const Register = () => {
	return (
		<form>
			<h2 className="text-2xl font-bold mb-4">Register</h2>
			<div className="mb-4">
				<label className="block text-gray-700">Email</label>
				<input
					type="email"
					className="w-full p-2 border rounded mt-1"
					placeholder="Enter your email"
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
				className="w-full bg-blue-500 text-white py-2 rounded"
			>
				Login
			</button>
		</form>
	);
};

export default Register;
