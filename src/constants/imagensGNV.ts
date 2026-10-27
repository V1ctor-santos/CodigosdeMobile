export function fotoPexelsGNV(
  idFotoGNV: number,
  larguraGNV: number = 800,
): string {
  return `https://images.pexels.com/photos/${idFotoGNV}/pexels-photo-${idFotoGNV}.jpeg?auto=compress&cs=tinysrgb&w=${larguraGNV}`;
}

export const fotoAberturaGNV = fotoPexelsGNV(8108387, 1000);
export const fotoLoginGNV = fotoPexelsGNV(8107903, 1000);
