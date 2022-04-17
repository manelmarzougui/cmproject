import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addUser, registerUser } from '../../Js/actions/userAction'
const Addmodal = () => {
 const dispatch = useDispatch()
   const [Newuser, setNewuser] = useState({
     name: '',
     lastName: '',
     email: '',
     adresse: '',
     phone: '',
   })
 const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)

  }
  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handelAdd =(e)=>{
    e.preventDefault();
      dispatch(addUser(Newuser))
  }
  return (
    <div className='modaal'>
      <Button type='primary' onClick={showModal}>
        Add Users
      </Button>
      <Modal
        title='Add Users'
        visible={isModalVisible}
        onOk={handelAdd}
        onCancel={handleCancel}
      >
        <div className='inp_mod'>
          <h4>Name:</h4>
          {/* <button onClick={() => setshow(!show)}>x</button>  */}
          <input
            placeholder='name'
            onChange={(e) => setNewuser({ ...Newuser, name: e.target.value })}
          />
        </div>

        <div className='inp_mod'>
          <h4>Lastname:</h4>
          <input
            placeholder='Laste name'
            onChange={(e) =>
              setNewuser({ ...Newuser, lastName: e.target.value })
            }
          />
        </div>

        <div className='inp_mod'>
          <h4>email:</h4>
          <input
            placeholder='email'
            onChange={(e) => setNewuser({ ...Newuser, email: e.target.value })}
          />
        </div>

        <div className='inp_mod'>
          <h4>adresse:</h4>
          <input
            placeholder='adresse'
            onChange={(e) =>
              setNewuser({ ...Newuser, adresse: e.target.value })
            }
          />
        </div>

        <div className='inp_mod'>
          <h4>phone number:</h4>
          <input
            placeholder='phone number'
            onChange={(e) => setNewuser({ ...Newuser, phone: e.target.value })}
          />
        </div>
        
      </Modal>
    </div>
  )
}

export default Addmodal
