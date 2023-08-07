
import { AccentText, LogoText, LogoWrapper } from "./Logo.styled";
import logoMobile1x from '../../../../images/Logo/logo-mobile@1x.png';
import logoMobile2x from '../../../../images/Logo/logo-mobile@2x.png';
import logoTablet1x from '../../../../images/Logo/logo-tablet@1x.png';
import logoTablet2x from '../../../../images/Logo/logo-tablet@2x.png';
import logoDesktop1x from '../../../../images/Logo/logo-desktop@1x.png';
import logoDesktop2x from '../../../../images/Logo/logo-desktop@2x.png';


export const Logo = () => {
    return <LogoWrapper>
            <picture>
                <source 
                    srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`} 
                    media="(max-width: 768px)"/>
                <source 
                    srcSet={`${logoTablet1x} 1x, ${logoTablet2x} 2x`} 
                    media="(max-width: 1399px)"/>
                <source 
                    srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`} 
                    media="(min-width: 1400px)"/>
                <img
                    src={`${logoDesktop1x}`}
                    alt="logo"
                />
            </picture>
            <LogoText>G<AccentText>oo</AccentText>seTrack</LogoText>
        </LogoWrapper>
}