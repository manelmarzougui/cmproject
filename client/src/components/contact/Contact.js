import React from 'react'
import { Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const Contact = ({user}) => {
const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
  return (
    <div className='card'>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }
      >
        <h2>{user?.name}</h2>
        <h3>{user?.lastName}</h3>

        <h4>{user?.phone}</h4>
        <h5>{user?.email}</h5>
        <h5>{user?.adresse}</h5>
      </Card>
    </div>
  )
}

export default Contact