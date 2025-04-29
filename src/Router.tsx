import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./views/layout/MainLayout";
import { CatalogueView } from "./views/CatalogueView";
import { ClientView } from "./views/ClientView";
import { HomeView } from "./views/HomeView";
import { JusView } from "./views/JusView";
import { FruitView } from "./views/FruitView";
import { NotFoundView } from "./views/NotFoundView";
import { FruitDetailView } from "./views/FruitDetailView";
import { HistoireView } from "./views/HistoireView";
import { MissionsView } from "./views/MissionsView";
import { EngagementView } from "./views/EngagementView";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeView />} />
				<Route path="/catalogue">
					<Route index element={<CatalogueView />} />
					<Route path="gamme-jus" element={<JusView />} />
					{/* <Route path="produit/:id" element={<ProduitView />} /> */}
				</Route>
				<Route path="/profile" element={<ClientView />} />
				<Route path="/fruits">
					<Route index element={<FruitView />} />
					<Route path=":type" element={<FruitDetailView />} />
				</Route>
				<Route path="/notre-histoire" element={<HistoireView />} />
				<Route path="/nos-missions" element={<MissionsView />} />
				<Route path="/nos-engagements" element={<EngagementView />} />
				<Route path="*" element={<NotFoundView />} />
			</Route>
		</Routes>
	);
}
