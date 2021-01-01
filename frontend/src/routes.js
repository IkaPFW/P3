import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const ReferenceTable = React.lazy(() => import('./views/ReferensiTable/ReferenceTable'));
const CatalogueTable = React.lazy(() => import('./views/ReferensiTable/CatalogueTable'));
const CriteriaTable = React.lazy(() => import('./views/ReferensiTable/CriteriaTable'));
const SubCriteriaKategoriTable = React.lazy(() => import('./views/ReferensiTable/SubCriteriaKategoriTable'));
const SubCriteriaMerkTable = React.lazy(() => import('./views/ReferensiTable/SubCriteriaMerkTable'));
const SubCriteriaHargaTable = React.lazy(() => import('./views/ReferensiTable/SubCriteriaHargaTable'));
const SubCriteriaGaransiTable = React.lazy(() => import('./views/ReferensiTable/SubCriteriaGaransiTable'));
const Wishlist = React.lazy(() => import('./views/ReferensiTable/Wishlist'));
const SearchForm = React.lazy(() => import('./views/Forms/SearchForm'));
const Topsis = React.lazy(() => import('./views/ReferensiTable/HitungTopsis'));
const Saw = React.lazy(() => import('./views/ReferensiTable/HitungSaw'));
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/test', name: 'Test Table', component: ReferenceTable},
  { path: '/catalogue', name: 'Browse Spare Parts', component: CatalogueTable},
  { path: '/kriteria', name: 'Kriteria', component: CriteriaTable},
  { path: '/kategori', name: 'Kategori', component: SubCriteriaKategoriTable},
  { path: '/merk', name: 'Merk', component: SubCriteriaMerkTable},
  { path: '/harga', name: 'Harga', component: SubCriteriaHargaTable},
  { path: '/garansi', name: 'Garansi', component: SubCriteriaGaransiTable},
  {path: '/wishlist', name: 'Wishlist', component: Wishlist},
  {path: '/search', name: 'Search Alternatif', component: SearchForm},
  {path: '/topsis', name: 'Perhitungan TOPSIS', component: Topsis},
  {path: '/saw', name: 'Perhitungan SAW', component: Saw},
  {path: '/login', name: 'Login', component: Login}
];

export default routes;
