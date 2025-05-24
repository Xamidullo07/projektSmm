// // import { useState } from "react";
// // import { modules } from "../data/courses";

// // const Sidebar = ({ selectedLesson, onSelectLesson }) => {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggle = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="w-80 bg-gray-900 text-white h-screen overflow-y-auto border-r border-gray-700 p-4">
// //       <h2 className="text-xl font-bold mb-6">JavaScript</h2>
// //       {modules.map((module, i) => (
// //         <div key={i}>
// //           <button
// //             onClick={() => toggle(i)}
// //             className="w-full text-left font-semibold py-2 hover:text-yellow-400"
// //           >
// //             {module.title}
// //           </button>
// //           {openIndex === i && (
// //             <ul className="ml-4 mt-2 space-y-2">
// //               {module.lessons.map((lesson) => (
// //                 <li
// //                   key={lesson.id}
// //                   className={`cursor-pointer px-2 py-1 rounded ${
// //                     selectedLesson?.id === lesson.id
// //                       ? "bg-blue-700 text-white"
// //                       : "hover:bg-gray-800"
// //                   }`}
// //                   onClick={() => onSelectLesson(lesson)}
// //                 >
// //                   {lesson.title}
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import { useState } from "react";

// const Sidebar = ({ modules, selected, onSelect }) => {
//   const [openModule, setOpenModule] = useState(null);

//   return (
//     <div className="w-1/4 bg-gray-900 text-white p-4 h-screen overflow-y-auto">
//       {modules.map((module, mIndex) => (
//         <div key={mIndex}>
//           <button
//             onClick={() => setOpenModule(openModule === mIndex ? null : mIndex)}
//             className="w-full text-left font-bold py-2"
//           >
//             {module.title}
//           </button>
//           {openModule === mIndex && (
//             <ul className="pl-4">
//               {module.lessons.map((lesson, lIndex) => (
//                 <li
//                   key={lIndex}
//                   className={`cursor-pointer py-1 hover:underline ${
//                     selected?.title === lesson.title ? "text-yellow-400" : ""
//                   }`}
//                   onClick={() => onSelect(lesson)}
//                 >
//                   {lesson.title}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

import { FC, useState } from "react";

interface Lesson {
  title: string;
  url: string;
}

interface Module {
  title: string;
  lessons: Lesson[];
}

interface Props {
  modules: Module[];
  selected: Lesson;
  onSelect: (lesson: Lesson) => void;
}

const CourseSidebar: FC<Props> = ({ modules, selected, onSelect }) => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <div className="w-1/4 bg-gray-900 text-white p-4 h-screen overflow-y-auto">
      {modules.map((module, mIndex) => (
        <div key={mIndex}>
          <button
            onClick={() => setOpenModule(openModule === mIndex ? null : mIndex)}
            className="w-full text-left font-bold py-2"
          >
            {module.title}
          </button>
          {openModule === mIndex && (
            <ul className="pl-4">
              {module.lessons.map((lesson, lIndex) => (
                <li
                  key={lIndex}
                  className={`cursor-pointer py-1 hover:underline ${
                    selected.title === lesson.title ? "text-yellow-400" : ""
                  }`}
                  onClick={() => onSelect(lesson)}
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseSidebar;
