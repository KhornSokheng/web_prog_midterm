import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/sidebar.scss";
import "../css/global.scss";

export default function SideBar() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img
                        src="g2-logo2.png"
                        alt="Group2 Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">Group 2</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                Mujalin 123
                            </a>
                        </div>
                    </div>
                    {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                Khorn Sokheng
                            </a>
                        </div>
                    </div> */}
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active">
                                            <i
                                                className="far fa fa-home nav-icon"
                                                aria-hidden="true"
                                            />
                                            <p>Home</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link">
                                            <i className="far fa-address-card nav-icon" />
                                            <p>About us</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/skill" className="nav-link">
                                            <i className="far fas fa-graduation-cap nav-icon" />
                                            <p>Skill</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/portfolio" className="nav-link">
                                            <i className="fas fa-briefcase nav-icon" />
                                            <p>Portfolio</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contectus" className="nav-link">
                                            <i className="fas fa-phone-square-alt nav-icon" />
                                            <p>Contact us</p>
                                        </Link>
                                    </li>

                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/layout/top-nav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Top Navigation</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/top-nav-sidebar.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Top Navigation + Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/boxed.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Boxed</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/fixed-sidebar.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/fixed-sidebar-custom.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>
                                                    Fixed Sidebar <small>+ Custom Area</small>
                                                </p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/fixed-topnav.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Navbar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/fixed-footer.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Footer</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/collapsed-sidebar.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Collapsed Sidebar</p>
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    );
}
