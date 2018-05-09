import React from "react";
import { BuildDefaultTable } from "../global/components/DexTable/";

const config = {
	domain: "http://almond:8081",
	endPoint: "/accounts",
	header: [
		{
			value: "id",
			name: "Id"
		},
		{
			value: "first_name",
			name: "First Name"
		},
		{
			value: "last_name",
			name: "Last Name"
		},
		{
			value: "time_stamp",
			name: "Registration Time"
		},
		{
			value: "status",
			name: "Status"
		}
	]
};

export default BuildDefaultTable(config);
