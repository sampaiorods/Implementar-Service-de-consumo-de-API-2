import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { ListaProdutoComponent } from '../lista-produto/lista-produto.component';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

    public produto: Produto = new Produto(0, "", "", "", 0);
    private _router: any;

    constructor(private _produtoService: ProdutoService, private_router: Router) { }
    cadastrar(): void {
        this._produtoService.cadastrarProduto(this.produto).subscribe(
            produto => {
                this.produto = new Produto(0, "", "", "", 0);
                alert("Cadastro Efetuado com Sucesso");
            },
            err => {
                alert("Erro ao cadastrar")
            }
        );
        this._router.navigate(["restrito/lista"])
    }

    
}
