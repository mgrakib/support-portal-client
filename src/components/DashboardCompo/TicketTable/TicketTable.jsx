import { AiOutlineEye } from "react-icons/ai";
import StatusBtn from "./TicketTableCompo/StatusBtn";
import "./TicktTable.css";

const TicketTable = () => {
    return (
		<div>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className="text-green-color">
							<th>S/N</th>
							<th>TICKET DATE</th>
							<th>TICKET</th>
							<th>ISSUED BY</th>
							<th>USER NAME</th>
							<th>ORGANIZAION (WINGS)</th>
							<th>PROJECT</th>
							<th>PRIORITY</th>
							<th>STATUS</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr className="text-white-color">
							<td>1</td>
							<td>2023-06-04 09:52:45</td>
							<td>NTPIDS0406231066</td>
							<td>mgrakibbd@gmail.com</td>
							<td>Md. Golam Rakib</td>
							<td>NTMC</td>
							<td>PIDS</td>
							<td>
								<div className='w-[10px] h-[10px] bg-danger-color rounded-full mx-auto'></div>
							</td>
							<td className='w-[150px]'>
								<StatusBtn status={"In Progress"} />
							</td>

							<td>
								<button className='mx-auto px-5 py-2 bg-primary-color rounded-md text-white-color hover-effect'>
									<AiOutlineEye />
								</button>
							</td>
						</tr>
						{/* row 1 */}
						<tr className="text-white-color">
							<td>1</td>
							<td>2023-06-04 09:52:45</td>
							<td>NTPIDS0406231066</td>
							<td>mgrakibbd@gmail.com</td>
							<td>Md. Golam Rakib</td>
							<td>NTMC</td>
							<td>PIDS</td>
							<td>
								<div className='w-[10px] h-[10px] bg-danger-color rounded-full mx-auto'></div>
							</td>
							<td className='w-[150px]'>
								<StatusBtn status={"In Progress"} />
							</td>

							<td>
								<button className='mx-auto px-5 py-2 bg-primary-color rounded-md text-white-color hover-effect'>
									<AiOutlineEye />
								</button>
							</td>
						</tr>
						<tr className="text-white-color">
							<td>1</td>
							<td>2023-06-04 09:52:45</td>
							<td>NTPIDS0406231066</td>
							<td>mgrakibbd@gmail.com</td>
							<td>Md. Golam Rakib</td>
							<td>NTMC</td>
							<td>PIDS</td>
							<td>
								<div className='w-[10px] h-[10px] bg-danger-color rounded-full mx-auto'></div>
							</td>
							<td className='w-[150px]'>
								<StatusBtn status={"In Progress"} />
							</td>

							<td>
								<button className='mx-auto px-5 py-2 bg-primary-color rounded-md text-white-color hover-effect'>
									<AiOutlineEye />
								</button>
							</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TicketTable;