import React, { useEffect, useState, useRef, useCallback } from "react";
import { VectorMap } from "react-jvectormap";
import JVectorMap from "../Component/JVectorMap";
import { CountryStatDataJSON } from "../Configuration/data";
const TeacherTrackerWorldMap = () => {
	const [seriesStatData, setSeriesStatData] = useState(null);
	const handleClick = (e, countryCode) => {
		console.log(countryCode);
	};
	const onHover = useCallback(
		(e, label, code) => {
			console.log(code);
			if (seriesStatData[code]) {
				label.append(` - ${seriesStatData[code]}`);
			} else {
				e.preventDefault();
			}
		},
		[seriesStatData]
	);
	useEffect(() => {
		setSeriesStatData(CountryStatDataJSON);
	}, []);

	return (
		<JVectorMap
			mapName={"world_mill"}
			handleClick={handleClick}
			seriesStatData={seriesStatData}
			onHover={onHover}
		/>
	);
};

export default TeacherTrackerWorldMap;
