import me from '../../assets/steve.jpg';
import './images.scss';

const Image = () => {
	return (
		<div className="profile-image-wrapper">
			<img className="profile-image" src={me} alt="Steven Portas" />
		</div>
	);
};

export default Image;
