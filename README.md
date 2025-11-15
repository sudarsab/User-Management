**📌 React Inline Editable Table + Form**

A simple and professional React application where users can:
Add data using a form (Name, Age, Role)
Display records in a table

Edit each row directly inside the table

Delete rows

Add a new empty row using the + button

Clean, responsive UI with plain CSS

No external libraries required

**🚀 Features**
✔ Add User via Form

Users can enter Name, Age, and Role in the form and click Add to insert the record into the table.

✔ Inline Table Editing

Each row contains Edit and Delete options.
When Edit is clicked:

All fields become editable

Save button appears

Values are updated immediately

✔ Add Empty Row (+ Button)

A + icon at the top-right allows users to insert a new empty row directly into the table and fill details inline.

✔ Clean & Professional UI

No external UI library — only React + CSS, designed to look modern and neat.

🛠️ Tech Stack

React (Functional Components + Hooks)

useState

CSS for styling

No external dependencies

📂 Project Structure
src/
│── App.js
│── App.css
└── index.js

📥 Installation & Running
1️⃣ Clone the repository
git clone https://github.com/your-username/react-editable-table.git
cd react-editable-table

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start

📸 UI Highlights

Clean form layout

Modern table design

Easy inline editing

Smooth user experience without page reloads

🧩 How It Works
➤ Form Submission

When the user enters data and clicks Add, the record is pushed into a rows state array.

➤ Row Editing

Each row has:

isEditing = true/false

Inputs appear dynamically when editing

➤ Row Addition

The + button creates an empty object:
{ name: "", age: "", role: "", isEditing: true }

Then the user types directly in the table.

**🔧 Customization**

You can easily extend features:

Add validation

Save data using LocalStorage

Connect to backend API

Add pagination

Export to CSV/Excel

Just modify the state logic or UI.

🤝 Contributing

Pull requests are welcome.
If you want major updates (backend version, Material UI version), create an issue.

📄 License

This project is open-source and free to use for learning and interview preparation.
