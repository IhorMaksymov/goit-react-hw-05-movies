import { Header, NavItem, Nav } from "./AppBarStyled";

const navItems = [
    { href: 'home', text: 'Home' },
    { href: 'movies', text: 'Movies'}
]

const AppBar = () => {
    return (
        <Header>
            <Nav>
                {navItems.map(({ href, text }) =>
                    <NavItem key={href} to={href}>{ text }</NavItem>
                )}
            </Nav>
        </Header>
    )
}

export default AppBar;