"use client";

import { ReactNode } from "react";
import ReloadProvider from "./ReloadContext";

export default function Contexts({ children }: { children: ReactNode }) {
  return <ReloadProvider>{children}</ReloadProvider>;
}
