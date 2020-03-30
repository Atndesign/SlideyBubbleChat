let channelName;
if (getUrlVars()["channel"]) {
  channelName = getUrlVars()["channel"];
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function ChatBubble(user, message, extra) {
  //   this.colors = [
  //     "80, 201, 206",
  //     "114, 161, 229",
  //     "152, 131, 229",
  //     "252, 211, 222"
  //   ];

  //   this.randomColors = function(colors) {
  //     let randIndex = Math.floor(Math.random() * colors.length);
  //     return colors[randIndex];
  //   };

  this.render = function() {
    let content = document.createElement("div");
    content.classList.add("content-container");
    content.style.backgroundColor = extra.userColor;
    let username = document.createElement("p");
    username.classList.add("bold");
    username.textContent = user;
    let messageContainer = document.createElement("p");
    messageContainer.textContent = message;

    content.appendChild(username);
    content.appendChild(messageContainer);
    document.body.insertBefore(
      content,
      document.getElementById("chat-container").nextSibling
    );
  };
}

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(extra);
  let chat = new ChatBubble(user, message, extra);
  chat.render();
};
ComfyJS.Init(channelName);
