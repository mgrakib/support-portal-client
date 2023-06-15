import { useLoaderData } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import bg from "../../../assets/bg.png"
import { TbFileDescription } from "react-icons/tb";
import { useState } from "react";
import ResponseTicket from "../../../components/ResponseTicket/ResponseTicket";

const AboutTicket = () => {
    const ticket = useLoaderData();
    // des: [{'user':'rakib'}, {'user':"rupa"},{'admin':"rupa"}]
    const { ticketSubject, description } = ticket.data;

    
    let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
    }
    
    return (
		<div className=''>
			<Container>
				<div className='bg-primary-bg pb-[55px] shadow-[0px_9px_5px_-3px_rgba(0,0,0,.3)]'>
					<div className='px-4 py-2 bg-secondary-bg flex items-center justify-between'>
						<p className='text-light-gray-color'>
							Ticket Subject:{" "}
							<span className='text-light-yellow-color'>
								{ticketSubject}
							</span>
						</p>

						<div>
							<span onClick={openModal}>
								<Button
									data={"akib"}
									bg={"bg-light-blue-color"}
									textColor={"text-white-color"}
								/>
							</span>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${bg})` }}
						className='h-[300px] bg-red-300 px-8 pb-4 overflow-y-auto text-white-color'
					>
						<div className='text-center'>
							<div className='my-4 py-1 px-6  rounded-md bg-primary-bg inline-block'>
								{ticketSubject}
							</div>
						</div>

						<div className=' relative'>
							{description.map((item, i) => {
								console.log(item);
								if (Object.keys(item)[0] === "user") {
									return (
										<div
											key={i}
											className='mt-3 bg-primary-bg max-w-[60%] px-3 py-2'
										>
											<p className='inline-block   '>
												{item.user}
											</p>

											{item.img && (
												<div>
													<img
														src={item.img}
														alt=''
														className='w-[50%] mt-2'
													/>
												</div>
											)}
										</div>
									);
								} else {
									return (
										<div
											key={i}
											className='flex justify-end mt-3'
										>
											<p className='inline-block bg-gray-color  max-w-[60%] px-3 py-1 text-justify'>
												{item.admin}
											</p>

											{item.img && (
												<div>
													<img
														src={item.img}
														alt=''
														className='w-[50%] mt-2'
													/>
												</div>
											)}
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</Container>

			<ResponseTicket
				isOpen={isOpen}
				closeModal={closeModal}
				ticket={ticket.data}
			/>
		</div>
	);
};

export default AboutTicket;