//code provided by tailwind-condition that checks the theme chosen in the operating system the first time the app is visited before the user preferences in the botton to change the theme of the app to darkmode.
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
}
