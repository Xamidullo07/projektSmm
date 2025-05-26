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
// import LessonDetailPage from "./pages/LessonDetailPage";
// import AboutCoursesPage from "./pages/AboutCoursesPage";
// import CourseSidebar from "./components/CourseSidebar";
// import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <Routes>
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
          path="/course/:courseId/lesson/:moduleIndex/:lessonIndex"
          element={<LessonDetailPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
