import React, {useContext} from 'react'
import UserContext from '../context/UserContext';
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';

const Users = ({deleteUser, item}) => {
    const { userList, setUserList } = useContext(UserContext);
  return (
  
    <tbody className="border-b text-xs lg:text-lg " key={item.id}>
    <tr>
      <td className="px-0 lg:px-3  font-medium dark:text-gray-400">
        {item.id}
      </td>
      <td className="px-0 lg:px-3 py-2">
       
        <Link to={`/users/${item.id}`}>{item.firstName}</Link>
      </td>
      <td className="px-0 lg:px-3 py-2">
        <p>{item.lastName}</p>
      </td>

      <td className="px-0 lg:px-3 py-2">
        <p>{item.email}</p>
      </td>
      <td className="px-0 lg:px-3 py-2">
        <p>{item.phone}</p>
      </td>

      <td className="px-0 lg:px-3 py-2 cursor-pointer text-green-500 text-xs lg:text-sm">
        <DoneIcon />
      </td>

      <td
    
        className="px-0 lg:px-3 py-2 cursor-pointer text-yellow-500 text-xs lg:text-2xl "
      >
        <EditIcon />
      </td>

      <td
        className="px-0 lg:px-3 py-2 cursor-pointer text-red-500 text-xs lg:text-sm w-[5px]"
        onClick={() => {
          deleteUser(item.id);
        }}
      >
        <DeleteIcon className="font-thin" />
      </td>
    </tr>
  </tbody>
  
  )
}

export default Users