
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";


function App() {
  return (
    <>
		<div className="App container scolor3">
			<Header className="itemHeader" />
			<Nav className="itemNav" />
			<Main className="itemMain" />
			<Footer className="itemFooter" />
		</div>
	</>
  );
};

export default App;
