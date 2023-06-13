import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";

const Dashboard = () => {
    return (
		<div>
			<NavBar />

			<div>
				<Outlet />
			</div>

			<Container>
				<div className='flex items-center justify-between pb-3 text-light-gray-color'>
					<p>
						Copyright © 2023{" "}
						<span className='text-white-color font-bold'>MGR</span>,
						All rights reserved.
					</p>

					<p>
						Designed & Developed By:{" "}
						<span className='text-white-color font-bold'>
							MG Rakib
						</span>
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Dashboard;