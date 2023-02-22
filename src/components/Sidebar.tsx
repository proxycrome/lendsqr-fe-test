import React from 'react';
import { Link } from 'react-router-dom';
import arrowDown from '../assets/images/arrow_down.png';
import './components.scss'

const Sidebar = () => {
  return (
    <aside>
        <div className="side-content">
            <div className="header">
                {/* <i className="fa fa-grav logo-icon" aria-hidden="true"></i> */}
                <div className="title">
                    <span>Switch Organization</span>
                    <img src={arrowDown} alt="arrow down" width="10" height="6" />
                </div>
            </div>

            <div className="body">
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-tachometer item-icon" aria-hidden="true"></i> */}
                    <p>Dashboard</p>
                </Link>
                <div className="section-title"><b>CUSTOMERS</b></div>
                <Link
                    to="#"
                    className="item active" 
                >
                    {/* <i className="fa fa-users item-icon" aria-hidden="true"></i> */}
                    <p>Users</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-home item-icon" aria-hidden="true"></i> */}
                    <p>Guarantors</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-snowflake-o item-icon" aria-hidden="true"></i> */}
                    <p>Loans</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-user item-icon" aria-hidden="true"></i>
                    <p>Decision Models</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-money item-icon" aria-hidden="true"></i>
                    <p>Savings</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Loan Requests</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Whitelist</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Karma</p>
                </Link>
            </div>

            <div className="body">
                <div className="section-title mt-4 mb-2"><b>BUSINESSES</b></div>
                <Link
                    to="#"
                    className="item" 
                >
                    {/* <i className="fa fa-users item-icon" aria-hidden="true"></i> */}
                    <p>Organization</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-home item-icon" aria-hidden="true"></i> */}
                    <p>Loan Products</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-snowflake-o item-icon" aria-hidden="true"></i> */}
                    <p>Savings Products</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-user item-icon" aria-hidden="true"></i>
                    <p>Fees and Charges</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-money item-icon" aria-hidden="true"></i>
                    <p>Transactions</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Services</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Service Account</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Settlements</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <i className="fa fa-newspaper-o item-icon" aria-hidden="true"></i>
                    <p>Reports</p>
                </Link>
            </div>

            <div className="body">
                <div className="section-title mt-4 mb-2"><b>SETTINGS</b></div>
                <Link
                    to="#"
                    className="item" 
                >
                    {/* <i className="fa fa-users item-icon" aria-hidden="true"></i> */}
                    <p>Preferences</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-home item-icon" aria-hidden="true"></i> */}
                    <p>Fees and Pricing</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    {/* <i className="fa fa-snowflake-o item-icon" aria-hidden="true"></i> */}
                    <p>Audit</p>
                </Link>
            </div>
            
        </div>
    </aside>
  )
}

export default Sidebar
