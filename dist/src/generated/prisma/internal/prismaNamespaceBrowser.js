"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.LancheComboScalarFieldEnum = exports.PedidoScalarFieldEnum = exports.IngressoScalarFieldEnum = exports.SessaoScalarFieldEnum = exports.FilmeScalarFieldEnum = exports.SalaScalarFieldEnum = exports.CinemaScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
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
//# sourceMappingURL=prismaNamespaceBrowser.js.map