/*MENÚ DESPLEGABLE*/
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("open");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("open");
  });
});

/* SLIDER DE IMÁGENES AUTOMÁTICO*/


const sliderImages = [
  "imagenes/fondo-corea.jpg",
  "imagenes/kpop-fondo.jpg",
  "imagenes/festividad-chuseok.jpg"
];

let index = 0;
const heroImage = document.querySelector(".hero-image");

function changeSlider() {
  index = (index + 1) % sliderImages.length;
  heroImage.src = sliderImages[index];
}

setInterval(changeSlider, 3500); // Cambia cada 3.5 segundos



/* mensaje segun la hora*/
const mensajeDiv = document.createElement("p");
mensajeDiv.id = "mensaje-horario";
mensajeDiv.style.marginTop = "20px";
mensajeDiv.style.fontSize = "1.3rem";
mensajeDiv.style.color = "#0047A0";

document.querySelector("#inicio").appendChild(mensajeDiv);

function mostrarMensaje() {
  const hora = new Date().getHours();
  let texto = "";

  if (hora < 12) texto = "¡Buenos días! Bienvenido a la cultura coreana.";
  else if (hora < 18) texto = "¡Buenas tardes! Disfruta explorando Corea.";
  else texto = "¡Buenas noches! Aprende más sobre las tradiciones coreanas.";

  mensajeDiv.textContent = texto;
}

mostrarMensaje();
