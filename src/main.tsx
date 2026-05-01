import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./assets/variables.css";
import App from "./App.tsx";
import { WidgetsDataProvider, WidgetsProvider } from "./context/Widgets/WidgetsDataContext.tsx/WidgetsDataProvider.tsx";
import { WidgetsUIProvider } from "./context/Widgets/WidgetsUIContext.tsx/WidgetsUIProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WidgetsDataProvider>
			<WidgetsUIProvider>
				<App />
			</WidgetsUIProvider>
		</WidgetsDataProvider>
	</StrictMode>,
);
