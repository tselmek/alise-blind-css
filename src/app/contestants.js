import AntoineJesus from '@/contest/AntoineJesus/AntoineJesus';
import PierreEtienneMoreau from '@/contest/PierreEtienneMoreau/PierreEtienneMoreau';
import PierreCascade from '@/contest/PierreCascade/PierreCascade.js';
import BladupBlop from '@/contest/BladupBlop/BladupBlop';

export const allContestants = [
  {
    name: "Bladup Blop",
    promo: "2008",
    Component: <BladupBlop />,
  },
  {
    name: "Pierre cascade",
    promo: "2000",
    Component: <PierreCascade />,
  },
  {
    name: 'Pierre-Etienne Moreau',
    promo: '1994',
    Component: <PierreEtienneMoreau />,
  },
  {
    name: 'Antoine Jésus',
    promo: '2021',
    Component: <AntoineJesus />,
  },
];
