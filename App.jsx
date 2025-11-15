import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", age: "", role: "" });
  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addFromForm = () => {
    if (!formData.name || !formData.age || !formData.role) return;
    setRows([...rows, { ...formData, isEditing: false }]);
    setFormData({ name: "", age: "", role: "" });
  };

  const addEmptyRow = () => {
    setRows([
      ...rows,
      { name: "", age: "", role: "", isEditing: true }
    ]);
  };

  const handleEdit = (index) => {
    const updated = [...rows];
    updated[index].isEditing = true;
    setRows(updated);
  };

  const handleSave = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const finishEditing = (index) => {
    const updated = [...rows];
    updated[index].isEditing = false;
    setRows(updated);
  };

  const handleDelete = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  return (
    <div className="container">
      <h2>User Form + Inline Editable Table</h2>

      {/* Form */}
      <div className="form-box">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <button onClick={addFromForm}>Add</button>
      </div>

      {/* Table */}
      {rows.length > 0 && (
        <div className="table-container">
          <div className="table-header">
            <h3>User List</h3>
            <button className="add-btn" onClick={addEmptyRow}>+</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {row.isEditing ? (
                    <>
                      <td>
                        <input
                          value={row.name}
                          onChange={(e) =>
                            handleSave(index, "name", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          value={row.age}
                          onChange={(e) =>
                            handleSave(index, "age", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          value={row.role}
                          onChange={(e) =>
                            handleSave(index, "role", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <button onClick={() => finishEditing(index)}>
                          Save
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{row.name}</td>
                      <td>{row.age}</td>
                      <td>{row.role}</td>
                      <td>
                        <button onClick={() => handleEdit(index)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
