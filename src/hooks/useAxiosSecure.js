import axios from "axios";
import { config } from "localforage";
import { useEffect } from "react";


const useAxiosSecure = () => {
    
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
			response => {
				return response;
			},
			async error => {
				if (error?.response) {
					// && (error.response.status === 401 || error.response.status === 403)
                  alert('unauthoriz access')
              }
			}
		);
    }, [axiosSecure]);
    
    return [axiosSecure];
};

export default useAxiosSecure;