import React, { useState } from "react";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
  { id: 4, name: "David Wilson", email: "david@example.com", role: "Editor" },
  { id: 5, name: "Emma Davis", email: "emma@example.com", role: "Admin" }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole ? user.role === selectedRole : true;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">User Directory</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        className="border p-2 rounded w-full mb-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Role Dropdown */}
      <select
        className="border p-2 rounded w-full mb-4"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>

      {/* User List */}
      <ul className="space-y-2">
        {filteredUsers.map(user => (
          <li key={user.id} className="border p-2 rounded shadow">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-xs text-gray-700 bg-gray-200 inline-block px-2 py-1 rounded">{user.role}</p>
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users found</p>
      )}
    </div>
  );
};

export default App;
