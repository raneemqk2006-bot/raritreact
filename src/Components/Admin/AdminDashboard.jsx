import React, { useState, useContext } from 'react';
import { MenuContext } from '../../Context/MenuContext';
import '../../Styles/admin-Style.css'


export default function Admin() {
  const { products, deleteItem, user, updateUserRole } = useContext(MenuContext);
  const [activeTab, setActiveTab] = useState('menu');
  const [editingItem, setEditingItem] = useState(null);

  const handleSaveEdit = (e) =>{
    e.preventDafault();
    if(!editingItem) 
      return;
    updateItem(editingItem);
    setEditingItem(null);
  }

  return (
    <div className="container my-5 admin-container">
      <h2 className="text-center fw-bold mb-4 admin-title" style={{ fontFamily: 'sans-serif', fontSize: '2.2rem' }}>
        Admin Dashboard
      </h2>
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setActiveTab('menu')}
          className={`btn admin-tab-btn ${activeTab === 'menu' ? 'btn-dark' : 'btn-outline-secondary'} px-4 py-2 rounded-2 fw-semibold`}
        >
          Manage Menu
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('users')}
          className={`btn admin-tab-btn ${activeTab === 'users' ? 'btn-dark' : 'btn-outline-secondary'} px-4 py-2 rounded-2 fw-semibold`}
        >
          Manage Users
        </button>
      </div>
      <hr className="my-4" />
      {activeTab === 'menu' && (
        <div className="mt-4">
          <h4 className="admin-section-title mb-3">Manage Menu</h4>
          <div className="admin-table-wrapper border">
            <table className="table align-middle mb-0 admin-table">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length > 0 ? (
                  products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="fw-medium">{item.title}</td>
                      <td className="text-muted">{item.desc || '-'}</td>
                      <td>{item.price}</td>
                      <td className="text-end">
                        <button
                            type="button"
                            className="btn btn-sm btn-delete-admin"
                            style={{backgroundColor: '#fd7e14', borderColor: '#fd7e14', color: '#fff'}}
                            onClick={() => 
                              { console.log("Deleting item with ID:", item.id);
                              if (window.confirm(`Are you sure you want to delete "${item.title}"?`)) {
                                deleteItem(item.id);
                              }
                            }}
                             >
                              Delete
                              </button>
                      </td>
                    </tr>
                  ))
                ) : (<tr>
                    <td colSpan="5" className="text-center py-4 text-muted">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'users' && (
        <div className="mt-4">
          <h4 className="admin-section-title mb-3">Manage Users</h4>
          <div className="p-4 rounded-3 border bg-white shadow-sm">
            <p className="fs-5 mb-2">Current User: <strong>{user?.name || 'Admin'}</strong></p>
            <p className="fs-5 mb-3">Role:{''}
           <span className="badge bg-dark px-3 py-2">{user?.role || 'admin'}</span></p>
            <button
              type="button"
              onClick={() => updateUserRole(user?.role === 'admin' ? 'user' : 'admin')}
              className="btn btn-outline-dark btn-sm rounded-2"
            >
              Switch Role to {user?.role === 'admin' ? 'User' : 'Admin'}
            </button>
          </div>
        </div>
      )}
      {editingItem && (
        <div
          className="modal d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingItem(null)}
                ></button>
              </div>
              <form onSubmit={handleSaveEdit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label text-secondary small">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingItem.title}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, title: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-secondary small">Price (JOD)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingItem.price}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, price: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-secondary small">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={editingItem.description || ''}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setEditingItem(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark rounded-pill px-4"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
}