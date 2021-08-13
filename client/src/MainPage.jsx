import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import MiddleBar from './MiddleBar/MiddleBar'
import RightBar from './RightBar/RightBar'

export default function MainPage() {
    return (
        <>
            <TopBar /> 
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <LeftBar/>
                <MiddleBar/>
                <RightBar/>
            </div>

        </>
    )
}
