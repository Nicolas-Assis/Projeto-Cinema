"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.LancheComboScalarFieldEnum = exports.PedidoScalarFieldEnum = exports.IngressoScalarFieldEnum = exports.SessaoScalarFieldEnum = exports.FilmeScalarFieldEnum = exports.SalaScalarFieldEnum = exports.CinemaScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Cinema: 'Cinema',
    Sala: 'Sala',
    Filme: 'Filme',
    Sessao: 'Sessao',
    Ingresso: 'Ingresso',
    Pedido: 'Pedido',
    LancheCombo: 'LancheCombo'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CinemaScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SalaScalarFieldEnum = {
    id: 'id',
    numero: 'numero',
    capacidade: 'capacidade',
    poutronas: 'poutronas',
    cinemaId: 'cinemaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FilmeScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    sinopse: 'sinopse',
    classificacao: 'classificacao',
    duracao: 'duracao',
    elenco: 'elenco',
    genero: 'genero',
    dataIniciaExibicao: 'dataIniciaExibicao',
    dataFinalExibicao: 'dataFinalExibicao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SessaoScalarFieldEnum = {
    id: 'id',
    horarioExibicao: 'horarioExibicao',
    filmeId: 'filmeId',
    salaId: 'salaId',
    cinemaId: 'cinemaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.IngressoScalarFieldEnum = {
    id: 'id',
    valorInteira: 'valorInteira',
    valorMeia: 'valorMeia',
    sessaoId: 'sessaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PedidoScalarFieldEnum = {
    id: 'id',
    qtInteira: 'qtInteira',
    qtMeia: 'qtMeia',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LancheComboScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valorUnitario: 'valorUnitario',
    qtUnidade: 'qtUnidade',
    subtotal: 'subtotal',
    pedidoId: 'pedidoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map