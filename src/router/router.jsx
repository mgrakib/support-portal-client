/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardInfo from "../Pages/Dashboard/DashboardInfo/DashboardInfo";
import NewTicket from "../Pages/Dashboard/NewTicket/NewTicket";
import SingUp from "../Pages/SingUp/SingUp";
import AboutTicket from "../Pages/Dashboard/AboutTicket/AboutTicket";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Login />,
			},
			{
				path: "/singup",
				element: <SingUp />,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
				children: [
					{
						path: "/dashboard",
						element: <DashboardInfo />,
					},
					{
						path: "/dashboard/new_ticket",
						element: <NewTicket />,
					},
					{
						path: "/dashboard/about_ticket/:id",
						element: <AboutTicket />,
						
					},
				],
			},
		],
	},
]);
export default router;
