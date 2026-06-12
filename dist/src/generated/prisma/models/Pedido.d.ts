import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$PedidoPayload>;
export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type PedidoAvgAggregateOutputType = {
    id: number | null;
    qtInteira: number | null;
    qtMeia: number | null;
    valorTotal: number | null;
};
export type PedidoSumAggregateOutputType = {
    id: number | null;
    qtInteira: number | null;
    qtMeia: number | null;
    valorTotal: number | null;
};
export type PedidoMinAggregateOutputType = {
    id: number | null;
    qtInteira: number | null;
    qtMeia: number | null;
    valorTotal: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PedidoMaxAggregateOutputType = {
    id: number | null;
    qtInteira: number | null;
    qtMeia: number | null;
    valorTotal: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PedidoCountAggregateOutputType = {
    id: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PedidoAvgAggregateInputType = {
    id?: true;
    qtInteira?: true;
    qtMeia?: true;
    valorTotal?: true;
};
export type PedidoSumAggregateInputType = {
    id?: true;
    qtInteira?: true;
    qtMeia?: true;
    valorTotal?: true;
};
export type PedidoMinAggregateInputType = {
    id?: true;
    qtInteira?: true;
    qtMeia?: true;
    valorTotal?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PedidoMaxAggregateInputType = {
    id?: true;
    qtInteira?: true;
    qtMeia?: true;
    valorTotal?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PedidoCountAggregateInputType = {
    id?: true;
    qtInteira?: true;
    qtMeia?: true;
    valorTotal?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithRelationInput | Prisma.PedidoOrderByWithRelationInput[];
    cursor?: Prisma.PedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PedidoCountAggregateInputType;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido[P]> : Prisma.GetScalarType<T[P], AggregatePedido[P]>;
};
export type PedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    orderBy?: Prisma.PedidoOrderByWithAggregationInput | Prisma.PedidoOrderByWithAggregationInput[];
    by: Prisma.PedidoScalarFieldEnum[] | Prisma.PedidoScalarFieldEnum;
    having?: Prisma.PedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCountAggregateInputType | true;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type PedidoGroupByOutputType = {
    id: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]>;
}>>;
export type PedidoWhereInput = {
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    qtInteira?: Prisma.IntFilter<"Pedido"> | number;
    qtMeia?: Prisma.IntFilter<"Pedido"> | number;
    valorTotal?: Prisma.FloatFilter<"Pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    ingressos?: Prisma.IngressoListRelationFilter;
    lanches?: Prisma.LancheComboListRelationFilter;
};
export type PedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ingressos?: Prisma.IngressoOrderByRelationAggregateInput;
    lanches?: Prisma.LancheComboOrderByRelationAggregateInput;
};
export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    OR?: Prisma.PedidoWhereInput[];
    NOT?: Prisma.PedidoWhereInput | Prisma.PedidoWhereInput[];
    qtInteira?: Prisma.IntFilter<"Pedido"> | number;
    qtMeia?: Prisma.IntFilter<"Pedido"> | number;
    valorTotal?: Prisma.FloatFilter<"Pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    ingressos?: Prisma.IngressoListRelationFilter;
    lanches?: Prisma.LancheComboListRelationFilter;
}, "id">;
export type PedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PedidoCountOrderByAggregateInput;
    _avg?: Prisma.PedidoAvgOrderByAggregateInput;
    _max?: Prisma.PedidoMaxOrderByAggregateInput;
    _min?: Prisma.PedidoMinOrderByAggregateInput;
    _sum?: Prisma.PedidoSumOrderByAggregateInput;
};
export type PedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PedidoScalarWhereWithAggregatesInput | Prisma.PedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    qtInteira?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    qtMeia?: Prisma.IntWithAggregatesFilter<"Pedido"> | number;
    valorTotal?: Prisma.FloatWithAggregatesFilter<"Pedido"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pedido"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Pedido"> | Date | string;
};
export type PedidoCreateInput = {
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingressos?: Prisma.IngressoCreateNestedManyWithoutPedidosInput;
    lanches?: Prisma.LancheComboCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateInput = {
    id?: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingressos?: Prisma.IngressoUncheckedCreateNestedManyWithoutPedidosInput;
    lanches?: Prisma.LancheComboUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoUpdateInput = {
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingressos?: Prisma.IngressoUpdateManyWithoutPedidosNestedInput;
    lanches?: Prisma.LancheComboUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingressos?: Prisma.IngressoUncheckedUpdateManyWithoutPedidosNestedInput;
    lanches?: Prisma.LancheComboUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoCreateManyInput = {
    id?: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PedidoUpdateManyMutationInput = {
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoListRelationFilter = {
    every?: Prisma.PedidoWhereInput;
    some?: Prisma.PedidoWhereInput;
    none?: Prisma.PedidoWhereInput;
};
export type PedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
};
export type PedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    qtInteira?: Prisma.SortOrder;
    qtMeia?: Prisma.SortOrder;
    valorTotal?: Prisma.SortOrder;
};
export type PedidoScalarRelationFilter = {
    is?: Prisma.PedidoWhereInput;
    isNot?: Prisma.PedidoWhereInput;
};
export type PedidoCreateNestedManyWithoutIngressosInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput> | Prisma.PedidoCreateWithoutIngressosInput[] | Prisma.PedidoUncheckedCreateWithoutIngressosInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutIngressosInput | Prisma.PedidoCreateOrConnectWithoutIngressosInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUncheckedCreateNestedManyWithoutIngressosInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput> | Prisma.PedidoCreateWithoutIngressosInput[] | Prisma.PedidoUncheckedCreateWithoutIngressosInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutIngressosInput | Prisma.PedidoCreateOrConnectWithoutIngressosInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
};
export type PedidoUpdateManyWithoutIngressosNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput> | Prisma.PedidoCreateWithoutIngressosInput[] | Prisma.PedidoUncheckedCreateWithoutIngressosInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutIngressosInput | Prisma.PedidoCreateOrConnectWithoutIngressosInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutIngressosInput | Prisma.PedidoUpsertWithWhereUniqueWithoutIngressosInput[];
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutIngressosInput | Prisma.PedidoUpdateWithWhereUniqueWithoutIngressosInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutIngressosInput | Prisma.PedidoUpdateManyWithWhereWithoutIngressosInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoUncheckedUpdateManyWithoutIngressosNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput> | Prisma.PedidoCreateWithoutIngressosInput[] | Prisma.PedidoUncheckedCreateWithoutIngressosInput[];
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutIngressosInput | Prisma.PedidoCreateOrConnectWithoutIngressosInput[];
    upsert?: Prisma.PedidoUpsertWithWhereUniqueWithoutIngressosInput | Prisma.PedidoUpsertWithWhereUniqueWithoutIngressosInput[];
    set?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    disconnect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    delete?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    connect?: Prisma.PedidoWhereUniqueInput | Prisma.PedidoWhereUniqueInput[];
    update?: Prisma.PedidoUpdateWithWhereUniqueWithoutIngressosInput | Prisma.PedidoUpdateWithWhereUniqueWithoutIngressosInput[];
    updateMany?: Prisma.PedidoUpdateManyWithWhereWithoutIngressosInput | Prisma.PedidoUpdateManyWithWhereWithoutIngressosInput[];
    deleteMany?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
};
export type PedidoCreateNestedOneWithoutLanchesInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutLanchesInput, Prisma.PedidoUncheckedCreateWithoutLanchesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutLanchesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
};
export type PedidoUpdateOneRequiredWithoutLanchesNestedInput = {
    create?: Prisma.XOR<Prisma.PedidoCreateWithoutLanchesInput, Prisma.PedidoUncheckedCreateWithoutLanchesInput>;
    connectOrCreate?: Prisma.PedidoCreateOrConnectWithoutLanchesInput;
    upsert?: Prisma.PedidoUpsertWithoutLanchesInput;
    connect?: Prisma.PedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PedidoUpdateToOneWithWhereWithoutLanchesInput, Prisma.PedidoUpdateWithoutLanchesInput>, Prisma.PedidoUncheckedUpdateWithoutLanchesInput>;
};
export type PedidoCreateWithoutIngressosInput = {
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lanches?: Prisma.LancheComboCreateNestedManyWithoutPedidoInput;
};
export type PedidoUncheckedCreateWithoutIngressosInput = {
    id?: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lanches?: Prisma.LancheComboUncheckedCreateNestedManyWithoutPedidoInput;
};
export type PedidoCreateOrConnectWithoutIngressosInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput>;
};
export type PedidoUpsertWithWhereUniqueWithoutIngressosInput = {
    where: Prisma.PedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutIngressosInput, Prisma.PedidoUncheckedUpdateWithoutIngressosInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutIngressosInput, Prisma.PedidoUncheckedCreateWithoutIngressosInput>;
};
export type PedidoUpdateWithWhereUniqueWithoutIngressosInput = {
    where: Prisma.PedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutIngressosInput, Prisma.PedidoUncheckedUpdateWithoutIngressosInput>;
};
export type PedidoUpdateManyWithWhereWithoutIngressosInput = {
    where: Prisma.PedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyWithoutIngressosInput>;
};
export type PedidoScalarWhereInput = {
    AND?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    OR?: Prisma.PedidoScalarWhereInput[];
    NOT?: Prisma.PedidoScalarWhereInput | Prisma.PedidoScalarWhereInput[];
    id?: Prisma.IntFilter<"Pedido"> | number;
    qtInteira?: Prisma.IntFilter<"Pedido"> | number;
    qtMeia?: Prisma.IntFilter<"Pedido"> | number;
    valorTotal?: Prisma.FloatFilter<"Pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pedido"> | Date | string;
};
export type PedidoCreateWithoutLanchesInput = {
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingressos?: Prisma.IngressoCreateNestedManyWithoutPedidosInput;
};
export type PedidoUncheckedCreateWithoutLanchesInput = {
    id?: number;
    qtInteira: number;
    qtMeia: number;
    valorTotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingressos?: Prisma.IngressoUncheckedCreateNestedManyWithoutPedidosInput;
};
export type PedidoCreateOrConnectWithoutLanchesInput = {
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutLanchesInput, Prisma.PedidoUncheckedCreateWithoutLanchesInput>;
};
export type PedidoUpsertWithoutLanchesInput = {
    update: Prisma.XOR<Prisma.PedidoUpdateWithoutLanchesInput, Prisma.PedidoUncheckedUpdateWithoutLanchesInput>;
    create: Prisma.XOR<Prisma.PedidoCreateWithoutLanchesInput, Prisma.PedidoUncheckedCreateWithoutLanchesInput>;
    where?: Prisma.PedidoWhereInput;
};
export type PedidoUpdateToOneWithWhereWithoutLanchesInput = {
    where?: Prisma.PedidoWhereInput;
    data: Prisma.XOR<Prisma.PedidoUpdateWithoutLanchesInput, Prisma.PedidoUncheckedUpdateWithoutLanchesInput>;
};
export type PedidoUpdateWithoutLanchesInput = {
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingressos?: Prisma.IngressoUpdateManyWithoutPedidosNestedInput;
};
export type PedidoUncheckedUpdateWithoutLanchesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingressos?: Prisma.IngressoUncheckedUpdateManyWithoutPedidosNestedInput;
};
export type PedidoUpdateWithoutIngressosInput = {
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lanches?: Prisma.LancheComboUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateWithoutIngressosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lanches?: Prisma.LancheComboUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type PedidoUncheckedUpdateManyWithoutIngressosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    qtInteira?: Prisma.IntFieldUpdateOperationsInput | number;
    qtMeia?: Prisma.IntFieldUpdateOperationsInput | number;
    valorTotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoCountOutputType = {
    ingressos: number;
    lanches: number;
};
export type PedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingressos?: boolean | PedidoCountOutputTypeCountIngressosArgs;
    lanches?: boolean | PedidoCountOutputTypeCountLanchesArgs;
};
export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoCountOutputTypeSelect<ExtArgs> | null;
};
export type PedidoCountOutputTypeCountIngressosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IngressoWhereInput;
};
export type PedidoCountOutputTypeCountLanchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LancheComboWhereInput;
};
export type PedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    qtInteira?: boolean;
    qtMeia?: boolean;
    valorTotal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ingressos?: boolean | Prisma.Pedido$ingressosArgs<ExtArgs>;
    lanches?: boolean | Prisma.Pedido$lanchesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    qtInteira?: boolean;
    qtMeia?: boolean;
    valorTotal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    qtInteira?: boolean;
    qtMeia?: boolean;
    valorTotal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pedido"]>;
