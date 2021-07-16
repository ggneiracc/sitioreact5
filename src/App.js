//import logo from './logo.svg';
//import './App.css';

import MenuNav from "./sitioweb/MenuNav";

function App() {
  return (
<div className="container">
	<header className="row bg-secondary">
		<img src="https://i.ibb.co/gzdmNPk/header.jpg" alt="header" border="0" />
	</header>

	<nav className="row bg-warning">
		<MenuNav />
	</nav>

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
			Articulo 1
		</article>
		
		<article className="col-md-4 bg-secondary">
			Articulo 2
		</article>

		<aside className="col-md-2 bg-primary">
			aside (Apartado)
		</aside>
	</section>

	<footer className="row bg-dark text-light">
		footer (Pie de página)
	</footer>
</div>
  );
}

export default App;
