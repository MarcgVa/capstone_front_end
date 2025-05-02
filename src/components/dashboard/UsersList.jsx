import { setSelectedUser } from "../../slices/userSlice";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export default function UsersList() {
  const { isSuccess } = useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const loadUser = () => {
    dispatch(setSelectedUser)
  }

  return (
    <div>
      <ul>
        {isSuccess &&
          users.map((user) => {
            <li key={user.id} onclick={loadUser(user)}>
              {`${user.account.firstName} ${user.account.LastName}`}
            </li>
           })}
        
      </ul>
    </div>
  );
}
