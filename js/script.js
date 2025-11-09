/* === STAR ANIMATION === */
#star-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 2.5s infinite ease-in-out, orbit 18s linear infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
}

/* When music is "playing" */
body.playing .star {
  animation-duration: 1.8s, 12s;
  filter: drop-shadow(0 0 6px white);
}

.turntable.spin .record {
  animation: spinRecord 5s linear infinite;
}

@keyframes spinRecord {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.turntable.playing .hand {
  animation: handMove 2s ease-in-out infinite alternate;
}

@keyframes handMove {
  from { transform: translateY(0) rotate(0deg); }
  to { transform: translateY(-5px) rotate(3deg); }
}
