import { selectUser, setSelectedUser } from "../../slices/userSlice";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export default function UsersList() {
  const { isSuccess } = useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const loadUser = (user) => {
    console.log('before', user);
    dispatch(setSelectedUser(user));
  }

  
  return (
    <div className="">
      <ul className="sidebar-list">
        {isSuccess &&
          users.map((user) => {
            return (
            <li
                key={user.id}
                className="sidebar-item"
                onClick={() => {
                loadUser(user);
              }}
            >
              {`${user.account.firstName} ${user.account.lastName}`}
              </li>
            )
          })}
      </ul>
    </div>
  );
}
