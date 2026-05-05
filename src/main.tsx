import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./assets/variables.css";
import App from "./App.tsx";
import { WidgetsDataProvider } from "./features/widget-selector/context/widgets-data-context/WidgetsDataProvider.tsx";
import { WidgetsUIProvider } from "./features/widget-selector/context/widgets-ui-context/WidgetsUIProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WidgetsDataProvider>
			<WidgetsUIProvider>
				<App />
			</WidgetsUIProvider>
		</WidgetsDataProvider>
	</StrictMode>,
);
