import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./assets/variables.css";
import App from "./App.tsx";
import { WidgetsDataProvider } from "./context/widgets-data-context/WidgetsDataProvider.tsx";
import { WidgetsUIProvider } from "./context/widgets-ui-context/WidgetsUIProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WidgetsDataProvider>
			<WidgetsUIProvider>
				<App />
			</WidgetsUIProvider>
		</WidgetsDataProvider>
	</StrictMode>,
);
