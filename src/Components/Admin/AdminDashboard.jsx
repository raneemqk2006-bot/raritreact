import React, { useState } from 'react';
import ManageMenu from './Manage/ManageMenu/ManageMenu';
import ManageUsers from './Manage/ManageUsers/ManageUsers';

export default function AdminDashboard() {
  const [tab, setTab] = useState('menu');

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button 
          className={`btn ${tab === 'menu' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setTab('menu')}
        >
          Manage Menu
        </button>
        <button 
          className={`btn ${tab === 'users' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setTab('users')}
        >
          Manage Users
        </button>
      </div>

      <hr />

      
      <div className="mt-4">
        {tab === 'menu' && <ManageMenu />}
        {tab === 'users' && <ManageUsers />}
      </div>
    </div>
  );
}