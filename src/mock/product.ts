export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: "Suscripción mensual",
  price: 38990,
  description: [
    "Accede a miles de oportunidades de financiamiento al instante. GrantWatch te ofrece una plataforma exclusiva para encontrar becas, subvenciones y oportunidades de financiamiento adaptadas a tus necesidades.",
  
    "✅ Acceso Ilimitado: Explora más de 28,000 oportunidades de financiamiento actualizadas constantemente.",
    "✅ Filtros Avanzados: Encuentra subvenciones según categoría, elegibilidad, monto y ubicación.",
    "✅ Alertas Personalizadas: Recibe notificaciones sobre nuevas oportunidades relevantes para ti.",
    "✅ Resumen de Subvenciones: Accede a descripciones detalladas y requisitos de cada convocatoria.",
    "✅ Soporte Exclusivo: Nuestro equipo está listo para guiarte en el proceso de aplicación.",
  ],
  img: "https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781742030_102021-O.webp",
};
