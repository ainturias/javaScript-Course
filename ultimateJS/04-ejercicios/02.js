
/**
 * Nombre: ancho * alto
 * 8K 7380 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

// Retornemos el nombre de la resolución.
// El valor tiene que ser mayor que la resolución.
// Caso contrario return value False.

// --------------- #1 --------------------
// function nombreResolucion(ancho, alto) {
//     if (ancho >= 7380 && alto >= 4320) {
//         return '8K';
//     }
//     if (ancho >= 3840 && alto >= 2160) {
//         return '4K';
//     }
//     if (ancho >= 2560 && alto >= 1440) {
//         return 'WQHD';
//     }
//     if (ancho >= 1920 && alto >= 1080) {
//         return 'FHD';
//     }
//     if (ancho >= 1280 && alto >= 720) {
//         return 'HD';
//     }
//     return false;
// };

// --------------- #2 --------------------
function nombreResolucion(ancho, alto) {
    if (ancho >= 7380 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return false;
    }
};

let nombre = nombreResolucion(3840, 2160);

console.log(nombre);
