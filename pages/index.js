import React, { Fragment } from 'react'
import Head from 'next/head'
import ReactCarousel from '../components/react-carousel'
import Links from '../components/links'

const Title = 'Designer & Developer'
const Name = 'Jumar Juaton'

const Work = () => (
<Fragment>
   	<Head>
	   	<title>{Title} - {Name}</title>
	   	<link
			href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
			rel="stylesheet"
			key="google-font-montserrat"
		/>
	  	<link rel="icon" href="/favicon.ico" />
	  	<script defer src="https://friconix.com/cdn/friconix.js"></script>
   	</Head>
   	<header className="px-12 py-8">
   		<div className="container mx-auto">
	  		<a href="/" title={Title + " - " + Name}>
	  			<img className="h-10 block" src="/img/llogo.svg" alt={Title + " - " + Name} />
	  		</a>
  		</div>
  	</header>		
  	<section className="px-12">
	   	<div className="container mx-auto">
		 	<div className="pt-24 pb-24 hero">
				<div className="grid grid-cols-3 gap-4">
				   	<div className="col-span-12 md:col-span-2">
					  	<h1 className="jumbo-heading">Intuitive Designs,</h1>
					  	<h1 className="jumbo-heading">Reliable Code.</h1>
				   	</div>
				   	<div className="col-span-12 md:col-span-1">
					  	<div className="mt-4 name-text">{Name}</div>
					  	<div className="title-text">{Title}</div>
					  	<p>—  Tacloban City, Leyte, Philippines.</p>
						<p>I aim to help clients expand their exposure and lift their sales through branding.</p>
				   		<Links />
				   	</div>
				</div>
			</div>	  
		</div>
	</section>
	<section>
		<div className="container mx-auto">
			<div className="pt-0 pr-0 pb-12 pl-12 carousel-wrap bg-coral-red">
				<ReactCarousel />
			</div>
		</div>
	</section>
	<footer className="px-12 py-24">
		<div className="container mx-auto">
			<hr className="divider" />
			<p className="pt-20 copyright text-coral-red">Copyright &copy; Jumar Juaton</p>
		</div>
	</footer>
</Fragment>	
)

export default Work
