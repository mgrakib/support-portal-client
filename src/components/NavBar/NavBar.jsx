
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Container from '../Container/Container';
import { FaRegBell } from 'react-icons/fa';

import { useState } from 'react';
import ProfileDropDown from './ProfileDropDown/ProfileDropDown';
import NotificationDropDown from './NotificationDropDown/NotificationDropDown';
const NavBar = () => {
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

    return (
        <div onClick={() => {
            setProfileIsOpen(false)
            setNotificationIsOpen(false);
        }}>
			<Container>
				<div className='flex items-center'>
					<Link>
						<div className='flex items-center gap-2'>
							<div className='w-[40px]'>
								<img
									src={logo}
									alt=''
								/>
							</div>
							<h2 className='text-xl font-bold text-white-color'>
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
								<div className='w-[40px]'>
									<img
										src={logo}
										alt=''
									/>
								</div>
								<p className='text-sm text-light-gray-color'>
									Welcome{" "}
									<span className='text-secondary-color'>
										Md. Golam Rakib
									</span>
								</p>
							</div>
							{profileIsOpen && <ProfileDropDown />}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;