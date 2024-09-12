import { useTheme } from "./ThemeContext";

function ThemeToggleButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Change on {isDarkTheme ? "light" : "dark"}
    </button>
  );
}

export default function Content() {
  const { isDarkTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#333" : "#FFF",
        color: isDarkTheme ? "#FFF" : "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{isDarkTheme ? "Light" : "Dark"} motif</h1>
      <ThemeToggleButton />
    </div>
  );
}
