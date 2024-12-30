"use client"; // Este es un Client Component para uso del Provider

import { Provider } from "react-redux";
import store from "@/store"; // Tu store de Redux

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
