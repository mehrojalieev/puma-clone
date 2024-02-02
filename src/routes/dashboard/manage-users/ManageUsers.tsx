import "./ManageUser.scss"
import useFetch from '../../../helpers/hooks/useFetch'
import { UserTypes } from "../../../types";
import Table from "../../../components/table/Table";

const ManageUsers = () => {
  const {data} = useFetch("/admin/registered-users")
  console.log(data);
  
  return (
    <div>
      <Table type="user" data={data}/>
        {/* <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user: UserTypes) =>
                <tr key={user?._id}>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><img width={40} height={40} src={user.photo_url} alt={user.first_name} /></td>
                </tr>
                )
            }
          </tbody>
        </table> */}
    </div>
  )
}

export default ManageUsers