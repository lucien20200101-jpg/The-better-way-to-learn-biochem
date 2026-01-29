import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Quiz from "../views/Quiz.vue";
import WrongBook from "../views/WrongBook.vue";
import NetworkMap from "../views/NetworkMap.vue";
import Glycolysis from "../views/chapters/Glycolysis.vue";
import TCA from "../views/chapters/TCA.vue";
import ETC from "../views/chapters/ETC.vue";
import PPP from "../views/chapters/PPP.vue";
import FAOxidation from "../views/chapters/FA-Oxidation.vue";
import FASynthesis from "../views/chapters/FA-Synthesis.vue";
import AminoAcid from "../views/chapters/AminoAcid.vue";
import Nucleotide from "../views/chapters/Nucleotide.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/chapters/glycolysis", name: "Glycolysis", component: Glycolysis },
  { path: "/chapters/tca", name: "TCA", component: TCA },
  { path: "/chapters/etc", name: "ETC", component: ETC },
  { path: "/chapters/ppp", name: "PPP", component: PPP },
  {
    path: "/chapters/fa-oxidation",
    name: "FAOxidation",
    component: FAOxidation,
  },
  {
    path: "/chapters/fa-synthesis",
    name: "FASynthesis",
    component: FASynthesis,
  },
  { path: "/chapters/amino-acid", name: "AminoAcid", component: AminoAcid },
  {
    path: "/chapters/nucleotide",
    name: "Nucleotide",
    component: Nucleotide,
  },
  { path: "/quiz", name: "Quiz", component: Quiz },
  { path: "/wrongbook", name: "WrongBook", component: WrongBook },
  { path: "/network", name: "NetworkMap", component: NetworkMap },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
