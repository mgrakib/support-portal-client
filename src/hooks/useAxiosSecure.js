import axios from "axios";
import { config } from "localforage";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const useAxiosSecure = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();
	const axiosSecure = axios.create({
		baseURL: "http://localhost:5000/"
	});


	useEffect(() => {
		axiosSecure.interceptors.request.use(config => {
			const token = localStorage.getItem("access-token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		axiosSecure.interceptors.response.use(
			response => response,
			async error => {
				
				if (
					error.response &&
					(error?.response?.status === 401 ||
						error?.response?.status === 403)
				) {
					await logOut();
					navigate("/");
				}
			}
		);
	}, [axiosSecure, navigate, logOut]);

	return [axiosSecure];
};

export default useAxiosSecure;