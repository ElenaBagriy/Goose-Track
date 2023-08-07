import { useDispatch, useSelector } from "react-redux";
import { selectThemeIsLight } from "redux/selectors";
import { toggle } from "redux/theme/themeSlise";
import sprite from '../../../../images/svg/sprite.svg';
import { TogglerButton } from "./ThemeToggler.styled";

export const ThemeToggler = () => {
    const themeIsLight = useSelector(selectThemeIsLight);
    const dispatch = useDispatch();

    const onToggleTheme = (x) => {
        dispatch(toggle());
      };

    return <TogglerButton onClick={onToggleTheme}>
            <svg height="32" width="32">
            {themeIsLight ? 
                <use href={sprite + '#moon'}></use>
         : 
                <use href={sprite + '#sun'}></use>
            }
            </svg>
    </TogglerButton>
}