import { lazy } from "react";
import "./app.css";

const Demo = lazy(() => import("@/pages/demo"));

export function App() {
  return <Demo />;
}
