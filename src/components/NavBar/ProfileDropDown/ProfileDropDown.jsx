/** @format */

import { Link } from "react-router-dom";
import "./ProfileDropDown.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ProfileDropDown = () => {
	AOS.init();
	return (
		<div
			data-aos='fade-up'
			data-aos-anchor-placement='top-bottom'
		>
			<div className='min-w-[200px] bg-secondary-bg absolute rounded-md right-0 top-[110%] shadow-2xl'>
				<div className='dropdown-container relative p-3 '>
					<ul className='divide-y divide-red-700'>
						<Link>
							<li>My Profile</li>
						</Link>
						<Link>
							<li className='border-y'>Change Password</li>
						</Link>
						<Link>
							<li>Sign Out</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileDropDown;