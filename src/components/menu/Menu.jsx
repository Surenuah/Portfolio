import './menu.scss'
import SetMenuOpen from "../setMenuOpen/SetMenuOpen";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <SetMenuOpen setMenuOpen={setMenuOpen}/>
            </ul>
        </div>
    )
}