import './notificationList.css';

const NotificationList = ({ datas }) => {
	console.log(datas?.notifications);
	return (
		<div className="app__notificationList-wraper">
			{datas?.notifications.map(item => (
				<div className="app__notificationList-container" key={item.message}>
					<div className="app__notification-profilePic">
						<img src={item.pic} alt="" />
					</div>
					<div className="app__notification-profileContent">
						<p>{item.message}</p>
						<p>{item.time} ago.</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default NotificationList;
