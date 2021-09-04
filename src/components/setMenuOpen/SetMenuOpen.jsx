export default function SetMenuOpen({ setMenuOpen }) {
    return (
        <div className='setMenuOpen'>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </div>
    )
}