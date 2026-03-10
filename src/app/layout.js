import "./globals.css";

export const metadata = {
title: "DevNest Studio",
description: "Web Development • App Development • Design"
};

export default function RootLayout({children}) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}