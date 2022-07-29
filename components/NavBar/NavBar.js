import Link from 'next/link';

const NavBar = ()=>{

    const activeStyle = {
        color: "#6E85B7"
    }
    return (
        <nav id="navBar">
            <ul>
                <li>
                    <Link href="/chisinau" style={({ isActive }) => isActive ? activeStyle : undefined}>Chisinau</Link>
                </li>
                <li>
                    <Link href="/balti" style={({ isActive }) => isActive ? activeStyle : undefined}>Balti</Link>
                </li>
                <li>
                    <Link href="/cahul" style={({ isActive }) => isActive ? activeStyle : undefined}>Cahul</Link>
                </li>
                <li>
                    <Link href="/soroca" style={({ isActive }) => isActive ? activeStyle : undefined}>Soroca</Link>
                </li>
                <li>
                    <Link href="/tiraspol" style={({ isActive }) => isActive ? activeStyle : undefined}>Tiraspol</Link>
                </li>
                <li>
                    <Link href="/admin" style={({ isActive }) => isActive ? activeStyle : undefined}>Admin</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;