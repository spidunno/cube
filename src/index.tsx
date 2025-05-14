import { Link, Route, Switch } from "wouter";
import Home from "./pages";
import "@fontsource/inter/index.css";
import "./index.css";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { theme } from "./theme";
import App from "./pages/app";

export default function Index() {
	return (
		<CssVarsProvider defaultMode="system" theme={theme}>
      <CssBaseline/>
			<Switch>
				<Route path="/" component={Home} />

				<Route path="/app" component={App}/>

				{/* Default route in a switch */}
				<Route>404: No such page!</Route>
			</Switch>
		</CssVarsProvider>
	);
}
