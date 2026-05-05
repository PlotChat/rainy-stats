import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./assets/variables.css";
import App from "./App.tsx";
import { WidgetsDataProvider } from "./features/widget-selector/context/WidgetsDataContext.tsx/WidgetsDataProvider.tsx";
import { WidgetsUIProvider } from "./features/widget-selector/context/WidgetsUIContext.tsx/WidgetsUIProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WidgetsDataProvider>
			<WidgetsUIProvider>
				<App />
			</WidgetsUIProvider>
		</WidgetsDataProvider>
	</StrictMode>,
);
