export type Severity = "success" | "error";

const useSnackbar = (msg: string, severity: Severity = "success") => {
  const snackbar = document.getElementById("snackbar");
  const snackbarContainer = document.getElementById("snackbar-container");
  if (snackbar && snackbarContainer) {
    snackbarContainer.className =
      snackbarContainer.className + ` snackbar-container--show`;
    snackbar.className = snackbar.className + ` ${severity}`;
    snackbar.textContent = msg;
    setTimeout(() => {
      snackbarContainer.className = snackbarContainer.className.replace(
        `snackbar-container--show`,
        ""
      );
      snackbar.className = snackbar.className.replace(severity, "");
      snackbar.textContent = "";
    }, 3000);
  }
};

export default useSnackbar;
