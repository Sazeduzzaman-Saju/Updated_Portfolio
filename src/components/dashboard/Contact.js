import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons for edit and delete

const Contact = () => {
  // Sample contact list data
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
    },
    {
      id: 3,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "555-123-4567",
    },
  ];

  // Action handlers
  const handleEdit = (id) => {
    console.log(`Edit contact with id: ${id}`);
    // Add edit functionality here
  };

  const handleDelete = (id) => {
    console.log(`Delete contact with id: ${id}`);
    // Add delete functionality here
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-2">{contact.name}</td>
              <td className="border border-gray-300 p-2">{contact.email}</td>
              <td className="border border-gray-300 p-2">{contact.phone}</td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  className="mr-2 text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(contact.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(contact.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
