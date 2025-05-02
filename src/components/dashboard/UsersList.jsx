import { setSelectedUser } from "../../slices/userSlice";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export default function UsersList() {
  const { isSuccess } = useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const loadUser = (user) => {
    dispatch(setSelectedUser(user));
  }

  
  return (
    <div className="accounts-list">
      <ul>
        {isSuccess &&
          users.map((user) => {
            return (
            <li
              key={user.id}
              onClick={() => {
                loadUser(user);
              }}
            >
              {user.account.firstName} {user.account.lastName}
              </li>
            )
          })}
      </ul>
    </div>
  );
}
