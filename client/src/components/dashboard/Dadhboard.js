import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, getusers } from '../../Js/actions/userAction'
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import Addmodal from './Addmodal'
import Edit from "./Edit"
import './dashboard.css'

const Users = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getusers())
  }, [])
  const users = useSelector((state) => state.userReducer.users)
console.log(users)
  return (
    <div className='adminproduct'>
      <h1>ALL users</h1>
      <Addmodal />
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>last name</th>
          <th>email</th>
          <th>phone</th>
          <th>adresse</th>

          <th>action</th>
        </tr>
        {users?.map((el) => (
          <tr>
            <td>{el?._id}</td>
            <td>{el?.name}</td>
            <td>{el?.lastName}</td>
            <td>{el?.email}</td>

            <td>{el?.phone}</td>
            <td>{el.adresse}</td>

            <td className='action'>
              {/* {console.log(el)}
              <AiFillEdit user={el} /> */}
              <Edit/>
              <MdDelete
                className='delete-ico'
                onClick={() => {
                  dispatch(deleteuser(el?._id))
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Users
