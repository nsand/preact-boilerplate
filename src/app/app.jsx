import { h, Component } from 'preact';

export default class Clock extends Component {
	constructor() {
		super();
		this.setState({time: new Date().toLocaleTimeString()});
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({time: new Date().toLocaleTimeString()});
		}, 1000);
	}
	render({}, {time}) {
		return <span>{ time }</span>;
	}
}
