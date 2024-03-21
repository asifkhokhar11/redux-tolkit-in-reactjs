import React from 'react'
import styled from 'styled-components';
// import { clearAllUsers } from './store/slices/UserSlice';
import { UseDispatch, useDispatch } from 'react-redux';
import { clearAllUsers } from './store/slices/actions';



const DeleteAllUser = () => {
const dispatch = useDispatch();







const deleteUsers = () =>{
  dispatch(clearAllUsers())
}




  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={deleteUsers}>Clear Users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.clear-btn{
  text-transform: capitalize;
  background-color: #db3338a;
  cursor: pointer;
  margin-top: 2rem;
}

`
export default DeleteAllUser;
