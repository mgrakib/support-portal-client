import Container from "../../../components/Container/Container";
import ManageUsersTable from "../ManageUsersTable/ManageUsersTable";

const ManageUsers = () => {
    return (
		<div>
            <Container>
                <div>
                    <p className="text-2xl font-bold text-white-color">All Users</p>
                </div>

                <ManageUsersTable />
            </Container>
		</div>
	);
};

export default ManageUsers;