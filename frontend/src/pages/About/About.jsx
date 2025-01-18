import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import TopNav from "../../components/TopNav.jsx";

const About = () => {
  return (
    <div>
      <TopNav />
      <div className = "about" ><p>what the fuck</p>
      <p>In an ever-changing and unpredictable world, resilience has become one of the most vital traits an individual can possess. The ability to adapt to challenges, recover from setbacks, and grow stronger through adversity is not only essential for personal success but also for the collective progress of society.

Resilience is not about avoiding difficulties; it is about facing them with courage and determination. Life presents us with countless obstacles—be it personal losses, professional failures, or global crises like pandemics and climate change. What sets resilient individuals apart is their mindset. Instead of dwelling on problems, they seek solutions. Instead of giving up, they persevere. This mental strength allows them to navigate uncertainty and emerge stronger than before.


</p></div>
    </div>
  );
};

export default About;
