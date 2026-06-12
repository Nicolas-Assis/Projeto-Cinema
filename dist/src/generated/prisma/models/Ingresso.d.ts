import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IngressoModel = runtime.Types.Result.DefaultSelection<Prisma.$IngressoPayload>;
export type AggregateIngresso = {
    _count: IngressoCountAggregateOutputType | null;
    _avg: IngressoAvgAggregateOutputType | null;
    _sum: IngressoSumAggregateOutputType | null;
    _min: IngressoMinAggregateOutputType | null;
    _max: IngressoMaxAggregateOutputType | null;
};
export type IngressoAvgAggregateOutputType = {
    id: number | null;
    valorInteira: number | null;
    valorMeia: number | null;
    sessaoId: number | null;
};
export type IngressoSumAggregateOutputType = {
    id: number | null;
    valorInteira: number | null;
    valorMeia: number | null;
    sessaoId: number | null;
};
export type IngressoMinAggregateOutputType = {
    id: number | null;
    valorInteira: number | null;
    valorMeia: number | null;
    sessaoId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IngressoMaxAggregateOutputType = {
    id: number | null;
    valorInteira: number | null;
    valorMeia: number | null;
    sessaoId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IngressoCountAggregateOutputType = {
    id: number;
    valorInteira: number;
    valorMeia: number;
    sessaoId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IngressoAvgAggregateInputType = {
    id?: true;
    valorInteira?: true;
    valorMeia?: true;
    sessaoId?: true;
};
export type IngressoSumAggregateInputType = {
    id?: true;
    valorInteira?: true;
    valorMeia?: true;
    sessaoId?: true;
};
export type IngressoMinAggregateInputType = {
    id?: true;
    valorInteira?: true;
    valorMeia?: true;
    sessaoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IngressoMaxAggregateInputType = {
    id?: true;
    valorInteira?: true;
    valorMeia?: true;
    sessaoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IngressoCountAggregateInputType = {
    id?: true;
    valorInteira?: true;
    valorMeia?: true;
    sessaoId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IngressoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IngressoWhereInput;
    orderBy?: Prisma.IngressoOrderByWithRelationInput | Prisma.IngressoOrderByWithRelationInput[];
    cursor?: Prisma.IngressoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IngressoCountAggregateInputType;
    _avg?: IngressoAvgAggregateInputType;
    _sum?: IngressoSumAggregateInputType;
    _min?: IngressoMinAggregateInputType;
    _max?: IngressoMaxAggregateInputType;
};
export type GetIngressoAggregateType<T extends IngressoAggregateArgs> = {
    [P in keyof T & keyof AggregateIngresso]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIngresso[P]> : Prisma.GetScalarType<T[P], AggregateIngresso[P]>;
};
export type IngressoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IngressoWhereInput;
    orderBy?: Prisma.IngressoOrderByWithAggregationInput | Prisma.IngressoOrderByWithAggregationInput[];
    by: Prisma.IngressoScalarFieldEnum[] | Prisma.IngressoScalarFieldEnum;
    having?: Prisma.IngressoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IngressoCountAggregateInputType | true;
    _avg?: IngressoAvgAggregateInputType;
    _sum?: IngressoSumAggregateInputType;
    _min?: IngressoMinAggregateInputType;
    _max?: IngressoMaxAggregateInputType;
};
export type IngressoGroupByOutputType = {
    id: number;
    valorInteira: number;
    valorMeia: number;
    sessaoId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: IngressoCountAggregateOutputType | null;
    _avg: IngressoAvgAggregateOutputType | null;
    _sum: IngressoSumAggregateOutputType | null;
    _min: IngressoMinAggregateOutputType | null;
    _max: IngressoMaxAggregateOutputType | null;
};
export type GetIngressoGroupByPayload<T extends IngressoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IngressoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IngressoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IngressoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IngressoGroupByOutputType[P]>;
}>>;
export type IngressoWhereInput = {
    AND?: Prisma.IngressoWhereInput | Prisma.IngressoWhereInput[];
    OR?: Prisma.IngressoWhereInput[];
    NOT?: Prisma.IngressoWhereInput | Prisma.IngressoWhereInput[];
    id?: Prisma.IntFilter<"Ingresso"> | number;
    valorInteira?: Prisma.FloatFilter<"Ingresso"> | number;
    valorMeia?: Prisma.FloatFilter<"Ingresso"> | number;
    sessaoId?: Prisma.IntFilter<"Ingresso"> | number;
    createdAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
    pedidos?: Prisma.PedidoListRelationFilter;
};
export type IngressoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sessao?: Prisma.SessaoOrderByWithRelationInput;
    pedidos?: Prisma.PedidoOrderByRelationAggregateInput;
};
export type IngressoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.IngressoWhereInput | Prisma.IngressoWhereInput[];
    OR?: Prisma.IngressoWhereInput[];
    NOT?: Prisma.IngressoWhereInput | Prisma.IngressoWhereInput[];
    valorInteira?: Prisma.FloatFilter<"Ingresso"> | number;
    valorMeia?: Prisma.FloatFilter<"Ingresso"> | number;
    sessaoId?: Prisma.IntFilter<"Ingresso"> | number;
    createdAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
    pedidos?: Prisma.PedidoListRelationFilter;
}, "id">;
export type IngressoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IngressoCountOrderByAggregateInput;
    _avg?: Prisma.IngressoAvgOrderByAggregateInput;
    _max?: Prisma.IngressoMaxOrderByAggregateInput;
    _min?: Prisma.IngressoMinOrderByAggregateInput;
    _sum?: Prisma.IngressoSumOrderByAggregateInput;
};
export type IngressoScalarWhereWithAggregatesInput = {
    AND?: Prisma.IngressoScalarWhereWithAggregatesInput | Prisma.IngressoScalarWhereWithAggregatesInput[];
    OR?: Prisma.IngressoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IngressoScalarWhereWithAggregatesInput | Prisma.IngressoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Ingresso"> | number;
    valorInteira?: Prisma.FloatWithAggregatesFilter<"Ingresso"> | number;
    valorMeia?: Prisma.FloatWithAggregatesFilter<"Ingresso"> | number;
    sessaoId?: Prisma.IntWithAggregatesFilter<"Ingresso"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ingresso"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ingresso"> | Date | string;
};
export type IngressoCreateInput = {
    valorInteira: number;
    valorMeia: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessao: Prisma.SessaoCreateNestedOneWithoutIngressosInput;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutIngressosInput;
};
export type IngressoUncheckedCreateInput = {
    id?: number;
    valorInteira: number;
    valorMeia: number;
    sessaoId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutIngressosInput;
};
export type IngressoUpdateInput = {
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutIngressosNestedInput;
    pedidos?: Prisma.PedidoUpdateManyWithoutIngressosNestedInput;
};
export type IngressoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessaoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutIngressosNestedInput;
};
export type IngressoCreateManyInput = {
    id?: number;
    valorInteira: number;
    valorMeia: number;
    sessaoId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IngressoUpdateManyMutationInput = {
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IngressoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessaoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IngressoListRelationFilter = {
    every?: Prisma.IngressoWhereInput;
    some?: Prisma.IngressoWhereInput;
    none?: Prisma.IngressoWhereInput;
};
export type IngressoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IngressoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IngressoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
};
export type IngressoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IngressoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IngressoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorInteira?: Prisma.SortOrder;
    valorMeia?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
};
export type IngressoCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput> | Prisma.IngressoCreateWithoutSessaoInput[] | Prisma.IngressoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutSessaoInput | Prisma.IngressoCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.IngressoCreateManySessaoInputEnvelope;
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
};
export type IngressoUncheckedCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput> | Prisma.IngressoCreateWithoutSessaoInput[] | Prisma.IngressoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutSessaoInput | Prisma.IngressoCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.IngressoCreateManySessaoInputEnvelope;
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
};
export type IngressoUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput> | Prisma.IngressoCreateWithoutSessaoInput[] | Prisma.IngressoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutSessaoInput | Prisma.IngressoCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.IngressoUpsertWithWhereUniqueWithoutSessaoInput | Prisma.IngressoUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.IngressoCreateManySessaoInputEnvelope;
    set?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    disconnect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    delete?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    update?: Prisma.IngressoUpdateWithWhereUniqueWithoutSessaoInput | Prisma.IngressoUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.IngressoUpdateManyWithWhereWithoutSessaoInput | Prisma.IngressoUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
};
export type IngressoUncheckedUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput> | Prisma.IngressoCreateWithoutSessaoInput[] | Prisma.IngressoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutSessaoInput | Prisma.IngressoCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.IngressoUpsertWithWhereUniqueWithoutSessaoInput | Prisma.IngressoUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.IngressoCreateManySessaoInputEnvelope;
    set?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    disconnect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    delete?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    update?: Prisma.IngressoUpdateWithWhereUniqueWithoutSessaoInput | Prisma.IngressoUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.IngressoUpdateManyWithWhereWithoutSessaoInput | Prisma.IngressoUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IngressoCreateNestedManyWithoutPedidosInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput> | Prisma.IngressoCreateWithoutPedidosInput[] | Prisma.IngressoUncheckedCreateWithoutPedidosInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutPedidosInput | Prisma.IngressoCreateOrConnectWithoutPedidosInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
};
export type IngressoUncheckedCreateNestedManyWithoutPedidosInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput> | Prisma.IngressoCreateWithoutPedidosInput[] | Prisma.IngressoUncheckedCreateWithoutPedidosInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutPedidosInput | Prisma.IngressoCreateOrConnectWithoutPedidosInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
};
export type IngressoUpdateManyWithoutPedidosNestedInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput> | Prisma.IngressoCreateWithoutPedidosInput[] | Prisma.IngressoUncheckedCreateWithoutPedidosInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutPedidosInput | Prisma.IngressoCreateOrConnectWithoutPedidosInput[];
    upsert?: Prisma.IngressoUpsertWithWhereUniqueWithoutPedidosInput | Prisma.IngressoUpsertWithWhereUniqueWithoutPedidosInput[];
    set?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    disconnect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    delete?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    update?: Prisma.IngressoUpdateWithWhereUniqueWithoutPedidosInput | Prisma.IngressoUpdateWithWhereUniqueWithoutPedidosInput[];
    updateMany?: Prisma.IngressoUpdateManyWithWhereWithoutPedidosInput | Prisma.IngressoUpdateManyWithWhereWithoutPedidosInput[];
    deleteMany?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
};
export type IngressoUncheckedUpdateManyWithoutPedidosNestedInput = {
    create?: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput> | Prisma.IngressoCreateWithoutPedidosInput[] | Prisma.IngressoUncheckedCreateWithoutPedidosInput[];
    connectOrCreate?: Prisma.IngressoCreateOrConnectWithoutPedidosInput | Prisma.IngressoCreateOrConnectWithoutPedidosInput[];
    upsert?: Prisma.IngressoUpsertWithWhereUniqueWithoutPedidosInput | Prisma.IngressoUpsertWithWhereUniqueWithoutPedidosInput[];
    set?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    disconnect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    delete?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    connect?: Prisma.IngressoWhereUniqueInput | Prisma.IngressoWhereUniqueInput[];
    update?: Prisma.IngressoUpdateWithWhereUniqueWithoutPedidosInput | Prisma.IngressoUpdateWithWhereUniqueWithoutPedidosInput[];
    updateMany?: Prisma.IngressoUpdateManyWithWhereWithoutPedidosInput | Prisma.IngressoUpdateManyWithWhereWithoutPedidosInput[];
    deleteMany?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
};
export type IngressoCreateWithoutSessaoInput = {
    valorInteira: number;
    valorMeia: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedidos?: Prisma.PedidoCreateNestedManyWithoutIngressosInput;
};
export type IngressoUncheckedCreateWithoutSessaoInput = {
    id?: number;
    valorInteira: number;
    valorMeia: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedidos?: Prisma.PedidoUncheckedCreateNestedManyWithoutIngressosInput;
};
export type IngressoCreateOrConnectWithoutSessaoInput = {
    where: Prisma.IngressoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput>;
};
export type IngressoCreateManySessaoInputEnvelope = {
    data: Prisma.IngressoCreateManySessaoInput | Prisma.IngressoCreateManySessaoInput[];
    skipDuplicates?: boolean;
};
export type IngressoUpsertWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.IngressoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IngressoUpdateWithoutSessaoInput, Prisma.IngressoUncheckedUpdateWithoutSessaoInput>;
    create: Prisma.XOR<Prisma.IngressoCreateWithoutSessaoInput, Prisma.IngressoUncheckedCreateWithoutSessaoInput>;
};
export type IngressoUpdateWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.IngressoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IngressoUpdateWithoutSessaoInput, Prisma.IngressoUncheckedUpdateWithoutSessaoInput>;
};
export type IngressoUpdateManyWithWhereWithoutSessaoInput = {
    where: Prisma.IngressoScalarWhereInput;
    data: Prisma.XOR<Prisma.IngressoUpdateManyMutationInput, Prisma.IngressoUncheckedUpdateManyWithoutSessaoInput>;
};
export type IngressoScalarWhereInput = {
    AND?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
    OR?: Prisma.IngressoScalarWhereInput[];
    NOT?: Prisma.IngressoScalarWhereInput | Prisma.IngressoScalarWhereInput[];
    id?: Prisma.IntFilter<"Ingresso"> | number;
    valorInteira?: Prisma.FloatFilter<"Ingresso"> | number;
    valorMeia?: Prisma.FloatFilter<"Ingresso"> | number;
    sessaoId?: Prisma.IntFilter<"Ingresso"> | number;
    createdAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ingresso"> | Date | string;
};
export type IngressoCreateWithoutPedidosInput = {
    valorInteira: number;
    valorMeia: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessao: Prisma.SessaoCreateNestedOneWithoutIngressosInput;
};
export type IngressoUncheckedCreateWithoutPedidosInput = {
    id?: number;
    valorInteira: number;
    valorMeia: number;
    sessaoId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IngressoCreateOrConnectWithoutPedidosInput = {
    where: Prisma.IngressoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput>;
};
export type IngressoUpsertWithWhereUniqueWithoutPedidosInput = {
    where: Prisma.IngressoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IngressoUpdateWithoutPedidosInput, Prisma.IngressoUncheckedUpdateWithoutPedidosInput>;
    create: Prisma.XOR<Prisma.IngressoCreateWithoutPedidosInput, Prisma.IngressoUncheckedCreateWithoutPedidosInput>;
};
export type IngressoUpdateWithWhereUniqueWithoutPedidosInput = {
    where: Prisma.IngressoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IngressoUpdateWithoutPedidosInput, Prisma.IngressoUncheckedUpdateWithoutPedidosInput>;
};
export type IngressoUpdateManyWithWhereWithoutPedidosInput = {
    where: Prisma.IngressoScalarWhereInput;
    data: Prisma.XOR<Prisma.IngressoUpdateManyMutationInput, Prisma.IngressoUncheckedUpdateManyWithoutPedidosInput>;
};
export type IngressoCreateManySessaoInput = {
    id?: number;
    valorInteira: number;
    valorMeia: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IngressoUpdateWithoutSessaoInput = {
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUpdateManyWithoutIngressosNestedInput;
};
export type IngressoUncheckedUpdateWithoutSessaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedidos?: Prisma.PedidoUncheckedUpdateManyWithoutIngressosNestedInput;
};
export type IngressoUncheckedUpdateManyWithoutSessaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IngressoUpdateWithoutPedidosInput = {
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutIngressosNestedInput;
};
export type IngressoUncheckedUpdateWithoutPedidosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessaoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IngressoUncheckedUpdateManyWithoutPedidosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    valorInteira?: Prisma.FloatFieldUpdateOperationsInput | number;
    valorMeia?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessaoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IngressoCountOutputType = {
    pedidos: number;
};
export type IngressoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedidos?: boolean | IngressoCountOutputTypeCountPedidosArgs;
};
export type IngressoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoCountOutputTypeSelect<ExtArgs> | null;
};
export type IngressoCountOutputTypeCountPedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
};
export type IngressoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valorInteira?: boolean;
    valorMeia?: boolean;
    sessaoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Ingresso$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.IngressoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ingresso"]>;
