import React from 'react'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className="dash">
        <Sidebar/>
        <div className="dash-content">
          <h2>Users</h2>
          <div className="d-flex gap-3">
            <div className="dash-card">
                <div className="pink-circle"></div>
                <div className="card-name">Users</div>
                <div className="card-value">2,453</div>
            </div>
            <div className="dash-card">
                <div className="purple-circle"></div>
                <div className="card-name">Active Users</div>
                <div className="card-value">2,453</div>
            </div>
            <div className="dash-card">
                <div className="orange-circle"></div>
                <div className="card-name">Users with loans</div>
                <div className="card-value">12,453</div>
            </div>
            <div className="dash-card">
                <div className="red-circle"></div>
                <div className="card-name">Users with Savings</div>
                <div className="card-value">102,453</div>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Dashboard
