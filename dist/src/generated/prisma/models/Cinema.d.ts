import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CinemaModel = runtime.Types.Result.DefaultSelection<Prisma.$CinemaPayload>;
export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
};
export type CinemaAvgAggregateOutputType = {
    id: number | null;
};
export type CinemaSumAggregateOutputType = {
    id: number | null;
};
export type CinemaMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    endereco: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CinemaMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    endereco: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CinemaCountAggregateOutputType = {
    id: number;
    nome: number;
    endereco: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CinemaAvgAggregateInputType = {
    id?: true;
};
export type CinemaSumAggregateInputType = {
    id?: true;
};
export type CinemaMinAggregateInputType = {
    id?: true;
    nome?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CinemaMaxAggregateInputType = {
    id?: true;
    nome?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CinemaCountAggregateInputType = {
    id?: true;
    nome?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CinemaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CinemaWhereInput;
    orderBy?: Prisma.CinemaOrderByWithRelationInput | Prisma.CinemaOrderByWithRelationInput[];
    cursor?: Prisma.CinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CinemaCountAggregateInputType;
    _avg?: CinemaAvgAggregateInputType;
    _sum?: CinemaSumAggregateInputType;
    _min?: CinemaMinAggregateInputType;
    _max?: CinemaMaxAggregateInputType;
};
export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
    [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCinema[P]> : Prisma.GetScalarType<T[P], AggregateCinema[P]>;
};
export type CinemaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CinemaWhereInput;
    orderBy?: Prisma.CinemaOrderByWithAggregationInput | Prisma.CinemaOrderByWithAggregationInput[];
    by: Prisma.CinemaScalarFieldEnum[] | Prisma.CinemaScalarFieldEnum;
    having?: Prisma.CinemaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CinemaCountAggregateInputType | true;
    _avg?: CinemaAvgAggregateInputType;
    _sum?: CinemaSumAggregateInputType;
    _min?: CinemaMinAggregateInputType;
    _max?: CinemaMaxAggregateInputType;
};
export type CinemaGroupByOutputType = {
    id: number;
    nome: string;
    endereco: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
};
export type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CinemaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CinemaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CinemaGroupByOutputType[P]>;
}>>;
export type CinemaWhereInput = {
    AND?: Prisma.CinemaWhereInput | Prisma.CinemaWhereInput[];
    OR?: Prisma.CinemaWhereInput[];
    NOT?: Prisma.CinemaWhereInput | Prisma.CinemaWhereInput[];
    id?: Prisma.IntFilter<"Cinema"> | number;
    nome?: Prisma.StringFilter<"Cinema"> | string;
    endereco?: Prisma.StringFilter<"Cinema"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
    salas?: Prisma.SalaListRelationFilter;
    sessoes?: Prisma.SessaoListRelationFilter;
    filmes?: Prisma.FilmeListRelationFilter;
};
export type CinemaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    salas?: Prisma.SalaOrderByRelationAggregateInput;
    sessoes?: Prisma.SessaoOrderByRelationAggregateInput;
    filmes?: Prisma.FilmeOrderByRelationAggregateInput;
};
export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CinemaWhereInput | Prisma.CinemaWhereInput[];
    OR?: Prisma.CinemaWhereInput[];
    NOT?: Prisma.CinemaWhereInput | Prisma.CinemaWhereInput[];
    nome?: Prisma.StringFilter<"Cinema"> | string;
    endereco?: Prisma.StringFilter<"Cinema"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
    salas?: Prisma.SalaListRelationFilter;
    sessoes?: Prisma.SessaoListRelationFilter;
    filmes?: Prisma.FilmeListRelationFilter;
}, "id">;
export type CinemaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CinemaCountOrderByAggregateInput;
    _avg?: Prisma.CinemaAvgOrderByAggregateInput;
    _max?: Prisma.CinemaMaxOrderByAggregateInput;
    _min?: Prisma.CinemaMinOrderByAggregateInput;
    _sum?: Prisma.CinemaSumOrderByAggregateInput;
};
export type CinemaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CinemaScalarWhereWithAggregatesInput | Prisma.CinemaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CinemaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CinemaScalarWhereWithAggregatesInput | Prisma.CinemaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cinema"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Cinema"> | string;
    endereco?: Prisma.StringWithAggregatesFilter<"Cinema"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cinema"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cinema"> | Date | string;
};
export type CinemaCreateInput = {
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaCreateNestedManyWithoutCinemaInput;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeCreateNestedManyWithoutCinemasInput;
};
export type CinemaUncheckedCreateInput = {
    id?: number;
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaUncheckedCreateNestedManyWithoutCinemaInput;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeUncheckedCreateNestedManyWithoutCinemasInput;
};
export type CinemaUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUpdateManyWithoutCinemaNestedInput;
    sessoes?: Prisma.SessaoUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUpdateManyWithoutCinemasNestedInput;
};
export type CinemaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUncheckedUpdateManyWithoutCinemaNestedInput;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUncheckedUpdateManyWithoutCinemasNestedInput;
};
export type CinemaCreateManyInput = {
    id?: number;
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CinemaUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CinemaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CinemaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CinemaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CinemaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CinemaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CinemaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CinemaScalarRelationFilter = {
    is?: Prisma.CinemaWhereInput;
    isNot?: Prisma.CinemaWhereInput;
};
export type CinemaListRelationFilter = {
    every?: Prisma.CinemaWhereInput;
    some?: Prisma.CinemaWhereInput;
    none?: Prisma.CinemaWhereInput;
};
export type CinemaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CinemaCreateNestedOneWithoutSalasInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutSalasInput, Prisma.CinemaUncheckedCreateWithoutSalasInput>;
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutSalasInput;
    connect?: Prisma.CinemaWhereUniqueInput;
};
export type CinemaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutSalasInput, Prisma.CinemaUncheckedCreateWithoutSalasInput>;
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutSalasInput;
    upsert?: Prisma.CinemaUpsertWithoutSalasInput;
    connect?: Prisma.CinemaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CinemaUpdateToOneWithWhereWithoutSalasInput, Prisma.CinemaUpdateWithoutSalasInput>, Prisma.CinemaUncheckedUpdateWithoutSalasInput>;
};
export type CinemaCreateNestedManyWithoutFilmesInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput> | Prisma.CinemaCreateWithoutFilmesInput[] | Prisma.CinemaUncheckedCreateWithoutFilmesInput[];
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutFilmesInput | Prisma.CinemaCreateOrConnectWithoutFilmesInput[];
    connect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
};
export type CinemaUncheckedCreateNestedManyWithoutFilmesInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput> | Prisma.CinemaCreateWithoutFilmesInput[] | Prisma.CinemaUncheckedCreateWithoutFilmesInput[];
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutFilmesInput | Prisma.CinemaCreateOrConnectWithoutFilmesInput[];
    connect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
};
export type CinemaUpdateManyWithoutFilmesNestedInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput> | Prisma.CinemaCreateWithoutFilmesInput[] | Prisma.CinemaUncheckedCreateWithoutFilmesInput[];
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutFilmesInput | Prisma.CinemaCreateOrConnectWithoutFilmesInput[];
    upsert?: Prisma.CinemaUpsertWithWhereUniqueWithoutFilmesInput | Prisma.CinemaUpsertWithWhereUniqueWithoutFilmesInput[];
    set?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    disconnect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    delete?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    connect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    update?: Prisma.CinemaUpdateWithWhereUniqueWithoutFilmesInput | Prisma.CinemaUpdateWithWhereUniqueWithoutFilmesInput[];
    updateMany?: Prisma.CinemaUpdateManyWithWhereWithoutFilmesInput | Prisma.CinemaUpdateManyWithWhereWithoutFilmesInput[];
    deleteMany?: Prisma.CinemaScalarWhereInput | Prisma.CinemaScalarWhereInput[];
};
export type CinemaUncheckedUpdateManyWithoutFilmesNestedInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput> | Prisma.CinemaCreateWithoutFilmesInput[] | Prisma.CinemaUncheckedCreateWithoutFilmesInput[];
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutFilmesInput | Prisma.CinemaCreateOrConnectWithoutFilmesInput[];
    upsert?: Prisma.CinemaUpsertWithWhereUniqueWithoutFilmesInput | Prisma.CinemaUpsertWithWhereUniqueWithoutFilmesInput[];
    set?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    disconnect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    delete?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    connect?: Prisma.CinemaWhereUniqueInput | Prisma.CinemaWhereUniqueInput[];
    update?: Prisma.CinemaUpdateWithWhereUniqueWithoutFilmesInput | Prisma.CinemaUpdateWithWhereUniqueWithoutFilmesInput[];
    updateMany?: Prisma.CinemaUpdateManyWithWhereWithoutFilmesInput | Prisma.CinemaUpdateManyWithWhereWithoutFilmesInput[];
    deleteMany?: Prisma.CinemaScalarWhereInput | Prisma.CinemaScalarWhereInput[];
};
export type CinemaCreateNestedOneWithoutSessoesInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutSessoesInput, Prisma.CinemaUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutSessoesInput;
    connect?: Prisma.CinemaWhereUniqueInput;
};
export type CinemaUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: Prisma.XOR<Prisma.CinemaCreateWithoutSessoesInput, Prisma.CinemaUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.CinemaCreateOrConnectWithoutSessoesInput;
    upsert?: Prisma.CinemaUpsertWithoutSessoesInput;
    connect?: Prisma.CinemaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CinemaUpdateToOneWithWhereWithoutSessoesInput, Prisma.CinemaUpdateWithoutSessoesInput>, Prisma.CinemaUncheckedUpdateWithoutSessoesInput>;
};
export type CinemaCreateWithoutSalasInput = {
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeCreateNestedManyWithoutCinemasInput;
};
export type CinemaUncheckedCreateWithoutSalasInput = {
    id?: number;
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeUncheckedCreateNestedManyWithoutCinemasInput;
};
export type CinemaCreateOrConnectWithoutSalasInput = {
    where: Prisma.CinemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutSalasInput, Prisma.CinemaUncheckedCreateWithoutSalasInput>;
};
export type CinemaUpsertWithoutSalasInput = {
    update: Prisma.XOR<Prisma.CinemaUpdateWithoutSalasInput, Prisma.CinemaUncheckedUpdateWithoutSalasInput>;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutSalasInput, Prisma.CinemaUncheckedCreateWithoutSalasInput>;
    where?: Prisma.CinemaWhereInput;
};
export type CinemaUpdateToOneWithWhereWithoutSalasInput = {
    where?: Prisma.CinemaWhereInput;
    data: Prisma.XOR<Prisma.CinemaUpdateWithoutSalasInput, Prisma.CinemaUncheckedUpdateWithoutSalasInput>;
};
export type CinemaUpdateWithoutSalasInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUpdateManyWithoutCinemasNestedInput;
};
export type CinemaUncheckedUpdateWithoutSalasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUncheckedUpdateManyWithoutCinemasNestedInput;
};
export type CinemaCreateWithoutFilmesInput = {
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaCreateNestedManyWithoutCinemaInput;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutCinemaInput;
};
export type CinemaUncheckedCreateWithoutFilmesInput = {
    id?: number;
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaUncheckedCreateNestedManyWithoutCinemaInput;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutCinemaInput;
};
export type CinemaCreateOrConnectWithoutFilmesInput = {
    where: Prisma.CinemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput>;
};
export type CinemaUpsertWithWhereUniqueWithoutFilmesInput = {
    where: Prisma.CinemaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CinemaUpdateWithoutFilmesInput, Prisma.CinemaUncheckedUpdateWithoutFilmesInput>;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutFilmesInput, Prisma.CinemaUncheckedCreateWithoutFilmesInput>;
};
export type CinemaUpdateWithWhereUniqueWithoutFilmesInput = {
    where: Prisma.CinemaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CinemaUpdateWithoutFilmesInput, Prisma.CinemaUncheckedUpdateWithoutFilmesInput>;
};
export type CinemaUpdateManyWithWhereWithoutFilmesInput = {
    where: Prisma.CinemaScalarWhereInput;
    data: Prisma.XOR<Prisma.CinemaUpdateManyMutationInput, Prisma.CinemaUncheckedUpdateManyWithoutFilmesInput>;
};
export type CinemaScalarWhereInput = {
    AND?: Prisma.CinemaScalarWhereInput | Prisma.CinemaScalarWhereInput[];
    OR?: Prisma.CinemaScalarWhereInput[];
    NOT?: Prisma.CinemaScalarWhereInput | Prisma.CinemaScalarWhereInput[];
    id?: Prisma.IntFilter<"Cinema"> | number;
    nome?: Prisma.StringFilter<"Cinema"> | string;
    endereco?: Prisma.StringFilter<"Cinema"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cinema"> | Date | string;
};
export type CinemaCreateWithoutSessoesInput = {
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeCreateNestedManyWithoutCinemasInput;
};
export type CinemaUncheckedCreateWithoutSessoesInput = {
    id?: number;
    nome: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salas?: Prisma.SalaUncheckedCreateNestedManyWithoutCinemaInput;
    filmes?: Prisma.FilmeUncheckedCreateNestedManyWithoutCinemasInput;
};
export type CinemaCreateOrConnectWithoutSessoesInput = {
    where: Prisma.CinemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutSessoesInput, Prisma.CinemaUncheckedCreateWithoutSessoesInput>;
};
export type CinemaUpsertWithoutSessoesInput = {
    update: Prisma.XOR<Prisma.CinemaUpdateWithoutSessoesInput, Prisma.CinemaUncheckedUpdateWithoutSessoesInput>;
    create: Prisma.XOR<Prisma.CinemaCreateWithoutSessoesInput, Prisma.CinemaUncheckedCreateWithoutSessoesInput>;
    where?: Prisma.CinemaWhereInput;
};
export type CinemaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: Prisma.CinemaWhereInput;
    data: Prisma.XOR<Prisma.CinemaUpdateWithoutSessoesInput, Prisma.CinemaUncheckedUpdateWithoutSessoesInput>;
};
export type CinemaUpdateWithoutSessoesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUpdateManyWithoutCinemasNestedInput;
};
export type CinemaUncheckedUpdateWithoutSessoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUncheckedUpdateManyWithoutCinemaNestedInput;
    filmes?: Prisma.FilmeUncheckedUpdateManyWithoutCinemasNestedInput;
};
export type CinemaUpdateWithoutFilmesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUpdateManyWithoutCinemaNestedInput;
    sessoes?: Prisma.SessaoUpdateManyWithoutCinemaNestedInput;
};
export type CinemaUncheckedUpdateWithoutFilmesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salas?: Prisma.SalaUncheckedUpdateManyWithoutCinemaNestedInput;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutCinemaNestedInput;
};
export type CinemaUncheckedUpdateManyWithoutFilmesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CinemaCountOutputType = {
    salas: number;
    sessoes: number;
    filmes: number;
};
export type CinemaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salas?: boolean | CinemaCountOutputTypeCountSalasArgs;
    sessoes?: boolean | CinemaCountOutputTypeCountSessoesArgs;
    filmes?: boolean | CinemaCountOutputTypeCountFilmesArgs;
};
export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaCountOutputTypeSelect<ExtArgs> | null;
};
export type CinemaCountOutputTypeCountSalasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaWhereInput;
};
export type CinemaCountOutputTypeCountSessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoWhereInput;
};
export type CinemaCountOutputTypeCountFilmesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilmeWhereInput;
};
export type CinemaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    salas?: boolean | Prisma.Cinema$salasArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Cinema$sessoesArgs<ExtArgs>;
    filmes?: boolean | Prisma.Cinema$filmesArgs<ExtArgs>;
    _count?: boolean | Prisma.CinemaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cinema"]>;
