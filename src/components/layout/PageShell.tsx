import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GradientOrbs } from "../backgrounds/GradientOrbs";
import { GridPattern } from "../backgrounds/GridPattern";
import { NoiseTexture } from "../backgrounds/NoiseTexture";

export function PageShell() {
  return (
    <div className="relative min-h-screen">
      <GradientOrbs />
      <GridPattern />
      <NoiseTexture />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