export type IngressoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valorInteira?: boolean;
    valorMeia?: boolean;
    sessaoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ingresso"]>;
export type IngressoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    valorInteira?: boolean;
    valorMeia?: boolean;
    sessaoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ingresso"]>;
export type IngressoSelectScalar = {
    id?: boolean;
    valorInteira?: boolean;
    valorMeia?: boolean;
    sessaoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type IngressoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "valorInteira" | "valorMeia" | "sessaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["ingresso"]>;
export type IngressoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    pedidos?: boolean | Prisma.Ingresso$pedidosArgs<ExtArgs>;
    _count?: boolean | Prisma.IngressoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type IngressoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
};
export type IngressoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
};
export type $IngressoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ingresso";
    objects: {
        sessao: Prisma.$SessaoPayload<ExtArgs>;
        pedidos: Prisma.$PedidoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        valorInteira: number;
        valorMeia: number;
        sessaoId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ingresso"]>;
    composites: {};
};
export type IngressoGetPayload<S extends boolean | null | undefined | IngressoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IngressoPayload, S>;
export type IngressoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IngressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IngressoCountAggregateInputType | true;
};
export interface IngressoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ingresso'];
        meta: {
            name: 'Ingresso';
        };
    };
    findUnique<T extends IngressoFindUniqueArgs>(args: Prisma.SelectSubset<T, IngressoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IngressoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IngressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IngressoFindFirstArgs>(args?: Prisma.SelectSubset<T, IngressoFindFirstArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IngressoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IngressoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IngressoFindManyArgs>(args?: Prisma.SelectSubset<T, IngressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IngressoCreateArgs>(args: Prisma.SelectSubset<T, IngressoCreateArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IngressoCreateManyArgs>(args?: Prisma.SelectSubset<T, IngressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IngressoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IngressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IngressoDeleteArgs>(args: Prisma.SelectSubset<T, IngressoDeleteArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IngressoUpdateArgs>(args: Prisma.SelectSubset<T, IngressoUpdateArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IngressoDeleteManyArgs>(args?: Prisma.SelectSubset<T, IngressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IngressoUpdateManyArgs>(args: Prisma.SelectSubset<T, IngressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IngressoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IngressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IngressoUpsertArgs>(args: Prisma.SelectSubset<T, IngressoUpsertArgs<ExtArgs>>): Prisma.Prisma__IngressoClient<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IngressoCountArgs>(args?: Prisma.Subset<T, IngressoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IngressoCountAggregateOutputType> : number>;
    aggregate<T extends IngressoAggregateArgs>(args: Prisma.Subset<T, IngressoAggregateArgs>): Prisma.PrismaPromise<GetIngressoAggregateType<T>>;
    groupBy<T extends IngressoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IngressoGroupByArgs['orderBy'];
    } : {
        orderBy?: IngressoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IngressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IngressoFieldRefs;
}
export interface Prisma__IngressoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessao<T extends Prisma.SessaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessaoDefaultArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pedidos<T extends Prisma.Ingresso$pedidosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ingresso$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IngressoFieldRefs {
    readonly id: Prisma.FieldRef<"Ingresso", 'Int'>;
    readonly valorInteira: Prisma.FieldRef<"Ingresso", 'Float'>;
    readonly valorMeia: Prisma.FieldRef<"Ingresso", 'Float'>;
    readonly sessaoId: Prisma.FieldRef<"Ingresso", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Ingresso", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ingresso", 'DateTime'>;
}
export type IngressoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where: Prisma.IngressoWhereUniqueInput;
};
export type IngressoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where: Prisma.IngressoWhereUniqueInput;
};
export type IngressoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where?: Prisma.IngressoWhereInput;
    orderBy?: Prisma.IngressoOrderByWithRelationInput | Prisma.IngressoOrderByWithRelationInput[];
    cursor?: Prisma.IngressoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IngressoScalarFieldEnum | Prisma.IngressoScalarFieldEnum[];
};
export type IngressoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where?: Prisma.IngressoWhereInput;
    orderBy?: Prisma.IngressoOrderByWithRelationInput | Prisma.IngressoOrderByWithRelationInput[];
    cursor?: Prisma.IngressoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IngressoScalarFieldEnum | Prisma.IngressoScalarFieldEnum[];
};
export type IngressoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where?: Prisma.IngressoWhereInput;
    orderBy?: Prisma.IngressoOrderByWithRelationInput | Prisma.IngressoOrderByWithRelationInput[];
    cursor?: Prisma.IngressoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IngressoScalarFieldEnum | Prisma.IngressoScalarFieldEnum[];
};
export type IngressoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IngressoCreateInput, Prisma.IngressoUncheckedCreateInput>;
};
export type IngressoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IngressoCreateManyInput | Prisma.IngressoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IngressoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    data: Prisma.IngressoCreateManyInput | Prisma.IngressoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IngressoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IngressoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IngressoUpdateInput, Prisma.IngressoUncheckedUpdateInput>;
    where: Prisma.IngressoWhereUniqueInput;
};
export type IngressoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IngressoUpdateManyMutationInput, Prisma.IngressoUncheckedUpdateManyInput>;
    where?: Prisma.IngressoWhereInput;
    limit?: number;
};
export type IngressoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IngressoUpdateManyMutationInput, Prisma.IngressoUncheckedUpdateManyInput>;
    where?: Prisma.IngressoWhereInput;
    limit?: number;
    include?: Prisma.IngressoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IngressoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where: Prisma.IngressoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IngressoCreateInput, Prisma.IngressoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IngressoUpdateInput, Prisma.IngressoUncheckedUpdateInput>;
};
export type IngressoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
    where: Prisma.IngressoWhereUniqueInput;
};
export type IngressoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IngressoWhereInput;
    limit?: number;
};
export type Ingresso$pedidosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    cursor?: Prisma.PedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
export type IngressoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IngressoSelect<ExtArgs> | null;
    omit?: Prisma.IngressoOmit<ExtArgs> | null;
    include?: Prisma.IngressoInclude<ExtArgs> | null;
};
