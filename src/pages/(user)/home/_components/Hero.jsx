import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen  " style={{backgroundImage:`url('/src/assets/logo/restaurantbackground.jpg')`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">KOMI</h1>
      <p className="mb-5">Welcome to KOMI – revolutionizing your dining experience! Our system simplifies order management, optimizes table organization, and enhances communication for a seamless and enjoyable restaurant experience.</p>
      <NavLink to="/menu"> <button className="btn bg-white">Get Order</button></NavLink>
    </div>
  </div>
</div>
  )
}
