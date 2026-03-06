// Pure CSS background — zero JS, zero rAF loop, runs on any device at full 60fps
// Replaced canvas particle system for low-end device performance
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Static ambient glows — compositor-only, no layout thrash */}
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
      <div className="bg-orb bg-orb--4" />

      {/* Drifting chalk dust specks — CSS-only, pause on reduced-motion */}
      <div className="chalk-speck chalk-speck--1" />
      <div className="chalk-speck chalk-speck--2" />
      <div className="chalk-speck chalk-speck--3" />
      <div className="chalk-speck chalk-speck--4" />
      <div className="chalk-speck chalk-speck--5" />
      <div className="chalk-speck chalk-speck--6" />
      <div className="chalk-speck chalk-speck--7" />
      <div className="chalk-speck chalk-speck--8" />

      {/* Scan-line vignette — static, zero cost */}
      <div className="scanlines" />
    </div>
  );
}
