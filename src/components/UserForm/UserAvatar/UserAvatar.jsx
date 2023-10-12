import { useSelector } from "react-redux";
import { AvatarImage, AvatarLabel, CoverImage, Error, HiddenInput, ImageWrapper } from "./UserAvatar.styled"
import { selectThemeIsLight } from "redux/selectors";
import avatarLight from '../../../images/avatarLight.png';
import avatarDark from '../../../images/avatarDark.png';
import { setFileUrl } from "shared/services/setFileUrl";
import {SpeedDial} from "./AddButton";
import React, { useRef } from "react";


export const UserAvatar = React.forwardRef(({error, setIsDisabled, userImage, setUserImage, register}, refer) => {
    const isLightTheme = useSelector(selectThemeIsLight);
    const input = useRef(null);
    const {ref, ...rest} = register('image');

    const onChange = (e) => {
        if (!e) {
            input.current.value = '';
            setFileUrl(null, setUserImage);
            setIsDisabled(false);
            return;
        };
        const file = e.target.files[0]
        setFileUrl(file, setUserImage);
        setIsDisabled(false);
    };

    const onClick = () => {
        input.current.focus();
        input.current.click();
    };

    const onDelete = () => {
        setUserImage('')
        input.current.blur();
        onChange('')
    }


    return <AvatarLabel>
        <ImageWrapper>
            {!userImage ? <CoverImage src={isLightTheme ? avatarLight : avatarDark} alt="avatar"/> :
            <AvatarImage src={userImage} alt="avatar"/>}
        </ImageWrapper>
        <HiddenInput 
        {...rest}
        onChange= {onChange}
        ref={(e) => {
            ref(e)
            input.current = e;
          }}
        type="file"
        accept="image/*"
        />
        <SpeedDial onAddImage={onClick} onDelete={onDelete} userImage={userImage}/>
        {error && <Error role="alert">{error?.message}</Error>}
        </AvatarLabel>
})