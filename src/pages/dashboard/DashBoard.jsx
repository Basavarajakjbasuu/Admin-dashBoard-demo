import axios from 'axios';
import { useEffect, useState } from 'react';
import BarChart from '../../components/Charts/BarChart';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';
import NotificationList from '../../components/notification/NotificationList';
import OrderList from '../../components/orderList/OrderList';
import './dashboard.css';

const DashBoard = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					'https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json'
				);
				setData(res.data);
			} catch (err) {
				alert(err);
			}
			// console.log(res.data.dasbhoardPage.latestHits.featured);
		};
		fetchData();
	}, []);
	return (
		<div className="app__dashBoard-container">
			<div className="app__dashBoard-chartWrapper">
				<div className="app__dashBoard-lineChart">
					<h3>Latest Hits</h3>
					<LineChart datas={data.dasbhoardPage} />
				</div>
				<div className="app__dashBoard-barChart">
					<h3>Performance</h3>
					<BarChart datas={data.dasbhoardPage} />
				</div>
			</div>
			<div className="app__dashBoard-chartWrapper">
				<div className="app__dashBoard-pieChart">
					<h3>Latest Hits</h3>
					<PieChart datas={data.dasbhoardPage} />
				</div>
				<div className="app__dashBoard-notificationList">
					<h3>Latest Hits</h3>
					<NotificationList datas={data.dasbhoardPage} />
				</div>
			</div>
			<div className="">
				<h3>Order List</h3>
				<OrderList />
			</div>
		</div>
	);
};

export default DashBoard;
