const projectContainers = document.querySelectorAll(".project");
const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".main-nav");

projectContainers.forEach((container, index) => {
  const overlay = container.querySelector(".overlay");

  overlay.style.display = "none";

  container.addEventListener("mousemove", function (e) {
    const containerRect = container.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;

    overlay.style.filter = "";

    const rotateX =
      ((y - containerRect.height / 2) / (containerRect.height / 2)) * 20;
    const rotateY =
      ((x - containerRect.width / 2) / (containerRect.width / 2)) * 20;
    container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
  });

  container.addEventListener("mouseenter", function () {
    overlay.style.display = "block";
  });

  container.addEventListener("mouseleave", function () {
    overlay.style.filter = `opacity(0)`;
    container.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    overlay.style.backgroundPosition = `100%`;
  });
});

btn.addEventListener("click", () => {
  nav.classList.toggle("open-menu");
  if (btn.innerHTML == "Menu") {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Menu";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleVideoBtn = document.getElementById("toggle-video-btn");
  const appVideoWrapper = document.querySelector(".app-video-wrapper");

  toggleVideoBtn.addEventListener("click", function () {
    appVideoWrapper.classList.toggle("hidden");
    if (appVideoWrapper.classList.contains("hidden")) {
      toggleVideoBtn.textContent = "비디오 보기";
    } else {
      toggleVideoBtn.textContent = "비디오 숨기기";
    }
  });
});
