const imgSlicer = document.getElementById("imgSlice");
const tituloSlicer = document.getElementById("tituloSlice");
const infoSlicer = document.getElementById("infoSlice");

let valAnterior = 1;

export const slicer = (val)=> {
    const pantallaActual = document.getElementById(`slicer${val}`);
    const pantallaAnterior = document.getElementById(`slicer${valAnterior}`);

    pantallaAnterior.classList.remove("activo");

    pantallaActual.classList.add("activo");

    valAnterior = val;
};