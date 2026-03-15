import "./globals.css";
// import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DevNest Studio | Web Development & Digital Products",
  description: "DevNest Studio builds modern websites, web apps, and digital products that help businesses grow.",
};

export default function RootLayout({children}) {
return (
<html lang="en">
<body>{children}
    
</body>
</html>
);
}