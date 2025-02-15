import express from 'express';
import cors from 'cors'
import fs from 'fs'
const patientData = fs.readFileSync("patient.json", 'utf8');
const healthcareProviderData = fs.readFileSync("healthcare_provider.json", 'utf8');
console.log(patientData);
console.log(healthcareProviderData);
const app = express();
app.use(cors(
    {origin: "http://localhost:3000",
    method: "[GET,POST, PATCH, DELETE]"
    }
));
app.get("/getPatientDetails", (req, res)=>{
    return res.json(patientData);
});

app.get("/getHealthcareProviderDetails", (req, res)=>{
    return res.json(healthcareProviderData);
});


app.listen(5000, (req, res)=>{
    console.log('hello');
});