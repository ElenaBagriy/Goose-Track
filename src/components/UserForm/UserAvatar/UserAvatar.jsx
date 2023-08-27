import { useSelector } from "react-redux";
import { AddButton, AvatarImage, AvatarLabel, CoverImage, Error, HiddenInput, ImageWrapper } from "./UserAvatar.styled"
import { selectThemeIsLight } from "redux/selectors";
import avatarLight from '../../../images/avatarLight.png';
import avatarDark from '../../../images/avatarDark.png';
import sprite from '../../../images/svg/sprite.svg';
import { setFileUrl } from "shared/services/setFileUrl";

export const UserAvatar = ({error, setIsDisabled, register, userImage, setUserImage}) => {
    const isLightTheme = useSelector(selectThemeIsLight);

    return <AvatarLabel>
        <ImageWrapper>
            {!userImage ? <CoverImage src={isLightTheme ? avatarLight : avatarDark} alt="avatar"/> :
            <AvatarImage src={userImage} alt="avatar"/>}
        </ImageWrapper>
        <HiddenInput 
        {...register('image', {
            onChange: (e) => {
                const file = e.target.files[0]
                setFileUrl(file, setUserImage);
                setIsDisabled(false);
            },
          })}
        type="file"
        accept="image/*"
        />
        <AddButton type="button" className="add-button">
            <svg width={18} height={18}>
                <use href={sprite + '#plus'}></use>
            </svg>
        </AddButton>
        {error && <Error role="alert">{error?.message}</Error>}
        </AvatarLabel>
}