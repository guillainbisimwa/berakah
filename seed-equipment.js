const items = [
  {
    image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png",
    price: "Sur Devis",
    category: "dryers",
    content: {
      fr: { name: "Séchoir Solaire Intelligent", desc: "La technologie BERAKAHTech : des capteurs intégrés pour un suivi précis des paramètres, garantissant une qualité homogène et une conservation longue durée.", specs: ["Suivi Digital", "Énergie Solaire", "Inox Alimentaire", "Données en Temps Réel"] },
      en: { name: "Smart Solar Dryer", desc: "BERAKAHTech technology: integrated sensors for precise monitoring, ensuring consistent quality and long-term preservation.", specs: ["Digital Monitoring", "Solar Powered", "Food-Grade Stainless Steel", "Real-Time Data"] }
    }
  },
  {
    image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770404454/angrais-5l_heyrhc.png",
    price: "25$ / 5l",
    category: "fertilizers",
    content: {
      fr: { name: "Engrais Bio-Organique", desc: "Solution fertilisante 100% naturelle respectant l'équilibre des sols tout en maximisant la croissance des cultures.", specs: ["100% Naturel", "Riche en Nutriments", "Éco-responsable", "Usage Polyvalent"] },
      en: { name: "Bio-Organic Fertilizer", desc: "100% natural fertilizing solution respecting soil balance while maximizing crop growth.", specs: ["100% Natural", "Nutrient Rich", "Eco-friendly", "Versatile Use"] }
    }
  }
];

Promise.all(items.map(item => 
  fetch("http://localhost:3001/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  }).then(res => res.json())
)).then(results => console.log("Seeded equipment:", results)).catch(console.error);
