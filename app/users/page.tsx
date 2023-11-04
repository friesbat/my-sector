import React from 'react'
interface User{
  id: number;
  name: String;
  email: String;
  address: {
    street:string;
  }
}
const UsersPage = async () => {
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[]=await res.json();
  return (
    <>
    <button className='btn btn-primary'> user list</button>
<div className="overflow-x-auto">
<table className='tabel border-radius 50rem border 2px solid transparent'>
  <thead>
    <tr>
      <th>user id</th>
      <th>full name</th>
      <th>email</th>
      <th>street</th>
    </tr>
  </thead>
  <tbody>
  {users.map(user=><tr key={user.id}>
  
  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>{user.address.street}</td>
  </tr>)}

  </tbody>

</table>
</div>
    </>
  )
}

export default UsersPage
