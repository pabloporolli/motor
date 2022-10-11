// Archivo base para subir habitaciones a Firebase

export const Habitaciones = [
    {
    name: "Standard Room",
    description: "Amplia habitación con muebles de diseño y baño con ducha extra grande. Las habitaciones Standard cuentan con baño privado",
    amenities: ['Aire acondicionado', 'Minibar', 'Batas'],
    img: "/img/standard.jpg",
    '0123': {
        dispo: [6, 6, 6, 6, 6, 1, 0, 0, 2, 2, 5, 5, 0, 0, 1, 4, 4, 1, 3, 10, 5, 4, 5, 7, 0 ,1, 1, 1, 2, 2, 10],
        tarifasFlex: [130, 130, 120, 150, 150, 130, 130, 130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130, 145, 145, 145],
        tarifasNRF: [100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 110, 110]
    },
    '0223': {
        dispo: [9, 12, 10, 7, 5, 1, 6, 6, 1, 5, 10, 10, 9, 8,4, 10, 12, 10, 7, 5, 12, 0, 0, 1, 5, 7, 10, 9],
        tarifasFlex: [130, 130, 120, 150, 150, 130, 130, 130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130],
        tarifasNRF: [100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100]
    },
    '0323': {
        dispo: [9, 12, 10, 7, 5, 10, 6, 6, 10, 5, 10, 10, 9, 8,4, 10, 12, 10, 7, 5, 12, 4, 4, 1, 5, 7, 10, 9, 8, 8, 7],
        tarifasFlex: [130, 130, 120, 150, 150, 130, 130, 130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130,130, 130, 120, 150, 150, 130, 130, 130, 130, 130],
        tarifasNRF: [100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100, 90, 130, 130, 100, 100 ,100, 100, 100, 100,100,100]
    } 
},

{
    name: "Superior Room",
    description: "Habitación ubicada en los pisos superiores. Acceso exclusivo al gimnasio y rooftop",
    amenities: ['Aire acondicionado', 'Minibar', 'Batas', 'Cafetera'],
    img: "/img/superior.jpg",
    '0123': {
        dispo: [10, 12, 10, 7, 5, 12, 0, 0, 1, 5, 7, 10, 9, 8, 5, 10, 12, 10, 7, 5, 12, 0, 0, 1, 5, 7, 10, 9, 8, 5, 1],
        tarifasFlex: [180, 180, 180, 200, 200, 180, 180, 180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180, 180, 180, 180],
        tarifasNRF: [150, 150, 150, 180, 180, 150, 150, 150, 150, 150, 150, 150, 150, 180, 180, 150, 150, 150, 150, 150,150, 150, 150, 180, 180, 150, 150, 150, 150, 150, 150]
    },
    '0223': {
        dispo: [6, 6, 6, 6, 6, 1, 0, 0, 2, 2, 5, 5, 0, 0, 1, 4, 4, 1, 3, 10, 5, 4, 5, 7, 0 ,1, 1, 1],
        tarifasFlex: [180, 180, 180, 200, 200, 180, 180, 180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180],
        tarifasNRF: [150, 150, 150, 180, 180, 150, 150, 150, 150, 150, 150, 150, 150, 180, 180, 150, 150, 150, 150, 150,150, 150, 150, 180, 180, 150, 150, 150]
    },
    '0323': {
        dispo: [6, 6, 6, 6, 6, 1, 0, 0, 2, 2, 5, 5, 0, 0, 1, 4, 4, 1, 3, 10, 5, 4, 5, 7, 0 ,1, 1, 1, 2, 2, 0],
        tarifasFlex: [180, 180, 180, 200, 200, 180, 180, 180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180,180, 180, 180, 200, 200, 180, 180, 180, 180, 180],
        tarifasNRF: [150, 150, 150, 180, 180, 150, 150, 150, 150, 150, 150, 150, 150, 180, 180, 150, 150, 150, 150, 150,150, 150, 150, 180, 180, 150, 150, 150, 150, 150, 150]
    } 
},

{
    name: "Suite",
    description: "Suite de dos ambientes: living y habitación matrimonial. Baño con jacuzzi. Vestidor",
    amenities: ['Aire acondicionado', 'Minibar', 'Batas', 'Cafetera', 'Jacuzzi', 'Caja de seguridad'],
    img: "/img/suite.jpg",
    '0123': {
        dispo: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        tarifasFlex: [250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250],
        tarifasNRF: [220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220]
    },
    '0223': {
        dispo: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        tarifasFlex: [250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250],
        tarifasNRF: [220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220]
    },
    '0323': {
        dispo: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        tarifasFlex: [250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250, 280, 280, 200, 250, 250, 250, 250],
        tarifasNRF: [220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220, 240, 240, 220, 220, 220, 220, 220]
    } 
}

]