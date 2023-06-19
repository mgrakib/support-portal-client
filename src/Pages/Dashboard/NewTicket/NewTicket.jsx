import { AiOutlineEye } from "react-icons/ai";
import Container from "../../../components/Container/Container";
import { useForm } from "react-hook-form";
import imagePreview from '../../../assets/download.svg'
import { useState } from "react";
import Button from "../../../components/Button/Button";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Processing from "../../../components/Loading/Processing";


const  NewTicket = () => {
	const { user } = useAuth();

	const [axiosSecure] = useAxiosSecure();
	const navigate = useNavigate();
	const [process, setPorcess] = useState(false);

    const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		console.log('first')
		setPorcess(true);
		const form = event.target;
		const problemImg = form.image.files[0];
		const fomrData = new FormData();
		fomrData.append("image", problemImg);
		
		axios
			.post(
				`https://api.imgbb.com/1/upload?key=24a1de6c18194b08379129ea976349a9`,
				fomrData
			)
			.then(async res => {
				
				const imgURL = res?.data.data.display_url;

		
				const { description, priority, systemName, ticketSubject } =
					data;
				const tokenInfo = {
					description: [{'user': description, 'img': imgURL}],
					priority,
					systemName,
					ticketSubject,
					date: new Date(),
					issuedBy: user?.displayName,
					email: user?.email
				};

				console.log(tokenInfo, ' rakib');
				
				await axiosSecure
					.post(`create-ticket`, tokenInfo)
					.then(ticketData => {

						navigate("/dashboard");
					})
					.catch(error => error);
				
			})
			.catch(err => {
				setPorcess(false);
				console.log(err?.message)
			});
	};



	const [displayImg, setDisplayImg] = useState(imagePreview);
	const [uploadPhoto, setUploadPhoto] = useState('Choose...')
	const handelUploadPhotoInfo = image => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(image);
		fileReader.onload =() => {
			setDisplayImg(fileReader.result)
		}

		setUploadPhoto(image.name);
		
	}
    return (
		<div >
			<Container>
				<div className='bg-secondary-bg px-4 py-3 rounded-md'>
					<h4 className='text-xl text-white-color mb-4 md:mb-6'>
						Create a New Ticket
					</h4>

					<div>
						<form
							className='flex flex-col gap-5 md:gap-10'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='grid md:grid-cols-2 gap-2'>
								{/* System Name */}
								<div>
									<label
										htmlFor='systemName'
										className='block text-light-gray-color'
									>
										System Name:
									</label>
									<select
										{...register("systemName")}
										id='systemName'
										className='text-green-color bg-ternary-bg rounded-md py-3 px-4 outline-none w-full mt-2'
									>
										<option value=''>Choose...</option>
										<option value='PIDS'>PIDS</option>
									</select>
								</div>
								{/* Priority  */}
								<div>
									<label
										htmlFor='priority'
										className='block text-light-gray-color'
									>
										Priority:
									</label>
									<select
										{...register("priority")}
										id='priority'
										className='text-green-color bg-ternary-bg rounded-md py-3 px-4 outline-none w-full mt-2'
									>
										<option value=''>Choose...</option>
										<option value='high'>High</option>
										<option value='medium'>Medium</option>
										<option value='low'>Low</option>
									</select>
								</div>
							</div>

							<div className=''>
								{/* Ticket Subject */}
								<div className='flex-1'>
									<label
										htmlFor='ticketSubject'
										className='block text-light-gray-color'
									>
										Ticket Subject:
									</label>
									<div className='flex items-center gap-5'>
										<input
											id='ticketSubject'
											{...register("ticketSubject")}
											className='text-green-color bg-ternary-bg rounded-md py-3 px-4 outline-none w-full mt-2'
										/>
										<button className='mx-auto px-5 py-3 bg-primary-color rounded-md text-white-color hover-effect'>
											<AiOutlineEye />
										</button>
									</div>
								</div>
							</div>

							<div>
								<label
									htmlFor='ticketSubject'
									className='block text-light-gray-color'
								>
									Description:
								</label>
								<div className='w-full h-40 bg-white-color mt-2 p-4'>
									<textarea
										{...register("description")}
										// name='description'
										id=''
										className='w-full h-full outline-none rounded-md px-1 border border-light-gray-color'
									></textarea>
								</div>
							</div>

							<div>
								<h4 className='text-white-color'>
									File Upload
								</h4>

								<div className='mt-6'>
									<label
										htmlFor=''
										className='text-green-color block py-2'
									>
										Screenshot Attachement (You can attach
										multiple image file at a time) x
									</label>

									<label htmlFor='fileInput'>
										<div className='text-green-color bg-ternary-bg rounded-md   outline-none w-full mt-2 cursor-pointer flex items-center overflow-hidden'>
											<p className='flex-1 px-4'>
												{uploadPhoto}
											</p>
											<span className='bg-[#183851] py-3 px-4'>
												Browser
											</span>
										</div>
										<input
											type='file'
											name='image'
											{...register("image")}
											id='fileInput'
											className='hidden'
											onChange={event =>
												handelUploadPhotoInfo(
													event.target.files[0]
												)
											}
										/>
									</label>
								</div>
								<div className='pt-8'>
									<img
										src={displayImg}
										alt=''
										className='w-[50%] mx-auto max-h-[350px] object-cover'
									/>
								</div>
							</div>
							<div className='mb-2'>
								<div type='submit'>
									<Button
										disabled={process}
										data={"Submit"}
										bg={"bg-light-green-color"}
										textColor={"text-white-color"}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NewTicket;