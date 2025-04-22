import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Theme } from "@radix-ui/themes";

const outfit = Outfit({subsets: ['latin']})

export const metadata = {
  title: "ValTech",
  description: "AI Course Generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
          <Theme>
          {children}
          </Theme>
        
        </Provider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
