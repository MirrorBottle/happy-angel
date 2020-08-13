import React, { Component } from 'react'
import user from "./../../user";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { Link } from "../../routes";
export default class NavbarComponent extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    render() {
        return (
            <Navbar color="dark" light expand="md" id="navbar" fixed="top">
                <Link route="/">
                    <NavbarBrand style={{ cursor: "pointer" }}>
                        <h3 className="text-uppercase">happy angel</h3>
                    </NavbarBrand>
                </Link>

                <NavbarToggler className={`${this.state.isOpen ? 'active' : ''}`} onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link route="about">
                                <NavLink style={{ cursor: "pointer" }}>About</NavLink>
                            </Link>
                        </NavItem>
                        {user("masterId") !== null && (
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav>{user("username")}</DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem>
                                        <span>Profile</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Top Up</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Settings</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
