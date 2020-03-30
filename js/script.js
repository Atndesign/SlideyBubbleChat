function ChatBubble(user, message) {
  this.colors = [
    "80, 201, 206",
    "114, 161, 229",
    "152, 131, 229",
    "252, 211, 222"
  ];

  this.randomColors = function(colors) {
    let randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
  };

  this.render = function() {
    let content = document.createElement("div");
    content.classList.add("content-container");
    content.style.backgroundColor =
      "rgba(" + this.randomColors(this.colors) + ",.6)";
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
  let chat = new ChatBubble(user, message);
  chat.render();
};
ComfyJS.Init("Atndesign");