export type CinemaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["cinema"]>;
export type CinemaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["cinema"]>;
export type CinemaSelectScalar = {
    id?: boolean;
    nome?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CinemaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "endereco" | "createdAt" | "updatedAt", ExtArgs["result"]["cinema"]>;
export type CinemaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salas?: boolean | Prisma.Cinema$salasArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Cinema$sessoesArgs<ExtArgs>;
    filmes?: boolean | Prisma.Cinema$filmesArgs<ExtArgs>;
    _count?: boolean | Prisma.CinemaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CinemaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CinemaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CinemaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cinema";
    objects: {
        salas: Prisma.$SalaPayload<ExtArgs>[];
        sessoes: Prisma.$SessaoPayload<ExtArgs>[];
        filmes: Prisma.$FilmePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cinema"]>;
    composites: {};
};
export type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CinemaPayload, S>;
export type CinemaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CinemaCountAggregateInputType | true;
};
export interface CinemaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cinema'];
        meta: {
            name: 'Cinema';
        };
    };
    findUnique<T extends CinemaFindUniqueArgs>(args: Prisma.SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CinemaFindFirstArgs>(args?: Prisma.SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CinemaFindManyArgs>(args?: Prisma.SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CinemaCreateArgs>(args: Prisma.SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CinemaCreateManyArgs>(args?: Prisma.SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CinemaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CinemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CinemaDeleteArgs>(args: Prisma.SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CinemaUpdateArgs>(args: Prisma.SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CinemaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CinemaUpdateManyArgs>(args: Prisma.SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CinemaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CinemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CinemaUpsertArgs>(args: Prisma.SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma.Prisma__CinemaClient<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CinemaCountArgs>(args?: Prisma.Subset<T, CinemaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CinemaCountAggregateOutputType> : number>;
    aggregate<T extends CinemaAggregateArgs>(args: Prisma.Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>;
    groupBy<T extends CinemaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CinemaGroupByArgs['orderBy'];
    } : {
        orderBy?: CinemaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CinemaFieldRefs;
}
export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    salas<T extends Prisma.Cinema$salasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cinema$salasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessoes<T extends Prisma.Cinema$sessoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cinema$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    filmes<T extends Prisma.Cinema$filmesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cinema$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CinemaFieldRefs {
    readonly id: Prisma.FieldRef<"Cinema", 'Int'>;
    readonly nome: Prisma.FieldRef<"Cinema", 'String'>;
    readonly endereco: Prisma.FieldRef<"Cinema", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Cinema", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cinema", 'DateTime'>;
}
export type CinemaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where: Prisma.CinemaWhereUniqueInput;
};
export type CinemaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where: Prisma.CinemaWhereUniqueInput;
};
export type CinemaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where?: Prisma.CinemaWhereInput;
    orderBy?: Prisma.CinemaOrderByWithRelationInput | Prisma.CinemaOrderByWithRelationInput[];
    cursor?: Prisma.CinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CinemaScalarFieldEnum | Prisma.CinemaScalarFieldEnum[];
};
export type CinemaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where?: Prisma.CinemaWhereInput;
    orderBy?: Prisma.CinemaOrderByWithRelationInput | Prisma.CinemaOrderByWithRelationInput[];
    cursor?: Prisma.CinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CinemaScalarFieldEnum | Prisma.CinemaScalarFieldEnum[];
};
export type CinemaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where?: Prisma.CinemaWhereInput;
    orderBy?: Prisma.CinemaOrderByWithRelationInput | Prisma.CinemaOrderByWithRelationInput[];
    cursor?: Prisma.CinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CinemaScalarFieldEnum | Prisma.CinemaScalarFieldEnum[];
};
export type CinemaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CinemaCreateInput, Prisma.CinemaUncheckedCreateInput>;
};
export type CinemaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CinemaCreateManyInput | Prisma.CinemaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CinemaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    data: Prisma.CinemaCreateManyInput | Prisma.CinemaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CinemaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CinemaUpdateInput, Prisma.CinemaUncheckedUpdateInput>;
    where: Prisma.CinemaWhereUniqueInput;
};
export type CinemaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CinemaUpdateManyMutationInput, Prisma.CinemaUncheckedUpdateManyInput>;
    where?: Prisma.CinemaWhereInput;
    limit?: number;
};
export type CinemaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CinemaUpdateManyMutationInput, Prisma.CinemaUncheckedUpdateManyInput>;
    where?: Prisma.CinemaWhereInput;
    limit?: number;
};
export type CinemaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where: Prisma.CinemaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CinemaCreateInput, Prisma.CinemaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CinemaUpdateInput, Prisma.CinemaUncheckedUpdateInput>;
};
export type CinemaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
    where: Prisma.CinemaWhereUniqueInput;
};
export type CinemaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CinemaWhereInput;
    limit?: number;
};
export type Cinema$salasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cinema$sessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cinema$filmesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    where?: Prisma.FilmeWhereInput;
    orderBy?: Prisma.FilmeOrderByWithRelationInput | Prisma.FilmeOrderByWithRelationInput[];
    cursor?: Prisma.FilmeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilmeScalarFieldEnum | Prisma.FilmeScalarFieldEnum[];
};
export type CinemaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CinemaSelect<ExtArgs> | null;
    omit?: Prisma.CinemaOmit<ExtArgs> | null;
    include?: Prisma.CinemaInclude<ExtArgs> | null;
};
