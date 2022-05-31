import { IPessoa } from "./index.d"
import { connection, Schema, connect, model} from 'mongoose';


connect(
    'mongodb://localhost/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = connection;

db.on('error', console.error.bind(console, 'connection error'));

db.on('open', () => {
    console.log('Estamos conectados ao MongoDB!')
})

const pessoaSchema = new Schema<IPessoa>({
    nome: String,
    idade: Number,
    profissao: String,
});

const Pessoa = model<IPessoa>("Pessoa", pessoaSchema);

// const matheus = new Pessoa({
//     nome: "Joao",
//     idade: 32,
//     profissao: 'estudante'
// }) 

// matheus.save((err) => {
//     if(err) {
//         console.log(err)
//     }
// })

// Pessoa.findOne({nome: "Matheus"}, (err, result) => {
//     console.log(result)
// }) 


// Pessoa.insertMany([
//     {nome: "Roberto", idade: 23, profissao: "Professor" },
//     {nome: "Maria", idade: 23, profissao: "TI" },
//     {nome: "Pedro", idade: 35, profissao: "Pescador" },
// ])

const getPessoas  = async () : Promise<void> => {
    const pessoas = await Pessoa.find({}).exec();

    console.log(pessoas)
}

getPessoas()

const getPessoa  = async (nome: string) : Promise<void> => {

    const pessoa: IPessoa = await Pessoa.findOne({nome: nome}).exec();

    if(!pessoa) {
        console.log("Nao encontrou")
    } else {
        console.log(pessoa)
    }

}

// Pessoa.deleteOne({nome: "Pedro"}).exec();

// getPessoa("Pedro")