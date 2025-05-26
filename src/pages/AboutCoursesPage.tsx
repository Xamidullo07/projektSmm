// import React, { useState } from "react";
// // import { courseModules } from "../data/courses";
// import { useNavigate } from "react-router-dom";
// // import AOS from "aos"; // <-- TUZATILGAN QATOR
// // import "aos/dist/aos.css"; // <-- Bu ham kerak AOS animatsiyalari ishlashi uchun

// const AboutCoursesPage: React.FC = () => {
//   const [openModule, setOpenModule] = useState<number | null>(null);
//   const navigate = useNavigate();

//   const toggleModule = (index: number) => {
//     setOpenModule(openModule === index ? null : index);
//   };

//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 1000,
//   //     once: true,
//   //   });
//   // }, []);

//   return (
//     <div className="bg-[#121212] text-white min-h-screen px-6 pb-10 pt-28">
//       <div className="max-w-6xl mx-auto">
//         <h2 data-aos="zoom-out-up" className="text-2xl font-bold mb-6">
//           Kurs Dasturi
//         </h2>

//         {courseModules.map((modul, index: number) => (
//           <div key={index} className="mb-4 bg-[#1e1e1e] rounded-lg">
//             <button
//               onClick={() => toggleModule(index)}
//               className="w-full text-left p-4 font-semibold text-lg flex justify-between "
//             >
//               <span>{modul.title}</span>
//               <span>{openModule === index ? "−" : "+"}</span>
//             </button>

//             {openModule === index && (
//               <ul data-aos="fade-up" className="px-5 pb-4">
//                 {modul.lessons.map((lesson) => (
//                   <li
//                     key={lesson.id}
//                     onClick={() => navigate(`/lesson/${lesson.id}`)}
//                     className="cursor-pointer hover:text-[#01E7C0] py-1"
//                   >
//                     {lesson.title} – {lesson.duration}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutCoursesPage;
