class Documento {
    clonar() {
        return Object.assign({}, this);  // Clonación del objeto
    }

    editarContenido(nuevoContenido) {
        this.contenido = nuevoContenido;
    }

    mostrarDocumento() {}
}

class CurriculumVitae extends Documento {
    constructor(contenido) {
        super();
        this.contenido = contenido;
    }

    mostrarDocumento() {
        console.log(`Curriculum Vitae: ${this.contenido}`);
    }
}

class CartaPresentacion extends Documento {
    constructor(contenido) {
        super();
        this.contenido = contenido;
    }

    mostrarDocumento() {
        console.log(`Carta de Presentación: ${this.contenido}`);
    }
}

// Uso del patrón Prototype
const cvOriginal = new CurriculumVitae("Experiencia en desarrollo de software");
const cartaOriginal = new CartaPresentacion("Estimado empleador...");

// Clonación
const cvClonado = cvOriginal.clonar();
cvClonado.editarContenido("Experiencia en gestión de proyectos");

const cartaClonada = cartaOriginal.clonar();
cartaClonada.editarContenido("Estimado reclutador...");

// Mostrar documentos originales y clonados
cvOriginal.mostrarDocumento();
cvClonado.mostrarDocumento();

cartaOriginal.mostrarDocumento();
cartaClonada.mostrarDocumento();
