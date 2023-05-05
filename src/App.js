import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<div className="columns">
						<ProfileCard
							description="Alexa was created by Amazon and helps you buy things."
							handle="@alexa99"
							image={AlexaImage}
							title="Alexa"
						/>
						<ProfileCard
							description="Cortana was made by Microsoft. Who knows what it does?"
							handle="@cortana32"
							image={CortanaImage}
							title="Cortana"
						/>
						<ProfileCard
							description="Siri was made by Apple and is used across their ecosystem of products."
							handle="@siri01"
							image={SiriImage}
							title="Siri"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
