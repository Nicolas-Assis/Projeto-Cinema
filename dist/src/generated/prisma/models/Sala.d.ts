import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SalaModel = runtime.Types.Result.DefaultSelection<Prisma.$SalaPayload>;
export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null;
    _avg: SalaAvgAggregateOutputType | null;
    _sum: SalaSumAggregateOutputType | null;
    _min: SalaMinAggregateOutputType | null;
    _max: SalaMaxAggregateOutputType | null;
};
export type SalaAvgAggregateOutputType = {
    id: number | null;
    numero: number | null;
    capacidade: number | null;
    cinemaId: number | null;
};
export type SalaSumAggregateOutputType = {
    id: number | null;
    numero: number | null;
    capacidade: number | null;
    cinemaId: number | null;
};
export type SalaMinAggregateOutputType = {
    id: number | null;
    numero: number | null;
    capacidade: number | null;
    cinemaId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalaMaxAggregateOutputType = {
    id: number | null;
    numero: number | null;
    capacidade: number | null;
    cinemaId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalaCountAggregateOutputType = {
    id: number;
    numero: number;
    capacidade: number;
    poutronas: number;
    cinemaId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SalaAvgAggregateInputType = {
    id?: true;
    numero?: true;
    capacidade?: true;
    cinemaId?: true;
};
export type SalaSumAggregateInputType = {
    id?: true;
    numero?: true;
    capacidade?: true;
    cinemaId?: true;
};
export type SalaMinAggregateInputType = {
    id?: true;
    numero?: true;
    capacidade?: true;
    cinemaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalaMaxAggregateInputType = {
    id?: true;
    numero?: true;
    capacidade?: true;
    cinemaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalaCountAggregateInputType = {
    id?: true;
    numero?: true;
    capacidade?: true;
    poutronas?: true;
    cinemaId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SalaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaWhereInput;
    orderBy?: Prisma.SalaOrderByWithRelationInput | Prisma.SalaOrderByWithRelationInput[];
    cursor?: Prisma.SalaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalaCountAggregateInputType;
    _avg?: SalaAvgAggregateInputType;
    _sum?: SalaSumAggregateInputType;
    _min?: SalaMinAggregateInputType;
    _max?: SalaMaxAggregateInputType;
};
export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
    [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSala[P]> : Prisma.GetScalarType<T[P], AggregateSala[P]>;
};
export type SalaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaWhereInput;
    orderBy?: Prisma.SalaOrderByWithAggregationInput | Prisma.SalaOrderByWithAggregationInput[];
    by: Prisma.SalaScalarFieldEnum[] | Prisma.SalaScalarFieldEnum;
    having?: Prisma.SalaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalaCountAggregateInputType | true;
    _avg?: SalaAvgAggregateInputType;
    _sum?: SalaSumAggregateInputType;
    _min?: SalaMinAggregateInputType;
    _max?: SalaMaxAggregateInputType;
};
export type SalaGroupByOutputType = {
    id: number;
    numero: number;
    capacidade: number;
    poutronas: runtime.JsonValue;
    cinemaId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SalaCountAggregateOutputType | null;
    _avg: SalaAvgAggregateOutputType | null;
    _sum: SalaSumAggregateOutputType | null;
    _min: SalaMinAggregateOutputType | null;
    _max: SalaMaxAggregateOutputType | null;
};
export type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalaGroupByOutputType[P]>;
}>>;
export type SalaWhereInput = {
    AND?: Prisma.SalaWhereInput | Prisma.SalaWhereInput[];
    OR?: Prisma.SalaWhereInput[];
    NOT?: Prisma.SalaWhereInput | Prisma.SalaWhereInput[];
    id?: Prisma.IntFilter<"Sala"> | number;
    numero?: Prisma.IntFilter<"Sala"> | number;
    capacidade?: Prisma.IntFilter<"Sala"> | number;
    poutronas?: Prisma.JsonFilter<"Sala">;
    cinemaId?: Prisma.IntFilter<"Sala"> | number;
    createdAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
    cinema?: Prisma.XOR<Prisma.CinemaScalarRelationFilter, Prisma.CinemaWhereInput>;
    sessoes?: Prisma.SessaoListRelationFilter;
};
export type SalaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    poutronas?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cinema?: Prisma.CinemaOrderByWithRelationInput;
    sessoes?: Prisma.SessaoOrderByRelationAggregateInput;
};
export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SalaWhereInput | Prisma.SalaWhereInput[];
    OR?: Prisma.SalaWhereInput[];
    NOT?: Prisma.SalaWhereInput | Prisma.SalaWhereInput[];
    numero?: Prisma.IntFilter<"Sala"> | number;
    capacidade?: Prisma.IntFilter<"Sala"> | number;
    poutronas?: Prisma.JsonFilter<"Sala">;
    cinemaId?: Prisma.IntFilter<"Sala"> | number;
    createdAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
    cinema?: Prisma.XOR<Prisma.CinemaScalarRelationFilter, Prisma.CinemaWhereInput>;
    sessoes?: Prisma.SessaoListRelationFilter;
}, "id">;
export type SalaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    poutronas?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SalaCountOrderByAggregateInput;
    _avg?: Prisma.SalaAvgOrderByAggregateInput;
    _max?: Prisma.SalaMaxOrderByAggregateInput;
    _min?: Prisma.SalaMinOrderByAggregateInput;
    _sum?: Prisma.SalaSumOrderByAggregateInput;
};
export type SalaScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalaScalarWhereWithAggregatesInput | Prisma.SalaScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalaScalarWhereWithAggregatesInput | Prisma.SalaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sala"> | number;
    numero?: Prisma.IntWithAggregatesFilter<"Sala"> | number;
    capacidade?: Prisma.IntWithAggregatesFilter<"Sala"> | number;
    poutronas?: Prisma.JsonWithAggregatesFilter<"Sala">;
    cinemaId?: Prisma.IntWithAggregatesFilter<"Sala"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sala"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sala"> | Date | string;
};
export type SalaCreateInput = {
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinema: Prisma.CinemaCreateNestedOneWithoutSalasInput;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutSalaInput;
};
export type SalaUncheckedCreateInput = {
    id?: number;
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutSalaInput;
};
export type SalaUpdateInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: Prisma.CinemaUpdateOneRequiredWithoutSalasNestedInput;
    sessoes?: Prisma.SessaoUpdateManyWithoutSalaNestedInput;
};
export type SalaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutSalaNestedInput;
};
export type SalaCreateManyInput = {
    id?: number;
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaUpdateManyMutationInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaListRelationFilter = {
    every?: Prisma.SalaWhereInput;
    some?: Prisma.SalaWhereInput;
    none?: Prisma.SalaWhereInput;
};
export type SalaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    poutronas?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
};
export type SalaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    capacidade?: Prisma.SortOrder;
    cinemaId?: Prisma.SortOrder;
};
export type SalaScalarRelationFilter = {
    is?: Prisma.SalaWhereInput;
    isNot?: Prisma.SalaWhereInput;
};
export type SalaCreateNestedManyWithoutCinemaInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput> | Prisma.SalaCreateWithoutCinemaInput[] | Prisma.SalaUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutCinemaInput | Prisma.SalaCreateOrConnectWithoutCinemaInput[];
    createMany?: Prisma.SalaCreateManyCinemaInputEnvelope;
    connect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
};
export type SalaUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput> | Prisma.SalaCreateWithoutCinemaInput[] | Prisma.SalaUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutCinemaInput | Prisma.SalaCreateOrConnectWithoutCinemaInput[];
    createMany?: Prisma.SalaCreateManyCinemaInputEnvelope;
    connect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
};
export type SalaUpdateManyWithoutCinemaNestedInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput> | Prisma.SalaCreateWithoutCinemaInput[] | Prisma.SalaUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutCinemaInput | Prisma.SalaCreateOrConnectWithoutCinemaInput[];
    upsert?: Prisma.SalaUpsertWithWhereUniqueWithoutCinemaInput | Prisma.SalaUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: Prisma.SalaCreateManyCinemaInputEnvelope;
    set?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    disconnect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    delete?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    connect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    update?: Prisma.SalaUpdateWithWhereUniqueWithoutCinemaInput | Prisma.SalaUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: Prisma.SalaUpdateManyWithWhereWithoutCinemaInput | Prisma.SalaUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: Prisma.SalaScalarWhereInput | Prisma.SalaScalarWhereInput[];
};
export type SalaUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput> | Prisma.SalaCreateWithoutCinemaInput[] | Prisma.SalaUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutCinemaInput | Prisma.SalaCreateOrConnectWithoutCinemaInput[];
    upsert?: Prisma.SalaUpsertWithWhereUniqueWithoutCinemaInput | Prisma.SalaUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: Prisma.SalaCreateManyCinemaInputEnvelope;
    set?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    disconnect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    delete?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    connect?: Prisma.SalaWhereUniqueInput | Prisma.SalaWhereUniqueInput[];
    update?: Prisma.SalaUpdateWithWhereUniqueWithoutCinemaInput | Prisma.SalaUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: Prisma.SalaUpdateManyWithWhereWithoutCinemaInput | Prisma.SalaUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: Prisma.SalaScalarWhereInput | Prisma.SalaScalarWhereInput[];
};
export type SalaCreateNestedOneWithoutSessoesInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutSessoesInput, Prisma.SalaUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutSessoesInput;
    connect?: Prisma.SalaWhereUniqueInput;
};
export type SalaUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: Prisma.XOR<Prisma.SalaCreateWithoutSessoesInput, Prisma.SalaUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.SalaCreateOrConnectWithoutSessoesInput;
    upsert?: Prisma.SalaUpsertWithoutSessoesInput;
    connect?: Prisma.SalaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalaUpdateToOneWithWhereWithoutSessoesInput, Prisma.SalaUpdateWithoutSessoesInput>, Prisma.SalaUncheckedUpdateWithoutSessoesInput>;
};
export type SalaCreateWithoutCinemaInput = {
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutSalaInput;
};
export type SalaUncheckedCreateWithoutCinemaInput = {
    id?: number;
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutSalaInput;
};
export type SalaCreateOrConnectWithoutCinemaInput = {
    where: Prisma.SalaWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput>;
};
export type SalaCreateManyCinemaInputEnvelope = {
    data: Prisma.SalaCreateManyCinemaInput | Prisma.SalaCreateManyCinemaInput[];
    skipDuplicates?: boolean;
};
export type SalaUpsertWithWhereUniqueWithoutCinemaInput = {
    where: Prisma.SalaWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalaUpdateWithoutCinemaInput, Prisma.SalaUncheckedUpdateWithoutCinemaInput>;
    create: Prisma.XOR<Prisma.SalaCreateWithoutCinemaInput, Prisma.SalaUncheckedCreateWithoutCinemaInput>;
};
export type SalaUpdateWithWhereUniqueWithoutCinemaInput = {
    where: Prisma.SalaWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalaUpdateWithoutCinemaInput, Prisma.SalaUncheckedUpdateWithoutCinemaInput>;
};
export type SalaUpdateManyWithWhereWithoutCinemaInput = {
    where: Prisma.SalaScalarWhereInput;
    data: Prisma.XOR<Prisma.SalaUpdateManyMutationInput, Prisma.SalaUncheckedUpdateManyWithoutCinemaInput>;
};
export type SalaScalarWhereInput = {
    AND?: Prisma.SalaScalarWhereInput | Prisma.SalaScalarWhereInput[];
    OR?: Prisma.SalaScalarWhereInput[];
    NOT?: Prisma.SalaScalarWhereInput | Prisma.SalaScalarWhereInput[];
    id?: Prisma.IntFilter<"Sala"> | number;
    numero?: Prisma.IntFilter<"Sala"> | number;
    capacidade?: Prisma.IntFilter<"Sala"> | number;
    poutronas?: Prisma.JsonFilter<"Sala">;
    cinemaId?: Prisma.IntFilter<"Sala"> | number;
    createdAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sala"> | Date | string;
};
export type SalaCreateWithoutSessoesInput = {
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinema: Prisma.CinemaCreateNestedOneWithoutSalasInput;
};
export type SalaUncheckedCreateWithoutSessoesInput = {
    id?: number;
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaCreateOrConnectWithoutSessoesInput = {
    where: Prisma.SalaWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaCreateWithoutSessoesInput, Prisma.SalaUncheckedCreateWithoutSessoesInput>;
};
export type SalaUpsertWithoutSessoesInput = {
    update: Prisma.XOR<Prisma.SalaUpdateWithoutSessoesInput, Prisma.SalaUncheckedUpdateWithoutSessoesInput>;
    create: Prisma.XOR<Prisma.SalaCreateWithoutSessoesInput, Prisma.SalaUncheckedCreateWithoutSessoesInput>;
    where?: Prisma.SalaWhereInput;
};
export type SalaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: Prisma.SalaWhereInput;
    data: Prisma.XOR<Prisma.SalaUpdateWithoutSessoesInput, Prisma.SalaUncheckedUpdateWithoutSessoesInput>;
};
export type SalaUpdateWithoutSessoesInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: Prisma.CinemaUpdateOneRequiredWithoutSalasNestedInput;
};
export type SalaUncheckedUpdateWithoutSessoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cinemaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaCreateManyCinemaInput = {
    id?: number;
    numero: number;
    capacidade: number;
    poutronas: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaUpdateWithoutCinemaInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUpdateManyWithoutSalaNestedInput;
};
export type SalaUncheckedUpdateWithoutCinemaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutSalaNestedInput;
};
export type SalaUncheckedUpdateManyWithoutCinemaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    capacidade?: Prisma.IntFieldUpdateOperationsInput | number;
    poutronas?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaCountOutputType = {
    sessoes: number;
};
export type SalaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessoes?: boolean | SalaCountOutputTypeCountSessoesArgs;
};
export type SalaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaCountOutputTypeSelect<ExtArgs> | null;
};
export type SalaCountOutputTypeCountSessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoWhereInput;
};
export type SalaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    capacidade?: boolean;
    poutronas?: boolean;
    cinemaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Sala$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.SalaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sala"]>;
