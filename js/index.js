let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  //IBG
  document.querySelectorAll(".ibg").forEach((el) => {
    if (el.querySelector("img")) {
      el.style.backgroundImage =
        "url(" + el.querySelector("img").getAttribute("src") + ")";
      el.querySelector("img").style.display = "none";
    }
  });
});
