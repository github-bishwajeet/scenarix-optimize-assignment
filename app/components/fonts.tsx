import {
  Inter,
  Dancing_Script,
  Lobster,
  Pacifico,
  Playfair_Display,
  Anton,
  Bebas_Neue,
  Charm,
  Cinzel,
  Comfortaa,
  Courgette,
  Crimson_Text,
  Dosis,
  Great_Vibes,
  Indie_Flower,
  Josefin_Sans,
  Kalam,
  Lato,
  Libre_Baskerville,
  Montserrat,
  Open_Sans,
  Oswald,
  Poppins,
  Quicksand,
  Raleway,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Roboto_Slab,
  Rubik,
  Source_Sans_3 as Source_Sans_Pro, // Renamed for consistency with original code
  Source_Serif_4 as Source_Serif_Pro, // Renamed for consistency with original code
  Space_Grotesk,
  Space_Mono,
  Ubuntu,
  Work_Sans,
} from "next/font/google";

// Initialize your fonts with the same variable names as in RootLayout
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
export const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});
export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
export const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});
export const charm = Charm({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-charm",
});
export const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});
export const comfortaa = Comfortaa({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
export const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courgette",
});
export const crimsonText = Crimson_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});
export const dosis = Dosis({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-dosis",
});
export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
export const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-indie-flower",
});
export const josefinSans = Josefin_Sans({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
export const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});
export const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});
export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});
export const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const openSans = Open_Sans({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});
export const oswald = Oswald({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});
export const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const quicksand = Quicksand({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export const raleway = Raleway({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
export const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
export const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
export const robotoMono = Roboto_Mono({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
export const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});
export const rubik = Rubik({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-rubik",
});
export const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});
export const sourceSerifPro = Source_Serif_Pro({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-serif-pro",
});
export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
export const ubuntu = Ubuntu({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
export const workSans = Work_Sans({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

// Create a mapping object for easier access to font classes
export const fontClasses = {
  "Dancing Script": dancingScript.className,
  Anton: anton.className,
  "Bebas Neue": bebasNeue.className,
  Charm: charm.className,
  Cinzel: cinzel.className,
  Comfortaa: comfortaa.className,
  Courgette: courgette.className,
  "Crimson Text": crimsonText.className,
  Dosis: dosis.className,
  "Great Vibes": greatVibes.className,
  "Indie Flower": indieFlower.className,
  "Josefin Sans": josefinSans.className,
  Kalam: kalam.className,
  Lato: lato.className,
  "Libre Baskerville": libreBaskerville.className,
  Lobster: lobster.className,
  Montserrat: montserrat.className,
  "Open Sans": openSans.className,
  Oswald: oswald.className,
  Pacifico: pacifico.className,
  "Playfair Display": playfairDisplay.className,
  Poppins: poppins.className,
  Quicksand: quicksand.className,
  Raleway: raleway.className,
  Roboto: roboto.className,
  "Roboto Condensed": robotoCondensed.className,
  "Roboto Mono": robotoMono.className,
  "Roboto Slab": robotoSlab.className,
  Rubik: rubik.className,
  "Source Sans Pro": sourceSansPro.className,
  "Source Serif Pro": sourceSerifPro.className,
  "Space Grotesk": spaceGrotesk.className,
  "Space Mono": spaceMono.className,
  Ubuntu: ubuntu.className,
  "Work Sans": workSans.className,
};

// Define a type for the font names to ensure type safety
export type FontName = keyof typeof fontClasses;
