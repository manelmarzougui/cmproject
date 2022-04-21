import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

import { useDispatch } from 'react-redux'
import { updateuser } from '../../Js/actions/userAction'

const ModaleEdit = ({ user }) => {
  const [modalEdit, setmodalEdit] = useState({})
  const [show, setshow] = useState(false)
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(updateuser({ id: user?._id, modalEdit }))
  }
  return (
    <div>
      <AiTwotoneEdit className='update_ico' onClick={() => setshow(!show)} />

      {show ? (
        <div className='addmodale'>
          <CgClose onClick={() => setshow(!show)} className='close-update' />
          <div className='inpt-name'>
            <h4>Name:</h4>
        
            <input
              placeholder='name'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, name: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <h4>last name:</h4>{' '}
            <input
              placeholder='last name'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, lastName: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <h4> phone:</h4>
            <input
              placeholder='phone'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, phone: e.target.value })
              }
            />
          </div>
        
          <button onClick={ handleEdit}>update</button>
        </div>
      ) : null}
    </div>
  )
}

export default ModaleEdit
