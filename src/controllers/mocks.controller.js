import { fakerES as fa } from "@faker-js/faker"
import bcrypt from "bcrypt"

const generatePet = async (req, res) => {

    let _id = fa.database.mongodbObjectId();
    let name = fa.animal.petName();
    let specie = fa.animal.type();
    let birthDate = fa.date.birthdate({ min: 1, max: 15, mode: 'age' });

    const payload = { _id, name, specie, birthDate };

    res.send({ status: "success", payload });
}

const generateUser = async (req, res) => {

    let _id = fa.database.mongodbObjectId();
    let first_name = fa.person.firstName();
    let last_name = fa.person.lastName();
    let email = fa.internet.email({ firstName: first_name, lastName: last_name, provider: 'gmail.com' });
    let password = bcrypt.hashSync("coder123", 10);
    let role = Math.random() < 0.5 ? 'user' : 'admin';
    let pets = [];

    const payload = { _id, first_name, last_name, email, password, role, pets };

    res.send({ status: "success", payload });
}

const generateData = async (req, res) => {

    res.send({ status: "success", payload });
}

export default { generatePet, generateUser, generateData }