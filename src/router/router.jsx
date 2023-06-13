/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardInfo from "../Pages/Dashboard/DashboardInfo/DashboardInfo";

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
				path: "/dashboard",
				element: <Dashboard />,
				children: [
					{
						path: "/dashboard",
						element: <DashboardInfo />,
					},
				],
			},
		],
	},
]);
export default router;
