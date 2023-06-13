import { BsSearch } from "react-icons/bs";
import Container from "../../../components/Container/Container";
import DashboardCard from "../../../components/DashboardCompo/DashboardCard/DashboardCard";
import TicketTable from "../../../components/DashboardCompo/TicketTable/TicketTable";

const DashboardInfo = () => {
    return (
		<div>
			<Container>
				<div className='grid grid-cols-4 gap-6'>
					<DashboardCard
						status={"Open"}
						ticketCreate={true}
						ticketCount={5}
						newTicket={3}
						highPriority={5}
					/>
					<DashboardCard
						status={"Answered"}
						ticketCount={5}
						newTicket={3}
						highPriority={5}
					/>
					<DashboardCard
						status={"In Progress"}
						ticketCount={5}
						newTicket={3}
						highPriority={5}
					/>
					<DashboardCard
						status={"Close"}
						ticketCount={5}
						newTicket={3}
						highPriority={5}
					/>
				</div>

				<div className='mt-8 p-4 bg-secondary-bg '>
					<div className='mb-2 flex items-center justify-between'>
						<div>
							<span className='text-light-gray-color'>
								Results :{" "}
							</span>
							<select
								name=''
								id=''
								className='text-green-color bg-ternary-bg rounded-md py-3 px-2 outline-none'
							>
								<option value='10'>10</option>
								<option value='50'>50</option>
								<option value='100'>100</option>
								<option value='1000'>1,000</option>
							</select>
						</div>

						<div>
							<div className="bg-ternary-bg rounded-md overflow-hidden flex items-center justify-between pr-3 text-white-color">
								<input
									type='text'
									name=''
									id=''
									className="w-[120px] bg-transparent outline-none py-[10px] px-3 placeholder:text-light-gray-color focus:placeholder:text-white-color"
									placeholder="Search"
								/>

								<BsSearch className="font-bold" />
							</div>
						</div>
					</div>
					<TicketTable />
				</div>
			</Container>
		</div>
	);
};

export default DashboardInfo;