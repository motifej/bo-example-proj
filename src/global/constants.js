let API_SERVER_URL = "";
if (process.env.NODE_ENV === "production") {
	API_SERVER_URL = "/";
}

if (process.env.NODE_ENV === "development") {
	API_SERVER_URL = "http://almond:8081/";
}

export default API_SERVER_URL;
