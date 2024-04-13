import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Proker from "./Proker";
import Tentang from "./Tentang";
import DigmapiStore from "./DigmapiStore";
import DigmapiHelp from "./DigmapiHelp";
import InternalProker from "./ProkerJS/InternalProker";
import RisbangProker from "./ProkerJS/RisbangProker";
import AkpresProker from "./ProkerJS/AkpresProker";
import AdkesmahProker from "./ProkerJS/AdkesmahProker";
import KastratProker from "./ProkerJS/KastratProker";
import EkrafProker from "./ProkerJS/EkrafProker";
import MedbrandProker from "./ProkerJS/MedbrandProker";
import PeragaProker from "./ProkerJS/PeragaProker";
import PSDMProker from "./ProkerJS/PSDMProker";
import SenbudProker from "./ProkerJS/SenbudProker";
import SerasiProker from "./ProkerJS/SerasiProker";
import SLHProker from "./ProkerJS/SLHProker";
import InternalTentang from "./TentangJS/InternalTentang";
import RisbangTentang from "./TentangJS/RisbangTentang";
import AkpresTentang from "./TentangJS/AkpresTentang";
import AdkesmahTentang from "./TentangJS/AdkesmahTentang";
import KastratTentang from "./TentangJS/KastratTentang";
import EkrafTentang from "./TentangJS/EkrafTentang";
import MedbrandTentang from "./TentangJS/MedbrandTentang";
import PeragaTentang from "./TentangJS/PeragaTentang";
import PSDMTentang from "./TentangJS/PSDMTentang";
import SenbudTentang from "./TentangJS/SenbudTentang";
import SerasiTentang from "./TentangJS/SerasiTentang";
import SLHTentang from "./TentangJS/SLHTentang";
import BPHTentang from "./TentangJS/BPHTentang";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/proker",
    element: <Proker />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/digmapihelp",
    element: <DigmapiHelp />,
  },
  {
    path: "/digmapistore",
    element: <DigmapiStore />,
  },
  {
    path: "/adkesmahproker",
    element: <AdkesmahProker />,
  },
  {
    path: "/akpresproker",
    element: <AkpresProker />,
  },
  {
    path: "/ekrafproker",
    element: <EkrafProker />,
  },
  {
    path: "/kastratproker",
    element: <KastratProker />,
  },
  {
    path: "/medbrandproker",
    element: <MedbrandProker />,
  },
  {
    path: "/peragaproker",
    element: <PeragaProker />,
  },
  {
    path: "/psdmproker",
    element: <PSDMProker />,
  },
  {
    path: "/senbudproker",
    element: <SenbudProker />,
  },
  {
    path: "/serasiproker",
    element: <SerasiProker />,
  },
  {
    path: "/slhproker",
    element: <SLHProker />,
  },
  {
    path: "/risbangproker",
    element: <RisbangProker />,
  },
  {
    path: "/internalproker",
    element: <InternalProker />,
  },
  {
    path: "/adkesmahtentang",
    element: <AdkesmahTentang />,
  },
  {
    path: "/akprestentang",
    element: <AkpresTentang />,
  },
  {
    path: "/ekraftentang",
    element: <EkrafTentang />,
  },
  {
    path: "/kastrattentang",
    element: <KastratTentang />,
  },
  {
    path: "/medbrandtentang",
    element: <MedbrandTentang />,
  },
  {
    path: "/peragatentang",
    element: <PeragaTentang />,
  },
  {
    path: "/psdmtentang",
    element: <PSDMTentang />,
  },
  {
    path: "/senbudtentang",
    element: <SenbudTentang />,
  },
  {
    path: "/serasitentang",
    element: <SerasiTentang />,
  },
  {
    path: "/slhtentang",
    element: <SLHTentang />,
  },
  {
    path: "/risbangtentang",
    element: <RisbangTentang />,
  },
  {
    path: "/internaltentang",
    element: <InternalTentang />,
  },
  {
    path: "/bphtentang",
    element: <BPHTentang />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
