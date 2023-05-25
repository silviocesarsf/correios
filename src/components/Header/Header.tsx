import "./styles.css";
import logoCorreios from "../../assets/logo-correios.png";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
	return (
		<header className="header-container">
			<div className="trademark-correios">
				<img src={logoCorreios} alt="Logo dos correios" />
			</div>
			<div className="right-buttons">
				<div className="login-button">
					<BiLogIn />
				</div>
				<div className="search-button">
					<BiSearchAlt2 />
				</div>
			</div>
		</header>
	);
};

export default Header;
