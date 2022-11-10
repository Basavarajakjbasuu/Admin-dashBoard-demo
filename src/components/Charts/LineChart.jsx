import { Line } from 'react-chartjs-2';
import {
	Chart,
	LinearScale,
	CategoryScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	LineElement,
	Title,
	Legend
);
const LineChart = ({ datas }) => {
	
	const data = {
		labels: datas?.latestHits?.months,
		// labels: datas?.latestHits?.map(x => x.featured),
		datasets: [
			{
				label: 'Latest Hit',
				data: datas?.latestHits?.latest,
				fill: false,
				borderColor: '#20c997',
				tension: 0.3,
				pointRadius: 0
			},
			{
				label: 'Popular Hits',
				data: datas?.latestHits?.popular,
				fill: false,
				borderColor: '#e83e8c',
				tension: 0.3,
				pointRadius: 0
			},
			{
				label: 'Featured',
				data: datas?.latestHits?.featured,
				fill: false,
				borderColor: '#6f42c1',
				tension: 0.3,
				pointRadius: 0
			}
		]
	};

	const options = {
		scales: {
			y: {
				type: 'linear',
				min: 10,
				max: 90,
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
			tooltip: {
				enabled: false
			},
			legend: {
				labels: {
					color: 'white'
				}
			}
		}
	};
	return <Line data={data} options={options} />;
};

export default LineChart;
