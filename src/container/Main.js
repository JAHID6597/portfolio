import React from "react";
import Welcome from "./Welcome";
import Skill from "./Skill";
import Proficiency from "./Proficiency";
import Education from "./Education";
import Projects from "./Projects";
import ScrollTop from '../components/common/ScrollTop';
import Contact from "./Contact";


const Main = () => {
	return (
		<>
			<Welcome />
			<Skill />
			<Proficiency />
			<Education />
			<Projects />
			<Contact />

			<ScrollTop />
		</>
	);
};

export default Main;
