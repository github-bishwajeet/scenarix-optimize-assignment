import { fontClasses, FontName } from "./fonts"; // Adjust path if needed

// Update your fonts array
const fonts: { name: FontName; text: string }[] = [
  { name: "Dancing Script", text: "AI Art Generator" },
  { name: "Anton", text: "AI Art Generator" },
  { name: "Bebas Neue", text: "AI Art Generator" },
  { name: "Charm", text: "AI Art Generator" },
  { name: "Cinzel", text: "AI Art Generator" },
  { name: "Comfortaa", text: "AI Art Generator" },
  { name: "Courgette", text: "AI Art Generator" },
  { name: "Crimson Text", text: "AI Art Generator" },
  { name: "Dosis", text: "AI Art Generator" },
  { name: "Great Vibes", text: "AI Art Generator" },
  { name: "Indie Flower", text: "AI Art Generator" },
  { name: "Josefin Sans", text: "AI Art Generator" },
  { name: "Kalam", text: "AI Art Generator" },
  { name: "Lato", text: "AI Art Generator" },
  { name: "Libre Baskerville", text: "AI Art Generator" },
  { name: "Lobster", text: "AI Art Generator" },
  { name: "Montserrat", text: "AI Art Generator" },
  { name: "Open Sans", text: "AI Art Generator" },
  { name: "Oswald", text: "AI Art Generator" },
  { name: "Pacifico", text: "AI Art Generator" },
  { name: "Playfair Display", text: "AI Art Generator" },
  { name: "Poppins", text: "AI Art Generator" },
  { name: "Quicksand", text: "AI Art Generator" },
  { name: "Raleway", text: "AI Art Generator" },
  { name: "Roboto", text: "AI Art Generator" },
  { name: "Roboto Condensed", text: "AI Art Generator" },
  { name: "Roboto Mono", text: "AI Art Generator" },
  { name: "Roboto Slab", text: "AI Art Generator" },
  { name: "Rubik", text: "AI Art Generator" },
  { name: "Source Sans Pro", text: "AI Art Generator" },
  { name: "Source Serif Pro", text: "AI Art Generator" },
  { name: "Space Grotesk", text: "AI Art Generator" },
  { name: "Space Mono", text: "AI Art Generator" },
  { name: "Ubuntu", text: "AI Art Generator" },
  { name: "Work Sans", text: "AI Art Generator" },
];

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Type assertion remains here */}
              <div
                className={`text-2xl mb-4 ${
                  fontClasses[font.name as FontName]
                }`}
              >
                {font.text}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {font.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
