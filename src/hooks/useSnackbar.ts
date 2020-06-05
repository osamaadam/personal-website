export type Severity = "success" | "error";

const useSnackbar = (msg: string, severity: Severity = "success") => {
  const snackbar = document.querySelector("#snackbar");
  const snackbarContainer = document.querySelector("#snackbar-container");
  if (snackbar && snackbarContainer) {
    snackbarContainer.classList.add("snackbar-container--show");
    snackbar.classList.add(severity);
    snackbar.textContent = msg;
    setTimeout(() => {
      snackbarContainer.classList.remove("snackbar-container--show");
      snackbar.classList.remove(severity);
      snackbar.textContent = "";
    }, 3000);
  }
};

export default useSnackbar;
