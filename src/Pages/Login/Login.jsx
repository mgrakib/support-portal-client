/** @format */

import { useForm } from "react-hook-form";
import logo from '../../assets/logo.png'
import { FaKey, FaUser } from "react-icons/fa";
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);

	const [isChecked, setIsChecked] = useState(false)
	const handelCheck = () => {
		setIsChecked(!isChecked);
	}

	console.log(isChecked, 'is chce')

    return (
		<div className='p-8 md:p-16 w-[95%] md:w-[80%] mx-auto'>
			<div className='bg-secondary-bg p-4'>
				<h1 className='text-white-color text-3xl font-bold text-center'>
					NTMC SUPPORT SYSTEM
				</h1>

				<div className='grid grid-cols-2 mt-4 md:mt-16'>
					{/* left img */}
					<div className='w-full flex items-center justify-center'>
						<img
							src={logo}
							alt=''
							className='w-[75%] mx-auto'
						/>
					</div>

					{/* form  */}
					<div className='px-2 md:px-6'>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* input field  */}
							<div className='bg-secondary-bg flex flex-col gap-4'>
								{/* username  */}
								<div className='bg-gray-color flex items-center  rounded-md '>
									<span className='py-3 px-4 flex items-center justify-center text-light-gray-color border-r border-light-gray-color'>
										<FaUser />
									</span>
									{/* register your input into the hook by invoking the "register" function */}
									<input
										{...register("example")}
										placeholder='Username'
										className='outline-none bg-transparent py-2 placeholder:text-light-gray-color text-white-color px-4 w-full'
									/>
								</div>

								{/* password  */}
								<div className='bg-gray-color flex items-center  rounded-md '>
									<span className='py-3 px-4 flex items-center justify-center text-light-gray-color border-r border-light-gray-color'>
										<FaKey />
									</span>
									{/* include validation with required or other standard HTML validation rules */}
									<input
										{...register("exampleRequired", {
											required: true,
										})}
										placeholder='Password'
										className='outline-none bg-transparent py-2 placeholder:text-light-gray-color text-white-color px-4 w-full'
									/>
									{/* errors will return when field validation fails  */}
									{errors.exampleRequired && (
										<span>This field is required</span>
									)}
								</div>
							</div>

							{/* warning  */}
							<div className='w-full h-[300px] border border-gray-color p-4 mt-10 mb-6 overflow-auto text-justify text-white-color'>
								<div>
									<span className='text-[#FF0000] font-bold'>
										WARNING!
									</span>{" "}
									You are accessing a Bangladesh Government
									secured information system, which includes
									this computer, this computer network, all
									computers connected to this network, and all
									devices and/or storage media attached to
									this network or to a computer on this
									network. This information system is provided
									for BANGLADESH Government-authorized use
									only. Unauthorized or improper use of this
									system may result in disciplinary action and
									civil and criminal penalties. By using this
									information system, you understand and
									consent to the following: You have no
									reasonable expectation of privacy regarding
									any communications transmitted through or
									data stored on this information system. At
									any time, the government may monitor,
									intercept, search and/or seize data
									transiting or stored on this information
									system. Any communications transmitted
									through or data stored on this information
									system may be disclosed or used for any
									BANGLADESH Government-authorized purpose.
								</div>
								<div className='mt-10 mb-4'>
									<span className='text-[#FF0000] font-bold'>
										WARNING!
									</span>{" "}
									The use of publicly accessible computers
									(e.g. libraries, airports, cafes, hotels,
									Public Wi-Fi etc.) to access the System is
									unauthorized. This type of usage may result
									in the involuntary dissemination of
									information to unauthorized entities. Data
									may be left on this computer resulting in
									the next person using this computer the
									ability to view your data.
								</div>

								<div>
									<label
										htmlFor='terms'
										className=''
									>
										<input
											className='hidden'
											type='checkbox'
											name='checkbox'
											checked={isChecked}
											id='terms'
											onClick={handelCheck}
										/>

										<span
											className={`inline-block checkedbox-span relative pl-8 after:scale-0 ${
												isChecked
													? "after:scale-100"
													: "after:scale-0"
											}`}
										>
											i agree to the{" "}
											<Link className='text-[#e16123]'>
												terms and conditions
											</Link>
										</span>
									</label>
								</div>
							</div>

							<div
								className={`${isChecked ? "block" : "hidden"}`}
							>
								<button
									type='submit'
									className='bg-primary-color w-full uppercase font-bold text-2xl text-white-color py-[6px] rounded-md mb-4'
								>
									LOGIN
								</button>
							</div>
						</form>
					</div>
				</div>

				<p className='text-[12px] text-center text-white-color'>
					© 2018-2023 <span className='text-[#e16123]'>NTMC</span>.
					All Rights Reserved | Designed & Developed By Logo
				</p>
			</div>
		</div>
	);
};

export default Login;

