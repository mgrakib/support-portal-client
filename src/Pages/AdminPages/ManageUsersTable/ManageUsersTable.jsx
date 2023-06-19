/** @format */

import { AiOutlineEye } from "react-icons/ai";

import "./ManageUsersTable.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import useAllUsers from "../../../hooks/useAllUsers";
import Button from "../../../components/Button/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ManageUsersTable = () => {
	const { users, refetch } = useAllUsers();
	const [axiosSecure] = useAxiosSecure();
	const handelUpdateRole = async id => {
		console.log(id)
		const result = await axiosSecure.put(`update-user-role/?id=${id}`);
		console.log(result.data)
		refetch();
	}

	return (
		<div className='mt-8 py-4 md:px-8 min-h-[345px] bg-secondary-bg '>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-green-color'>
							<th>S/N</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, i) => (
							<tr
								key={user._id}
								className='text-white-color'
							>
								<td>{i + 1}</td>
								<td>{user.displayName}</td>
								<td>{user.email}</td>
								<td>{user.role ? user.role : "user"}</td>
								<td className='text-center'>
									{user.role !== "admin" ? (
										<div
											onClick={() => handelUpdateRole(user._id)}
											className='inline-block'
										>
											<Button
												data={"Make Admin"}
												bg={"bg-light-blue-color"}
											/>
										</div>
									) : (
										<button
											disabled
											className='bg-red-300 cursor-not-allowed inline-block py-1 px-3 rounded text-primary-bg'
										>
											admin
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsersTable;
