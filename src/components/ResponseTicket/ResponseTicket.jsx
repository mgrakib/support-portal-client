/** @format */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import img from "../../assets/download.svg";
import Button from "../Button/Button";
import axios from "axios";
import useRole from "../../hooks/useRole";

const ResponseTicket = ({ isOpen, closeModal, ticket, refetch }) => {
	
	const { role } = useRole();

	const [uploadPhoto, setUploadPhoto] = useState("Choose...");
	const [photoDisplay, setPhotoDisplay] = useState(img);

	const handelPhotoChange = image => {
		setUploadPhoto(image.name);

		const fileReader = new FileReader();
		fileReader.readAsDataURL(image);
		fileReader.onload = () => {
			setPhotoDisplay(fileReader.result);
		};
	};

	const handelSubmit = event => {
		event.preventDefault();
		console.log('first')
		const form = event.target;
		const message = form.newMessage.value;
		const image = form.image.files[0];

		const formData = new FormData();
		formData.append("image", image);

		axios
			.post(
				`https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_IMAGE_HOSTING_API
				}`,
				formData
			)
			.then(res => {
				const imageUrl = res.data.data.display_url;

				console.log(imageUrl)
				let responseTicketInfo;
				if (role === "user") {
					responseTicketInfo = { user: message, img: imageUrl };
				} else {
					responseTicketInfo = { admin: message, img: imageUrl };
				}

				console.log(responseTicketInfo , '  rakib')
				axios
					.put(
						`http://localhost:5000/response-ticket/?id=${ticket._id}`,
						responseTicketInfo
					)
					.then(res => {
						
						closeModal();
						refetch();
					});
			});
	};

	return (
		<div>
			<div>
				<Transition
					appear
					show={isOpen}
					as={Fragment}
				>
					<Dialog
						as='div'
						className='relative z-10 bg-red-400'
						onClose={closeModal}
					>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-black bg-opacity-25' />
						</Transition.Child>

						<div className='fixed inset-0 overflow-y-auto'>
							<div className='flex min-h-full items-center justify-center p-4 text-center'>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0 scale-95'
									enterTo='opacity-100 scale-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100 scale-100'
									leaveTo='opacity-0 scale-95'
								>
									<Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-ternary-bg text-left align-middle shadow-xl transition-all'>
										<Dialog.Title
											as='h3'
											className='text-xl font-medium leading-6 p-4 border-b border-white-color text-white-color'
										>
											Please response your ticket
										</Dialog.Title>
										<form onSubmit={handelSubmit}>
											<div className='mt-2 mb-8 px-4 border-b border-white-color '>
												{/* new message  */}
												<div>
													<label
														htmlFor='ticketSubject'
														className='block text-white'
													>
														New Message:
													</label>
													<div className='w-full h-40 bg-white-color mt-2 p-4'>
														<textarea
															name='newMessage'
															id=''
															className='w-full h-full outline-none rounded-md px-1 border border-light-gray-color'
														></textarea>
													</div>
												</div>

												<div className='px-6 py-4 '>
													<div className='bg-ternary-bg shadow-[0px_0px_5px_rgba(0,0,0,0.5)] p-3'>
														<label
															htmlFor=''
															className='text-green-color block py-2'
														>
															Screenshot
															Attachement (You can
															attach multiple
															image file at a
															time) x
														</label>

														<label htmlFor='fileInput'>
															<div className='text-green-color bg-light-gray-color rounded-md   outline-none w-full mt-2 cursor-pointer flex items-center overflow-hidden'>
																<p className='flex-1 px-4'>
																	{
																		uploadPhoto
																	}
																</p>
																<span className='bg-[#183851] py-3 px-4'>
																	Browser
																</span>
															</div>
															<input
																type='file'
																name='image'
																id='fileInput'
																className='hidden'
																onChange={event =>
																	handelPhotoChange(
																		event
																			.target
																			.files[0]
																	)
																}
															/>
														</label>
													</div>

													<div className=' max-h-[250px] overflow-hidden   my-6'>
														<img
															src={photoDisplay}
															alt=''
															className='h-full w-[60%] mx-auto object-cover'
														/>
													</div>
												</div>
											</div>

											<div className='m-4 flex justify-end gap-2'>
												<span onClick={closeModal}>
													<Button
														data={"Exit"}
														bg={"bg-white-color"}
													/>
												</span>
												<button type='submit'>
													<Button
														data={"Submit"}
														bg={"bg-danger-color"}
														textColor={
															"text-white-color"
														}
													/>
												</button>
											</div>
										</form>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</div>
		</div>
	);
};

export default ResponseTicket;
