import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, PanelBody } from './../components/panel/panel.jsx';
import TableData from '../components/user_tables/TableData'
class Home extends React.Component {
	render() {
		return (
			<div>
				{/* <ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item active">Active Page</li>
				</ol> */}
				{/* <h1 className="page-header">Home <small>header small text goes here...</small></h1> */}
				<Panel>
					<PanelHeader>User List</PanelHeader>
					<PanelBody>
						<TableData userData={this.props.userData}/>
					</PanelBody>
				</Panel>
			</div>
		)
	}
}

export default Home;