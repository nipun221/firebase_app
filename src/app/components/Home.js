import Navbar from "./Navbar"
import axios from "axios";
import Chat from "./Chat";

const Home = () => {
  return (  
    <div className="flex flex-col">       
      <Navbar/>
      <div>
        <Chat />
      </div>
    </div> 
  )
}

export default Home

