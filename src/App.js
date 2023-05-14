import { useState } from "react";
import CreateChat from "./CreateChat";
import LoginPage from "./LoginPage";
function App() {
  const[showPage,setShowPage] = useState(false);
  const[user,setuser] = useState('');
  return (
   <>
    {showPage == false?<LoginPage setShowPage={setShowPage} setuser={setuser}/>:null}
    {showPage == true?<CreateChat user={user}/>:null}
   </>
  );
}

export default App;
