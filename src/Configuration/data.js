const builtCountDictionary = (obj, props) => {
	if (obj[props]) obj[props]++;
	else obj[props] = 1;
	return obj;
};
let teacherData = require("../Configuration/teachers_sampled.json");
const CountryDataJSON = teacherData.reduce((acc, elem) => {
	let short =
		elem.location.country_short && elem.location.country !== "United States"
			? elem.location.country_short
			: "US";
	const teacherObject = { ...elem, ...elem.location };
	delete teacherObject.location;
	if (acc[short] && acc[short].count) {
		acc[short].teachers.push(teacherObject);
		acc[short].count++;
		acc[short].stateStatData = builtCountDictionary(
			acc[short].stateStatData,
			short + "-" + teacherObject.state_short
		);
	} else {
		acc[short] = {
			country: elem.location.country,
			count: 1,
			teachers: [teacherObject],
			stateStatData: builtCountDictionary(
				{},
				short + "-" + teacherObject.state_shortt
			)
		};
	}
	return acc;
}, {});
const CountryStatDataJSON = Object.keys(CountryDataJSON).reduce((acc, elem) => {
	acc[elem] = CountryDataJSON[elem].count;
	return acc;
}, {});

export { teacherData, CountryDataJSON, CountryStatDataJSON };
