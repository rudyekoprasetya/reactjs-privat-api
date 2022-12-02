import {
	useEffect, useState
} from "react";

import axios from 'axios';

function TampilData() {
	const url = 'http://localhost/rest-api/';

	const [Pengurus,setPengurus] = useState([]);
	const [Id,setId] = useState("");
	const [Nama,setNama] = useState("");
	const [Alamat,setAlamat] = useState("");
	const [Gender,setGender] = useState("L");
	const [Gaji,setGaji] = useState("");

	const clearData = () => {
		setId("");
		setNama("");
		setAlamat("");
		setGender("L");
		setGaji("");
	}

	const viewData = () => {
		axios
			.get(url+'tampil_data.php')
			.then(response => {
				console.log(response.data.pengurus);
				setPengurus(response.data.pengurus);
		});
	}

	const addData = () => {
		const formData = new URLSearchParams();
		formData.append('id',Id);
		formData.append('nama',Nama);
		formData.append('alamat',Alamat);
		formData.append('gender',Gender);
		formData.append('gaji',Gaji);
		axios
			.post(url+'tambah_data.php', formData)
			.then(response => {
				console.log(response);
				viewData();
				clearData();
		});

	}

	const editData = (data) => {
		console.log(data);
	}

	useEffect(() => {
		viewData();
	},[]);

	return (
		<div className="TampilData">
			<div className="row">
				<div className="col">
					<h2>CRUD Pengurus</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Data</button>
				</div>
				
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nama</th>
							<th scope="col">Alamat</th>
							<th scope="col">Gender</th>
							<th scope="col">Gaji</th>
							<th scope="col">Aksi</th>
						</tr>
					</thead>
					<tbody>
					{ Pengurus.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.nama}</td>
							<td>{item.alamat}</td>
							<td>{item.gender}</td>
							<td>{item.gaji}</td>
							<td>
								<button className="btn btn-small btn-warning" onClick={() => editData(item)}>Edit</button> |
								<button className="btn btn-small btn-danger">Delete</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
			{/*modal tambah data*/}
		   <div className="modal fade" id="tambahModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		     <div className="modal-dialog">
		       <div className="modal-content">
		         <div className="modal-header">
		           <h5 className="modal-title" id="exampleModalLabel">Form Data</h5>
		           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		         </div>
		         <div className="modal-body">
		           <form>
		             <div className="mb-3">
		               <label className="form-label">ID</label>
		               <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
		             </div>
		             <div className="mb-3">
		               <label className="form-label">Nama</label>
		               <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} />
		             </div>
		             <div className="mb-3">
		               <label className="form-label">Alamat</label>
		               <textarea className="form-control" rows="3" onChange={(e) => setAlamat(e.target.value)}></textarea>
		             </div>
		             <div className="mb-3">
		               <label className="form-label">Gender</label>
		               <select className="form-control" onChange={(e) => setGender(e.target.value)}>
		                 <option value="L">Laki-laki</option>
		                 <option value="P">Perempuan</option>
		               </select>
		             </div>
		             <div className="mb-3">
		               <label className="form-label">Gaji</label>
		               <input type="text" className="form-control" onChange={(e) => setGaji(e.target.value)} />
		             </div>
		           </form>
		         </div>
		         <div className="modal-footer">
		           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearData}>Close</button>          
		           <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Save</button>
		         </div>
		       </div>
		     </div>
		   </div>
		   {/*modal tambah data*/}
		</div>
		
	
   

	);
}

export default TampilData;