export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      pages: "À Propos",
      products: "Produits & Matériel",
      blog: "Actualités",
      portfolio: "Impact",
      shop: "LA SAVEUR",
      contacts: "Contact",
      getStarted: "Nous Rejoindre"
    },
    hero: {
      title1: "L'Innovation",
      title2: "Agro-Industrielle",
      title3: "au cœur de l'Afrique.",
      subtitle: "Propulsée par nos séchoirs intelligents BERAKAHTech, BERAKAH BUSINESS révolutionne la transformation agroalimentaire en Afrique, valorisant les terroirs locaux tout en éliminant les pertes post-récolte pour un impact durable.",
      btn1: "Découvrez Berakah",
      btn2: "Nos Services",
      reviews: "Lauréat Innovators Sprint Up"
    },
    mobileApp: {
      tag: "BERAKAHTech Mobile",
      title: "Maîtrisez Votre Production, au Creux de la Main",
      subtitle: "Suivez en temps réel les paramètres de vos séchoirs intelligents, optimisez vos cycles de transformation et gérez votre traçabilité. La digitalisation de l'agro-industrie africaine commence ici.",
      comingSoon: "Bientôt disponible sur",
      features: [
        "Suivi thermique en temps réel",
        "Contrôle de l'humidité",
        "Gestion des lots de production",
        "Traçabilité QR Code"
      ],
      mockup: {
        welcome: "Bonjour",
        status: "Statut Séchage",
        efficiency: "Efficacité Énergétique",
        recentBatches: "Lots Récents",
        batch1: "Épices - Lot #102",
        batch2: "Mangues - Lot #105",
        batch3: "Gingembre - Lot #98"
      }
    },
    productCategories: {
      tag: "Modèle & Innovation",
      title: "Transformation Intégrée & Décentralisée",
      desc: "Nous déployons une plateforme innovante basée sur des séchoirs solaires intelligents pour une valorisation locale optimale.",
      viewAll: "Voir notre vision",
      categories: [
        { title: "Autonomisation des Femmes", desc: "Formation et inclusion des femmes rurales au cœur de notre modèle de transformation durable.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm0_e0xozm.jpg", path: "/portfolio" },
        { title: "Valorisation Locale", desc: "Transformation de fruits, légumes et épices en ingrédients à haute valeur ajoutée.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770402441/piments_hpsf6d.jpg", path: "/shop" },
        { title: "Zéro Gaspillage", desc: "Réduction drastique des pertes post-récolte via des processus optimisés.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609422/seasoning_h1kixq.png", path: "/portfolio" },
        { title: "Technologie BERAKAHTech", desc: "Solutions de séchage solaires et digitalisées pour une efficacité écologique.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png", path: "/products" }
      ]
    },
    productsPage: {
      title: "Solutions & Technologie",
      subtitle: "Des équipements de pointe pour une transformation agroalimentaire durable, efficace et traçable.",
      filters: {
        all: "Tout",
        tools: "Outils",
        seeds: "Semences",
        fertilizers: "Engrais",
        dryers: "Séchoirs"
      },
      items: [
        {
          id: 1,
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png",
          price: "Sur Devis",
          category: "dryers",
          content: {
            fr: { name: "Séchoir Solaire Intelligent", desc: "La technologie BERAKAHTech : des capteurs intégrés pour un suivi précis des paramètres, garantissant une qualité homogène et une conservation longue durée.", specs: ["Suivi Digital", "Énergie Solaire", "Inox Alimentaire", "Données en Temps Réel"] },
            en: { name: "Smart Solar Dryer", desc: "BERAKAHTech technology: integrated sensors for precise monitoring, ensuring consistent quality and long-term preservation.", specs: ["Digital Monitoring", "Solar Powered", "Food-Grade Stainless Steel", "Real-Time Data"] }
          }
        },
        // {
        //   id: 2,
        //   image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769351097/tools_qjagjg.png",
        //   price: "45$",
        //   category: "tools",
        //   content: {
        //     fr: { name: "Kit Agricole de Précision", desc: "Outils robustes conçus pour accompagner les petits producteurs dans la transition vers une agriculture structurée et rentable.", specs: ["Acier trempé", "Ergonomie rurale", "Durabilité maximale", "Kit complet"] },
        //     en: { name: "Precision Farming Kit", desc: "Robust tools designed to support smallholders in transitioning to structured and profitable agriculture.", specs: ["Hardened Steel", "Rural Ergonomics", "Maximum Durability", "Full Kit"] }
        //   }
        // },
        // {
        //   id: 3,
        //   image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769351094/seed_g0gqxv.png",
        //   price: "25$ / sac",
        //   category: "seeds",
        //   content: {
        //     fr: { name: "Semences de Maïs Hybride", desc: "Semences sélectionnées pour leur haut rendement et leur résistance aux climats tropicaux, idéales pour booster la production locale.", specs: ["Haut Rendement", "Résistance Maladies", "Cycle Court", "Qualité Certifiée"] },
        //     en: { name: "Hybrid Corn Seeds", desc: "Selected seeds for high yield and resistance to tropical climates, ideal for boosting local production.", specs: ["High Yield", "Disease Resistance", "Short Cycle", "Certified Quality"] }
        //   }
        // },
        {
          id: 4,
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770404454/angrais-5l_heyrhc.png",
          price: "25$ / 5l",
          category: "fertilizers",
          content: {
            fr: { name: "Engrais Bio-Organique", desc: "Solution fertilisante 100% naturelle respectant l'équilibre des sols tout en maximisant la croissance des cultures.", specs: ["100% Naturel", "Riche en Nutriments", "Éco-responsable", "Usage Polyvalent"] },
            en: { name: "Bio-Organic Fertilizer", desc: "100% natural fertilizing solution respecting soil balance while maximizing crop growth.", specs: ["100% Natural", "Nutrient Rich", "Eco-friendly", "Versatile Use"] }
          }
        }
      ]
    },

    shopPage: {
      items: [
        // --- TISANES (ORDRE ALPHABÉTIQUE) ---
        // Thé Ansima - infusion apaisante au moringa et bissap
        { 
          id: 1, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770406950/ansima_v7reyz.jpg", 
          price: "5.00$", 
          rating: 4.9, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Ansima", desc: "Une infusion apaisante conçue pour favoriser la relaxation profonde et le bien-être intestinal après les repas.", specs: ["Moringa & Bissap", "Aide Digestive", "100% Naturel", "Sans Caféine"] },
            en: { name: "Ansima Tea", desc: "A soothing infusion designed to promote deep relaxation and digestive comfort after meals.", specs: ["Moringa & Hibiscus", "Digestive Aid", "100% Natural", "Caffeine-Free"] }
          }
        },
        { 
          id: 2, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769591149/Th%C3%A9_Ansim_70g_gdqwlt.jpg", 
          price: "5.00$", 
          rating: 5.0, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Ansim", desc: "Un mélange vitalisant qui combine la fraîcheur du citron à la chaleur du gingembre pour purifier votre organisme.", specs: ["Citronnelle & Gingembre", "Effet Détox", "Brûle-graisse", "Riche en Vitamine C"] },
            en: { name: "Ansim Tea", desc: "A vitalizing blend combining lemon freshness with ginger warmth to purify your body and boost immunity.", specs: ["Lemongrass & Ginger", "Detox Effect", "Fat Burning", "Rich in Vitamin C"] }
          }
        },
        // Thé Aganz - explosion de saveurs fruitées et épicées
        { 
          id: 3, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770406949/aganz_kj0rgc.jpg", 
          price: "5.00$", 
          rating: 4.8, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Aganz", desc: "Une explosion de saveurs fruitées et épicées pour renforcer vos défenses naturelles et tonifier votre journée.", specs: ["Clous de Girofle & Orange", "Immunité Boost", "Antioxydant", "Arôme Citronné"] },
            en: { name: "Aganz Tea", desc: "An explosion of fruity and spicy flavors to strengthen natural defenses and tone your day.", specs: ["Clove & Orange", "Immune Boost", "Antioxidant", "Citrus Aroma"] }
          }
        },
        { 
          id: 4, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770406949/agish_sbv66p.jpg", 
          price: "5.00$", 
          rating: 4.8, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Agish", desc: "Une infusion de caractère alliant le piquant du poivre noir au gingembre pour un effet stimulant immédiat.", specs: ["Poivre Noir & Gingembre", "Stimulant Naturel", "Anti-inflammatoire", "100% Pur"] },
            en: { name: "Agish Tea", desc: "A bold infusion pairing black pepper heat with ginger for an immediate stimulating and anti-inflammatory effect.", specs: ["Black Pepper & Ginger", "Natural Stimulant", "Anti-inflammatory", "100% Pure"] }
          }
        },
        // Thé Andem - thé gourmand pomme et cannelle
        { 
          id: 5, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770406949/andem_powqpa.jpg", 
          price: "5.00$", 
          rating: 4.8, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Andem", desc: "Le réconfort d'un thé gourmand aux notes de pomme et de cannelle, parfait pour une pause douceur équilibrée.", specs: ["Pomme & Cannelle", "Régulateur Glycémique", "Sans Sucre Ajouté", "Saveur Douce"] },
            en: { name: "Andem Tea", desc: "A comforting gourmet tea with apple and cinnamon notes, perfect for a balanced, sugar-free sweet break.", specs: ["Apple & Cinnamon", "Glucose Regulator", "No Added Sugar", "Sweet Flavor"] }
          }
        },
        // Thé Ahan - cocktail drainant ananas et concombre
        { 
          id: 6, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770406949/ahan_dpkyun.jpg", 
          price: "5.00$", 
          rating: 4.8, 
          category: "Tisanes", 
          weight: "70g", 
          content: {
            fr: { name: "Thé Ahan", desc: "Un cocktail de plantes drainantes pour accompagner votre routine minceur avec fraîcheur et légèreté.", specs: ["Ananas & Concombre", "Action Drainante", "Minceur", "Hydratation Optimale"] },
            en: { name: "Ahan Tea", desc: "A cocktail of draining plants to support your weight loss routine with freshness and lightness.", specs: ["Pineapple & Cucumber", "Draining Action", "Slimming Support", "Optimal Hydration"] }
          }
        },
    
        // --- FARINES & CÉRÉALES ---
        // Farine bouillie - mélange nutritionnel complet
        { 
          id: 7, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770479979/farine-boullie_qq8igb.jpg", 
          price: "5.00$", 
          rating: 4.9, 
          category: "Farines", 
          weight: "1kg", 
          content: {
            fr: { name: "Farine Bouillie", desc: "Un mélange nutritionnel complet et fortifié, idéal pour la croissance des enfants et la vitalité des adultes.", specs: ["Sorgho, Soja & Sésame", "Riche en Protéines", "Base Maïs Bio", "Saveur Banane"] },
            en: { name: "Porridge Flour", desc: "A complete, fortified nutritional blend ideal for child growth and adult vitality.", specs: ["Sorghum, Soy & Sesame", "High Protein", "Bio Corn Base", "Banana Flavor"] }
          }
        },
        // Farine de sorgho - sans gluten, riche en fer
        { 
          id: 33, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609211/sorghum-flour_m3vgwe.jpg", 
          price: "10.00$", 
          rating: 4.7, 
          category: "Farines", 
          weight: "1kg", 
          content: {
            fr: { name: "Farine de Sorgho", desc: "Une farine sans gluten riche en fer et en fibres, parfaite pour des bouillies nutritives et des pâtisseries saines.", specs: ["Sans Gluten", "Riche en Fer", "Indice Glycémique Bas", "Énergie Durable"] },
            en: { name: "Sorghum Flour", desc: "A gluten-free flour rich in iron and fiber, perfect for nutritious porridges and healthy pastries.", specs: ["Gluten-Free", "Rich in Iron", "Low Glycemic Index", "Sustainable Energy"] }
          }
        },
        
    
        // --- MIELS ---
        // Miel naturel - pur et brut, récolte éthique
        { 
          id: 8, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769378687/honey_gaf3ao.png", 
          price: "5.00$", 
          rating: 5.0, 
          category: "Miels", 
          weight: "0.5kg", 
          content: {
            fr: { name: "Miel Naturel", desc: "Miel pur et brut récolté dans le respect de la biodiversité, offrant toutes les vertus des forêts vierges de la RDC.", specs: ["100% Bio & Brut", "Récolte Éthique", "Origine RDC", "Sans Additifs"] },
            en: { name: "Natural Honey", desc: "Pure, raw honey harvested sustainably to offer the full virtues of the DRC's virgin forests.", specs: ["100% Bio & Raw", "Ethical Harvest", "Made in DRC", "No Additives"] }
          }
        },
        // Miel naturel format 1kg - version économique
        { 
          id: 50, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770309621/honey1kg_zyupcz.jpg", 
          price: "10.00$", 
          rating: 5.0, 
          category: "Miels", 
          weight: "1kg", 
          content: {
            fr: { name: "Miel Naturel (1kg)", desc: "Miel pur et brut récolté dans le respect de la biodiversité, format économique pour les grandes familles.", specs: ["100% Bio & Brut", "Récolte Éthique", "Format Familial", "Origine RDC"] },
            en: { name: "Natural Honey (1kg)", desc: "Pure, raw honey harvested sustainably, economy size for large families.", specs: ["100% Bio & Raw", "Ethical Harvest", "Family Size", "Made in DRC"] }
          }
        },
        // Miel énergisant - enrichi aux épices naturelles
        { 
          id: 9, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769158567/Miel_detox-energisant_0_5_Kg_cduh4g.jpg", 
          price: "7.50$", 
          rating: 4.9, 
          category: "Miels", 
          weight: "0.5kg", 
          content: {
            fr: { name: "Miel Energisant", desc: "Un miel médicinal enrichi aux épices naturelles pour booster votre énergie et purifier vos voies respiratoires.", specs: ["Gingembre & Girofle", "Soutien Énergétique", "Action Antibactérienne", "100% Naturel"] },
            en: { name: "Energy Honey", desc: "Medicinal honey enriched with natural spices to boost energy and clear respiratory tracts.", specs: ["Ginger & Clove", "Energy Support", "Antibacterial", "100% Natural"] }
          }
        },
    
        // --- HUILES ---
        // Huile de ricin - fortifiant capillaire et cutané
        { 
          id: 10, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769591284/huile_de_ricin_j01rub.jpg", 
          price: "10.00$", 
          rating: 4.8, 
          category: "Huiles", 
          weight: "120ml", 
          content: {
            fr: { name: "Huile de Ricin", desc: "Une huile dense et riche, reconnue pour stimuler la repousse des cheveux et fortifier les ongles et la peau.", specs: ["Pression à Froid", "Riche en Acide Ricinoléique", "Fortifiant Capillaire", "Vierge"] },
            en: { name: "Castor Oil", desc: "A dense, nutrient-rich oil known to stimulate hair growth and strengthen nails and skin.", specs: ["Cold Pressed", "Rich in Ricinoleic Acid", "Hair Fortifier", "Virgin Oil"] }
          }
        },
        // Huile de carotte - éclat du teint et propriétés antioxydantes
        { 
          id: 11, 
          image: "/saveur/Huiledecarotte120ml.JPG", 
          price: "10.00$", 
          rating: 4.8, 
          category: "Huiles", 
          weight: "120ml", 
          content: {
            fr: { name: "Huile de Carotte", desc: "Une huile macérée précieuse qui illumine le teint et possède des vertus antioxydantes exceptionnelles grâce au bêta-carotène.", specs: ["Éclat du Teint", "Riche en Bêta-carotène", "100% Végétal", "Culture Locale"] },
            en: { name: "Carrot Oil", desc: "A precious macerated oil that brightens the complexion and offers exceptional antioxidant properties thanks to beta-carotene.", specs: ["Skin Brightening", "Rich in Beta-Carotene", "100% Plant-Based", "Local Culture"] }
          }
        },
        // Huile d'amande douce - soin peaux sensibles, riche en vitamine E
        { 
          id: 34, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609210/oil-sweet_almond_ie7tvk.jpg", 
          price: "12.00$", 
          rating: 4.9, 
          category: "Huiles", 
          weight: "250ml", 
          content: {
            fr: { name: "Huile d'Amande Douce", desc: "Une huile fine et apaisante, idéale pour nourrir la peau en profondeur et fortifier les cheveux délicats.", specs: ["Pressée à Froid", "Soin Peaux Sensibles", "Riche en Vitamine E", "100% Pure"] },
            en: { name: "Sweet Almond Oil", desc: "A fine and soothing oil, ideal for deeply nourishing the skin and strengthening delicate hair.", specs: ["Cold Pressed", "Sensitive Skin Care", "Rich in Vitamin E", "100% Pure"] }
          }
        },
    
        // --- POUDRES D'ASSAISONNEMENT & ÉPICES ---

        // --- NEW ARRIVALS (200g SERIES) ---
        { 
          id: 48, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310926/IMG_7829_337715686_fsvok0.jpg", 
          price: "10.00$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Carotte (200g)", desc: "Carotte pure déshydratée et moulue, riche en bêta-carotène pour colorer vos sauces.", specs: ["100% Naturel", "Riche en Vitamine A", "Douceur Naturelle", "Format Moyen"] },
            en: { name: "Carrot Powder (200g)", desc: "Pure dehydrated and ground carrot, rich in beta-carotene to color your sauces.", specs: ["100% Natural", "Rich in Vitamin A", "Natural Sweetness", "Medium Format"] }
          }
        },
        { 
          id: 49, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310924/IMG_7826_-1928564354_oaz3bv.jpg", 
          price: "7.00$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Céleri (200g)", desc: "Arôme intense de céleri frais, parfait pour les bouillons et les régimes pauvres en sodium.", specs: ["Diurétique", "Arôme Puissant", "Sans Sel Ajouté", "Qualité Export"] },
            en: { name: "Celery Powder (200g)", desc: "Intense fresh celery aroma, perfect for broths and low-sodium diets.", specs: ["Diuretic", "Powerful Aroma", "No Added Salt", "Export Quality"] }
          }
        },
        { 
          id: 57, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310924/IMG_7822_-1352430060_bglocj.jpg", 
          price: "10.00$", 
          rating: 4.7, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Poireau", desc: "La saveur délicate du poireau en poudre pour sublimer vos potages et vos quiches.", specs: ["Saveur Fine", "Prêt à l'Emploi", "Séchage Douceur", "100% Légume"] },
            en: { name: "Leek Powder", desc: "The delicate flavor of leek powder to enhance your soups and quiches.", specs: ["Fine Flavor", "Ready to Use", "Gentle Drying", "100% Vegetable"] }
          }
        },
        { 
          id: 51, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310922/IMG_7818_-2080515287_tflfzy.jpg", 
          price: "10.00$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Ail en Poudre (200g)", desc: "Ail sélectionné et moulu pour une saveur punchy sans la corvée d'épluchage.", specs: ["Antibactérien", "Goût Intense", "Longue Conservation", "Pur à 100%"] },
            en: { name: "Garlic Powder (200g)", desc: "Selected ground garlic for a punchy flavor without the peeling chore.", specs: ["Antibacterial", "Intense Taste", "Long Shelf Life", "100% Pure"] }
          }
        },
        { 
          id: 52, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310922/IMG_7815_-1874871377_hvwdyu.jpg", 
          price: "10.00$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Riz (200g)", desc: "Mélange aromatique riche pour transformer votre riz simple en un plat d'exception.", specs: ["Colorant Naturel", "Saveur Exotique", "Format Familial", "Zéro Glutamate"] },
            en: { name: "Rice Spice (200g)", desc: "Rich aromatic blend to transform your simple rice into an exceptional dish.", specs: ["Natural Color", "Exotic Flavor", "Family Format", "Zero Glutamate"] }
          }
        },
        { 
          id: 53, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770402441/poulets_dmy9q9.jpg", 
          price: "10.00$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Poulet (200g)", desc: "Notre célèbre mélange pour volaille, maintenant disponible en format 200g pour les gourmets.", specs: ["Spécial Grillades", "Herbes Fines", "Goût Braisé", "Best-Seller"] },
            en: { name: "Chicken Spice (200g)", desc: "Our famous poultry blend, now available in 200g format for foodies.", specs: ["Grill Special", "Fine Herbs", "Braised Taste", "Best-Seller"] }
          }
        },
        { 
          id: 54, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770402441/piments_hpsf6d.jpg", 
          price: "10.00$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Piment", desc: "Piment rouge sélectionné pour sa force et sa couleur vibrante. À manipuler avec soin !", specs: ["Piquant Intense", "Couleur Vive", "Thermogénique", "Origine Locale"] },
            en: { name: "Chili Powder", desc: "Red chili selected for its strength and vibrant color. Handle with care!", specs: ["Intense Heat", "Vibrant Color", "Thermogenic", "Local Origin"] }
          }
        },
        { 
          id: 55, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310916/fish200g_oegid3.jpg", 
          price: "10.00$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Poisson (200g)", desc: "Mélange citronné et herbacé idéal pour les marinades et poissons au four.", specs: ["Spécial Marine", "Notes Citronnées", "Sans Additifs", "Fraîcheur Garantie"] },
            en: { name: "Fish Spice (200g)", desc: "Lemony and herbal blend ideal for marinades and baked fish.", specs: ["Seafood Special", "Lemon Notes", "No Additives", "Guaranteed Freshness"] }
          }
        },
        { 
          id: 56, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770310916/IMG_7817_-766109183_ajjhsq.jpg", 
          price: "10.00$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Citron (200g)", desc: "Poudre de citron concentrée pour une touche d'acidité instantanée dans vos recettes.", specs: ["Vitamine C", "Acidité Naturelle", "Pratique", "Zestes Moulus"] },
            en: { name: "Lemon Powder (200g)", desc: "Concentrated lemon powder for an instant touch of acidity in your recipes.", specs: ["Vitamin C", "Natural Acidity", "Convenient", "Ground Zest"] }
          }
        },

        // Épices carotte - poudre de carotte séchée
        { 
          id: 45, 
          image: "/saveur/epicescarrot120g.jpeg", 
          price: "10.00$", 
          rating: 4.7, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Épices Carotte", desc: "Carotte séchée et moulue pour apporter douceur et couleur naturelle à vos plats.", specs: ["Colorant Naturel", "Riche en Vitamine A", "Saveur Douce", "100% Naturel"] },
            en: { name: "Carrot Spice", desc: "Dried and ground carrot to bring natural sweetness and color to your dishes.", specs: ["Natural Colorant", "Rich in Vitamin A", "Sweet Flavor", "100% Natural"] }
          }
        },

        // Farine de fenugrec - sans gluten, riche en protéines
        { 
          id: 42, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770479979/fenugrec_brfpnb.jpg", 
          price: "35.00$", 
          rating: 4.7, 
          category: "Poudres", 
          weight: "1kg", 
          content: {
            fr: { name: "Epice de Fenugrec", desc: "Une farine sans gluten riche en fer et en fibres, parfaite pour des bouillies nutritives et des pâtisseries saines.", specs: ["Sans Gluten", "Riche en Fer", "Indice Glycémique Bas", "Énergie Durable"] },
            en: { name: "Fenugreek Spice", desc: "A gluten-free flour rich in iron and fiber, perfect for nutritious porridges and healthy pastries.", specs: ["Gluten-Free", "Rich in Iron", "Low Glycemic Index", "Sustainable Energy"] }
          }
        },
        //
        // Piment moulu - épice piquante pour relever les plats
        { 
          id: 15, 
          image: "/saveur/Piment120g.JPG", 
          price: "0.50$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "120g", 
          content: {
            fr: { name: "Epices Piment", desc: "Un piment moulu d'une intensité rare pour relever vos plats avec la force des terroirs africains.", specs: ["Piquant Intense", "100% Naturel", "Format Pratique", "Sans Colorant"] },
            en: { name: "Chili Powder", desc: "Ground chili of rare intensity to spice up your dishes with the strength of African soil.", specs: ["Intense Heat", "100% Natural", "Travel Friendly", "No Colorants"] }
          }
        },
        // Cannelle moulue - épice douce pour pâtisseries et thés
        // { 
        //   id: 16, 
        //   image: "", 
        //   price: "5.00$", 
        //   rating: 5.0, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Cannelle", desc: "Poudre de cannelle pure, idéale pour vos pâtisseries, thés ou plats sucrés-salés parfumés.", specs: ["Arôme Boisé", "Qualité Supérieure", "Antioxydant", "Épice Douce"] },
        //     en: { name: "Cinnamon Powder", desc: "Pure cinnamon powder, ideal for pastries, teas, or fragrant sweet-and-savory dishes.", specs: ["Woody Aroma", "Premium Quality", "Antioxidant", "Sweet Spice"] }
        //   }
        // },
        // Romarin séché - herbe aromatique pour viandes et légumes
        // { 
        //   id: 17, 
        //   image: "/saveur/romarin.jpeg", 
        //   price: "5.00$", 
        //   rating: 4.8, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Romarin", desc: "Herbe aromatique séchée avec soin pour sublimer vos viandes blanches et vos pommes de terre sautées.", specs: ["Arôme Herbacé", "Séchage Naturel", "Spécial Grillades", "RDC Origin"] },
        //     en: { name: "Rosemary Powder", desc: "Carefully dried aromatic herb to enhance white meats and roasted potatoes.", specs: ["Herbal Aroma", "Natural Drying", "Grill Specialist", "RDC Origin"] }
        //   }
        // },
        // Laurier moulu - feuilles séchées pour plats mijotés
        { 
          id: 19, 
          image: "/saveur/Laurier120g.JPG", 
          price: "5.00$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "120g", 
          content: {
            fr: { name: "Epices Laurier", desc: "Feuilles de laurier moulues pour un parfumage instantané de vos plats mijotés et sauces tomates.", specs: ["Parfum Authentique", "Prêt à l'emploi", "Idéal Mijotage", "100% Feuille"] },
            en: { name: "Bay Leaf Powder", desc: "Ground bay leaves for instant flavoring of stews and tomato-based sauces.", specs: ["Authentic Scent", "Ready to Use", "Stew Ideal", "100% Leaf"] }
          }
        },
        // Noix de muscade moulue - épice chaude pour béchamels et purées
        { 
          id: 20, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609209/noix_de_muscade_-petit_srac6b.jpg", 
          price: "0.50$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "120g", 
          content: {
            fr: { name: "Noix de Muscade (120g)", desc: "Muscade finement broyée, indispensable pour vos béchamels, purées et préparations de viandes.", specs: ["Épice Chaude", "Arôme Intense", "Usage Culinaire", "Pur à 100%"] },
            en: { name: "Nutmeg Powder", desc: "Finely ground nutmeg, essential for bechamel, purees, and meat preparations.", specs: ["Warm Spice", "Intense Aroma", "Culinary Grade", "100% Pure"] }
          }
        },
        // Clous de girofle moulus - antiseptique naturel, goût puissant
        // { 
        //   id: 21, 
        //   image: "/saveur/clou.jpg", 
        //   price: "5.00$", 
        //   rating: 4.9, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Clous de Girofle (Poudre)", desc: "Poudre de girofle puissante, utilisée tant en cuisine qu'en remède naturel pour ses propriétés antiseptiques.", specs: ["Antiseptique", "Goût Puissant", "Multiusage", "Origine Garantie"] },
        //     en: { name: "Clove Powder", desc: "Powerful clove powder, used in cooking and as a natural remedy for antiseptic properties.", specs: ["Antiseptic", "Strong Taste", "Multi-use", "Guaranteed Origin"] }
        //   }
        // },
        // Concombre en poudre - rafraîchissant, idéal pour détox
        // { 
        //   id: 22, 
        //   image: "/saveur/concombre250g.jpg", 
        //   price: "5.00$", 
        //   rating: 5.0, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Concombre", desc: "Une poudre originale et rafraîchissante pour aromatiser vos boissons détox et vos salades estivales.", specs: ["Rafraîchissant", "Idéal Détox", "Séchage à Basse T°", "Innovation Saveur"] },
        //     en: { name: "Cucumber Spice", desc: "An original, refreshing powder to flavor detox drinks and summer salads.", specs: ["Refreshing", "Detox Ideal", "Low-Temp Drying", "Flavor Innovation"] }
        //   }
        // },
        // Romarin premium - variante pour marinades de poissons et volailles
        // { 
        //   id: 23, 
        //   image: "/saveur/romarin.jpg", 
        //   price: "5.00$", 
        //   rating: 4.8, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Romarin (Variante)", desc: "Sélection premium de romarin moulu, idéal pour mariner vos poissons et volailles avec élégance.", specs: ["Qualité Gourmet", "Parfum Boisé", "Sans Additifs", "RDC Origin"] },
        //     en: { name: "Rosemary Powder (Variant)", desc: "Premium selection of ground rosemary, ideal for marinating your fish and poultry with elegance.", specs: ["Gourmet Quality", "Woody Aroma", "No Additives", "RDC Origin"] }
        //   }
        // },
        // Mélange d'épices spécial poulet - saveur traditionnelle
        // { 
        //   id: 24, 
        //   image: "/saveur/Epicespoulet150g.JPG", 
        //   price: "5.00$", 
        //   rating: 4.9, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices poulet", desc: "Le mélange secret pour un poulet doré et savoureux, rappelant les saveurs des grillades traditionnelles.", specs: ["Mélange Spécial Volaille", "Goût Braisé", "100% Herbes", "Sans Sel Ajouté"] },
        //     en: { name: "Chicken Spice", desc: "The secret blend for golden, tasty chicken, reminiscent of traditional grilled flavors.", specs: ["Poultry Blend", "Roasted Taste", "100% Herbs", "Salt-Free"] }
        //   }
        // },
        // Gingembre moulu - épice énergisante et digestive
        // { 
        //   id: 25, 
        //   image: "/saveur/Gingembre150g.jpg", 
        //   price: "5.00$", 
        //   rating: 5.0, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Gingembre Moulu (120g)", desc: "Gingembre pur, piquant et aromatique, idéal pour dynamiser vos plats et renforcer votre santé.", specs: ["Énergisant", "Anti-nauséeux", "Piquant Naturel", "Séchage Artisanal"] },
        //     en: { name: "Ginger Powder", desc: "Pure, spicy, and aromatic ginger to energize your dishes and strengthen your health.", specs: ["Energizing", "Anti-Nausea", "Natural Zing", "Artisanal Drying"] }
        //   }
        // },
        // Mélange d'épices pour riz - couleur dorée et saveur exotique
        // { 
        //   id: 26, 
        //   image: "/saveur/EpicespourRiz150g.jpg", 
        //   price: "5.00$", 
        //   rating: 4.8, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Riz", desc: "Donnez une couleur dorée et un goût d'exception à votre riz grâce à ce mélange d'épices équilibré.", specs: ["Colorant Naturel", "Parfum Exotique", "Cuisine Quotidienne", "Sans Glutamate"] },
        //     en: { name: "Rice Spice", desc: "Give an exceptional golden color and taste to your rice with this balanced spice mix.", specs: ["Natural Color", "Exotic Scent", "Daily Cooking", "Glutamate-Free"] }
        //   }
        // },
        // Mélange d'épices pour viande - arôme puissant pour grillades
        // { 
        //   id: 27, 
        //   image: "/saveur/EpicespourViande150g.jpg", 
        //   price: "5.00$", 
        //   rating: 5.0, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Viande", desc: "Un mélange robuste pour sublimer toutes vos viandes rouges, que ce soit en ragoût ou au barbecue.", specs: ["Arôme Puissant", "Spécial Grillades", "Mix Traditionnel", "Origine RDC"] },
        //     en: { name: "Meat Spice", desc: "A robust blend to enhance all red meats, whether in stews or on the BBQ.", specs: ["Powerful Aroma", "Grill Special", "Traditional Mix", "Made in DRC"] }
        //   }
        // },
        // Ail en poudre - antibactérien naturel, goût intense
        { 
          id: 28, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770479980/ail_tr4cgl.jpg", 
          price: "10.00$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Epices Ail", desc: "De l'ail pur transformé en poudre pour une utilisation facile sans perdre ses propriétés protectrices.", specs: ["Antibactérien", "Prêt à cuisiner", "Goût Intense", "100% Pur"] },
            en: { name: "Garlic Powder", desc: "Pure garlic transformed into powder for easy use without losing its protective properties.", specs: ["Antibacterial", "Ready to Cook", "Intense Taste", "100% Pure"] }
          }
        },
        // Céleri et persil - mélange minéral pour soupes
        // { 
        //   id: 29, 
        //   image: "/saveur/Celerietpersil.jpg", 
        //   price: "5.00$", 
        //   rating: 4.9, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Epices Celeri et Persil", desc: "L'union parfaite de deux herbes fraîches séchées pour apporter une note verte et minérale à vos soupes.", specs: ["Riche en Minéraux", "Mix Aromatique", "Séchage Doux", "100% Naturel"] },
        //     en: { name: "Celery & Parsley Powder", desc: "The perfect union of two fresh herbs dried to bring a green, mineral note to your soups.", specs: ["Mineral Rich", "Aromatic Mix", "Gentle Drying", "100% Natural"] }
        //   }
        // },
        // Céleri moulu - idéal pour régimes sans sel
        { 
          id: 30, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609209/celery-pet_ds1j14.png", 
          price: "0.50$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "120g", 
          content: {
            fr: { name: "Epices Celeri (120g)", desc: "Céleri moulu riche en goût, idéal pour les régimes sans sel et pour aromatiser les bouillons de légumes.", specs: ["Diurétique", "Arôme Frais", "Idéal Sans Sel", "Qualité Premium"] },
            en: { name: "Celery Powder", desc: "Flavorful ground celery, ideal for low-sodium diets and flavoring vegetable stocks.", specs: ["Diuretic", "Fresh Aroma", "Salt-Free Ideal", "Premium Quality"] }
          }
        },
        // Curcuma moulu - super-aliment anti-inflammatoire
        { 
          id: 31, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609209/curcumula_tjgvep.jpg", 
          price: "0.50$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Epices Curcuma (120g)", desc: "Le super-aliment par excellence pour colorer vos plats tout en prenant soin de vos articulations.", specs: ["Anti-inflammatoire", "Colorant Naturel", "Riche en Curcumine", "Usage Quotidien"] },
            en: { name: "Turmeric Powder", desc: "The ultimate superfood to color your dishes while taking care of your joints.", specs: ["Anti-inflammatory", "Natural Colorant", "Pure Curcumin", "Daily Wellness"] }
          }
        },
        // Citron en poudre - acidité naturelle riche en vitamine C
        { 
          id: 32, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770479980/citron_dprvhh.jpg", 
          price: "10.00$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "200g", 
          content: {
            fr: { name: "Epices Citron", desc: "Zestes de citron séchés et moulus pour apporter une acidité naturelle et parfumée à vos poissons.", specs: ["Agrume Pur", "Acidité Naturelle", "Riche en Vitamine C", "100% Naturel"] },
            en: { name: "Lemon Powder", desc: "Dried and ground lemon zest to bring a natural, fragrant acidity to your seafood.", specs: ["Pure Citrus", "Natural Acidity", "Vitamin C Rich", "100% Natural"] }
          }
        },
        // Bouillon de légumes - alternative saine aux cubes industriels
        // { 
        //   id: 35, 
        //   image: "/saveur/Bouillondelegumes.jpg", 
        //   price: "5.00$", 
        //   rating: 5.0, 
        //   category: "Poudres", 
        //   weight: "120g", 
        //   content: {
        //     fr: { name: "Bouillon de Legumes", desc: "Une alternative saine aux cubes industriels, faite uniquement de légumes frais séchés et broyés.", specs: ["Sans Glutamate", "Légumes Locaux", "Zéro Additifs", "Naturellement Bon"] },
        //     en: { name: "Vegetable Bouillon", desc: "A healthy alternative to industrial cubes, made only from fresh dried vegetables.", specs: ["Glutamate-Free", "Local Vegetables", "Zero Additives", "Naturally Healthy"] }
        //   }
        // },
    
        // --- NOUVELLES ARRIVÉES (DÉTAILLÉES) ---
        // Noix de muscade petit format - format économique
        { 
          id: 36, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609209/noix_de_muscade_-petit_srac6b.jpg", 
          price: "0.50$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Noix de Muscade (Petit Format)", desc: "Une épice chaleureuse et boisée, moulue avec soin pour parfumer vos plats onctueux et vos pâtisseries.", specs: ["Arôme Intense", "Digestion Facile", "100% Naturel", "Qualité Premium"] },
            en: { name: "Nutmeg (Small Format)", desc: "A warm and woody spice, carefully ground to flavor your creamy dishes and pastries.", specs: ["Intense Aroma", "Easy Digestion", "100% Natural", "Premium Quality"] }
          }
        },
        // Céleri en poudre petit format - format économique
        { 
          id: 37, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609209/celery-pet_ds1j14.png", 
          price: "0.50$", 
          rating: 4.7, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Céleri en Poudre (Petit Format)", desc: "Le concentré de fraîcheur du céleri pour rehausser vos bouillons et sauces avec une note végétale unique.", specs: ["100% Naturel", "Sans Additifs", "Idéal Bouillons"] },
            en: { name: "Celery Powder (Small Format)", desc: "The concentrated freshness of celery to enhance your broths and sauces with a unique vegetal note.", specs: ["100% Natural", "No Additives", "Ideal for Broths"] }
          }
        },
        // Clous de girofle entiers - santé dentaire et cuisine
        { 
          id: 38, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609210/clous-pet_g4xw5a.png", 
          price: "0.50$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Clous de Girofle", desc: "Une puissance aromatique exceptionnelle reconnue pour ses vertus antiseptiques et son goût piquant.", specs: ["100% Naturel", "Santé Dentaire", "Saveur Intense", "Sans Additifs"] },
            en: { name: "Cloves", desc: "Exceptional aromatic power recognized for its antiseptic properties and pungent taste.", specs: ["100% Natural", "Dental Health", "Intense Flavor", "No Additives"] }
          }
        },
        // Épices poisson - mélange signature pour poissons grillés
        { 
          id: 39, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609210/epices_fish_lyjngk.jpg", 
          price: "0.50$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Épices Poisson", desc: "Un mélange secret d'herbes et d'épices conçu spécialement pour sublimer la chair délicate de vos poissons.", specs: ["100% Naturel", "Mélange Signature", "Spécial Grillades", "Goût Authentique", "Sans Conservateurs"] },
            en: { name: "Fish Spice", desc: "A secret blend of herbs and spices specially designed to enhance the delicate flesh of your fish.", specs: ["100% Natural", "Signature Blend", "Grill Special", "Authentic Taste", "Preservative-Free"] }
          }
        },
        // Curcuma pur - super-aliment anti-inflammatoire
        { 
          id: 40, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769591212/Curcuma_120g_c70dku.jpg", 
          price: "0.50$", 
          rating: 4.9, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Curcuma Pur", desc: "L'or jaune de la cuisine, célèbre pour sa richesse en curcumine et ses propriétés anti-inflammatoires.", specs: ["100% Naturel", "Super-aliment", "Anti-inflammatoire", "Colorant Naturel", "Riche en Curcumine"] },
            en: { name: "Pure Turmeric", desc: "The golden spice of cuisine, famous for its richness in curcumin and anti-inflammatory properties.", specs: ["100% Natural", "Superfood", "Anti-inflammatory", "Natural Colorant", "Rich in Curcumin"] }
          }
        },
        // Gingembre pur - aide digestive naturelle
        { 
          id: 41, 
          image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769591227/Gingembre_150g_zroeoa.jpg", 
          price: "0.50$", 
          rating: 4.8, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Gingembre Pur", desc: "Un piquant rafraîchissant qui stimule l'organisme tout en apportant une touche exotique à vos recettes.", specs: ["100% Naturel", "Aide Digestive", "Pur Gingembre", "Polyvalent"] },
            en: { name: "Pure Ginger", desc: "A refreshing zing that stimulates the body while adding an exotic touch to your recipes.", specs: ["100% Natural", "Digestive Aid", "Pure Ginger", "Versatile"] }
          }
        },
    
        // --- NOUVEAUX PRODUITS BASÉS SUR LES IMAGES DISPONIBLES ---
        // Savon à la carotte - soin naturel pour la peau
        { 
          id: 43, 
          image: "/saveur/carrotsoap.jpeg", 
          price: "8.00$", 
          rating: 4.9, 
          category: "Savons", 
          weight: "100g", 
          content: {
            fr: { name: "Savon à la Carotte", desc: "Un savon artisanal enrichi en carotte pour illuminer et nourrir la peau naturellement.", specs: ["Éclat Naturel", "Riche en Bêta-carotène", "100% Artisanal", "Peau Sensible"] },
            en: { name: "Carrot Soap", desc: "An artisanal soap enriched with carrot to naturally brighten and nourish the skin.", specs: ["Natural Glow", "Rich in Beta-Carotene", "100% Artisanal", "Sensitive Skin"] }
          }
        },
        // Poivre noir - épice essentielle
        { 
          id: 46, 
          image: "/saveur/poivrenoir100g.jpeg", 
          price: "6.00$", 
          rating: 5.0, 
          category: "Poudres", 
          weight: "100g", 
          content: {
            fr: { name: "Poivre Noir", desc: "Poivre noir moulu de qualité supérieure pour relever tous vos plats avec intensité.", specs: ["Qualité Premium", "Piquant Équilibré", "100% Pur", "Origine RDC"] },
            en: { name: "Black Pepper", desc: "Premium quality ground black pepper to enhance all your dishes with intensity.", specs: ["Premium Quality", "Balanced Heat", "100% Pure", "RDC Origin"] }
          }
        },
        // Engrais bioplus - engrais organique
        // { 
        //   id: 48, 
        //   image: "/saveur/engraisbioplus5l.jpeg", 
        //   price: "25.00$", 
        //   rating: 4.8, 
        //   category: "Engrais", 
        //   weight: "5L", 
        //   content: {
        //     fr: { name: "Engrais BioPlus", desc: "Engrais organique liquide concentré pour stimuler la croissance et améliorer la fertilité des sols.", specs: ["100% Organique", "Concentré", "Fertilité Sol", "Usage Agricole"] },
        //     en: { name: "BioPlus Fertilizer", desc: "Concentrated organic liquid fertilizer to stimulate growth and improve soil fertility.", specs: ["100% Organic", "Concentrated", "Soil Fertility", "Agricultural Use"] }
        //   }
        // }, Farine de fenugrec (image alternative)
        // { 
        //   id: 49, 
        //   image: "/saveur/farinefurg.jpeg", 
        //   price: "35.00$", 
        //   rating: 4.7, 
        //   category: "Poudres", 
        //   weight: "1kg", 
        //   content: {
        //     fr: { name: "Farine de Fenugrec (Alternative)", desc: "Farine de fenugrec premium, riche en protéines et fibres pour une nutrition optimale.", specs: ["Riche en Protéines", "Sans Gluten", "Nutrition Complète", "Qualité Premium"] },
        //     en: { name: "Fenugreek Flour (Alternative)", desc: "Premium fenugreek flour, rich in proteins and fiber for optimal nutrition.", specs: ["High Protein", "Gluten-Free", "Complete Nutrition", "Premium Quality"] }
        //   }
        // }
      ]
    },



    discuss: {
      tag: "INVESTISSEURS & PARTENAIRES",
      title: "Co-construisons l'Agro-Industrie du Futur",
      subtitle: "Rejoignez une entreprise en pleine expansion qui combine technologie, impact social et rentabilité durable.",
      emailLabel: "E-mail Professionnel",
      phoneLabel: "Ligne Directe",
      form: {
        name: "Nom Complet / Entreprise",
        email: "Adresse Email",
        industry: "Type de Partenariat",
        message: "Votre Vision",
        submit: "Initier le Contact",
        options: [
          "Investissement Stratégique",
          "Partenariat Technologique",
          "Distribution Internationale",
          "Approvisionnement Industriel",
          "Impact & Développement"
        ]
      }
    },
    work: {
      tag: "Chaîne de Valeur",
      title: "Un Modèle Inclusif & Durable",
      desc: "Nous maîtrisons chaque étape, du champ à la table, en intérant les petits producteurs dans une économie de partage.",
      steps: [
        { num: "01", title: "Partenariats Directs", desc: "Collaboration avec les petits producteurs, femmes et jeunes pour un approvisionnement éthique et local." },
        { num: "02", title: "Séchage Intelligent", desc: "Utilisation de séchoirs solaires digitalisés pour garantir une qualité homogène et une traçabilité totale." },
        { num: "03", title: "Accompagnement Technique", desc: "Formation et structuration des coopératives rurales pour améliorer les revenus et les rendements." },
        { num: "04", title: "Accès au Marché", desc: "Valorisation des produits sous la marque LA SAVEUR, ouvrant des débouchés structurés pour le terroir." }
      ]
    },
    coreActivities: {
      title: "Nos Piliers Stratégiques",
      tag: "Expertise",
      items: [
        { title: "Transformation Décentralisée", desc: "Rapprocher l'industrie des zones de production pour réduire les pertes post-récolte." },
        { title: "Innovation Technologique", desc: "Digitalisation des processus de transformation pour une efficacité et une qualité industrielle." },
        { title: "Inclusion Sociale", desc: "Autonomisation économique des femmes et des jeunes via l'intégration dans la chaîne de valeur." },
        { title: "Substitution aux Importations", desc: "Développement d'ingrédients naturels locaux pour l'industrie agroalimentaire africaine." }
      ]
    },
    achievements: {
      title: "Impact & Reconnaissance",
      tag: "Réalisations",
      items: [
        { title: "Innovation Agri-Tech", desc: "Reconnu comme pionnier de la transformation décentralisée lors du Grand Salon de l'Agriculture & Digital." },
        { title: "Lauréat International", desc: "Vainqueur du programme Innovators Sprint Up pour notre modèle à fort impact social et environnemental en RDC." }
      ]
    },
    team: {
      tag: "Visionnaires",
      title: "Une Équipe Engagée pour",
      subtitle: "l'Excellence Africaine",
      members: [
        { name: "CHISHUGI SOLANGE Elvirah", role: "Directrice Générale & Fondatrice" },
        { name: "Expertise R&D", role: "Développement Technologique" },
        { name: "Impact Social", role: "Coordination Communautaire" },
        { name: "Stratégie Commerciale", role: "Développement des Marchés" }
      ]
    },
    ecoHero: {
      tag: "Triple Impact",
      title: "Économie, Social & Environnement : Notre Engagement",
      subtitle: "Nous transformons les défis agricoles en opportunités de croissance durable, en utilisant les énergies renouvelables et en créant des emplois locaux.",
      btn1: "Voir nos Technologies",
      btn2: "Rapport d'Impact",
      contactBar: "Prêt à investir dans l'agro-industrie durable ?"
    },
    miniServices: {
      tag: "Produits & Services",
      title: "Notre Gamme de Solutions",
      items: [
        { num: "01", title: "Poudres d'Assaisonnement", desc: "Mélanges naturels de fruits, légumes et épices valorisant nos terroirs.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770399878/poudres_ue3dui.jpg", path: "/shop" },
        { num: "02", title: "Tisanes & Infusions", desc: "Plantes aromatiques et médicinales transformées pour votre bien-être.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770399877/teas_fcavns.jpg", path: "/shop" },
        { num: "03", title: "Farines Enrichies", desc: "Solutions nutritionnelles fortifiées pour lutter contre les carences.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770399877/farines_ae9n0s.jpg", path: "/shop" },
        { num: "04", title: "Miels Naturels", desc: "Essence sauvage de nos forêts récoltée durablement pour une pureté garantie.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770399878/honey_ziex2l.jpg", path: "/shop" },
        { num: "05", title: "Savons & Huiles", desc: "Soins naturels et huiles vierges issus d'une chaîne de valeur inclusive.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770399878/soaps_oils_jo3x4i.jpg", path: "/shop" },
        { num: "06", title: "Coaching & Formations", desc: "Accompagnement technique pour booster l'entrepreneuriat agricole.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", path: "/portfolio" }
      ],
      learnMore: "En savoir plus"
    },
    organic: {
      tag: "Ambition Africaine",
      title: "Devenir la Référence de la Transformation Durable",
      desc: "Nous visons l'extension de notre modèle décentralisé à l'échelle régionale et internationale pour valoriser les ressources de l'Afrique."
    },
    features: {
      tag: "Notre Impact en Chiffres",
      title: "Une croissance portée par l'innovation et l'inclusion sociale.",
      farmers: "Producteurs Partenaires",
      acres: "Emplois Directs Créés",
      btn: "En Savoir Plus",
      desc: "Membre actif de l'écosystème Agri-Tech continental, BERAKAH BUSINESS redéfinit les standards de la transformation locale."
    },
    services: {
      tag: "Solutions BERAKAH",
      title: "Une Approche Holistique de l'Agro-Industrie",
      btn: "Découvrir le Modèle",
      featuredTitle: "Technologie & Inclusion",
      featuredDesc: "Notre séchoir solaire intelligent BERAKAHTech est au cœur d'une révolution qui allie performance industrielle et autonomisation des femmes rurales.",
      s1: { title: "Transformation Décentralisée", desc: "Unités de transformation installées au plus près des zones de récolte pour un impact immédiat." },
      s2: { title: "Digitalisation Agri", desc: "Suivi des paramètres via capteurs pour une qualité traçable et conforme aux standards internationaux." },
      s3: { title: "Marque LA SAVEUR", desc: "Une gamme premium valorisant le savoir-faire agricole africain auprès des consommateurs." },
      learnMore: "En savoir plus",
      discover: "Découvrir"
    },
    cta: {
      title: "Participez à la Transformation de l'Agriculture Africaine",
      subtitle: "Investisseurs, partenaires ou clients : ensemble, bâtissons une chaîne de valeur plus juste, plus technologique et plus durable.",
      btnPrimary: "Devenir Partenaire",
      btnSecondary: "Nous Contacter"
    },
    shop: {
      tag: "Boutique Premium",
      title: "Commandez LA SAVEUR.",
      filters: "Catégories",
      offers: "Offres",
      details: "Acheter"
    },
    contacts: {
      marquee: "Agriculture Durable * Innovation Agri-Tech * Sécurité Alimentaire * Transformation Locale * ",
      headerTitle: "Contactez-nous",
      breadcrumb: "Accueil / Contact",
      formTag: "Contactez-nous",
      formTitle: "Rejoignez-nous pour créer quelque chose de grand",
      form: {
        fname: "Prénom *",
        lname: "Nom *",
        email: "Email *",
        phone: "Téléphone *",
        subject: "Sujet *",
        message: "Message *",
        submit: "Envoyer le Message",
        options: ["Partenariat", "Investissement", "Information Produit", "Autre"],
        step1Title: "Identité et contact",
        step2Title: "Informations professionnelles",
        step3Title: "Besoin principal et souhaits",
        companyName: "Nom de société",
        roleLabel: "Votre rôle dans votre compagnie",
        profileLabel: "Vous êtes",
        profilePlaceholder: "Sélectionnez votre profil",
        mainNeedLabel: "Besoin principal",
        mainNeedPlaceholder: "Sélectionnez votre besoin principal",
        wishesLabel: "Vos souhaits (choix multiples)",
        messageOptional: "Message (optionnel)",
        messagePlaceholder: "Décrivez votre projet ou votre demande...",
        previous: "Précédent",
        next: "Suivant",
        send: "Envoyer",
        sending: "Envoi en cours...",
        sent: "Message envoyé !",
        successTitle: "Message envoyé avec succès !",
        successMessage: "Nous vous répondrons dans les plus brefs délais.",
        errorTitle: "Erreur lors de l'envoi",
        connectionError: "Veuillez vérifier votre connexion et réessayer.",
        contactNow: "Contactez-nous maintenant",
        contactNowShort: "Contactez-nous",
        learnMore: "En savoir plus",
        moreInfo: "Plus d'infos",
        errors: {
          requiredAll: "Veuillez remplir tous les champs obligatoires",
          invalidEmail: "Veuillez entrer un email valide",
          fname: "Veuillez remplir votre prénom",
          lname: "Veuillez remplir votre nom",
          email: "Veuillez remplir votre email",
          phone: "Veuillez remplir votre numéro de téléphone",
          companyName: "Veuillez remplir le nom de votre société",
          role: "Veuillez remplir votre rôle",
          profile: "Veuillez sélectionner votre profil"
        },
        profileOptions: [
          { value: "Agriculteur", label: "Agriculteur" },
          { value: "Coopérative agricole", label: "Coopérative agricole" },
          { value: "Coopérative de valorisation des produits marins", label: "Coopérative de valorisation des produits marins" },
          { value: "Industriel", label: "Industriel" },
          { value: "Autres", label: "Autres" }
        ],
        mainNeedOptions: [
          { value: "Étude d'un projet de séchage agricole", label: "Étude d'un projet de séchage agricole" },
          { value: "Étude d'un projet de séchage halieutique", label: "Étude d'un projet de séchage halieutique" },
          { value: "Prestations agroalimentaire", label: "Prestations agroalimentaire" },
          { value: "Achat de séchoir solaire", label: "Achat de séchoir solaire" },
          { value: "Achat des produits séchés", label: "Achat des produits séchés" },
          { value: "Consultation", label: "Consultation" },
          { value: "Formation et entraînement", label: "Formation et entraînement" },
          { value: "Autres", label: "Autres" }
        ],
        wishesOptions: [
          { value: "Demander un devis", label: "Demander un devis" },
          { value: "Être recontacté par un expert", label: "Être recontacté par un expert" },
          { value: "Obtenir plus de renseignement", label: "Obtenir plus de renseignement" }
        ]
      },
      info: {
        partnerBadge: "Devenez\nPartenaire",
        addressTitle: "Adresse",
        address: "Lubumbashi, Haut-Katanga\nRépublique Démocratique du Congo",
        contactTitle: "Contact",
        openTimeTitle: "Heures d'ouverture",
        openTime: "Lundi - Vendredi : 08:00 - 17:00",
        stayConnected: "Restez Connectés"
      },
      bottomCta: {
        title: "Connectons-nous là-bas",
        btn: "Contactez-nous Maintenant"
      }
    },
    testimonials: {
      title: "Témoignages",
      tag: "Ce qu'ils disent",
      items: [
        {
          quote: "Nous avons priorisé une approche structurée pour améliorer les fonctionnalités de gestion de crédit efficacement.",
          author: "Victoria P.",
          role: "Chef d'équipe",
          image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          quote: "Nous avons adapté l'interface pour assurer une navigation fluide sur tous les appareils.",
          author: "Stan D.",
          role: "DSI",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          quote: "Les sprints de design itératifs ont aidé à affiner l'expérience utilisateur basée sur des retours continus.",
          author: "Dmitry K.",
          role: "Designer UX/UI",
          image: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        {
          quote: "Une collaboration exceptionnelle qui a transformé notre vision en réalité tangible.",
          author: "Sarah L.",
          role: "Directrice Marketing",
          image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
          quote: "L'expertise technique de l'équipe a été cruciale pour le succès de notre projet pilote.",
          author: "Jean M.",
          role: "Consultant Agri",
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        }
      ]
    },
    footer: {
      desc: "BERAKAH BUSINESS, une Transformation agroalimentaire durable et inclusive .",
      links: "Navigation",
      newsletter: "Newsletter",
      newsDesc: "Recevez les actualités de la transformation agricole durable en RDC.",
      join: "S'abonner",
      rights: "Tous droits réservés."
    },
    ai: {
      trigger: "Conseiller Berakah",
      title: "Berakah AI Assistant",
      status: "Expert en Stratégie Agri",
      greeting: "Bonjour ! Je suis l'assistant Berakah Business. Comment puis-je vous éclairer sur notre modèle de transformation ou nos produits LA SAVEUR ?",
      placeholder: "Posez vos questions sur l'investissement, la technologie...",
      thinking: "Analyse stratégique en cours..."
    },
    faq: {
      title: "Questions & Insights",
      subtitle: "Tout savoir sur notre modèle, notre technologie et nos produits.",
      stillHaveQuestions: "Besoin de plus de précision ?",
      contactUsDesc: "Notre équipe stratégique est disponible pour répondre à vos questions complexes.",
      contactBtn: "Contacter la Direction",
      items: [
        { q: "Qu'est-ce que le modèle de transformation décentralisée ?", a: "C'est une approche qui installe des unités de transformation technologiques directement dans les zones de production pour éliminer les pertes post-récolte." },
        { q: "Comment garantissez-vous la qualité industrielle ?", a: "Grâce à BERAKAHTech, nos séchoirs sont équipés de capteurs digitaux qui assurent une traçabilité et une homogénéité parfaite des produits." },
        { q: "Quel est l'impact social de BERAKAH BUSINESS ?", a: "Nous autonomisons les femmes et les jeunes en les intégrant directement dans notre chaîne de valeur durable avec une juste rémunération." },
        { q: "Vos produits LA SAVEUR sont-ils exportables ?", a: "Oui, notre processus industriel respecte les normes de qualité permettant de valoriser le terroir congolais sur les marchés nationaux et internationaux." }
      ]
    },
    about: {
      mission: {
        title: "Notre Mission",
        text: "BERAKAH est une plateforme de transformation agroalimentaire intégrée et décentralisée qui combine des séchoirs solaires intelligents et une plateforme digitale pour transformer les produits agricoles locaux en ingrédients naturels de qualité industrielle, destinés à une chaîne d’approvisionnement durable et inclusive."
      },
      impact: {
        title: "Notre Impact",
        text: "Le projet contribue à réduire les pertes post-récolte, à augmenter les revenus des producteurs — en particulier des femmes et des jeunes —, et à approvisionner l’industrie agroalimentaire en ingrédients locaux, traçables et respectueux de l’environnement."
      },
      sectors: {
        title: "Nos Secteurs d’Activité",
        items: [
          {
            title: "Séchoirs Solaires Intelligents",
            desc: "Solutions de séchage solaire digitalisées permettant une transformation efficace, hygiénique et économe en énergie des produits agricoles."
          },
          {
            title: "Plateforme Numérique",
            desc: "Outil digital de suivi, de traçabilité, de mise en relation des acteurs et d’optimisation de la chaîne de valeur agroalimentaire."
          },
          {
            title: "Innovation en Ingrédients Naturels",
            desc: "Développement et production d’ingrédients naturels (poudres, tisanes, extraits, formulations fonctionnelles) adaptés aux besoins de l'industrie agroalimentaire locale et régionale."
          }
        ]
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      pages: "About",
      products: "Agri-Tools & Equips",
      blog: "News",
      portfolio: "Impact",
      shop: "LA SAVEUR",
      contacts: "Contact",
      getStarted: "Join Us"
    },
    hero: {
      title1: "Agro-Industrial",
      title2: "Innovation",
      title3: "at the Heart of Africa.",
      subtitle: "Powered by our BERAKAHTech smart dryers, BERAKAH BUSINESS is revolutionizing food processing in Africa, valuing local terroirs and eliminating post-harvest losses for sustainable impact.",
      btn1: "Explore Berakah",
      btn2: "Our Services",
      reviews: "Innovators Sprint Up Winner"
    },
    mobileApp: {
      tag: "BERAKAHTech Mobile",
      title: "Master Your Production, Right in Your Pocket",
      subtitle: "Track your smart dryer parameters in real-time, optimize transformation cycles, and manage traceability. The digitalization of African agro-industry starts here.",
      comingSoon: "Coming soon to",
      features: [
        "Real-time thermal monitoring",
        "Humidity control",
        "Production batch management",
        "QR Code traceability"
      ],
      mockup: {
        welcome: "Hello",
        status: "Drying Status",
        efficiency: "Energy Efficiency",
        recentBatches: "Recent Batches",
        batch1: "Spices - Batch #102",
        batch2: "Mangoes - Batch #105",
        batch3: "Ginger - Batch #98"
      }
    },
    productCategories: {
      tag: "Model & Innovation",
      title: "Integrated & Decentralized Processing",
      desc: "We deploy an innovative platform based on smart solar dryers for optimal local valuation.",
      viewAll: "View Our Vision",
      categories: [
        { title: "Women Empowerment", desc: "Training and inclusion of rural women at the heart of our sustainable transformation model.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770403521/farm0_e0xozm.jpg", path: "/portfolio" },
        { title: "Local Valuation", desc: "Transforming fruits, vegetables, and spices into high-value ingredients.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1770402441/piments_hpsf6d.jpg", path: "/shop" },
        { title: "Zero Waste", desc: "Drastic reduction of post-harvest losses through optimized processes.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769609422/seasoning_h1kixq.png", path: "/portfolio" },
        { title: "BERAKAHTech", desc: "Solar and digital drying solutions for ecological efficiency.", image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1769509264/food-dry_c87v0r.png", path: "/products" }
      ]
    },
    productsPage: {
      title: "Solutions & Technology",
      subtitle: "Cutting-edge equipment for sustainable, efficient, and traceable food processing.",
      filters: {
        all: "All",
        tools: "Tools",
        seeds: "Seeds",
        fertilizers: "Fertilizers",
        dryers: "Dryers"
      },
      items: [] // Equipment products use getTranslatedEquipmentProducts() from fr.productsPage.items
    },
    shopPage: {
      items: [] // Les produits sont partagés depuis fr.shopPage.items, utilisez getTranslatedProducts() helper
    },

    discuss: {
      tag: "INVESTORS & PARTNERS",
      title: "Co-Building the Future of Agro-Industry",
      subtitle: "Join a fast-growing company that combines technology, social impact, and sustainable profitability.",
      emailLabel: "Professional Email",
      phoneLabel: "Direct Line",
      form: {
        name: "Full Name / Company",
        email: "Email Address",
        industry: "Partnership Type",
        message: "Your Vision",
        submit: "Initiate Contact",
        options: [
          "Strategic Investment",
          "Technological Partnership",
          "International Distribution",
          "Industrial Supply",
          "Impact & Development"
        ]
      }
    },
    work: {
      tag: "Value Chain",
      title: "An Inclusive & Sustainable Model",
      desc: "We master every step, from field to fork, integrating smallholders into a sharing economy.",
      steps: [
        { num: "01", title: "Direct Partnerships", desc: "Collaborating with smallholders, women, and youth for ethical and local sourcing." },
        { num: "02", title: "Smart Drying", desc: "Using digital solar dryers to guarantee consistent quality and total traceability." },
        { num: "03", title: "Technical Support", desc: "Training and structuring rural cooperatives to improve income and yields." },
        { num: "04", title: "Market Access", desc: "Valuing products under LA SAVEUR brand, opening structured outlets for local terroir." }
      ]
    },
    coreActivities: {
      title: "Our Strategic Pillars",
      tag: "Expertise",
      items: [
        { title: "Decentralized Processing", desc: "Bringing industry closer to production areas to eliminate post-harvest losses." },
        { title: "Tech Innovation", desc: "Digitalizing processing for industrial efficiency and quality." },
        { title: "Social Inclusion", desc: "Economic empowerment of women and youth through value chain integration." },
        { title: "Import Substitution", desc: "Developing local natural ingredients for the African food industry." }
      ]
    },
    achievements: {
      title: "Impact & Recognition",
      tag: "Achievements",
      items: [
        { title: "Agri-Tech Innovation", desc: "Recognized as a pioneer of decentralized transformation at the Grand Fair of Agriculture & Digital." },
        { title: "International Winner", desc: "Winner of the Innovators Sprint Up program for our high social and environmental impact model in DRC." }
      ]
    },
    team: {
      tag: "Visionaries",
      title: "A Team Committed to",
      subtitle: "African Excellence",
      members: [
        { name: "CHISHUGI SOLANGE Elvirah", role: "CEO & Founder" },
        { name: "R&D Expertise", role: "Technological Development" },
        { name: "Social Impact", role: "Community Coordination" },
        { name: "Commercial Strategy", role: "Market Development" }
      ]
    },
    ecoHero: {
      tag: "Triple Impact",
      title: "Economy, Social & Environment: Our Commitment",
      subtitle: "We transform agricultural challenges into sustainable growth opportunities, using renewable energy and creating local jobs.",
      btn1: "View Our Technologies",
      btn2: "Impact Report",
      contactBar: "Ready to invest in sustainable agro-industry?"
    },
    miniServices: {
      tag: "Products & Services",
      title: "Our Range of Solutions",
      items: [
        { num: "01", title: "Seasoning Powders", desc: "Natural blends of fruits, vegetables, and spices valuing our local produce.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop", path: "/shop" },
        { num: "02", title: "Teas & Infusions", desc: "Aromatic and medicinal plants processed for your well-being.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop", path: "/shop" },
        { num: "03", title: "Enriched Flours", desc: "Fortified nutritional solutions to tackle deficiencies.", image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop", path: "/shop" },
        { num: "04", title: "Natural Honey", desc: "Wild essence from our forests, sustainably harvested for guaranteed purity.", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop", path: "/shop" },
        { num: "05", title: "Soaps & Oils", desc: "Natural skincare and virgin oils from an inclusive and ethical value chain.", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=1200&auto=format&fit=crop", path: "/shop" },
        { num: "06", title: "Coaching & Training", desc: "Technical support to boost agricultural entrepreneurship.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", path: "/portfolio" }
      ],
      learnMore: "Learn more"
    },
    organic: {
      tag: "African Ambition",
      title: "Becoming the Reference for Sustainable Processing",
      desc: "We aim to expand our decentralized model regionally and internationally to value Africa's resources."
    },
    features: {
      tag: "Our Impact in Numbers",
      title: "Growth driven by innovation and social inclusion.",
      farmers: "Partner Producers",
      acres: "Direct Jobs Created",
      btn: "Learn More",
      desc: "Active member of the continental Agri-Tech ecosystem, BERAKAH BUSINESS is redefining local processing standards."
    },
    services: {
      tag: "BERAKAH Solutions",
      title: "A Holistic Approach to Agro-Industry",
      btn: "Discover the Model",
      featuredTitle: "Tech & Inclusion",
      featuredDesc: "Our smart solar dryer BERAKAHTech is at the heart of a revolution combining industrial performance and rural women's empowerment.",
      s1: { title: "Decentralized Processing", desc: "Processing units installed close to harvest areas for immediate impact." },
      s2: { title: "Agri Digitalization", desc: "Monitoring parameters via sensors for traceable quality meeting international standards." },
      s3: { title: "LA SAVEUR Brand", desc: "A premium range valuing African agricultural know-how for consumers." },
      learnMore: "Learn more",
      discover: "Discover"
    },
    cta: {
      title: "Join the Transformation of African Agriculture",
      subtitle: "Investors, partners, or clients: together, let's build a fairer, more technological, and more sustainable value chain.",
      btnPrimary: "Become a Partner",
      btnSecondary: "Contact Us"
    },
    shop: {
      tag: "Premium Store",
      title: "Order LA SAVEUR.",
      filters: "Categories",
      offers: "Offers",
      details: "Buy Now"
    },
    contacts: {
      marquee: "Sustainable Agriculture * Agro-Tech Innovation * Food Security * Local Processing * ",
      headerTitle: "Contact Us",
      breadcrumb: "Home / Contact Us",
      formTag: "Contact Us",
      formTitle: "Join Us in Creating Something Great",
      form: {
        fname: "First Name *",
        lname: "Last Name *",
        email: "Email *",
        phone: "Phone Number *",
        subject: "Subject *",
        message: "Message *",
        submit: "Send Message",
        options: ["Partnership", "Investment", "Product Inquiry", "Other"],
        step1Title: "Identity and contact",
        step2Title: "Professional information",
        step3Title: "Main need and wishes",
        companyName: "Company name",
        roleLabel: "Your role in your company",
        profileLabel: "You are",
        profilePlaceholder: "Select your profile",
        mainNeedLabel: "Main need",
        mainNeedPlaceholder: "Select your main need",
        wishesLabel: "Your wishes (multiple choice)",
        messageOptional: "Message (optional)",
        messagePlaceholder: "Describe your project or request...",
        previous: "Previous",
        next: "Next",
        send: "Send",
        sending: "Sending...",
        sent: "Message sent!",
        successTitle: "Message sent successfully!",
        successMessage: "We will get back to you as soon as possible.",
        errorTitle: "Error sending message",
        connectionError: "Please check your connection and try again.",
        contactNow: "Contact us now",
        contactNowShort: "Contact us",
        learnMore: "Learn more",
        moreInfo: "More info",
        errors: {
          requiredAll: "Please fill in all required fields",
          invalidEmail: "Please enter a valid email address",
          fname: "Please enter your first name",
          lname: "Please enter your last name",
          email: "Please enter your email",
          phone: "Please enter your phone number",
          companyName: "Please enter your company name",
          role: "Please enter your role",
          profile: "Please select your profile"
        },
        profileOptions: [
          { value: "Agriculteur", label: "Farmer" },
          { value: "Coopérative agricole", label: "Agricultural cooperative" },
          { value: "Coopérative de valorisation des produits marins", label: "Marine products cooperative" },
          { value: "Industriel", label: "Industrial" },
          { value: "Autres", label: "Other" }
        ],
        mainNeedOptions: [
          { value: "Étude d'un projet de séchage agricole", label: "Agricultural drying project study" },
          { value: "Étude d'un projet de séchage halieutique", label: "Fisheries drying project study" },
          { value: "Prestations agroalimentaire", label: "Food processing services" },
          { value: "Achat de séchoir solaire", label: "Solar dryer purchase" },
          { value: "Achat des produits séchés", label: "Dried products purchase" },
          { value: "Consultation", label: "Consultation" },
          { value: "Formation et entraînement", label: "Training" },
          { value: "Autres", label: "Other" }
        ],
        wishesOptions: [
          { value: "Demander un devis", label: "Request a quote" },
          { value: "Être recontacté par un expert", label: "Be contacted by an expert" },
          { value: "Obtenir plus de renseignement", label: "Get more information" }
        ]
      },
      info: {
        partnerBadge: "Partner\nWith Us",
        addressTitle: "Address",
        address: "Lubumbashi, Haut-Katanga\nDemocratic Republic of Congo",
        contactTitle: "Contact",
        openTimeTitle: "Open Time",
        openTime: "Monday - Friday : 08:00 - 17:00",
        stayConnected: "Stay Connected"
      },
      bottomCta: {
        title: "Let's Connect there",
        btn: "Contact Us Now"
      }
    },
    testimonials: {
      title: "Testimonials",
      tag: "What they say",
      items: [
        {
          quote: "We prioritized a structured approach to enhance credit management features efficiently.",
          author: "Victoria P.",
          role: "Team Lead",
          image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          quote: "We adapted the interface to ensure seamless navigation across all devices.",
          author: "Stan D.",
          role: "CIO",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          quote: "Iterative design sprints helped refine user experience based on continuous feedback.",
          author: "Dmitry K.",
          role: "UX/UI Designer",
          image: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        {
          quote: "An exceptional collaboration that transformed our vision into tangible reality.",
          author: "Sarah L.",
          role: "Marketing Director",
          image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
          quote: "The team's technical expertise was crucial for the success of our pilot project.",
          author: "Jean M.",
          role: "Agri Consultant",
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        }
      ]
    },
    footer: {
      desc: "BERAKAH BUSINESS, a Sustainable and inclusive agro-food transformation .",
      links: "Navigation",
      newsletter: "Newsletter",
      newsDesc: "Get updates on sustainable agricultural transformation in DRC.",
      join: "Subscribe",
      rights: "All rights reserved."
    },
    ai: {
      trigger: "Berakah Assistant",
      title: "Berakah AI Assistant",
      status: "Agri Strategy Expert",
      greeting: "Hello! I am the Berakah Business assistant. How can I help you understand our processing model or our LA SAVEUR products?",
      placeholder: "Ask about investment, technology...",
      thinking: "Strategic analysis in progress..."
    },
    faq: {
      title: "Questions & Insights",
      subtitle: "Everything you need to know about our model, technology, and products.",
      stillHaveQuestions: "Need more clarity?",
      contactUsDesc: "Our strategic team is available to answer complex questions.",
      contactBtn: "Contact Leadership",
      items: [
        { q: "What is the decentralized processing model?", a: "It's an approach that installs technological processing units directly in production areas to eliminate post-harvest losses." },
        { q: "How do you guarantee industrial quality?", a: "Through BERAKAHTech, our dryers are equipped with digital sensors that ensure perfect traceability and product consistency." },
        { q: "What is the social impact of BERAKAH BUSINESS?", a: "We empower women and youth by integrating them directly into our sustainable value chain with fair compensation." },
        { q: "Are LA SAVEUR products exportable?", a: "Yes, our industrial process meets international quality standards, allowing us to value Congolese terroir on global markets." }
      ]
    },
    about: {
      mission: {
        title: "Our Mission",
        text: "BERAKAH is an integrated and decentralized agri-food processing platform that combines smart solar dryers with a digital interface to transform local agricultural products into industrial-grade natural ingredients for a sustainable and inclusive supply chain."
      },
      impact: {
        title: "Our Impact",
        text: "The project actively reduces post-harvest losses, increases income for producers—particularly women and youth—and supplies the food industry with local, traceable, and environmentally friendly ingredients."
      },
      sectors: {
        title: "Our Sectors of Activity",
        items: [
          {
            title: "Smart Solar Dryers",
            desc: "Digitalized solar drying solutions enabling efficient, hygienic, and energy-saving processing of agricultural goods."
          },
          {
            title: "Digital Platform",
            desc: "A digital tool for monitoring, traceability, stakeholder connection, and optimization of the agri-food value chain."
          },
          {
            title: "Natural Ingredient Innovation",
            desc: "Development and production of natural ingredients (powders, teas, extracts, functional formulations) tailored to the needs of local and regional food industries."
          }
        ]
      }
    }
  }
};

/**
 * Helper function pour accéder aux données traduites d'un produit
 * @param product - L'objet produit avec la structure optimisée
 * @param lang - La langue souhaitée ('fr' | 'en')
 * @returns Un objet avec toutes les propriétés du produit incluant les traductions
 * 
 * @example
 * const product = translations.fr.shopPage.items[0];
 * const productData = getProductContent(product, 'en');
 * console.log(productData.name); // "Ansima Tea"
 * console.log(productData.image); // URL de l'image (partagée)
 */
export function getProductContent(product: any, lang: 'fr' | 'en' = 'fr') {
  const content = product.content[lang] || product.content.fr;
  return {
    ...product,
    name: content.name,
    desc: content.desc,
    specs: content.specs
  };
}

/**
 * Helper function pour obtenir tous les produits traduits pour une langue donnée
 * @param lang - La langue souhaitée ('fr' | 'en')
 * @returns Un tableau de produits avec les traductions appliquées
 * 
 * @example
 * // Dans un composant React :
 * const currentLang = 'en'; // ou 'fr'
 * const products = getTranslatedProducts(currentLang);
 * 
 * // Accès aux propriétés :
 * products.forEach(product => {
 *   console.log(product.id);        // 1 (partagé)
 *   console.log(product.image);     // URL (partagée, définie une seule fois)
 *   console.log(product.price);      // "5.00$" (partagé)
 *   console.log(product.rating);     // 4.9 (partagé)
 *   console.log(product.category);   // "Tisanes" ou "Teas" (partagé)
 *   console.log(product.weight);     // "70g" (partagé)
 *   console.log(product.name);       // "Ansima Tea" (traduit selon lang)
 *   console.log(product.desc);       // Description traduite
 *   console.log(product.specs);      // ["Moringa & Hibiscus", ...] (traduit)
 * });
 */
export function getTranslatedProducts(lang: 'fr' | 'en' = 'fr') {
  // Les produits sont unifiés dans fr.shopPage.items avec traductions imbriquées
  return translations.fr.shopPage.items.map(product => getProductContent(product, lang));
}

/**
 * Equipment/Products page: single list in fr.productsPage.items with content.fr / content.en.
 * Add new products there; use this helper to get translated list for the current language.
 */
export function getTranslatedEquipmentProducts(lang: 'fr' | 'en' = 'fr') {
  return translations.fr.productsPage.items.map((product: any) => getProductContent(product, lang));
}
