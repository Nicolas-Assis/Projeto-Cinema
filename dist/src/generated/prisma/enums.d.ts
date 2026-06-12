export declare const GeneroFilme: {
    readonly ACAO: "ACAO";
    readonly AVENTURA: "AVENTURA";
    readonly COMEDIA: "COMEDIA";
    readonly DRAMA: "DRAMA";
    readonly FANTASIA: "FANTASIA";
    readonly FICCAO_CIENTIFICA: "FICCAO_CIENTIFICA";
    readonly TERROR: "TERROR";
    readonly ROMANCE: "ROMANCE";
    readonly ANIMACAO: "ANIMACAO";
    readonly DOCUMENTARIO: "DOCUMENTARIO";
    readonly SUSPENSE: "SUSPENSE";
    readonly MUSICAL: "MUSICAL";
    readonly OUTRO: "OUTRO";
};
export type GeneroFilme = (typeof GeneroFilme)[keyof typeof GeneroFilme];
