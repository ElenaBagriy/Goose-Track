import { useDispatch } from "react-redux";
import { Button } from "./LogoutButton.styled";
import { userLogout } from "redux/userAuth/userAuthOperations";
import { toast } from "react-toastify";
import sprite from '../../../../images/svg/sprite.svg';

export const LogoutButton = () => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        dispatch(userLogout())
        .unwrap()
        .then(() =>{
                toast.success('You have logged out successfully');
            })
        .catch((error) => {
            toast.error(error);
        });;
    }
    return  <Button onClick={onClick}>
        Log out
        <svg width={20} height={20}>
            <use href={sprite + '#log-out'}></use>
        </svg>
        </Button> 
}