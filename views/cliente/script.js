// Constructor platos
function Plato (nombre, categoria, descripcion, precio, imagen){
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
}

//Quemar datos
const platosMenu = [
  new Plato("Toston con hogao", "Entrada", "Tostadas de plátano maduro...", 15000, "tostones.jpeg"),
  new Plato("Arepa de chocolo", "Entrada", "Arepas de chocolo con queso...", 10000, "arepa.jpeg"),
  new Plato("Bandeja paisa", "Plato fuerte", "Bandeja con frijoles, arroz...", 40000, "bandeja.jpeg"),
  new Plato("Frijolada", "Plato fuerte", "Plato de frijoles con chicharrón...", 25000, "frijolada.jpeg"),
  new Plato("Queso con bocadillo", "Postre", "Sandwich de bocadillo derretido...", 4000, "bocadillo.jpeg")
];

