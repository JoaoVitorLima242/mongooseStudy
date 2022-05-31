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

const matheus :IPessoa = new Pessoa({
    nome: "Matheus",
    idade: 30,
    profissao: 'programador'
}) 