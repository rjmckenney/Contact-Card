import React from "react";
import "./App.css";
import ContactCards from "./ContactCards";
//import Header from "./Header";

function App() {
	return (
		<div className="contacts">
			<ContactCards
				contact={{
					name: "Mrs. Code",
					imgUrl: "http://placeimg.com/340/360/any",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "HomeRun Harry",
					imgUrl: "http://lorempixel.com/340/360",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Skittles",
					imgUrl: "http://placekitten.com/g/340/360",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Mr. Peanut Brittle",
					imgUrl: "https://www.fillmurray.com/340/360",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Mr. Cucumber Pickle",
					imgUrl: "https://placeimg.com/340/360/arch",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Mr. Calm Tranquilo",
					imgUrl: "https://placebeard.it/340x360",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Mr. Amable Tranquilo",
					imgUrl: "http://placebeard.it/340x360",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
			<ContactCards
				contact={{
					name: "Mr. Cantante Tranquilo",
					imgUrl: "https://placeimg.com/340/360/arch",
					phone: "(212) 555-1234",
					email: "mr.peanutbrittle@gmail.com"
				}}
			/>
		</div>
	);
}

export default App;
