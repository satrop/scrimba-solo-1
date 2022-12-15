import './buttons.scss';

const ButtonLinks = (props) => {
	return (
		<a href="#nogo" className={`button ${props.cName}`}>
			{props.children}
		</a>
	);
};

export default ButtonLinks;
