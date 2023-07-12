import { AccentTitle, Number, Section, Text, Title } from "./StartPageMain.styled"

export const StartPageMain = () => {

    return <Section>
        <ul>
            <li>
                <div>
                    <Number>1.</Number>
                    <Title><AccentTitle>CALENDAR</AccentTitle><p>VIEW</p></Title>
                    <Text>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</Text>
                </div>
            </li>
            <li>
                <div>
                    <Number>2.</Number>
                    <Title>SIDEBAR</Title>
                    <Text>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</Text>
                </div>
            </li>
            <li>
                <div>
                    <Number>3.</Number>
                    <Title><AccentTitle>ALL IN</AccentTitle><p>ONE</p></Title>
                    <Text>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</Text>
                </div>
            </li>
        </ul>
    </Section>
}