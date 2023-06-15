import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useTickets = () => {
    const {loading, user } = useAuth();
    const {data: tickets = [] } = useQuery({
        queryKey: ["tickets"],
        enabled: !loading,
        queryFn: async () => {
            const tickets = await axios.get(
				`http://localhost:5000/get-all-ticket/?email=${user?.email}`
			); 
            return tickets.data;
        }
    });
    
    return { tickets };
};

export default useTickets;