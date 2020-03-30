function chatBubble(user, message) {
  function render() {}
}

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  if (flags.broadcaster && command === "test") {
    alert("!test was typed in chat");
  }
};
ComfyJS.Init("Atndesign");
