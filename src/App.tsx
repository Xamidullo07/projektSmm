import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import LessonDetailPage from "./pages/LessonDetailPage";

import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLoginPage from "./components/admin/AdminLoginPage";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import { AuthProvider } from "./components/admin/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Foydalanuvchi sahifalari */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseId" element={<CourseDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="checkout/:courseId" element={<CheckoutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="course/:courseId/lesson/:moduleIndex/:lessonIndex"
            element={<LessonDetailPage />}
          />
        </Route>

        {/* Admin login sahifasi */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Himoyalangan admin sahifalari */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
