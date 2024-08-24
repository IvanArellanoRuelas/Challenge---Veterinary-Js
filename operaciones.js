const fs = require("fs");
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const datos = {
    Nombre: nombre,
    Edad: edad,
    TipoDeAnimal: tipo,
    ColorDeAnimal: color,
    Enfermedad: enfermedad,
  };
  const DatosPrev = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  DatosPrev.push(datos);
  fs.writeFileSync("citas.json", JSON.stringify(DatosPrev));
};

const leer = () => {
  let DatosPrev = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(DatosPrev);
};

module.exports = { registrar, leer };
