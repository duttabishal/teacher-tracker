import React, { useEffect, useState, useRef, useCallback } from "react";
import { CountryDataJSON } from "../Configuration/data";
import JVectorMap from "../Component/JVectorMap";
const TeacherTrackerCountryMap = ({ countryCode }) => {
	const [seriesStatData, setSeriesStatData] = useState(null);
	const handleClick = (e, stateCode) => {
		console.log(stateCode);
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
		setSeriesStatData(CountryDataJSON[countryCode].stateStatData);
	}, []);

	return (
		<JVectorMap
			mapName={`${countryCode.toLowerCase()}_mill`}
			handleClick={handleClick}
			seriesStatData={seriesStatData}
			onHover={onHover}
		/>
	);
};

export default TeacherTrackerCountryMap;
