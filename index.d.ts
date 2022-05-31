import {Types} from "mongoose"
export interface IPessoa {
    _id: Types.ObjectId,
  nome: string;
  idade: number;
  profissao: string;
}  
  