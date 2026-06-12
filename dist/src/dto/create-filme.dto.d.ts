export declare enum GeneroFilme {
    ACAO = "ACAO",
    AVENTURA = "AVENTURA",
    COMEDIA = "COMEDIA",
    DRAMA = "DRAMA",
    FANTASIA = "FANTASIA",
    FICCAO_CIENTIFICA = "FICCAO_CIENTIFICA",
    TERROR = "TERROR",
    ROMANCE = "ROMANCE",
    ANIMACAO = "ANIMACAO",
    DOCUMENTARIO = "DOCUMENTARIO",
    SUSPENSE = "SUSPENSE",
    MUSICAL = "MUSICAL",
    OUTRO = "OUTRO"
}
export declare class CreateFilmeDto {
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: GeneroFilme;
    dataIniciaExibicao: string;
    dataFinalExibicao: string;
}
