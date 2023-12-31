import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTicketStatus = (status) => {
    
    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useAuth()
    const {data:totalStatus={} } = useQuery({
        queryKey: ['status'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure(
				`ticket-status/?email=${user?.email}`
			);
            return result.data;
        }
    })

    console.log(totalStatus)
    return { totalStatus };
};

export default useTicketStatus;