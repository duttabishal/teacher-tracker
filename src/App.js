import "./App.css";
import TeacherTrackerWorldMap from "./Controller/TeacherTrackerWorldMap";
import TeacherTrackerCountryMap from "./Controller/TeacherTrackerCountryMap";

function App() {
	return (
		<>
			<div className="teacherTrackerMapContainer">
				<h2>World Map</h2>
				<TeacherTrackerWorldMap />
			</div>
			<div className="teacherTrackerMapContainer">
				<h2>India Map</h2>
				<TeacherTrackerCountryMap countryCode={"IN"} />
			</div>
			<div className="teacherTrackerMapContainer">
				<h2>Australia Map</h2>
				<TeacherTrackerCountryMap countryCode={"AU"} />
			</div>
		</>
	);
}

export default App;