export type PedidoSelectScalar = {
    id?: boolean;
    qtInteira?: boolean;
    qtMeia?: boolean;
    valorTotal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "qtInteira" | "qtMeia" | "valorTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["pedido"]>;
export type PedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingressos?: boolean | Prisma.Pedido$ingressosArgs<ExtArgs>;
    lanches?: boolean | Prisma.Pedido$lanchesArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pedido";
    objects: {
        ingressos: Prisma.$IngressoPayload<ExtArgs>[];
        lanches: Prisma.$LancheComboPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        qtInteira: number;
        qtMeia: number;
        valorTotal: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pedido"]>;
    composites: {};
};
export type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PedidoPayload, S>;
export type PedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidoCountAggregateInputType | true;
};
export interface PedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pedido'];
        meta: {
            name: 'Pedido';
        };
    };
    findUnique<T extends PedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PedidoFindManyArgs>(args?: Prisma.SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PedidoCreateArgs>(args: Prisma.SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PedidoDeleteArgs>(args: Prisma.SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PedidoUpdateArgs>(args: Prisma.SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PedidoUpsertArgs>(args: Prisma.SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PedidoCountArgs>(args?: Prisma.Subset<T, PedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidoCountAggregateOutputType> : number>;
    aggregate<T extends PedidoAggregateArgs>(args: Prisma.Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>;
    groupBy<T extends PedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: PedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PedidoFieldRefs;
}
export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ingressos<T extends Prisma.Pedido$ingressosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pedido$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lanches<T extends Prisma.Pedido$lanchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pedido$lanchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PedidoFieldRefs {
    readonly id: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly qtInteira: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly qtMeia: Prisma.FieldRef<"Pedido", 'Int'>;
    readonly valorTotal: Prisma.FieldRef<"Pedido", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Pedido", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Pedido", 'DateTime'>;
}
export type PedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
};
export type PedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    data: Prisma.PedidoCreateManyInput | Prisma.PedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    where?: Prisma.PedidoWhereInput;
    limit?: number;
};
export type PedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PedidoUpdateManyMutationInput, Prisma.PedidoUncheckedUpdateManyInput>;
    where?: Prisma.PedidoWhereInput;
    limit?: number;
};
export type PedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PedidoCreateInput, Prisma.PedidoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PedidoUpdateInput, Prisma.PedidoUncheckedUpdateInput>;
};
export type PedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
    where: Prisma.PedidoWhereUniqueInput;
};
export type PedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PedidoWhereInput;
    limit?: number;
};
export type Pedido$ingressosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Pedido$lanchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    where?: Prisma.LancheComboWhereInput;
    orderBy?: Prisma.LancheComboOrderByWithRelationInput | Prisma.LancheComboOrderByWithRelationInput[];
    cursor?: Prisma.LancheComboWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LancheComboScalarFieldEnum | Prisma.LancheComboScalarFieldEnum[];
};
export type PedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoSelect<ExtArgs> | null;
    omit?: Prisma.PedidoOmit<ExtArgs> | null;
    include?: Prisma.PedidoInclude<ExtArgs> | null;
};
