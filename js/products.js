

let objProductsClothes = [];

function addProducts(id, name, price, category, img, description, stock, qualification) {

    objProductsClothes.push({
        id: id,
        name: name,
        price: price,
        category: category,
        img: img,
        description: description,
        stock: stock,
        qualification: qualification
    }
    );
}

addProducts(1, "Camiseta Deportiva", 19.99, "Camisetas", "img/camiseta1.jpg", "Camiseta de material transpirable para entrenamientos intensos.", 50, 4.5);
addProducts(2, "Pantalones Cortos", 24.99, "Pantalones", "img/pantalones_cortos1.jpg", "Pantalones cortos ligeros y cómodos para gimnasio.", 40, 4.7);
addProducts(3, "Leggings de Compresión", 34.99, "Leggings", "img/leggings1.jpg", "Leggings ajustados que mejoran la circulación y el rendimiento.", 30, 4.8);
addProducts(4, "Sudadera con Capucha", 49.99, "Sudaderas", "img/sudadera1.jpg", "Sudadera con capucha perfecta para los días fríos en el gimnasio.", 25, 4.6);
addProducts(5, "Top Deportivo", 29.99, "Tops", "img/top1.jpg", "Top deportivo con soporte adecuado para actividades de alto impacto.", 45, 4.9);
addProducts(6, "Guantes de Entrenamiento", 14.99, "Accesorios", "img/guantes1.jpg", "Guantes para proteger tus manos durante el levantamiento de pesas.", 60, 4.4);
addProducts(7, "Calcetines Antideslizantes", 9.99, "Calcetines", "img/calcetines1.jpg", "Calcetines con agarre para mayor estabilidad durante el entrenamiento.", 80, 4.3);
addProducts(8, "Chaqueta Deportiva", 59.99, "Chaquetas", "img/chaqueta1.jpg", "Chaqueta ligera y resistente al agua para correr al aire libre.", 20, 4.7);
addProducts(9, "Bandas de Resistencia", 19.99, "Accesorios", "img/bandas1.jpg", "Bandas elásticas para ejercicios de resistencia y rehabilitación.", 70, 4.5);
addProducts(10, "Mallas Deportivas", 39.99, "Mallas", "img/mallas1.jpg", "Mallas con tecnología de compresión para mejorar el rendimiento.", 35, 4.8);

//console.log(objProductsClothes);


function guardarLocalStorage(){
    localStorage.setItem("prueba", JSON.stringify(objProductsClothes[6]))
}

guardarLocalStorage();

let variable = JSON.parse(localStorage.getItem("prueba"))

objProductsClothes.push(variable)
console.log(variable)

console.log(objProductsClothes);