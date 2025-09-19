import { WithSkiaWeb } from "@shopify/react-native-skia/lib/commonjs/web";
import "./App.css";
import { Fallback } from "./Fallback";

function App() {
  return (
    <div className="app-container">
      <h1>Vite + React Native Skia</h1>
      <WithSkiaWeb
        fallback={<Fallback />}
        getComponent={async () => import("./Component")}
      />
    </div>
  );
}

export default App;
