function ProfileCard({ handle, image, title }) {
	return (
		<div>
			<img
				alt={title + ' logo'}
				src={image}
			/>
			<div>Title is {title}</div>
			<div>Handle is {handle}</div>
		</div>
	);
}

export default ProfileCard;
