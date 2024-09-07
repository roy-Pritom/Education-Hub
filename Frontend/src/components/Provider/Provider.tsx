"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "../Redux/store";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Toaster position="top-right" richColors />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
