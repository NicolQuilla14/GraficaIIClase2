// Escena, cámara y renderizador
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Crear un cubo
const geometría = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cubo = new THREE.Mesh(geometría, material);
escena.add(cubo);

// Crear un cilindro
const geometriaCilindro = new THREE.CylinderGeometry(1, 1, 2, 32);
const materialCilindro = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const cilindro = new THREE.Mesh(geometriaCilindro, materialCilindro);
cilindro.position.x = -3; // mover a la izquierda
escena.add(cilindro);

// Crear una pirámide (cone con 4 lados)
const geometriaPiramide = new THREE.ConeGeometry(1, 2, 4);
const materialPiramide = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const piramide = new THREE.Mesh(geometriaPiramide, materialPiramide);
piramide.position.x = 3; // mover a la derecha
escena.add(piramide);

// Posicionar la cámara
camara.position.z = 5;


//generar color aleatorio
function colorAleatorio() {
    return Math.floor(Math.random() * 0xffffff);
}

//cambiar color
document.getElementById("color").addEventListener("click", () => {
    cubo.material.color.setHex(colorAleatorio());
    cilindro.material.color.setHex(colorAleatorio());
    piramide.material.color.setHex(colorAleatorio());
});

//cambiar tamaño
document.getElementById("tamano").addEventListener("click", () => {
    const escala = Math.random() * 2 + 0.5; //entre 0,5 y 2,5
    cubo.scale.set(escala, escala, escala);
    cilindro.scale.set(escala, escala, escala);
    piramide.scale.set(escala, escala, escala);
});


// Animación del cubo
function animacion() {
    requestAnimationFrame(animacion);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    cilindro.rotation.x += 0.01;
    cilindro.rotation.y += 0.01;

    piramide.rotation.x += 0.01;
    piramide.rotation.y += 0.01;

    renderizador.render(escena, camara);
}

animacion();
//saifhdgsdkjhfsdjklhfgsdljkhfgsd
// Ajustar el tamaño de la ventana al cambiar su tamaño
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});

