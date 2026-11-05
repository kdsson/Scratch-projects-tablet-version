const showAlertButton = document.querySelector("#show-alert");

showAlertButton.addEventListener("click", () => {
  const text = window.prompt("Enter the text you want to display:");

  // Canceling the prompt returns null; show an alert only for submitted text.
  if (text !== null) {
    window.alert(text || "You didn't enter any text.");
  }
});
