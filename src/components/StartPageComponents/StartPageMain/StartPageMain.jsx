import { AccentTitle, DescriptionItem, DescriptionList, Number, Section, Text, Title } from "./StartPageMain.styled";
import calendarMobile1x from '../../../images/StartPage/calendar-mobile@1x.png';
import calendarMobile2x from '../../../images/StartPage/calendar-mobile@2x.png';
import calendarTablet1x from '../../../images/StartPage/calendar-tablet@1x.png';
import calendarTablet2x from '../../../images/StartPage/calendar-tablet@2x.png';
import calendarDesktop1x from '../../../images/StartPage/calendar-desktop@1x.png';
import calendarDesktop2x from '../../../images/StartPage/calendar-desktop@2x.png';
import sidebarMobile1x from '../../../images/StartPage/sidebar-mobile@1x.png';
import sidebarMobile2x from '../../../images/StartPage/sidebar-mobile@2x.png';
import sidebarTablet1x from '../../../images/StartPage/sidebar-tablet@1x.png';
import sidebarTablet2x from '../../../images/StartPage/sidebar-tablet@2x.png';
import sidebarDesktop1x from '../../../images/StartPage/sidebar-desktop@1x.png';
import sidebarDesktop2x from '../../../images/StartPage/sidebar-desktop@2x.png';
import dayMobile1x from '../../../images/StartPage/day-mobile@1x.png';
import dayMobile2x from '../../../images/StartPage/day-mobile@2x.png';
import dayTablet1x from '../../../images/StartPage/day-tablet@1x.png';
import dayTablet2x from '../../../images/StartPage/day-tablet@2x.png';
import dayDesktop1x from '../../../images/StartPage/day-desktop@1x.png';
import dayDesktop2x from '../../../images/StartPage/day-desktop@2x.png';



export const StartPageMain = () => {

    return <Section>
        <DescriptionList>
            <DescriptionItem>
                <div>
                    <Number>1.</Number>
                    <Title><AccentTitle>CALENDAR</AccentTitle><p>VIEW</p></Title>
                    <Text>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</Text>
                </div>
                <div>
                    <picture>
                        <source
                            srcSet={`${calendarMobile1x} 1x, ${calendarMobile2x} 2x`}
                            media="(max-width: 768px)">
                        </source>
                        <source
                            srcSet={`${calendarTablet1x} 1x, ${calendarTablet2x} 2x`}
                            media="(max-width: 1399px)">
                        </source>
                        <source
                            srcSet={`${calendarDesktop1x} 1x, ${calendarDesktop2x} 2x`}
                            media="(min-width: 1400px)">
                        </source>
                        <img src={calendarDesktop1x} alt="schedule"></img>
                    </picture>
                </div>
            </DescriptionItem>
            <DescriptionItem>
                <div>
                    <Number>2.</Number>
                    <Title>SIDEBAR</Title>
                    <Text>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</Text>
                </div>
                <div>
                    <picture>
                        <source
                            srcSet={`${sidebarMobile1x} 1x, ${sidebarMobile2x} 2x`}
                            media="(max-width: 768px)">
                        </source>
                        <source
                            srcSet={`${sidebarTablet1x} 1x, ${sidebarTablet2x} 2x`}
                            media="(max-width: 1439px)">
                        </source>
                        <source
                            srcSet={`${sidebarDesktop1x} 1x, ${sidebarDesktop2x} 2x`}
                            media="(min-width: 1440px)">
                        </source>
                        <img src={sidebarDesktop1x} alt="schedule"></img>
                    </picture>
                </div>
            </DescriptionItem>
            <DescriptionItem>
                <div>
                    <Number>3.</Number>
                    <Title><AccentTitle>ALL IN</AccentTitle><p>ONE</p></Title>
                    <Text>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</Text>
                </div>
                <div>
                    <picture>
                        <source
                            srcSet={`${dayMobile1x} 1x, ${dayMobile2x} 2x`}
                            media="(max-width: 768px)">
                        </source>
                        <source
                            srcSet={`${dayTablet1x} 1x, ${dayTablet2x} 2x`}
                            media="(max-width: 1439px)">
                        </source>
                        <source
                            srcSet={`${dayDesktop1x} 1x, ${dayDesktop2x} 2x`}
                            media="(min-width: 1440px)">
                        </source>
                        <img src={dayDesktop1x} alt="schedule"></img>
                    </picture>
                </div>
            </DescriptionItem>
        </DescriptionList>
    </Section>
}