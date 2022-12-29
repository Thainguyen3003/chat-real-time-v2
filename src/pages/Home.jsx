import Chat from "../components/common/chat/Chat";
import Sidebar from "../components/common/sidebar/Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
