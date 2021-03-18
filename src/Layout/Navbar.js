import React, {useState, useContext} from 'react'
import {
    Collapse,
    Navbar,
    NavbarText,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'

const NavBar = () =>{
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" light expand="md" className="text-white">
                    Jason Britto Git App
                </Link>  
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>

            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>

            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem className="text-white">
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white">Logout</NavLink>    
                            </NavItem>
                        ) : (
                            <>
                                <NavItem className="text-white">
                                    <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink>    
                                </NavItem>

                                <NavItem className="text-white">
                                    <NavLink tag={Link} to="/signin" className="text-white">SignIn</NavLink>    
                                </NavItem>
                            </>
                        )
                    }
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar