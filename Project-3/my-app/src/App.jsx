
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className='bg-black w-full p-10'>
      <Spline scene="https://prod.spline.design/a4292-3PVMhISb2E/scene.splinecode" />
    </main> 
  ); 
}


// // App.js or VedBot.jsx

// import React from 'react';
// import Spline from '@splinetool/react-spline';
// import './App.css';

// export default function VedBot() {
//   return (
//     <main className='app-container'>
//       {/* 3D Model */}
//       <section className="spline-wrapper">
//         <Spline scene="https://prod.spline.design/a4292-3PVMhISb2E/scene.splinecode" />
//         <div className="overlay-content">
//           <h1>🤖 Welcome to VedBot</h1>
//           <p>Ask me anything with the power of AI</p>
//         </div>
//       </section>

//       {/* Chatbot Area */}
//       <section className="chat-container">
//         <textarea id="userInput" rows="4" placeholder="Type your message here..." />
//         <button onClick={askGemini}>Send</button>
//         <div id="response">Your reply will appear here...</div>
//       </section>
//     </main>
//   );
// }

// async function askGemini() {
//   const input = document.getElementById('userInput').value.trim();
//   const responseEl = document.getElementById('response');

//   if (!input) {
//     responseEl.innerText = "Please enter a message!";
//     return;
//   }

//   responseEl.innerText = "Thinking... 🤔";

//   try {
//     const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=YOUR_API_KEY", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: input }] }]
//       })
//     });

//     const data = await response.json();
//     responseEl.innerText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
//   } catch (error) {
//     responseEl.innerText = "Error: " + error.message;
//   }
// }

// import React from "react";
// import { motion } from "framer-motion";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 text-gray-800 font-sans overflow-x-hidden">
//       {/* Header */}
//       <header className="text-center py-10">
//         <h1 className="text-5xl font-bold tracking-wide mb-3 animate-pulse">
//           Welcome to My World
//         </h1>
//         <p className="text-lg italic text-pink-500">
//           A place full of life, code & dreams ✨
//         </p>
//       </header>

//       {/* Hero Animation */}
//       <motion.div
//         className="w-full flex justify-center"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <iframe
//           src="https://my.spline.design/room-8790e53c6ec1e314eec7fcbcb389e964/"
//           frameBorder="0"
//           width="1000"
//           height="500"
//           title="3D Room"
//           className="rounded-2xl shadow-xl"
//         ></iframe>
//       </motion.div>

//       {/* About Section */}
//       <motion.section
//         className="px-8 py-20 max-w-5xl mx-auto text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h2 className="text-4xl font-semibold mb-6">Who Am I?</h2>
//         <p className="text-lg leading-8 text-gray-600">
//           A dreamer, a coder, and a curious soul exploring life through pixels
//           and ideas. I build websites that tell stories, animations that feel
//           alive, and pages that connect hearts.
//         </p>
//       </motion.section>

//       {/* Life Philosophy Section */}
//       <motion.section
//         className="px-8 py-20 bg-white max-w-4xl mx-auto rounded-xl shadow-md text-center"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-3xl font-medium mb-4 text-pink-600">
//           "Every line of code is a stroke of art"
//         </h3>
//         <p className="text-gray-700">
//           I believe life is a series of beautiful little interactions. So I build
//           things that reflect that — whether it’s a breathing loader, or a
//           button that waves.
//         </p>
//       </motion.section>

//       {/* Skills & Scroll Animations */}
//       <section className="py-24 px-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {["HTML", "CSS", "JavaScript", "React", "UI/UX", "Tailwind"].map(
//           (skill, idx) => (
//             <motion.div
//               key={skill}
//               className="bg-white rounded-3xl shadow-lg p-6 text-center"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 + idx * 0.1 }}
//             >
//               <h4 className="text-xl font-semibold text-pink-600 mb-2">
//                 {skill}
//               </h4>
//               <p className="text-gray-500">Creative & Confident</p>
//             </motion.div>
//           )
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-10 text-sm text-gray-400">
//         Made with ❤️ to impress someone special ✨
//       </footer>
//     </div>
//   );
// };

// export default App;
