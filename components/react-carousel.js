import dynamic from 'next/dynamic'
import React, { Fragment } from 'react'
const Carousel = dynamic(
	() => import ('@brainhubeu/react-carousel'),
	{
		ssr: false
	}
)
import Modal from 'react-responsive-modal'

class ReactCarousel extends React.Component {

	constructor () {
	    super()
	    this.openModal = this.openModal.bind(this)
	}

	openModal (id) {
	    this.setState({
	       isOpen: {
	          [id]: true
	       }
	    });
	}

  	onCloseModal = () => {
		this.setState({ 
			isOpen: false 
		});
  	}

  	state = {
  		isOpen: false,
		images : [
			{ 
				id: 1,
				url: '/img/covers/01.erikssonfurunes.png', 
				fullWidthImgURL: '/img/full/01.erikssonfurunes_full.jpeg',
			   	client: 'Eriksson Furunes',
			   	type: 'Wordpress Development' 
		  	},
		  	{
		  		id: 2,
				url: '/img/covers/02.bruce_fordyce_after_party.png',
				fullWidthImgURL: '/img/full/02.bruce_fordyce_after_party_full.jpg',
				client: 'Bruce Fordyce After Party',
				type: 'Facebook Cover Photo Design' 
		  	},
		  	{ 
		  		id: 3,
				url: '/img/covers/03.crmworks_asia.png',
				fullWidthImgURL: '/img/full/03.crmworks_asia_full.jpg',
				client: 'CRMWorks ASIA',
				type: 'Design & Joomla Development' 
		  	},
		  	{ 
		  		id: 4,
				url: '/img/covers/04.devtac.png',
				fullWidthImgURL: '/img/full/04.devtac_full.jpg',
				client: 'DEVTac',
				type: 'Logo Design' 
		  	},
		  	{ 
		  		id: 5,
				url: '/img/covers/05.direwolf.png',
				fullWidthImgURL: '/img/full/05.direwolf_full.jpg',
				client: 'Direwolf',
				type: 'Illustration' 
		  	},
		  	{ 
		  		id: 6,
				url: '/img/covers/06.intechsive_software_development.png',
				fullWidthImgURL: '/img/full/06.intechsive_software_development_full.png',
				client: 'Intechsive Software Development',
				type: 'Web Design' 
		  	},
		  	{ 
		  		id: 7,
				url: '/img/covers/07.talbase.png',
				fullWidthImgURL: '/img/full/07.talbase_dashboard_consultant_full.png',
				client: 'Talbase',
				type: 'UI Design' 
		  	}
		]
  	};

  	render() {
		return (
			<Fragment>
				<div className="carousel">
					<Carousel
				  		slidesPerScroll={1}
				  		slidesPerPage={2}
				  		animationSpeed={5000}
				  		arrowLeft={<i className="fi-xwllxl-chevron-wide"></i>}
				  		arrowLeftDisabled={<i className="fi-xwllxl-chevron-wide disabled"></i>}
				  		arrowRight={<i className="fi-xwlrxl-chevron-wide"></i>}
				  		arrowRightDisabled={<i className="fi-xwlrxl-chevron-wide disabled"></i>}
				  		addArrowClickHandler
				  		keepDirectionWhenDragging
				  		clickToChange
				  		breakpoints={{
						1280: { 
							slidesPerPage: 2,
						  	slidesPerScroll: 2
						},
						1024: {
						  	slidesPerPage: 1,
						  	slidesPerScroll: 1,
						},
				  	}}
				>
					{this.state.images.map(({ id, url, fullWidthImgURL, client, type }) => (
					<div key={id}> 
						<div className="pr-0 pl-16" onClick= {this.openModal.bind(this, id)}>
							<img src={url} className="coral-red-shadow" alt={client + " | " + type} />
						  	<h1 className="mt-6 client-heading fade-in">{client}</h1>
						  	<p className="fade-in">{type}</p>
						</div>	
						<Modal open={this.state.isOpen[id]} onClose={this.onCloseModal}>
							<img src={fullWidthImgURL} alt={client + " | " + type} />
					  	</Modal> 
				  	</div> 	        
					))}
					</Carousel>   
				</div>     
			</Fragment>
		)
	}
}

export default ReactCarousel