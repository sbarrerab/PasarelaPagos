export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: "Suscripción Mensual",
  price: 39990,
  description: [
    "Obtén información clave sin esfuerzo. ¡Potencia tu conocimiento con reportes hechos a tu medida!",
    "",
    "📝 Reportes personalizados y actualizados.",
    "🤖 Análisis automatizado con inteligencia artificial.",
    "📈 Información procesable para tomar decisiones estratégicas.",
    "⌚ Ahorro de tiempo en la investigación y análisis de tendencias.",
  ],
  img: "https://montenegrodanielfelipe.com/softcial/svg/softcial.svg",
};
