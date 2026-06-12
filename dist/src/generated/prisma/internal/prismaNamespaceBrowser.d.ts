import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Cinema: "Cinema";
    readonly Sala: "Sala";
    readonly Filme: "Filme";
    readonly Sessao: "Sessao";
    readonly Ingresso: "Ingresso";
    readonly Pedido: "Pedido";
    readonly LancheCombo: "LancheCombo";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CinemaScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly endereco: "endereco";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum];
export declare const SalaScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly capacidade: "capacidade";
    readonly poutronas: "poutronas";
    readonly cinemaId: "cinemaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum];
export declare const FilmeScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly sinopse: "sinopse";
    readonly classificacao: "classificacao";
    readonly duracao: "duracao";
    readonly elenco: "elenco";
    readonly genero: "genero";
    readonly dataIniciaExibicao: "dataIniciaExibicao";
    readonly dataFinalExibicao: "dataFinalExibicao";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FilmeScalarFieldEnum = (typeof FilmeScalarFieldEnum)[keyof typeof FilmeScalarFieldEnum];
export declare const SessaoScalarFieldEnum: {
    readonly id: "id";
    readonly horarioExibicao: "horarioExibicao";
    readonly filmeId: "filmeId";
    readonly salaId: "salaId";
    readonly cinemaId: "cinemaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum];
export declare const IngressoScalarFieldEnum: {
    readonly id: "id";
    readonly valorInteira: "valorInteira";
    readonly valorMeia: "valorMeia";
    readonly sessaoId: "sessaoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IngressoScalarFieldEnum = (typeof IngressoScalarFieldEnum)[keyof typeof IngressoScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: "id";
    readonly qtInteira: "qtInteira";
    readonly qtMeia: "qtMeia";
    readonly valorTotal: "valorTotal";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const LancheComboScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly descricao: "descricao";
    readonly valorUnitario: "valorUnitario";
    readonly qtUnidade: "qtUnidade";
    readonly subtotal: "subtotal";
    readonly pedidoId: "pedidoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LancheComboScalarFieldEnum = (typeof LancheComboScalarFieldEnum)[keyof typeof LancheComboScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
