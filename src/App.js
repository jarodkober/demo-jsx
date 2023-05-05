import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
	return (
		<div>
			<div>Personal Digital Assistants</div>
			<ProfileCard
				handle="@alexa99"
				image={AlexaImage}
				title="Alexa"
			/>
			<ProfileCard
				handle="@cortana32"
				image={CortanaImage}
				title="Cortana"
			/>
			<ProfileCard
				handle="@siri01"
				image={SiriImage}
				title="Siri"
			/>
		</div>
	);
}

export default App;
