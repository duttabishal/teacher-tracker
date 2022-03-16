import React from "react";
import { VectorMap } from "react-jvectormap";

const JVectorMap = ({ mapName, handleClick, seriesStatData, onHover }) => {
	return (
		<VectorMap
			map={mapName}
			backgroundColor="#0077be"
			containerStyle={{
				width: "100%",
				height: "500px"
			}}
			onRegionClick={handleClick}
			zoomOnScroll
			containerClassName="map"
			regionsSelectableOne
			selection={false}
			regionStyle={{
				initial: {
					fill: "#32363A",
					"fill-opacity": 0.9,
					stroke: "none",
					"stroke-width": 0,
					"stroke-opacity": 0
				},
				hover: {
					"fill-opacity": 0.8,
					cursor: "pointer"
				},
				selected: {
					fill: "#32363A",
					"fill-opacity": 0.9
				},
				selectedHover: {}
			}}
			series={{
				regions: [
					{
						values: seriesStatData,
						scale: ["#E5D1F9", "#5606A5"],
						normalizeFunction: "polynomial"
					}
				]
			}}
			onRegionTipShow={onHover}
		/>
	);
};

export default JVectorMap;
