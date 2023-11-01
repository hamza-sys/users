import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/reducers/userReducer";

const Home = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch()

 const handleDelete = (id) => {
    dispatch(deleteUser(id))
 }


  return (
    <div className="container border border-gray-300 bg-gray-100 max-w-2xl max-w-2xl:mr-2  mx-auto my-12 p-2">
      <h2 className="text-xl sm:text-2xl font-bold m-2 mb-4">A Simple Crud App</h2>
      <Link to='/create'className="bg-green-600 p-2 m-2 rounded text-white"> 
        Create +
      </Link>

      <div className="overflow-auto">
        <table className="my-6 w-full">
          <thead>
            <tr className="text-left">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="px-2">
                    <Link to={`/edit/${user.id}`} className="bg-green-500 p-2 rounded cursor-pointer mr-2 text-sm text-white font-bold">Edit</Link>
                    <span className="bg-red-500 p-2 rounded cursor-pointer text-sm text-white font-bold" onClick={() => handleDelete(user.id)}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
