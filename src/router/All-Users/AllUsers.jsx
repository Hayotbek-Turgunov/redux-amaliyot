import { useDispatch, useSelector } from "react-redux";
import "./AllUsers.css";
import famale from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import { removeFormUsers } from "../../context/usersSlice";
const AllUsers = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  console.log(users);

  return (
    <div className="users-wrapper">
      {users?.map((item, index) => {
        return (
          <div className="users-card" key={index}>
            <img src={item.gender === "male" ? male : famale} alt="" />
            <h2>{item.name}</h2>
            <p>{item.profession}</p>
            <p>{item.age}</p>
            <button onClick={() => dispatch(removeFormUsers(item))}>
              Removes
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
