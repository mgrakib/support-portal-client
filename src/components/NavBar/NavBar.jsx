
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Container from '../Container/Container';
import { FaRegBell, FaUsersCog } from 'react-icons/fa';

import { useState } from 'react';
import ProfileDropDown from './ProfileDropDown/ProfileDropDown';
import NotificationDropDown from './NotificationDropDown/NotificationDropDown';

import { AiFillDashboard } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";

import useAuth from '../../hooks/useAuth';

const NavBar = () => {
	const { user } = useAuth();

    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [notificationIsOpen, setNotificationIsOpen] = useState(false);
    const handelProfileOpen = event => {
        event.stopPropagation();
        setProfileIsOpen(!profileIsOpen);
        setNotificationIsOpen(false);
    }
    const handelNotificationOpen = event => {
        event.stopPropagation();
		setNotificationIsOpen(!profileIsOpen);
        setProfileIsOpen(false);
	};

	const role = 'admin'
    return (
		<div
			onClick={() => {
				setProfileIsOpen(false);
				setNotificationIsOpen(false);
			}}
		>
			<Container>
				<div>
					<div className='flex items-center'>
						<Link to={"/dashboard"}>
							<div className='flex items-center gap-2'>
								<div className='w-[60px] md:w-[40px]'>
									<img
										src={logo}
										alt=''
									/>
								</div>
								<h2 className='hidden md:block text-xl font-bold text-white-color'>
									NTMC Support System
								</h2>
							</div>
						</Link>

						<div className='ml-auto flex items-center gap-4'>
							<div
								onClick={handelNotificationOpen}
								className='bg-ternary-bg relative cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full'
							>
								<FaRegBell className='text-2xl text-light-gray-color' />

								{notificationIsOpen && <NotificationDropDown />}
							</div>

							<div className='relative'>
								<div
									onClick={handelProfileOpen}
									className='flex items-center gap-2 cursor-pointer relative'
								>
									<div className='hidden rounded-full overflow-hidden md:block w-[40px]'>
										<img
											src={user?.photoURL}
											alt=''
										/>
									</div>
									<p className='text-sm text-light-gray-color'>
										Welcome{" "}
										<span className='text-secondary-color'>
											{user?.displayName}
										</span>
									</p>
								</div>
								{profileIsOpen && <ProfileDropDown />}
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className=' bg-ternary-bg flex items-center py-4 rounded-md text-white-color text-[14px] my-2 '>
					<Link className='px-6  border-r flex items-center gap-3 font-semibold'>
						<AiFillDashboard /> Dashbaord
					</Link>

					<Link className='px-6 flex items-center gap-3 font-semibold'>
						<BsQuestionLg /> FAQ
					</Link>
					{role && (
						<Link
							to={"/dashboard/manage-user"}
							className='px-6 border-l flex items-center gap-3 font-semibold'
						>
							<FaUsersCog /> Manage User
						</Link>
					)}
				</div>
			</Container>
		</div>
	);
};

export default NavBar;