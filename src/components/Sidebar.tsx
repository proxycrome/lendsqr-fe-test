import React from 'react';
import { Link } from 'react-router-dom';
import arrowDown from '../assets/images/arrow_down.png';
import './components.scss'

const Sidebar = () => {
  return (
    <aside>
        <div className="side-content">
            <div className="header">
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
                    <p>Dashboard</p>
                </Link>
                <div className="section-title"><b>CUSTOMERS</b></div>
                <Link
                    to="#"
                    className="item active" 
                >
                    <p>Users</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                 <p>Guarantors</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Loans</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Decision Models</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Savings</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Loan Requests</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Whitelist</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Karma</p>
                </Link>
            </div>

            <div className="body">
                <div className="section-title mt-4 mb-2"><b>BUSINESSES</b></div>
                <Link
                    to="#"
                    className="item" 
                >
                    <p>Organization</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Loan Products</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Savings Products</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Fees and Charges</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Transactions</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Services</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Service Account</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Settlements</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Reports</p>
                </Link>
            </div>

            <div className="body">
                <div className="section-title mt-4 mb-2"><b>SETTINGS</b></div>
                <Link
                    to="#"
                    className="item" 
                >
                    <p>Preferences</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >

                    <p>Fees and Pricing</p>
                </Link>
                <Link
                    to="#"
                    className="item"
                >
                    <p>Audit</p>
                </Link>
            </div>
            
        </div>
    </aside>
  )
}

export default Sidebar
