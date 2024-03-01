import "./ManageUser.scss"
import useFetch from '../../../helpers/hooks/useFetch'
import Table from "../../../components/table/Table"

const ManageUsers = () => {

  const {data}  = useFetch("/admin/registered-users") 
  console.log(data);
  
  return (
    <div>
      <Table  type="user" data={data}/>
    </div>
  )
}

export default ManageUsers