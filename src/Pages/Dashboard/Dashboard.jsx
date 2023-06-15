import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import Processing from "../../components/Loading/Processing";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
	const { processing } = useAuth();
    return (
		<div className="relative">
			<NavBar />

			<div>
				<Outlet />
			</div>

			
			{/* Footer  */}
			<Container>
				<div className='flex items-center justify-between pb-3 text-light-gray-color text-[10px] md:text-[14px]'>
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