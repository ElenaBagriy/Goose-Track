import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/selectors";
import { userGetInfo } from "redux/userAuth/userAuthOperations";
import { ImageWrapper, Name } from "./UserInfo.styled";

export const UserInfo = () => {
    const dispatch = useDispatch();
    const {name, image} = useSelector(selectUser);

    useEffect(() => {
        dispatch(userGetInfo())
    }, [dispatch]);

    return <>
      {name && <><Name>{name}</Name>
        {image && name ? <ImageWrapper><img src={image} alt="avatar"/></ImageWrapper> : 
          <ImageWrapper><span alt={`Avatar ${name}`}>{name[0].toUpperCase()}</span></ImageWrapper>
        }
      </>
      }
    </>
}