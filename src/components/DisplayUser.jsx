import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { FaBeer} from 'react-icons/fa';
import { removeUser } from './store/slices/UserSlice';

const DisplayUser = () => {

const dispatch = useDispatch();


const data = useSelector( (state) => {
    return state.users;
})

// console.log(data)

const deleteUser = (id) => {
  dispatch(removeUser(id));
}




  return (
    <Wrapper>
      {
        data.map((user, id)=>{
            return <li key={id}>
            {user}
            <button className='btn-delete' onClick={() => deleteUser()}>
              <FaBeer className="delete-icon"/>
            </button>
            </li>
        })
      }:
    </Wrapper>
  )
}
const Wrapper = styled.section`
li{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem;
  border-bottom: 1px solid #eee;

  &:first-child{
    border-top: 1px solid #eee;
  }
}
`

export default DisplayUser
