import { Link, Route, Switch } from "wouter";
import Home from "./pages";

export default function App() {
	return (
		<>
			<Switch>
				<Route path="/" component={Home} />

				<Route path="/app">
					{(params) => <>Hello, test!</>}
				</Route>

				{/* Default route in a switch */}
				<Route>404: No such page!</Route>
			</Switch>
		</>
	);
}