export type SalaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    capacidade?: boolean;
    poutronas?: boolean;
    cinemaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sala"]>;
export type SalaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    capacidade?: boolean;
    poutronas?: boolean;
    cinemaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sala"]>;
export type SalaSelectScalar = {
    id?: boolean;
    numero?: boolean;
    capacidade?: boolean;
    poutronas?: boolean;
    cinemaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SalaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "capacidade" | "poutronas" | "cinemaId" | "createdAt" | "updatedAt", ExtArgs["result"]["sala"]>;
export type SalaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Sala$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.SalaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
};
export type SalaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cinema?: boolean | Prisma.CinemaDefaultArgs<ExtArgs>;
};
export type $SalaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sala";
    objects: {
        cinema: Prisma.$CinemaPayload<ExtArgs>;
        sessoes: Prisma.$SessaoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        numero: number;
        capacidade: number;
        poutronas: runtime.JsonValue;
        cinemaId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sala"]>;
    composites: {};
};
export type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalaPayload, S>;
export type SalaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalaCountAggregateInputType | true;
};
export interface SalaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sala'];
        meta: {
            name: 'Sala';
        };
    };
    findUnique<T extends SalaFindUniqueArgs>(args: Prisma.SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalaFindFirstArgs>(args?: Prisma.SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalaFindManyArgs>(args?: Prisma.SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalaCreateArgs>(args: Prisma.SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalaCreateManyArgs>(args?: Prisma.SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalaDeleteArgs>(args: Prisma.SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalaUpdateArgs>(args: Prisma.SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalaDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalaUpdateManyArgs>(args: Prisma.SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalaUpsertArgs>(args: Prisma.SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma.Prisma__SalaClient<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalaCountArgs>(args?: Prisma.Subset<T, SalaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalaCountAggregateOutputType> : number>;
    aggregate<T extends SalaAggregateArgs>(args: Prisma.Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>;
    groupBy<T extends SalaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalaGroupByArgs['orderBy'];
    } : {
        orderBy?: SalaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalaFieldRefs;
}
export interface Prisma__SalaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cinema<T extends Prisma.CinemaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CinemaDefaultArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessoes<T extends Prisma.Sala$sessoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sala$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalaFieldRefs {
    readonly id: Prisma.FieldRef<"Sala", 'Int'>;
    readonly numero: Prisma.FieldRef<"Sala", 'Int'>;
    readonly capacidade: Prisma.FieldRef<"Sala", 'Int'>;
    readonly poutronas: Prisma.FieldRef<"Sala", 'Json'>;
    readonly cinemaId: Prisma.FieldRef<"Sala", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Sala", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sala", 'DateTime'>;
}
export type SalaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where: Prisma.SalaWhereUniqueInput;
};
export type SalaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where: Prisma.SalaWhereUniqueInput;
};
export type SalaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where?: Prisma.SalaWhereInput;
    orderBy?: Prisma.SalaOrderByWithRelationInput | Prisma.SalaOrderByWithRelationInput[];
    cursor?: Prisma.SalaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaScalarFieldEnum | Prisma.SalaScalarFieldEnum[];
};
export type SalaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where?: Prisma.SalaWhereInput;
    orderBy?: Prisma.SalaOrderByWithRelationInput | Prisma.SalaOrderByWithRelationInput[];
    cursor?: Prisma.SalaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaScalarFieldEnum | Prisma.SalaScalarFieldEnum[];
};
export type SalaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where?: Prisma.SalaWhereInput;
    orderBy?: Prisma.SalaOrderByWithRelationInput | Prisma.SalaOrderByWithRelationInput[];
    cursor?: Prisma.SalaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaScalarFieldEnum | Prisma.SalaScalarFieldEnum[];
};
export type SalaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaCreateInput, Prisma.SalaUncheckedCreateInput>;
};
export type SalaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalaCreateManyInput | Prisma.SalaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    data: Prisma.SalaCreateManyInput | Prisma.SalaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaUpdateInput, Prisma.SalaUncheckedUpdateInput>;
    where: Prisma.SalaWhereUniqueInput;
};
export type SalaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalaUpdateManyMutationInput, Prisma.SalaUncheckedUpdateManyInput>;
    where?: Prisma.SalaWhereInput;
    limit?: number;
};
export type SalaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaUpdateManyMutationInput, Prisma.SalaUncheckedUpdateManyInput>;
    where?: Prisma.SalaWhereInput;
    limit?: number;
    include?: Prisma.SalaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where: Prisma.SalaWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaCreateInput, Prisma.SalaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalaUpdateInput, Prisma.SalaUncheckedUpdateInput>;
};
export type SalaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
    where: Prisma.SalaWhereUniqueInput;
};
export type SalaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaWhereInput;
    limit?: number;
};
export type Sala$sessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    where?: Prisma.SessaoWhereInput;
    orderBy?: Prisma.SessaoOrderByWithRelationInput | Prisma.SessaoOrderByWithRelationInput[];
    cursor?: Prisma.SessaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessaoScalarFieldEnum | Prisma.SessaoScalarFieldEnum[];
};
export type SalaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaSelect<ExtArgs> | null;
    omit?: Prisma.SalaOmit<ExtArgs> | null;
    include?: Prisma.SalaInclude<ExtArgs> | null;
};
