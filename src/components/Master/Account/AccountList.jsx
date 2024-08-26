import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../Utilities/Loading'
import env from '../../../config/environment';

const AccountList = () => {
    const [loading,setLoading] = useState(false);
    const [account,setAccount] = useState([]);

    const getAccount = async() => {
        setLoading(true);
        try {
            let data = await axios.get(env.api + 'master/account');
            if(data && data.data.code == 200){
                setAccount(data.data.values);
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getAccount();
    },[])
  return (
    <>
        {loading ? <Loading/> : ""}
        <div className="mt-4 p-4 border rounded bg-white">
			<div className="flex justify-between mb-10">
				<h3 className="text-lg font-semibold mb-2">Daftar Barang</h3>
				<div className="flex gap-2 items-center">
					<input
						type="text"
						placeholder="Cari Barang"
						className="w-25 p-2 border rounded "
					/>
					<button className="bg-orange-400 text-white px-4 py-2 rounded">
						Cari
					</button>
                    <button className="bg-green-400 text-white px-4 py-2 rounded">
						Tambah Account
					</button>
				</div>
			</div>

			<table className="min-w-full bg-white">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b">ID</th>
						<th className="py-2 px-4 border-b text-left">Nama Account</th>
						<th className="py-2 px-4 border-b text-left">Deskripsi</th>
						<th className="py-2 px-4 border-b text-right">Action</th>
					</tr>
				</thead>
				<tbody>
					{account.map((account) => (
						<tr key={account.id}>
							<td className="py-2 px-4 border-b text-center">{account.id}</td>
							<td className="py-2 px-4 border-b">{account.name}</td>
							<td className="py-2 px-4 border-b">{account.description}</td>
							<td className="py-2 px-4 border-b text-right">
								<button className="bg-blue-400 text-white px-4 py-2 rounded me-1">
									Update
								</button>
								<button className="bg-red-500 text-white px-4 py-2 rounded">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
    </>
    
  )
}

export default AccountList