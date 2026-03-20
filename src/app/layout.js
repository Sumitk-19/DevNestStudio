import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import BottomNavbar from "@/components/BottomNavbar";

export const metadata = {
  title: "DevNest Studio",
  description: "DevNest Studio builds modern websites, web apps, and digital products that help businesses grow.",
};

export default function RootLayout({children}) {
return (
<html lang="en">
<body>{children}
    <Analytics />
    <BottomNavbar />
    <SpeedInsights />
</body>
</html>
);
}