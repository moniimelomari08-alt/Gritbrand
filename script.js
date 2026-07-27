// GRIT Store

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Product added to cart 🛒");
  });
});

const shopBtn = document.querySelector(".hero button");

shopBtn.addEventListener("click", () => {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth",
  });
});
