import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "./CONSTANTS";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    fetchUsers(page);
  }, [page, navigate]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(`${api_url}api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (user) => {
    navigate(`/users/edit/${user.id}`, { state: user });
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`${api_url}api/users/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users-container">
      <h2>Users List</h2>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} className="avatar" />
            <p>{user.first_name} {user.last_name}</p>
            <div className="user-actions">
              <button 
                className="edit-btn"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersList;
