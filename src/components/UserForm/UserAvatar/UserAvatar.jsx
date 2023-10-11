import { useSelector } from "react-redux";
import { AddButton, AvatarImage, AvatarLabel, CoverImage, Error, HiddenInput, ImageWrapper } from "./UserAvatar.styled"
import { selectThemeIsLight } from "redux/selectors";
import avatarLight from '../../../images/avatarLight.png';
import avatarDark from '../../../images/avatarDark.png';
import sprite from '../../../images/svg/sprite.svg';
import { setFileUrl } from "shared/services/setFileUrl";
import {PlaygroundSpeedDial} from "./AddButton";
import React, { useEffect, useRef } from "react";
import { ref } from "yup";

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));

export const UserAvatar = React.forwardRef(({error, setIsDisabled, userImage, setUserImage, register}, ref) => {
    const isLightTheme = useSelector(selectThemeIsLight);
    const input = useRef(ref);
    


    const onChange = (e) => {
        console.log('Click');
        const file = e.target.files[0]
        setFileUrl(file, setUserImage);
        setIsDisabled(false);
    };

    const onClick = () => {
        // console.log(ref);
    }


    return <AvatarLabel>
        <ImageWrapper>
            {!userImage ? <CoverImage src={isLightTheme ? avatarLight : avatarDark} alt="avatar"/> :
            <AvatarImage src={userImage} alt="avatar"/>}
        </ImageWrapper>


        <HiddenInput ref={ref}
        {...register('image', {
            onChange: onChange,
            onBlur: (e) => {console.log(input.current);},
          })}
        type="file"
        accept="image/*"
        />


        {/* <AddButton type="button" className="add-button">
            <svg width={18} height={18}>
                <use href={sprite + '#plus'}></use>
            </svg>
        </AddButton> */}
        <PlaygroundSpeedDial onChange={onChange}/>
        {/* <p onClick={onClick} ref={input}>sfsfsff</p> */}
        
        {error && <Error role="alert">{error?.message}</Error>}
        </AvatarLabel>
})