# NoteVault

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://notevault1.netlify.app/)

</div>



NoteVault is a MERN stack note-taking application that allows users to create, edit, delete, and manage their personal notes securely. It features a clean, responsive user interface styled with custom CSS variables and utility classes, built on top of React, Bootstrap, Node.js, Express, and MongoDB.

---

## Screenshots

###  Home / Dashboard
<img width="1919" height="988" alt="Home Dashboard" src="https://github.com/user-attachments/assets/7c8b804a-0100-42ee-89d6-ac3ad2be3137" />

---

### Login Page
<img width="1919" height="994" alt="Login Page" src="https://github.com/user-attachments/assets/f91cdba7-b997-473b-a442-bdf4820bd838" />

---

###  Signup Page
<img width="1919" height="994" alt="Signup Page" src="https://github.com/user-attachments/assets/37c098e1-e818-4ca2-a10e-89961cfca7d1" />

---

###  About Page
<img width="1919" height="994" alt="About Page" src="https://github.com/user-attachments/assets/d4f426ba-aa2f-49ae-9255-a86ffc5bd1f2" />

---

###  Notes Dashboard
<img width="1919" height="994" alt="Notes Dashboard" src="https://github.com/user-attachments/assets/37dedf1b-0181-40fc-8bc8-67e19c8a47e0" />

---

###  Add Note Form
<img width="1043" height="461" alt="Add Note Form" src="https://github.com/user-attachments/assets/65f4cabb-adb3-4dd4-bd96-4911671e5dbc" />

---

###  Edit Note Modal
<img width="1919" height="991" alt="Edit Note Modal" src="https://github.com/user-attachments/assets/ace2b6e1-ebbe-40ab-b3a5-8f1845396e72" />

---

###  Delete Confirmation Modal
<img width="1919" height="984" alt="Delete Confirmation Modal" src="https://github.com/user-attachments/assets/ba991688-d387-4fdc-bb4c-8cf5f35991e1" />

---

###  Mobile View 1
<img width="464" height="893" alt="Mobile View 1" src="https://github.com/user-attachments/assets/cce50e2d-40cb-465d-952d-7351275ff4d8" />

---

###  Mobile View 2
<img width="475" height="901" alt="Mobile View 2" src="https://github.com/user-attachments/assets/16ba6d1f-40f7-405e-8fbf-358a6a4f292e" />

---

## Tech Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-003B57?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-02569B?style=for-the-badge)

---

## Features


* **Secure User Authentication**: User signup and login with JWT-based authentication, protected routes, and `bcrypt` password hashing.
* **Full CRUD Operations**: Create, view, edit, and delete personal notes.
* **Pin & Unpin Notes**: Keep important notes pinned at the top of the dashboard for quick access.
* **Tag Management**: Organize notes using predefined tags with support for up to three tags per note.
* **Instant Search**: Search notes in real time by matching titles and descriptions.
* **Tag Filtering**: Quickly filter notes by selecting predefined tag chips.
* **Delete Confirmation**: Prevent accidental note removal with a confirmation modal before deletion.
* **Custom Alert System**: Displays success and error notifications through a reusable alert component powered by the React Context API.
* **Loading States**: Includes skeleton loaders while fetching notes, inline loading indicators for note actions, and full-screen loading overlays during authentication.
* **Password Visibility Toggle**: Show or hide passwords on both the login and signup forms.
* **Responsive User Interface**: Optimized layout for desktop, tablet, and mobile devices with responsive note grids, forms, and navigation.
* **Modern Note Management Experience**: Clean interface with responsive modals, alerts, and intuitive interactions for managing notes efficiently.
---

## Folder Structure

