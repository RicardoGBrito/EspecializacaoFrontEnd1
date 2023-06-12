import { cardProduto } from "../../interfaces";
import api from "./api";

export async function getProduto(){
    return await api.get<cardProduto[]>("/produtos");
}

export async function getProdutoId(id:number){
    return await api.get(`/produtos/${id}`);
}

export async function postProduto(body:cardProduto){
    return await api.post(`/produtos`, body);
}

export async function putProduto(body:cardProduto){
    return await api.put(`/produtos/${body.id}`, body);
}

export async function deleteProduto(id:number){
    return await api.delete(`/produtos/${id}`);
}