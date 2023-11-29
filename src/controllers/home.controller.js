import csv from "csv-parser";
import fs from "fs";

let fileData = [];

export const showHome = (req, res) => {

    res.render("home");
};

export const fileContent = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }
    fileData = []; 

    const fileContent = req.file.buffer.toString('utf8');

    fs.writeFileSync('temp.csv', fileContent);
    fs.createReadStream('temp.csv')
        .pipe(csv())
        .on('data', (data) => fileData.push(data))
        .on('end', () => {
            fs.unlinkSync('temp.csv');
            res.json({ message: 'Archivo recibido exitosamente' });
        });
};

export const showCategories = (req, res) => {
    const categories = Object.keys(fileData[0] || {});
    
    categories.splice(0, 1);

    res.render( "categories", { categories });
};

export const showCategory = (req, res) => {
    const { category } = req.params;

    const teams = fileData.map(item => Object.values(item)[0]);
    
    res.render('category', { teams,  category});
};

export const showResults = (req, res) => {
    const { category, teamName } = req.params;

    const firstCategory = Object.keys(fileData[0])[0];

    const selectedTeam = fileData.find(item => item[firstCategory] === teamName);
    const data = selectedTeam ? selectedTeam[category] : null;

    res.json({ data });
}