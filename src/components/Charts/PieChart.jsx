import { Pie } from 'react-chartjs-2';
import {
	Chart,
	LinearScale,
	CategoryScale,
	ArcElement,
	Title,
	Tooltip,
	Legend,

} from 'chart.js';

Chart.register(
	CategoryScale,
	LinearScale,
	ArcElement,
	Title,
	Tooltip,
	Legend
);
const PieChart = ({ datas }) => {
  let storageObject = datas?.storage;
  let keys = [];
	let objects = [];
  for (let k in storageObject) keys.push(k + ' storage (' + storageObject[k] + 'GB)');
  for (let v in storageObject) objects.push(storageObject[v]);

	const data = {
		labels: keys,
		datasets: [
			{
				label: 'My First Dataset',
				data: objects,
				fill: true,
				backgroundColor: ['#0FFF50', 'aqua', 'red'],
				borderWidth: 2,
				barThickness: 8,
				tension: 0.1
			}
		]
	};

	const options = {
		title: {
			display: true,
			text: 'Bar Chart'
		},
		plugins: {
			legend: {
				labels: {
					color: 'white'
				}
			}
		}
	};
	return <Pie data={data} options={options} />;
};

export default PieChart;
