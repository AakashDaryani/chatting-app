
const UploadChats = ({ chattoupload, user }) => {
  console.log("value=>" + JSON.stringify(chattoupload));
  /*if (chattoupload.length > 0) {
    console.log(chattoupload);
    const obj = {
      username: user,
      msg: chattoupload,
    };
    let oldMessages = JSON.parse(localStorage.getItem("messages"));
    if (oldMessages === null) {
      oldMessages = [];
    }
    oldMessages.push(obj);
    localStorage.setItem("messages", JSON.stringify(oldMessages));
    document.getElementById("messgaetobesent").value = "";
  }*/
  return <></>;
};

export default UploadChats;
