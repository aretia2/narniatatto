/**
 * Imágenes de la portada.
 *
 * Para añadir una foto: copiarla a src/assets/trabajos/ (o estudio/, marca/) y poner su ruta en `image`.
 * Astro genera automáticamente AVIF/WebP en varios tamaños.
 * Mientras `image` no exista, se muestra una placa "Foto pendiente" (ideal para enseñar la maqueta).
 *
 * `size` controla la composición: 'feature' (pieza protagonista), 'tall' (vertical), 'regular', 'wide'.
 */
export type Work = {
  image?: string;
  alt: string;
  title?: string;
  /** Nombre tal y como aparece en src/data/artists.ts */
  artist?: string;
  /** Estilo. Activa los filtros cuando hay al menos 2 estilos con 3 piezas cada uno. */
  category?: string;
  description?: string;
  size: 'feature' | 'tall' | 'regular' | 'wide';
  /** Punto focal del recorte, p. ej. '50% 30%'. */
  position?: string;
};

export const works: Work[] = [
  { size: 'feature', image: 'trabajos/diosa-brazo.jpg', title: 'Diosa con tocado', artist: 'Danielo', alt: 'Retrato de una diosa con tocado de luna y joyas en negro y gris sobre el brazo', position: '50% 40%' },
  { size: 'tall', image: 'trabajos/gato-luna.jpg', title: 'Gato y luna', artist: 'Danielo', alt: 'Gato con collar de joyas verdes y media luna en el gemelo', position: '50% 45%' },
  { size: 'tall', image: 'trabajos/sirena-color.jpg', title: 'Sirena a color', artist: 'Danielo', alt: 'Sirena a color con cola roja y azul en el antebrazo', position: '50% 50%' },
  { size: 'regular', image: 'trabajos/mascotas-corazones.jpg', title: 'Retratos de mascotas', artist: 'Danielo', alt: 'Tres retratos de mascotas dentro de corazones unidos por cadenas en el brazo', position: '50% 45%' },
  { size: 'regular', image: 'trabajos/rosa-rostro.jpg', title: 'Rostro en rosa', artist: 'Danielo', alt: 'Rostro femenino dentro de una rosa en el hombro', position: '50% 40%' },
  { size: 'regular', image: 'trabajos/perro-realismo.jpg', title: 'Retrato de perro', artist: 'Danielo', alt: 'Retrato realista de un perro en negro y gris', position: '50% 55%' },
  { size: 'regular', image: 'trabajos/rosa-vientos.jpg', title: 'Rosa de los vientos', artist: 'Danielo', alt: 'Rosa de los vientos en negro sólido en el hombro', position: '45% 50%' },
  { size: 'regular', image: 'trabajos/girasol.jpg', title: 'Girasol', artist: 'Danielo', alt: 'Figura con cabeza de girasol en línea fina en el antebrazo', position: '50% 40%' },
  { size: 'regular', image: 'trabajos/filigrana.jpg', title: 'Filigrana', artist: 'Danielo', alt: 'Ornamento de filigrana en línea fina en el antebrazo', position: '40% 45%' },
];

/** Foto principal del hero (src/assets/...). */
export const heroImage: { image?: string; alt: string; caption: string; position?: string } = {
  image: 'trabajos/mano-rostro.jpg',
  alt: 'Tatuaje en la mano: rostro con tocado ornamental y ondas en negro y gris que bajan por los dedos',
  caption: 'Mano · Danielo',
  position: '50% 42%',
};

/** Fotos del espacio. La segunda es opcional: si no hay, la composición se adapta. */
export const studioImages: { image?: string; alt: string }[] = [
  { image: 'trabajos/mirada-realismo.jpg', alt: 'Tatuaje realista de una mirada en negro y gris, recién hecho' },
];

/** Imagen destacada de la sección «La casa» (cartel, flash, detalle del estudio…). */
export const featureImage: { image?: string; alt: string; caption: string } = {
  image: 'trabajos/mujer-rosa.jpg',
  alt: 'Retrato de mujer con maquillaje de payaso y una rosa en negro y gris en el brazo',
  caption: 'Retrato y rosa en negro y gris',
};

/**
 * Logotipo o sello del estudio (PNG con transparencia, claro sobre oscuro), p. ej. 'marca/logo.png'.
 * Si no hay, la llamada final se muestra sin sello.
 */
export const logo: { image?: string; alt: string } = {
  image: 'marca/logo.png',
  alt: 'Logotipo de Narnia Gallery Tattoo',
};
