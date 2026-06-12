import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LancheComboModel = runtime.Types.Result.DefaultSelection<Prisma.$LancheComboPayload>;
export type AggregateLancheCombo = {
    _count: LancheComboCountAggregateOutputType | null;
    _avg: LancheComboAvgAggregateOutputType | null;
    _sum: LancheComboSumAggregateOutputType | null;
    _min: LancheComboMinAggregateOutputType | null;
    _max: LancheComboMaxAggregateOutputType | null;
};
export type LancheComboAvgAggregateOutputType = {
    id: number | null;
    valorUnitario: number | null;
    qtUnidade: number | null;
    subtotal: number | null;
    pedidoId: number | null;
};
export type LancheComboSumAggregateOutputType = {
    id: number | null;
    valorUnitario: number | null;
    qtUnidade: number | null;
    subtotal: number | null;
    pedidoId: number | null;
};
export type LancheComboMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    descricao: string | null;
    valorUnitario: number | null;
    qtUnidade: number | null;
    subtotal: number | null;
    pedidoId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LancheComboMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    descricao: string | null;
    valorUnitario: number | null;
    qtUnidade: number | null;
    subtotal: number | null;
    pedidoId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LancheComboCountAggregateOutputType = {
    id: number;
    nome: number;
    descricao: number;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    pedidoId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LancheComboAvgAggregateInputType = {
    id?: true;
    valorUnitario?: true;
    qtUnidade?: true;
    subtotal?: true;
    pedidoId?: true;
};
export type LancheComboSumAggregateInputType = {
    id?: true;
    valorUnitario?: true;
    qtUnidade?: true;
    subtotal?: true;
    pedidoId?: true;
};
export type LancheComboMinAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    valorUnitario?: true;
    qtUnidade?: true;
    subtotal?: true;
    pedidoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LancheComboMaxAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    valorUnitario?: true;
    qtUnidade?: true;
    subtotal?: true;
    pedidoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LancheComboCountAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    valorUnitario?: true;
    qtUnidade?: true;
    subtotal?: true;
    pedidoId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LancheComboAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LancheComboWhereInput;
    orderBy?: Prisma.LancheComboOrderByWithRelationInput | Prisma.LancheComboOrderByWithRelationInput[];
    cursor?: Prisma.LancheComboWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LancheComboCountAggregateInputType;
    _avg?: LancheComboAvgAggregateInputType;
    _sum?: LancheComboSumAggregateInputType;
    _min?: LancheComboMinAggregateInputType;
    _max?: LancheComboMaxAggregateInputType;
};
export type GetLancheComboAggregateType<T extends LancheComboAggregateArgs> = {
    [P in keyof T & keyof AggregateLancheCombo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLancheCombo[P]> : Prisma.GetScalarType<T[P], AggregateLancheCombo[P]>;
};
export type LancheComboGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LancheComboWhereInput;
    orderBy?: Prisma.LancheComboOrderByWithAggregationInput | Prisma.LancheComboOrderByWithAggregationInput[];
    by: Prisma.LancheComboScalarFieldEnum[] | Prisma.LancheComboScalarFieldEnum;
    having?: Prisma.LancheComboScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LancheComboCountAggregateInputType | true;
    _avg?: LancheComboAvgAggregateInputType;
    _sum?: LancheComboSumAggregateInputType;
    _min?: LancheComboMinAggregateInputType;
    _max?: LancheComboMaxAggregateInputType;
};
export type LancheComboGroupByOutputType = {
    id: number;
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    pedidoId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: LancheComboCountAggregateOutputType | null;
    _avg: LancheComboAvgAggregateOutputType | null;
    _sum: LancheComboSumAggregateOutputType | null;
    _min: LancheComboMinAggregateOutputType | null;
    _max: LancheComboMaxAggregateOutputType | null;
};
export type GetLancheComboGroupByPayload<T extends LancheComboGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LancheComboGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LancheComboGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LancheComboGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LancheComboGroupByOutputType[P]>;
}>>;
export type LancheComboWhereInput = {
    AND?: Prisma.LancheComboWhereInput | Prisma.LancheComboWhereInput[];
    OR?: Prisma.LancheComboWhereInput[];
    NOT?: Prisma.LancheComboWhereInput | Prisma.LancheComboWhereInput[];
    id?: Prisma.IntFilter<"LancheCombo"> | number;
    nome?: Prisma.StringFilter<"LancheCombo"> | string;
    descricao?: Prisma.StringFilter<"LancheCombo"> | string;
    valorUnitario?: Prisma.FloatFilter<"LancheCombo"> | number;
    qtUnidade?: Prisma.IntFilter<"LancheCombo"> | number;
    subtotal?: Prisma.FloatFilter<"LancheCombo"> | number;
    pedidoId?: Prisma.IntFilter<"LancheCombo"> | number;
    createdAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.PedidoWhereInput>;
};
export type LancheComboOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pedido?: Prisma.PedidoOrderByWithRelationInput;
};
export type LancheComboWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LancheComboWhereInput | Prisma.LancheComboWhereInput[];
    OR?: Prisma.LancheComboWhereInput[];
    NOT?: Prisma.LancheComboWhereInput | Prisma.LancheComboWhereInput[];
    nome?: Prisma.StringFilter<"LancheCombo"> | string;
    descricao?: Prisma.StringFilter<"LancheCombo"> | string;
    valorUnitario?: Prisma.FloatFilter<"LancheCombo"> | number;
    qtUnidade?: Prisma.IntFilter<"LancheCombo"> | number;
    subtotal?: Prisma.FloatFilter<"LancheCombo"> | number;
    pedidoId?: Prisma.IntFilter<"LancheCombo"> | number;
    createdAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.PedidoWhereInput>;
}, "id">;
export type LancheComboOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LancheComboCountOrderByAggregateInput;
    _avg?: Prisma.LancheComboAvgOrderByAggregateInput;
    _max?: Prisma.LancheComboMaxOrderByAggregateInput;
    _min?: Prisma.LancheComboMinOrderByAggregateInput;
    _sum?: Prisma.LancheComboSumOrderByAggregateInput;
};
export type LancheComboScalarWhereWithAggregatesInput = {
    AND?: Prisma.LancheComboScalarWhereWithAggregatesInput | Prisma.LancheComboScalarWhereWithAggregatesInput[];
    OR?: Prisma.LancheComboScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LancheComboScalarWhereWithAggregatesInput | Prisma.LancheComboScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LancheCombo"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"LancheCombo"> | string;
    descricao?: Prisma.StringWithAggregatesFilter<"LancheCombo"> | string;
    valorUnitario?: Prisma.FloatWithAggregatesFilter<"LancheCombo"> | number;
    qtUnidade?: Prisma.IntWithAggregatesFilter<"LancheCombo"> | number;
    subtotal?: Prisma.FloatWithAggregatesFilter<"LancheCombo"> | number;
    pedidoId?: Prisma.IntWithAggregatesFilter<"LancheCombo"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LancheCombo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LancheCombo"> | Date | string;
};
export type LancheComboCreateInput = {
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedido: Prisma.PedidoCreateNestedOneWithoutLanchesInput;
};
export type LancheComboUncheckedCreateInput = {
    id?: number;
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    pedidoId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LancheComboUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedido?: Prisma.PedidoUpdateOneRequiredWithoutLanchesNestedInput;
};
export type LancheComboUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboCreateManyInput = {
    id?: number;
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    pedidoId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LancheComboUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboListRelationFilter = {
    every?: Prisma.LancheComboWhereInput;
    some?: Prisma.LancheComboWhereInput;
    none?: Prisma.LancheComboWhereInput;
};
export type LancheComboOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LancheComboCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LancheComboAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
};
export type LancheComboMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LancheComboMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LancheComboSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    valorUnitario?: Prisma.SortOrder;
    qtUnidade?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
};
export type LancheComboCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput> | Prisma.LancheComboCreateWithoutPedidoInput[] | Prisma.LancheComboUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.LancheComboCreateOrConnectWithoutPedidoInput | Prisma.LancheComboCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.LancheComboCreateManyPedidoInputEnvelope;
    connect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
};
export type LancheComboUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput> | Prisma.LancheComboCreateWithoutPedidoInput[] | Prisma.LancheComboUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.LancheComboCreateOrConnectWithoutPedidoInput | Prisma.LancheComboCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.LancheComboCreateManyPedidoInputEnvelope;
    connect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
};
export type LancheComboUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput> | Prisma.LancheComboCreateWithoutPedidoInput[] | Prisma.LancheComboUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.LancheComboCreateOrConnectWithoutPedidoInput | Prisma.LancheComboCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.LancheComboUpsertWithWhereUniqueWithoutPedidoInput | Prisma.LancheComboUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.LancheComboCreateManyPedidoInputEnvelope;
    set?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    disconnect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    delete?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    connect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    update?: Prisma.LancheComboUpdateWithWhereUniqueWithoutPedidoInput | Prisma.LancheComboUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.LancheComboUpdateManyWithWhereWithoutPedidoInput | Prisma.LancheComboUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.LancheComboScalarWhereInput | Prisma.LancheComboScalarWhereInput[];
};
export type LancheComboUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput> | Prisma.LancheComboCreateWithoutPedidoInput[] | Prisma.LancheComboUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.LancheComboCreateOrConnectWithoutPedidoInput | Prisma.LancheComboCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.LancheComboUpsertWithWhereUniqueWithoutPedidoInput | Prisma.LancheComboUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.LancheComboCreateManyPedidoInputEnvelope;
    set?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    disconnect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    delete?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    connect?: Prisma.LancheComboWhereUniqueInput | Prisma.LancheComboWhereUniqueInput[];
    update?: Prisma.LancheComboUpdateWithWhereUniqueWithoutPedidoInput | Prisma.LancheComboUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.LancheComboUpdateManyWithWhereWithoutPedidoInput | Prisma.LancheComboUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.LancheComboScalarWhereInput | Prisma.LancheComboScalarWhereInput[];
};
export type LancheComboCreateWithoutPedidoInput = {
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LancheComboUncheckedCreateWithoutPedidoInput = {
    id?: number;
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LancheComboCreateOrConnectWithoutPedidoInput = {
    where: Prisma.LancheComboWhereUniqueInput;
    create: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput>;
};
export type LancheComboCreateManyPedidoInputEnvelope = {
    data: Prisma.LancheComboCreateManyPedidoInput | Prisma.LancheComboCreateManyPedidoInput[];
    skipDuplicates?: boolean;
};
export type LancheComboUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.LancheComboWhereUniqueInput;
    update: Prisma.XOR<Prisma.LancheComboUpdateWithoutPedidoInput, Prisma.LancheComboUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.LancheComboCreateWithoutPedidoInput, Prisma.LancheComboUncheckedCreateWithoutPedidoInput>;
};
export type LancheComboUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.LancheComboWhereUniqueInput;
    data: Prisma.XOR<Prisma.LancheComboUpdateWithoutPedidoInput, Prisma.LancheComboUncheckedUpdateWithoutPedidoInput>;
};
export type LancheComboUpdateManyWithWhereWithoutPedidoInput = {
    where: Prisma.LancheComboScalarWhereInput;
    data: Prisma.XOR<Prisma.LancheComboUpdateManyMutationInput, Prisma.LancheComboUncheckedUpdateManyWithoutPedidoInput>;
};
export type LancheComboScalarWhereInput = {
    AND?: Prisma.LancheComboScalarWhereInput | Prisma.LancheComboScalarWhereInput[];
    OR?: Prisma.LancheComboScalarWhereInput[];
    NOT?: Prisma.LancheComboScalarWhereInput | Prisma.LancheComboScalarWhereInput[];
    id?: Prisma.IntFilter<"LancheCombo"> | number;
    nome?: Prisma.StringFilter<"LancheCombo"> | string;
    descricao?: Prisma.StringFilter<"LancheCombo"> | string;
    valorUnitario?: Prisma.FloatFilter<"LancheCombo"> | number;
    qtUnidade?: Prisma.IntFilter<"LancheCombo"> | number;
    subtotal?: Prisma.FloatFilter<"LancheCombo"> | number;
    pedidoId?: Prisma.IntFilter<"LancheCombo"> | number;
    createdAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LancheCombo"> | Date | string;
};
export type LancheComboCreateManyPedidoInput = {
    id?: number;
    nome: string;
    descricao: string;
    valorUnitario: number;
    qtUnidade: number;
    subtotal: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LancheComboUpdateWithoutPedidoInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboUncheckedUpdateWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboUncheckedUpdateManyWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    qtUnidade?: Prisma.IntFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LancheComboSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    valorUnitario?: boolean;
    qtUnidade?: boolean;
    subtotal?: boolean;
    pedidoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lancheCombo"]>;
export type LancheComboSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    valorUnitario?: boolean;
    qtUnidade?: boolean;
    subtotal?: boolean;
    pedidoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lancheCombo"]>;
export type LancheComboSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    valorUnitario?: boolean;
    qtUnidade?: boolean;
    subtotal?: boolean;
    pedidoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lancheCombo"]>;
export type LancheComboSelectScalar = {
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    valorUnitario?: boolean;
    qtUnidade?: boolean;
    subtotal?: boolean;
    pedidoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LancheComboOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "descricao" | "valorUnitario" | "qtUnidade" | "subtotal" | "pedidoId" | "createdAt" | "updatedAt", ExtArgs["result"]["lancheCombo"]>;
export type LancheComboInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
};
export type LancheComboIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
};
export type LancheComboIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.PedidoDefaultArgs<ExtArgs>;
};
export type $LancheComboPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LancheCombo";
    objects: {
        pedido: Prisma.$PedidoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        descricao: string;
        valorUnitario: number;
        qtUnidade: number;
        subtotal: number;
        pedidoId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lancheCombo"]>;
    composites: {};
};
export type LancheComboGetPayload<S extends boolean | null | undefined | LancheComboDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LancheComboPayload, S>;
export type LancheComboCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LancheComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LancheComboCountAggregateInputType | true;
};
export interface LancheComboDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LancheCombo'];
        meta: {
            name: 'LancheCombo';
        };
    };
    findUnique<T extends LancheComboFindUniqueArgs>(args: Prisma.SelectSubset<T, LancheComboFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LancheComboFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LancheComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LancheComboFindFirstArgs>(args?: Prisma.SelectSubset<T, LancheComboFindFirstArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LancheComboFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LancheComboFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LancheComboFindManyArgs>(args?: Prisma.SelectSubset<T, LancheComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LancheComboCreateArgs>(args: Prisma.SelectSubset<T, LancheComboCreateArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LancheComboCreateManyArgs>(args?: Prisma.SelectSubset<T, LancheComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LancheComboCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LancheComboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LancheComboDeleteArgs>(args: Prisma.SelectSubset<T, LancheComboDeleteArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LancheComboUpdateArgs>(args: Prisma.SelectSubset<T, LancheComboUpdateArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LancheComboDeleteManyArgs>(args?: Prisma.SelectSubset<T, LancheComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LancheComboUpdateManyArgs>(args: Prisma.SelectSubset<T, LancheComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LancheComboUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LancheComboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LancheComboUpsertArgs>(args: Prisma.SelectSubset<T, LancheComboUpsertArgs<ExtArgs>>): Prisma.Prisma__LancheComboClient<runtime.Types.Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LancheComboCountArgs>(args?: Prisma.Subset<T, LancheComboCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LancheComboCountAggregateOutputType> : number>;
    aggregate<T extends LancheComboAggregateArgs>(args: Prisma.Subset<T, LancheComboAggregateArgs>): Prisma.PrismaPromise<GetLancheComboAggregateType<T>>;
    groupBy<T extends LancheComboGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LancheComboGroupByArgs['orderBy'];
    } : {
        orderBy?: LancheComboGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LancheComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLancheComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LancheComboFieldRefs;
}
export interface Prisma__LancheComboClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.PedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__PedidoClient<runtime.Types.Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LancheComboFieldRefs {
    readonly id: Prisma.FieldRef<"LancheCombo", 'Int'>;
    readonly nome: Prisma.FieldRef<"LancheCombo", 'String'>;
    readonly descricao: Prisma.FieldRef<"LancheCombo", 'String'>;
    readonly valorUnitario: Prisma.FieldRef<"LancheCombo", 'Float'>;
    readonly qtUnidade: Prisma.FieldRef<"LancheCombo", 'Int'>;
    readonly subtotal: Prisma.FieldRef<"LancheCombo", 'Float'>;
    readonly pedidoId: Prisma.FieldRef<"LancheCombo", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"LancheCombo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LancheCombo", 'DateTime'>;
}
export type LancheComboFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    where: Prisma.LancheComboWhereUniqueInput;
};
export type LancheComboFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    where: Prisma.LancheComboWhereUniqueInput;
};
export type LancheComboFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LancheComboFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LancheComboFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LancheComboCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LancheComboCreateInput, Prisma.LancheComboUncheckedCreateInput>;
};
export type LancheComboCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LancheComboCreateManyInput | Prisma.LancheComboCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LancheComboCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    data: Prisma.LancheComboCreateManyInput | Prisma.LancheComboCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LancheComboIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LancheComboUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LancheComboUpdateInput, Prisma.LancheComboUncheckedUpdateInput>;
    where: Prisma.LancheComboWhereUniqueInput;
};
export type LancheComboUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LancheComboUpdateManyMutationInput, Prisma.LancheComboUncheckedUpdateManyInput>;
    where?: Prisma.LancheComboWhereInput;
    limit?: number;
};
export type LancheComboUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LancheComboUpdateManyMutationInput, Prisma.LancheComboUncheckedUpdateManyInput>;
    where?: Prisma.LancheComboWhereInput;
    limit?: number;
    include?: Prisma.LancheComboIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LancheComboUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    where: Prisma.LancheComboWhereUniqueInput;
    create: Prisma.XOR<Prisma.LancheComboCreateInput, Prisma.LancheComboUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LancheComboUpdateInput, Prisma.LancheComboUncheckedUpdateInput>;
};
export type LancheComboDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
    where: Prisma.LancheComboWhereUniqueInput;
};
export type LancheComboDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LancheComboWhereInput;
    limit?: number;
};
export type LancheComboDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LancheComboSelect<ExtArgs> | null;
    omit?: Prisma.LancheComboOmit<ExtArgs> | null;
    include?: Prisma.LancheComboInclude<ExtArgs> | null;
};
