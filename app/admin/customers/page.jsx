"use client"


import { Edit2, Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'

export default function page() {

  const fakeData = [
    { id: '1', firstName: 'Ahmed', lastName: 'Mohamed', email: 'ahmed@example.com' },
    { id: '2', firstName: 'Sara', lastName: 'Ali', email: 'sara@example.com'},
    { id: '3', firstName: 'Omar', lastName: 'Hassan', email: 'omar@example.com' },
    { id: '4', firstName: 'Nour', lastName: 'Ibrahim', email: 'nour@example.com' },
  ];

  const [users, setUsers] = useState(fakeData);
  // const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [editingUser, setEditingUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateUser = async (userData) => {
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const newUser = {
      ...userData,
      id: (Math.random() + 1).toString(36).substring(7),
    };
    
    setUsers([...users, newUser]);
    setIsCreateModalOpen(false);
    setIsLoading(false);
  };

  const handleUpdateUser = async (userData) => {
   

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    setUsers(users.map((user) => (user.id === userData.id ? userData : user)));
    setIsEditModalOpen(false);
    setEditingUser(null);
    setIsLoading(false);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUsers(users.filter((user) => user.id !== userId));
      setIsLoading(false);
    }
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const closeModals = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className=" bg-[#24303F]  rounded-lg shadow-lg overflow-hidden relative">
          <div className="p-6 border-b ">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white/80">Users Management</h1>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
              >
                <Plus size={20} />
                Create New User
              </button> 
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-white/90">
              <thead className="bg-[#24303F] border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#24303F] divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-md">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md">
                      {user.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md">
                      {user.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(user)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isLoading && (
            <div className="absolute inset-0 bg-[#24303F]  bg-opacity-75 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
      </div>

      {/* <Modal
        isOpen={isCreateModalOpen}
        onClose={closeModals}
        title="Create New User"
      >
        <UserForm
          onSubmit={handleCreateUser}
          onCancel={closeModals}
        />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={closeModals}
        title="Edit User"
      >
        <UserForm
          user={editingUser}
          onSubmit={handleUpdateUser}
          onCancel={closeModals}
        />
      </Modal> */}
    </div>
  );
}

