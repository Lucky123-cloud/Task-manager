import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/admin/Dashboard';
import CreateTask from './pages/admin/CreateTask';
import ManageUsers from './pages/admin/ManageUsers';
import ManageTask from './pages/admin/ManageTask';

import UserDashboard from '../pages/User/UserDashboard';
import MyTasks from '../pages/User/MyTasks';
import ViewTaskDetails from '../pages/User/ViewTaskDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
          </Route>

              {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/admin/tasks" element={<MyTasks />} />
            <Route path="/admin/task-details/:id" element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
