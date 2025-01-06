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
        title: "AutoConnect",
        description: "Currently developing Autoconnect, a platform built using React.js for the frontend and Node.js for the backend, aimed at solving the issue of change (lower denomination of money) during auto rides, inspired by the convenience of MetroCard systems.",
        tech: ["React", "Tailwind", "JavaScript"],
        github: "https://github.com/adiiityasiingh/AutoConnect",
        live: "https://autoconnect-zeta.vercel.app/"
      }
];