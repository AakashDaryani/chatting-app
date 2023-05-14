import { useEffect, useState } from "react";

const Chats = ({user,setmessages,message}) => {
  let userName = "";
  const [refresh, setRefresh] = useState(false);
  function handleRefresh() {
    setRefresh(!refresh);
  }
  let localStorageData = [];
  const init = () => {
    console.log(localStorage);
    localStorageData = JSON.parse(localStorage.getItem("messages"));
    userName = user.user.user;
    console.log('name=>'+userName);
    console.log(localStorageData);
    console.log(user.user.user);
    setmessages(localStorageData);
  };

  useEffect(init, []);

  return (
    <>
      {message && message.map((elle) => { // add conditional check for message
        console.log(user.user, "data");
        if (elle.username.user !== user.user) {
          return (
            <div>
              <div className="d-flex justify-content-between">
                <p className="small mb-1">{elle.username.user}</p>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }} 
                />
                <div>
                  <p
                    className="small p-2 ms-3 mb-3 rounded-3"
                    style={{ backgroundColor: "#f5f6f7" }}
                  >
                   {elle.msg}
                  </p>
                </div>
              </div>
            </div>
          );
        } else {
          return ( 
            <div>
              <div className="d-flex flex-row-reverse">
                <p className="small mb-1 ">{elle.username.user}</p>
              </div>
              <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                <div>
                  <p
                    className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning"
                  >
                    {elle.msg}
                  </p>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Chats;