```
notevault/
├── backend/
│   ├── middlewares/
│   │   └── fetchUser.js
│   ├── models/
│   │   ├── Note.js
│   │   └── User.js
│   ├── routes/
│   │   ├── notes.js
│   │   └── user.js
│   ├── db.js
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── About.js
    │   │   ├── AddNote.js
    │   │   ├── Alert.js
    │   │   ├── Home.js
    │ 	│ 	├── Login.js
    │   │   ├── Navbar.js
    │   │   ├── NoteItem.js
    │   │   ├── Notes.js
    │   │   ├── OverlaySpinner.js
    │   │   ├── Signup.js
    │   │   └── SkeletonNote.js
    │   ├── contexts/
    │   │   ├── Alert/
    │   │   │   ├── AlertContext.js
    │   │   │   └── AlertState.js
    │   │   └── Note/
    │   │       ├── NoteContext.js
    │   │       └── NoteState.js
    │   ├── css/
    │   ├── App.css
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## Installation

### Prerequisites
* Node.js installed locally
* MongoDB instance running locally or hosted on Atlas

### Clone the Repository
```bash
git clone [https://github.com/yourusername/notevault.git](https://github.com/muhammad-waqas99/NoteVault.git)
cd notevault
```

### Install Backend Dependencies
```bash
cd backend
npm install
```

### Install Frontend Dependencies
```bash
cd frontend
npm install
```

---

## Environment Variables

### Backend Configuration
Create a `.env` file inside the `backend/` directory:
```env
MongoDB_URI="your_mongodb_connection_string"
PORT=5000
JWT_SECRET="Your jwt secret"
```

### Frontend Configuration
Create a `.env` file inside the `frontend/` directory:
```env
REACT_APP_API_URL="http://localhost:5000"
```

---

## Running the Project

### Development Mode

You can run both servers concurrently from the `frontend` directory using:
```bash
cd frontend
npm run both
```

Alternatively, run them separately:

#### Start Backend
```bash
cd backend
npx nodemon index.js
```

#### Start Frontend
```bash
cd frontend
npm start
```

---

## Port Configuration

* **Frontend Port**: Defaults to `3000`. This is the standard port for Create React App projects. It can be changed by passing a `PORT` environment variable before running the start command (e.g., `PORT=3001 npm start`).
* **Backend Port**: Defaults to `5000`. Configured in `backend/index.js` via `process.env.PORT || 5000`. It can be customized by defining the `PORT` environment variable inside the backend's `.env` file.

---

## API Documentation

### Base URL: `/api`

| Method | Endpoint | Description | Authentication Required |
| :--- | :--- | :--- | :---: |
| **POST** | `/auth/signup` | Register a new user account | No |
| **POST** | `/auth/login` | Log in to an existing account | No |
| **POST** | `/auth/getuser` | Fetch currently logged-in user profile | Yes (`auth-token` header) |
| **GET** | `/notes/fetchallnotes` | Retrieve all notes for the authenticated user | Yes (`auth-token` header) |
| **POST** | `/notes/add-note` | Add a new note to the account | Yes (`auth-token` header) |
| **PUT** | `/notes/updatenote/:id` | Update an existing note by its unique ID | Yes (`auth-token` header) |
| **DELETE** | `/notes/deletenote/:id` | Delete a note by its unique ID | Yes (`auth-token` header) |
| **PUT** | `/notes/togglepin/:id` | Toggle the pin/unpin status of a note | Yes (`auth-token` header) |

---

## Database Models

### Collections

#### 1. `users` (Mongoose Model: `user`)
Stores user credentials and profile details.
* `name` (String, required): Full name of the user (validated to min 3 characters).
* `email` (String, required, unique): Email address used for authentication.
* `password` (String, required): Securely hashed bcrypt password string.
* `Date` (Date, default `Date.now`): Timestamp when the user was registered.
* `timestamps`: Automatically handles `createdAt` and `updatedAt` fields.

#### 2. `notes` (Mongoose Model: `note`)
Stores individual notes authored by users.
* `user` (Mongoose Schema.Types.ObjectId, ref: `user`): Linked reference to the user who owns the note.
* `title` (String, required): Note heading (validated to min 3 characters).
* `description` (String, required): Detailed body content (validated to min 6 characters).
* `tags` (Array of Strings, default `["General"]`): List of associated tag categories. Constrained by a custom validator to allow a maximum of 3 tags.
* `isPinned` (Boolean, default `false`): Status indicating if the note is pinned to the top of the feed.
* `Date` (Date, default `Date.now`): Timestamp of creation.
* `timestamps`: Automatically handles `createdAt` and `updatedAt` fields.

---

## Project Architecture

```
                       ┌─────────────────┐
                       │  React Client   │
                       └────────┬────────┘
                                │
                  Fetch requests with auth-token
                                │
                                ▼
                       ┌─────────────────┐
                       │ Express Server  │
                       └────────┬────────┘
                                │
                     Mongoose / MongoDB_URI
                                │
                                ▼
                       ┌─────────────────┐
                       │     MongoDB     │
                       └─────────────────┘
```

* **Frontend Architecture**: Built using React with the Context API acting as the central state management store. It manages discrete contexts for note state operations (`NoteState`) and flash message updates (`AlertState`). Client-side routing is handled declaratively with React Router.
* **Backend Architecture**: Formulates REST API using Express. Modular router files define endpoints under the `/api` namespace. Endpoints requiring authenticated states leverage custom middleware (`fetchUser.js`) to parse and verify inbound authorization headers.
* **Database & ORM**: Employs MongoDB for data persistence, relying on Mongoose schemas to model structured documents, enforce validations, and establish associative relationships.
* **Authentication Flow**: Uses bcrypt for secure password hashing during account registration. JWT-signed tokens are generated upon successful login/signup, returned to the client, and saved in `localStorage`. Subsequent requests send this token via the `auth-token` request header.

---

## Main Dependencies

### Backend Dependencies (`backend/package.json`)
* `express` (^5.2.1)
* `mongoose` (^9.7.0)
* `bcrypt` (^6.0.0)
* `jsonwebtoken` (^9.0.3)
* `express-validator` (^7.3.2)
* `cors` (^2.8.6)
* `dotenv` (^17.4.2)
* `env` (^0.0.2)
* `nodemon` (^3.1.14) (development tool listed in dependencies)

### Frontend Dependencies (`frontend/package.json`)
* `react` (^19.2.7)
* `react-dom` (^19.2.7)
* `react-router-dom` (^6.30.4)
* `react-scripts` (5.0.1)
* `bootstrap` (^5.3.8)
* `concurrently` (^10.0.3)
* `@fortawesome/react-fontawesome` (^3.3.1)
* `@fortawesome/free-solid-svg-icons` (^7.3.0)
* `@fortawesome/fontawesome-svg-core` (^7.3.0)
* `web-vitals` (^2.1.4)

---

## Scripts

### Backend Scripts
* `npm test`: Echoes an error message.
* Note: The backend application is launched in development using `npx nodemon index.js`.

### Frontend Scripts
* `npm start`: Runs the React app in development mode on `http://localhost:3000`.
* `npm run build`: Bundles the React application into static files for production inside the `build/` folder.
* `npm test`: Launches the test runner.
* `npm run eject`: Ejects the build tool configuration.
* `npm run both`: Uses `concurrently` to launch the React development server and nodemon on the backend server concurrently.

---

## Responsive Design

The frontend user interface is built on custom responsive CSS rules combined with Bootstrap layout containers:
* **Adaptive Grid Layout**: Displays notes in 3 columns on desktops and ultra-wide screens, 2 columns on tablets, and collapses to 1 column on mobile phones.
* **Off-Canvas Navigation Drawer**: The header navbar contains a hamburger icon button on smaller viewport widths that reveals navigation menus via slide-down collapsible transitions.
* **Fluid Tags & Forms**: Note add/edit containers and tag chip scrollers adjust widths automatically to fit smaller screens. Tag filters utilize a touch-friendly horizontal swipe container on mobile.

---

## Future Improvements


* **Rich Text Editor**: Support rich text formatting such as headings, bold, italic, lists, code blocks, and links.
* **Archive & Trash**: Allow users to archive notes or move them to a trash section before permanent deletion.
* **Custom Tags**: Let users create, edit, and manage their own custom tags instead of using only predefined categories.
* **Advanced Filtering & Sorting**: Add filtering by multiple tags, creation date, last updated date, and additional sorting options.
* **Dark Mode**: Provide a light/dark theme toggle with user preference persistence.
* **File Attachments**: Support attaching images, PDFs, and other files to notes.
* **Note Sharing**: Allow users to securely share selected notes with other registered users.
* **Export Notes**: Enable exporting notes in formats such as PDF, Markdown, or plain text.
* **Pagination / Infinite Scrolling**: Improve performance when managing a large number of notes.
* **PWA Support**: Convert the application into a Progressive Web App (PWA) with offline capabilities and install support.
---

## License


This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## Author

* **Muhammad Waqas** 

---

## Contributing

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
