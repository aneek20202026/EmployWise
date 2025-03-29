import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import "./EditUser.css";
import { api_url } from "./CONSTANTS";

const EditUser = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
  }, []);
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api_url}api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email })
      });
      
      if (response.ok) {
        alert("User updated successfully!");
        navigate("/users");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <img src={user.avatar} alt={firstName} className="avatar" />
      <form onSubmit={handleUpdate}>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-group" >
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
