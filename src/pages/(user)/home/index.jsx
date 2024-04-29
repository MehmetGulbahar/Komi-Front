import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Info from "./_components/Info";
import Services from "./_components/Map";
import Reservation from "./_components/Reservation";

export default function index() {
  return (
    <div>
      <Hero />
      <Info />
      <Features />
      <Reservation />
      <Services />
    </div>
  );
}
