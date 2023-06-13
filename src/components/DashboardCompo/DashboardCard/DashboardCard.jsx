import './DashboardCard.css'
const DashboardCard = ({status, ticketCreate, ticketCount, newTicket, highPriority}) => {
    return (
		<div className='bg-secondary-bg rounded-md'>
			<div className='flex items-center justify-between py-8 px-4 border-b border-dashed border-gray-color'>
				<p className='text-white-color font-semibold'>{status}</p>

				{ticketCreate && (
					<div>
						<button className='bg-yellow-color text-white-color py-[6px] px-3 rounded-md text-[14px] shadow-[1px_4px_5px_1px_rgba(226,160,63,.5)] hover-effect'>
							New Ticket
						</button>
					</div>
				)}
			</div>

			<div className='py-4'>
				<div className='flex items-center justify-center'>
					<div className='w-[80px] h-[80px] flex items-center justify-center text-primary-color bg-ternary-bg rounded-full text-3xl font-bold count-container relative'>
						{ticketCount ? ticketCount : 0}
					</div>
				</div>

				<div className='text-center pt-2 flex flex-col gap-2 font-semibold'>
					<p className='text-green-color'>
						{newTicket ? newTicket : 0} new
					</p>
					<p className='text-light-gray-color'>
						<span className='text-primary-color '>
							{highPriority ? highPriority : 0} Ticket
						</span>{" "}
						with High priority
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;