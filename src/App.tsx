import { ThemeProvider } from "./components/ThemeContext";
import Content from "./components/Content";
import "./App.css";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </>
  );
}
