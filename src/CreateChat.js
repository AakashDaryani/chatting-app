import React, { useState } from 'react'
import UploadChats from './UploadChats';
import Chats from './chats';

const CreateChat = (user) => {
  const [message, setmessages] = useState([]);
  const[chattoupload,setchattoupload] = useState('');
  const uploadChat = () =>{
      console.log(document.getElementById('messgaetobesent').value);
      console.log('user=>'+JSON.stringify(user));

      if (document.getElementById('messgaetobesent').value.length > 0) {
        console.log('chatto =>'+document.getElementById('messgaetobesent').value);
        const obj = {
          username: user,
          msg: document.getElementById('messgaetobesent').value,
        };
        let oldMessages = JSON.parse(localStorage.getItem("messages"));
        if (oldMessages === null) {
          oldMessages = [];
        }
        oldMessages.push(obj);
        console.log('oldMessage=>'+oldMessages);
        localStorage.setItem("messages", JSON.stringify(oldMessages));
        console.log(localStorage);
        document.getElementById("messgaetobesent").value = "";
        let localStorageData = JSON.parse(localStorage.getItem("messages"));
        setmessages(localStorageData);
      }
  }
  return (
   <>
   <section style={{backgroundColor: "#eee"}}>
  <div className="container py-5">

    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center p-3"
            style={{borderTop: "4px solid #ffa900"}}>
            <h5 className="mb-0">Chat messages</h5>
            <div className="d-flex flex-row align-items-center">
              <span className="badge bg-warning me-3">20</span>
              <i className="fas fa-minus me-3 text-muted fa-xs"></i>
              <i className="fas fa-comments me-3 text-muted fa-xs"></i>
              <i className="fas fa-times text-muted fa-xs"></i>
            </div>
          </div>
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px",overflow: "scroll"}}>
            <Chats user={user} message={message} setmessages={setmessages}/>
          
          </div>
          <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div className="input-group mb-0">
              <input type="text" id="messgaetobesent" className="form-control" placeholder="Type message"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-warning" type="button" id="button-addon2" style={{paddingTop: ".55rem"}} onClick={uploadChat}>
                Send
              </button>
            </div>  
          </div>
        </div>

      </div>
    </div>
    <UploadChats chattoupload={chattoupload} user={user} />
  </div>
</section>
   </>
  )
}

export default CreateChat;
