/* =====================================================================
   ECOSAK — SHOP DATA  (this is the ONLY file you normally edit)
   =====================================================================

   HOW TO EDIT — just 3 rules:
     1. Only change the text BETWEEN the "quotation marks".
     2. Keep every comma , and every curly brace { } where it is.
     3. To add a bag, copy one whole block (from { to },) and change its text.

   FOLDERS & PHOTOS:
     • All images live in the master folder called  images/
     • Each bag gets its OWN subfolder inside images/ — you choose the name
       and write it in "folder" below.
     • Put that bag's 6 photos in that subfolder and list their file names
       in "photos". Example: images/blanco-fiesta/photo1.jpg
     • Two homepage hero photos go loose in images/ (not in a subfolder):
       images/hero1.jpg and images/hero2.jpg

   AFTER EDITING: save the file, upload to GitHub, done. No other file changes.
===================================================================== */

window.SHOP = {

  /* ---------- Site-wide settings ---------- */
  config: {
    brand: "ECOSAK",          // your shop name (shown in header/footer)
    currency: "$",
    freeShipOver: 150,        // dollar amount for the free-shipping banner
    hero1: "hero1.jpg",       // big homepage banner photo (in images/)
    hero2: "hero2.jpg",       // second homepage photo lower down (in images/)
    featured: "blanco-fiesta" // which bag's id is featured on the home page
  },

  /* ---------- The bags ----------
     Each bag is one { ... } block. Fields:
       id          short web name, lowercase-with-dashes (used in the link)
       name        the title shoppers see
       price       a number only — no $ sign
       folder      the subfolder name inside images/ holding this bag's photos
       photos      the 6 file names inside that subfolder (first one is the main image)
       square      paste this bag's Square payment link here (between the quotes)
       blurb       one short line for the shop grid / hero
       description the full product-page description (AI can write this — see notes)
  */
  bags: [

    {
      id: "blanco-fiesta",
      name: "Blanco Fiesta Tote",
      price: 88,
      folder: "blanco-fiesta",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Crisp white weave with a bright red, green & blue center stripe.",
      description: "The Blanco Fiesta Tote pairs a clean white handwoven body with a vivid ribbon of red, green, and blue down the center. Roomy enough for the farmers market, polished enough for lunch in town, and finished with sturdy braided handles and a snap closure. Woven entirely by hand from recycled plastic — no two are exactly alike."
    },

    {
      id: "coral-sky-diamond",
      name: "Coral & Sky Diamond Tote",
      price: 82,
      folder: "coral-sky-diamond",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Bold coral-and-blue diamond weave with a flip-top closure.",
      description: "Coral red and sky blue interlace into a hypnotic diamond pattern on this structured carry-all. A flip-top with snap keeps everything tucked away, while the firm weave holds its shape day after day. Handwoven from recycled plastic — durable, water-resistant, and entirely one of a kind."
    },

    {
      id: "midnight-confetti",
      name: "Midnight Confetti Tote",
      price: 88,
      folder: "midnight-confetti",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Black weave flecked with yellow, red, pink & violet.",
      description: "A deep black base scattered with confetti-bright threads of yellow, red, pink, and purple. The generous open top makes it an easy everyday tote that still turns heads. Recycled plastic, hand-woven, and impossible to duplicate."
    },

    {
      id: "lima-green",
      name: "Lima Green Tote",
      price: 72,
      folder: "lima-green",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Saturated lime green with a polished snap closure.",
      description: "Pure, joyful lime green in a tight handwoven weave, finished with a metal snap closure. Lightweight yet sturdy, it's the kind of color that makes an ordinary errand feel like a holiday. Woven from recycled plastic by hand."
    },

    {
      id: "lavender-wood-handle",
      name: "Lavender Wood-Handle Tote",
      price: 95,
      folder: "lavender-wood-handle",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Soft lavender weave with a sculptural natural-wood handle.",
      description: "A soft lavender body meets a smooth, curved natural-wood handle for a more elevated, structured silhouette. The standout of the collection for anyone who loves a refined, sculptural look. Handwoven from recycled plastic."
    },

    {
      id: "turquesa",
      name: "Turquesa Tote",
      price: 78,
      folder: "turquesa",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Vivid turquoise tonal weave with a warm gold-tone snap.",
      description: "Turquoise from handle to base, woven in a subtle tonal pattern and finished with a warm gold-tone snap. It carries the easy spirit of the coast into every day. Recycled plastic, handwoven, one of a kind."
    }

    /* ================== HOW TO ADD BAGS 7–12 ==================
       Copy everything from one { above down to its }, paste it after the
       last bag, add a comma between blocks, and change the text.
       A blank template you can copy:

    ,{
      id: "new-bag-id",
      name: "New Bag Name",
      price: 0,
      folder: "new-bag-folder",
      photos: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg"],
      square: "",
      blurb: "Short one-line description.",
      description: "Full product description here."
    }

       (Notice the comma right before the { — every block except the first
        needs one before it. The easiest safe habit: put the comma at the
        END of each block instead, like all the blocks above do.)
       ========================================================== */

  ]
};
