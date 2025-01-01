import { ProjectType } from '../types/project';

export const projects: ProjectType[] = [
    {
        title: "Arduino and MPU6050 - Based Flight Controller",
        description: "-Developed a quadcopter flight controller using an ATmega328P microcontroller, managing over 2,000 lines of C++ Integrated an MPU6050 gyro and accelerometer sensor, enabling precise orientation tracking with an accuracy of ±0.01°",
        tech: ["IOT", "MERN", "C/C++", "Express","Socket.IO"],
        github: "https://github.com/adiiityasiingh/Flight-Controller",
        live: "https://drive.google.com/drive/folders/15e95dPk7ZqNHYBDVUcLxumnRBdEHZxpp?usp=sharing"
      },
      {
        title: "Live Tracking System",
        description: "Developed a real-time live tracking system using Socket.io, Node.js, Express.js, and EJS, enabling instant updates and seamless communication between clients and servers",
        tech: ["NodeJS", "ExpressJS", "Tailwind CSS","Socket.Io","JavaScript"],
        github: "https://github.com/adiiityasiingh/Livetracker",
        live: "https://livetracker-5xin.onrender.com/"
      },
      {
        title: "AutoCards",
        description: "Developed a responsive, full-stack front-end website using HTML, CSS, and JavaScript, incorporating NFC technology principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/weather-app",
        live: "https://weather-dashboard-demo.com"
      }
];