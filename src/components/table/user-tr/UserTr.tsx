import ApiInstance from '../../../api'
import { UserTypes } from '../../../types'

const UserTr = ({ user }: { user: UserTypes }) => {
    
    const handlePromoteUser = () => {
        ApiInstance.post("/admin/add-admin", { email: user.email })
            .then(response => console.log(response.data))
            .catch(console.log)
    }
    return (
        <tr>
            <td>{user.first_name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><img width={50} height={50} src={user.photo_url} alt="" /></td>
            <td>
                <div className="table-action__wrapper">
                    <button className="btn btn-warning" onClick={handlePromoteUser}>Promote</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default UserTr