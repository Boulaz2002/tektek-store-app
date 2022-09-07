import Mix from "./Mix";
import { useState } from "react";
import Sidebar from "./components/Sidebar";


export default function App() {

  const [inactive, setInactive] = useState(false)
  const bennn = {
    paddingLeft : "300px"
}
  return (
    <div >
      <Sidebar inactive={inactive} setInactive={setInactive} />
      <Mix inactive={!inactive} />
    </div>
  );
}































