/* =====================================================================
   ECOSAK — SHOP DATA  (this is the ONLY file you normally edit)
   =====================================================================
   RULES: 1) change only the text between "quotes"  2) keep commas & braces
          3) to add a bag, copy one { ... } block and change its text.

   IMAGES: master folder is  images/
     • Hero photos sit loose in images/  (hero1.png, hero2.png)
     • Each bag has its OWN subfolder in images/ named to match its "folder"
     • List that bag's photo file names in "photos" — extensions must match
       the real files EXACTLY (.png is different from .jpg!)
===================================================================== */
window.SHOP = {

  config: {
    brand: "ECOSAK",
    currency: "$",
    freeShipOver: 150,
    hero1: "hero1.png",
    hero2: "hero2.png",
    featured: "blanco-fiesta"
  },

  bags: [

    {
      id: "blanco-fiesta",
      name: "Blanco Fiesta Tote",
      price: 88,
      folder: "blanco-fiesta",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "https://checkout.square.site/merchant/MLXSJNF3AYD67/checkout/ERS5CWSKSV43KPAVPS77XJSO",
      blurb: "Crisp white weave with a bright red, green & blue middle stripe.",
      description: "The Blanco Fiesta Tote pairs a clean white handwoven body with a vivid ribbon of red, green, and blue down the center. Roomy enough for the farmers market, polished enough for lunch in town, and finished with sturdy braided handles and a snap closure. Woven entirely by hand from recycled plastic — no two are exactly alike."
    },

    {
      id: "coral-sky-diamond",
      name: "Coral & Sky Diamond Tote",
      price: 82,
      folder: "coral-sky-diamond",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "",
      blurb: "Bold coral-and-blue diamond weave with a flip-top closure.",
      description: "Coral red and sky blue interlace into a hypnotic diamond pattern on this structured carry-all. A flip-top with snap keeps everything tucked away, while the firm weave holds its shape day after day. Handwoven from recycled plastic — durable, water-resistant, and entirely one of a kind."
    },

    {
      id: "midnight-confetti",
      name: "Midnight Confetti Tote",
      price: 88,
      folder: "midnight-confetti",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "",
      blurb: "Black weave flecked with yellow, red, pink & violet.",
      description: "A deep black base scattered with confetti-bright threads of yellow, red, pink, and purple. The generous open top makes it an easy everyday tote that still turns heads. Recycled plastic, hand-woven, and impossible to duplicate."
    },

    {
      id: "lima-green",
      name: "Lima Green Tote",
      price: 72,
      folder: "lima-green",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "",
      blurb: "Saturated lime green with a polished snap closure.",
      description: "Pure, joyful lime green in a tight handwoven weave, finished with a metal snap closure. Lightweight yet sturdy, it's the kind of color that makes an ordinary errand feel like a holiday. Woven from recycled plastic by hand."
    },

    {
      id: "lavender-wood-handle",
      name: "Lavender Wood-Handle Tote",
      price: 95,
      folder: "lavender-wood-handle",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "",
      blurb: "Soft lavender weave with a sculptural natural-wood handle.",
      description: "A soft lavender body meets a smooth, curved natural-wood handle for a more elevated, structured silhouette. The standout of the collection for anyone who loves a refined, sculptural look. Handwoven from recycled plastic."
    },

    {
      id: "turquesa",
      name: "Turquesa Tote",
      price: 78,
      folder: "turquesa",
      photos: ["photo1.png","photo2.png","photo3.png","photo4.png","photo5.png","photo6.png"],
      square: "",
      blurb: "Vivid turquoise tonal weave with a warm gold-tone snap.",
      description: "Turquoise from handle to base, woven in a subtle tonal pattern and finished with a warm gold-tone snap. It carries the easy spirit of the coast into every day. Recycled plastic, handwoven, one of a kind."
    }

    /* To add bags 7–12: copy one block above, paste it after the last bag
       with a comma before it, and change the text. */

  ]
};
