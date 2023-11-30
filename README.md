# FileQuery

FileQuery is a web application built using Node.js, Express, Handlebars, and JavaScript. It enables users to upload .csv files and perform queries on the data within these files.

## CSV File Structure Example

For the application to process the CSV file correctly, ensure it follows a structure similar to the example below:

<details>
<summary>Click to Expand CSV File Example</summary>

```csv
Name,Country,Stadium,Capacity,Fundation,League Titles,Champions League
Real Madrid,España,Santiago Bernabéu,81044,1902,34,13
FC Barcelona,España,Camp Nou,99354,1899,26,5
Manchester United,England,Old Trafford,74879,1878,20,3
```

</details>
The first line should contain the categories (headers) representing the information to be queried.

## Demo

Here is a live demo of the website: [Live Demo](https://file-query.onrender.com/)

## Features

- **File Upload:** Upload .csv files containing various data categories.
- **Query Data:** Select specific categories and teams to explore and display corresponding data.
- **Dynamic Interaction:** User-friendly interface allowing dynamic data querying.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Usage

- Access the application via the provided URL.
- Upload a .csv file to begin exploring the data.
- Select categories and teams to query and display specific information.

## Technologies Used

- Node.js
- Express
- Handlebars
- JavaScript

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](link-to-license).
