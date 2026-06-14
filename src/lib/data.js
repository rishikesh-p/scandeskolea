export const restaurant = {
  name: "Olea Bakes",
  description: "Premium Baked Goods & Cafe",
  phone: "+91 89210 46664",
  instagram: "https://www.instagram.com/",
  location: "https://maps.app.goo.gl/",
  logo: "/images/logo.png",
  heroImage: "/images/sweets.webp",
};

export const categories = [
  { id: "hot-coffee", name: "Hot Coffee" },
  { id: "cold-brews", name: "Cold Brews" },
  { id: "frappes", name: "Frappes" }
];

export const items = [
  // ─── HOT COFFEE ─────────────────────────────────────────────────────────
  { id: "hc1", categoryId: "hot-coffee", name: "Espresso", description: "A classic and bold shot of pure coffee, rich in flavor and aroma", price: 120, image: "/images/espresso.webp", tags: [] },
  { id: "hc8", categoryId: "hot-coffee", name: "Caffe Mocha", description: "A decadent combination of espresso, steamed milk, and rich chocolate.", price: 260, image: "/images/cafemocha.webp", tags: [] },

  // ─── COLD BREWS ─────────────────────────────────────────────────────────
  { id: "cb2", categoryId: "cold-brews", name: "Iced Americano", description: "A chilled version of the classic Americano, with espresso and cold water served over ice.", price: 150, image: "/images/icedamericano.webp", tags: [] },
  { id: "cb4", categoryId: "cold-brews", name: "Iced Caramel Latte", description: "A delightful blend of espresso, chilled milk, and caramel syrup served over ice.", price: 240, image: "/images/icedcaramellatte.webp", tags: [] },

  // ─── FRAPPES ────────────────────────────────────────────────────────────
  { id: "fr1", categoryId: "frappes", name: "Vanilla Frappe", description: "A creamy and smooth blend of vanilla coffee, and ice, topped with whipped cream.", price: 240, image: "/images/vanillafrappe.webp", tags: [] },
  { id: "fr4", categoryId: "frappes", name: "Pistachio", description: "A unique and creamy frappe featuring the distinct flavor of pistachio, blended with coffee and ice.", price: 320, image: "/images/pistachiofrappe.webp", tags: [] }
];
