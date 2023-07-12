import { data , savedNumber } from "./data";
import classes from "./Chat.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
      height: "30vw",
    overflowY: "scroll",
  p: 1,
  borderRadius:"16px"
};
function Chat() {
    const targetDivRef = useRef(null);
    const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState("");
    const [indexTemp, setIndexTemp] = useState(0);
     const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={classes.container}>
      <div className={`${classes.main_veiw}`}>
        <div className={`${classes.top_nav}`}>
          <div className={`${classes.logo}`}> CHAT APP</div>
        </div>
        <div className={`${classes.content}`}>
          <div className={`${classes.message_list}`}>
            <div className={`${classes.list_top}`}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
              />
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className={`${classes.add}`}
              >
                +
              </button>
            </div>
            <div>
              {data
                .filter((temp) =>
                  temp.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((temp, index) => {
                  return (
                    <div
                      className={`${classes.contact} ${
                        temp.unread ? classes.unread : ""
                      } ${indexTemp == index ? classes.active : ""}`}
                      onClick={() => {
                        setIndexTemp(index);
                        temp.unread = false;
                      }}
                    >
                      <div className={`${classes.icon}`}>
                        <img
                          src="https://placekitten.com/200/200"
                          alt="kitten-image"
                        />
                      </div>
                      <div className={`${classes.blurb}`}>
                        <h2 className={`${classes.name}`}>{temp?.name}</h2>
                        <p className={classes.last_messages}>
                          {temp.messages[temp.messages.length - 1]?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={`${classes.chat}`}>
            <div className={`${classes.top}`}>
              <div className={`${classes.open_message}`}>
                <i className={`${classes.fa} ${classes.fa_chevron_left}`}></i>
              </div>
              <div className={`${classes.name}`} id="open">
                {data[indexTemp].name}
              </div>
            </div>
            <div ref={targetDivRef} className={`${classes.message_container}`}>
              {data[indexTemp].messages.map((mess, index) => {
                return (
                  <div
                    className={`${classes.comment} ${
                      mess.type == "inbound" ? classes.me : classes.other
                    }`}
                  >
                    <img
                      src="https://placekitten.com/300/300?image=10"
                      alt=""
                    />
                    <div className={`${classes.bubble}`}>{mess.text}</div>
                  </div>
                );
              })}
            </div>
            <div className={`${classes.input_container}`}>
              <div className={`${classes.textarea_container}`}>
                <textarea
                  onChange={(e) => setMessages(e.target.value)}
                  value={messages}
                  type="text"
                  placeholder="message"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  if (messages == "") {
                    return;
                  }
                  data[indexTemp].messages.push({
                    text: messages,
                    type: "inbound",
                  });
                  setMessages("");
                  if (targetDivRef.current) {
                    targetDivRef.current.scrollTop =
                      targetDivRef.current.scrollHeight;
                  }
                }}
                className={`${classes.send}`}
              >
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => { setOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Contact List
          </Typography>
          {savedNumber.map((tempContact, index) => {
            return (
              <Typography key={index}
                id="modal-modal-description"
                sx={{
                  p:2,
                  background: "black",
                  color: "white",
                  cursor:"pointer",
                  "&:hover": {
                    backgroundColor: "white",
                    color:"black" // Example background color change on hover
                  },
                }}
                onClick={() => {
                  let index = -1;

                  for (let i = 0; i < data.length; i++) {
                    if (data[i].name === tempContact) {
                      index = i;
                      break;
                    }
                  }
                  if (index != -1) {
                    setIndexTemp(index);
                  } else {
                    data.push({
                      name: tempContact,
                      unread: false,
                      messages:[]
                    })
                    setIndexTemp(data.length - 1);
                  }
                  setOpen(false);
                }}
              >
                {tempContact}
              </Typography>
            );
            
          })}
        </Box>
      </Modal>
    </div>
  );
}

export default Chat;
