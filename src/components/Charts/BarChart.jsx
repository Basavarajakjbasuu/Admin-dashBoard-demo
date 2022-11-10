import { Bar } from 'react-chartjs-2';
import {
	Chart,
	LinearScale,
	CategoryScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	BarController
} from 'chart.js';

Chart.register(
	CategoryScale,
	LinearScale,
	BarElement,
	BarController,
	Title,
	Tooltip,
	Legend
);
const BarChart = ({ datas }) => {
	// Getting only key of object
	let performanceObject = datas?.performance;
	let keys = [];
	let objects = [];
	for (let k in performanceObject) keys.push(k);
	for (let v in performanceObject) objects.push(performanceObject[v]);

	const data = {
		labels: keys,
		datasets: [
			{
				label: '# of Hits',
				data: objects,
				fill: true,
				backgroundColor: keys,
				borderColor: keys,
				borderWidth: 1,
				barThickness: 4,
				tension: 0.1
			}
		]
	};

	const options = {
		indexAxis: 'y',
		scales: {
			y: {
				ticks: {
					color: 'white'
				}
			},
			x: {
				ticks: {
					color: 'white'
				}
			}
		},
		plugins: {
			legend: {
				labels: {
					color: 'white'
				}
			}
		}
	};
	return <Bar data={data} options={options} />;
};

export default BarChart;
