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

Pessoa.findOne({nome: "Matheus"}, (err, result) => {
    console.log(result)
}) 