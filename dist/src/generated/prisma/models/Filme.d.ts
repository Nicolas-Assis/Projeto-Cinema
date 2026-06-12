import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type FilmeModel = runtime.Types.Result.DefaultSelection<Prisma.$FilmePayload>;
export type AggregateFilme = {
    _count: FilmeCountAggregateOutputType | null;
    _avg: FilmeAvgAggregateOutputType | null;
    _sum: FilmeSumAggregateOutputType | null;
    _min: FilmeMinAggregateOutputType | null;
    _max: FilmeMaxAggregateOutputType | null;
};
export type FilmeAvgAggregateOutputType = {
    id: number | null;
    duracao: number | null;
};
export type FilmeSumAggregateOutputType = {
    id: number | null;
    duracao: number | null;
};
export type FilmeMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    sinopse: string | null;
    classificacao: string | null;
    duracao: number | null;
    elenco: string | null;
    genero: $Enums.GeneroFilme | null;
    dataIniciaExibicao: Date | null;
    dataFinalExibicao: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FilmeMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    sinopse: string | null;
    classificacao: string | null;
    duracao: number | null;
    elenco: string | null;
    genero: $Enums.GeneroFilme | null;
    dataIniciaExibicao: Date | null;
    dataFinalExibicao: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FilmeCountAggregateOutputType = {
    id: number;
    titulo: number;
    sinopse: number;
    classificacao: number;
    duracao: number;
    elenco: number;
    genero: number;
    dataIniciaExibicao: number;
    dataFinalExibicao: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FilmeAvgAggregateInputType = {
    id?: true;
    duracao?: true;
};
export type FilmeSumAggregateInputType = {
    id?: true;
    duracao?: true;
};
export type FilmeMinAggregateInputType = {
    id?: true;
    titulo?: true;
    sinopse?: true;
    classificacao?: true;
    duracao?: true;
    elenco?: true;
    genero?: true;
    dataIniciaExibicao?: true;
    dataFinalExibicao?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FilmeMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    sinopse?: true;
    classificacao?: true;
    duracao?: true;
    elenco?: true;
    genero?: true;
    dataIniciaExibicao?: true;
    dataFinalExibicao?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FilmeCountAggregateInputType = {
    id?: true;
    titulo?: true;
    sinopse?: true;
    classificacao?: true;
    duracao?: true;
    elenco?: true;
    genero?: true;
    dataIniciaExibicao?: true;
    dataFinalExibicao?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FilmeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilmeWhereInput;
    orderBy?: Prisma.FilmeOrderByWithRelationInput | Prisma.FilmeOrderByWithRelationInput[];
    cursor?: Prisma.FilmeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FilmeCountAggregateInputType;
    _avg?: FilmeAvgAggregateInputType;
    _sum?: FilmeSumAggregateInputType;
    _min?: FilmeMinAggregateInputType;
    _max?: FilmeMaxAggregateInputType;
};
export type GetFilmeAggregateType<T extends FilmeAggregateArgs> = {
    [P in keyof T & keyof AggregateFilme]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilme[P]> : Prisma.GetScalarType<T[P], AggregateFilme[P]>;
};
export type FilmeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilmeWhereInput;
    orderBy?: Prisma.FilmeOrderByWithAggregationInput | Prisma.FilmeOrderByWithAggregationInput[];
    by: Prisma.FilmeScalarFieldEnum[] | Prisma.FilmeScalarFieldEnum;
    having?: Prisma.FilmeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilmeCountAggregateInputType | true;
    _avg?: FilmeAvgAggregateInputType;
    _sum?: FilmeSumAggregateInputType;
    _min?: FilmeMinAggregateInputType;
    _max?: FilmeMaxAggregateInputType;
};
export type FilmeGroupByOutputType = {
    id: number;
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date;
    dataFinalExibicao: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: FilmeCountAggregateOutputType | null;
    _avg: FilmeAvgAggregateOutputType | null;
    _sum: FilmeSumAggregateOutputType | null;
    _min: FilmeMinAggregateOutputType | null;
    _max: FilmeMaxAggregateOutputType | null;
};
export type GetFilmeGroupByPayload<T extends FilmeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilmeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilmeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilmeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilmeGroupByOutputType[P]>;
}>>;
export type FilmeWhereInput = {
    AND?: Prisma.FilmeWhereInput | Prisma.FilmeWhereInput[];
    OR?: Prisma.FilmeWhereInput[];
    NOT?: Prisma.FilmeWhereInput | Prisma.FilmeWhereInput[];
    id?: Prisma.IntFilter<"Filme"> | number;
    titulo?: Prisma.StringFilter<"Filme"> | string;
    sinopse?: Prisma.StringFilter<"Filme"> | string;
    classificacao?: Prisma.StringFilter<"Filme"> | string;
    duracao?: Prisma.IntFilter<"Filme"> | number;
    elenco?: Prisma.StringFilter<"Filme"> | string;
    genero?: Prisma.EnumGeneroFilmeFilter<"Filme"> | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    cinemas?: Prisma.CinemaListRelationFilter;
    sessoes?: Prisma.SessaoListRelationFilter;
};
export type FilmeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    sinopse?: Prisma.SortOrder;
    classificacao?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
    elenco?: Prisma.SortOrder;
    genero?: Prisma.SortOrder;
    dataIniciaExibicao?: Prisma.SortOrder;
    dataFinalExibicao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cinemas?: Prisma.CinemaOrderByRelationAggregateInput;
    sessoes?: Prisma.SessaoOrderByRelationAggregateInput;
};
export type FilmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FilmeWhereInput | Prisma.FilmeWhereInput[];
    OR?: Prisma.FilmeWhereInput[];
    NOT?: Prisma.FilmeWhereInput | Prisma.FilmeWhereInput[];
    titulo?: Prisma.StringFilter<"Filme"> | string;
    sinopse?: Prisma.StringFilter<"Filme"> | string;
    classificacao?: Prisma.StringFilter<"Filme"> | string;
    duracao?: Prisma.IntFilter<"Filme"> | number;
    elenco?: Prisma.StringFilter<"Filme"> | string;
    genero?: Prisma.EnumGeneroFilmeFilter<"Filme"> | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    cinemas?: Prisma.CinemaListRelationFilter;
    sessoes?: Prisma.SessaoListRelationFilter;
}, "id">;
export type FilmeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    sinopse?: Prisma.SortOrder;
    classificacao?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
    elenco?: Prisma.SortOrder;
    genero?: Prisma.SortOrder;
    dataIniciaExibicao?: Prisma.SortOrder;
    dataFinalExibicao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FilmeCountOrderByAggregateInput;
    _avg?: Prisma.FilmeAvgOrderByAggregateInput;
    _max?: Prisma.FilmeMaxOrderByAggregateInput;
    _min?: Prisma.FilmeMinOrderByAggregateInput;
    _sum?: Prisma.FilmeSumOrderByAggregateInput;
};
export type FilmeScalarWhereWithAggregatesInput = {
    AND?: Prisma.FilmeScalarWhereWithAggregatesInput | Prisma.FilmeScalarWhereWithAggregatesInput[];
    OR?: Prisma.FilmeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FilmeScalarWhereWithAggregatesInput | Prisma.FilmeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Filme"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"Filme"> | string;
    sinopse?: Prisma.StringWithAggregatesFilter<"Filme"> | string;
    classificacao?: Prisma.StringWithAggregatesFilter<"Filme"> | string;
    duracao?: Prisma.IntWithAggregatesFilter<"Filme"> | number;
    elenco?: Prisma.StringWithAggregatesFilter<"Filme"> | string;
    genero?: Prisma.EnumGeneroFilmeWithAggregatesFilter<"Filme"> | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeWithAggregatesFilter<"Filme"> | Date | string;
    dataFinalExibicao?: Prisma.DateTimeWithAggregatesFilter<"Filme"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Filme"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Filme"> | Date | string;
};
export type FilmeCreateInput = {
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinemas?: Prisma.CinemaCreateNestedManyWithoutFilmesInput;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutFilmeInput;
};
export type FilmeUncheckedCreateInput = {
    id?: number;
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinemas?: Prisma.CinemaUncheckedCreateNestedManyWithoutFilmesInput;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutFilmeInput;
};
export type FilmeUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinemas?: Prisma.CinemaUpdateManyWithoutFilmesNestedInput;
    sessoes?: Prisma.SessaoUpdateManyWithoutFilmeNestedInput;
};
export type FilmeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinemas?: Prisma.CinemaUncheckedUpdateManyWithoutFilmesNestedInput;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutFilmeNestedInput;
};
export type FilmeCreateManyInput = {
    id?: number;
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FilmeUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilmeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilmeListRelationFilter = {
    every?: Prisma.FilmeWhereInput;
    some?: Prisma.FilmeWhereInput;
    none?: Prisma.FilmeWhereInput;
};
export type FilmeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FilmeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    sinopse?: Prisma.SortOrder;
    classificacao?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
    elenco?: Prisma.SortOrder;
    genero?: Prisma.SortOrder;
    dataIniciaExibicao?: Prisma.SortOrder;
    dataFinalExibicao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FilmeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
};
export type FilmeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    sinopse?: Prisma.SortOrder;
    classificacao?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
    elenco?: Prisma.SortOrder;
    genero?: Prisma.SortOrder;
    dataIniciaExibicao?: Prisma.SortOrder;
    dataFinalExibicao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FilmeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    sinopse?: Prisma.SortOrder;
    classificacao?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
    elenco?: Prisma.SortOrder;
    genero?: Prisma.SortOrder;
    dataIniciaExibicao?: Prisma.SortOrder;
    dataFinalExibicao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FilmeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracao?: Prisma.SortOrder;
};
export type FilmeScalarRelationFilter = {
    is?: Prisma.FilmeWhereInput;
    isNot?: Prisma.FilmeWhereInput;
};
export type FilmeCreateNestedManyWithoutCinemasInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput> | Prisma.FilmeCreateWithoutCinemasInput[] | Prisma.FilmeUncheckedCreateWithoutCinemasInput[];
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutCinemasInput | Prisma.FilmeCreateOrConnectWithoutCinemasInput[];
    connect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
};
export type FilmeUncheckedCreateNestedManyWithoutCinemasInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput> | Prisma.FilmeCreateWithoutCinemasInput[] | Prisma.FilmeUncheckedCreateWithoutCinemasInput[];
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutCinemasInput | Prisma.FilmeCreateOrConnectWithoutCinemasInput[];
    connect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
};
export type FilmeUpdateManyWithoutCinemasNestedInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput> | Prisma.FilmeCreateWithoutCinemasInput[] | Prisma.FilmeUncheckedCreateWithoutCinemasInput[];
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutCinemasInput | Prisma.FilmeCreateOrConnectWithoutCinemasInput[];
    upsert?: Prisma.FilmeUpsertWithWhereUniqueWithoutCinemasInput | Prisma.FilmeUpsertWithWhereUniqueWithoutCinemasInput[];
    set?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    disconnect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    delete?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    connect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    update?: Prisma.FilmeUpdateWithWhereUniqueWithoutCinemasInput | Prisma.FilmeUpdateWithWhereUniqueWithoutCinemasInput[];
    updateMany?: Prisma.FilmeUpdateManyWithWhereWithoutCinemasInput | Prisma.FilmeUpdateManyWithWhereWithoutCinemasInput[];
    deleteMany?: Prisma.FilmeScalarWhereInput | Prisma.FilmeScalarWhereInput[];
};
export type FilmeUncheckedUpdateManyWithoutCinemasNestedInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput> | Prisma.FilmeCreateWithoutCinemasInput[] | Prisma.FilmeUncheckedCreateWithoutCinemasInput[];
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutCinemasInput | Prisma.FilmeCreateOrConnectWithoutCinemasInput[];
    upsert?: Prisma.FilmeUpsertWithWhereUniqueWithoutCinemasInput | Prisma.FilmeUpsertWithWhereUniqueWithoutCinemasInput[];
    set?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    disconnect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    delete?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    connect?: Prisma.FilmeWhereUniqueInput | Prisma.FilmeWhereUniqueInput[];
    update?: Prisma.FilmeUpdateWithWhereUniqueWithoutCinemasInput | Prisma.FilmeUpdateWithWhereUniqueWithoutCinemasInput[];
    updateMany?: Prisma.FilmeUpdateManyWithWhereWithoutCinemasInput | Prisma.FilmeUpdateManyWithWhereWithoutCinemasInput[];
    deleteMany?: Prisma.FilmeScalarWhereInput | Prisma.FilmeScalarWhereInput[];
};
export type EnumGeneroFilmeFieldUpdateOperationsInput = {
    set?: $Enums.GeneroFilme;
};
export type FilmeCreateNestedOneWithoutSessoesInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutSessoesInput, Prisma.FilmeUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutSessoesInput;
    connect?: Prisma.FilmeWhereUniqueInput;
};
export type FilmeUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: Prisma.XOR<Prisma.FilmeCreateWithoutSessoesInput, Prisma.FilmeUncheckedCreateWithoutSessoesInput>;
    connectOrCreate?: Prisma.FilmeCreateOrConnectWithoutSessoesInput;
    upsert?: Prisma.FilmeUpsertWithoutSessoesInput;
    connect?: Prisma.FilmeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FilmeUpdateToOneWithWhereWithoutSessoesInput, Prisma.FilmeUpdateWithoutSessoesInput>, Prisma.FilmeUncheckedUpdateWithoutSessoesInput>;
};
export type FilmeCreateWithoutCinemasInput = {
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoCreateNestedManyWithoutFilmeInput;
};
export type FilmeUncheckedCreateWithoutCinemasInput = {
    id?: number;
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessoes?: Prisma.SessaoUncheckedCreateNestedManyWithoutFilmeInput;
};
export type FilmeCreateOrConnectWithoutCinemasInput = {
    where: Prisma.FilmeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput>;
};
export type FilmeUpsertWithWhereUniqueWithoutCinemasInput = {
    where: Prisma.FilmeWhereUniqueInput;
    update: Prisma.XOR<Prisma.FilmeUpdateWithoutCinemasInput, Prisma.FilmeUncheckedUpdateWithoutCinemasInput>;
    create: Prisma.XOR<Prisma.FilmeCreateWithoutCinemasInput, Prisma.FilmeUncheckedCreateWithoutCinemasInput>;
};
export type FilmeUpdateWithWhereUniqueWithoutCinemasInput = {
    where: Prisma.FilmeWhereUniqueInput;
    data: Prisma.XOR<Prisma.FilmeUpdateWithoutCinemasInput, Prisma.FilmeUncheckedUpdateWithoutCinemasInput>;
};
export type FilmeUpdateManyWithWhereWithoutCinemasInput = {
    where: Prisma.FilmeScalarWhereInput;
    data: Prisma.XOR<Prisma.FilmeUpdateManyMutationInput, Prisma.FilmeUncheckedUpdateManyWithoutCinemasInput>;
};
export type FilmeScalarWhereInput = {
    AND?: Prisma.FilmeScalarWhereInput | Prisma.FilmeScalarWhereInput[];
    OR?: Prisma.FilmeScalarWhereInput[];
    NOT?: Prisma.FilmeScalarWhereInput | Prisma.FilmeScalarWhereInput[];
    id?: Prisma.IntFilter<"Filme"> | number;
    titulo?: Prisma.StringFilter<"Filme"> | string;
    sinopse?: Prisma.StringFilter<"Filme"> | string;
    classificacao?: Prisma.StringFilter<"Filme"> | string;
    duracao?: Prisma.IntFilter<"Filme"> | number;
    elenco?: Prisma.StringFilter<"Filme"> | string;
    genero?: Prisma.EnumGeneroFilmeFilter<"Filme"> | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Filme"> | Date | string;
};
export type FilmeCreateWithoutSessoesInput = {
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinemas?: Prisma.CinemaCreateNestedManyWithoutFilmesInput;
};
export type FilmeUncheckedCreateWithoutSessoesInput = {
    id?: number;
    titulo: string;
    sinopse: string;
    classificacao: string;
    duracao: number;
    elenco: string;
    genero: $Enums.GeneroFilme;
    dataIniciaExibicao: Date | string;
    dataFinalExibicao: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cinemas?: Prisma.CinemaUncheckedCreateNestedManyWithoutFilmesInput;
};
export type FilmeCreateOrConnectWithoutSessoesInput = {
    where: Prisma.FilmeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FilmeCreateWithoutSessoesInput, Prisma.FilmeUncheckedCreateWithoutSessoesInput>;
};
export type FilmeUpsertWithoutSessoesInput = {
    update: Prisma.XOR<Prisma.FilmeUpdateWithoutSessoesInput, Prisma.FilmeUncheckedUpdateWithoutSessoesInput>;
    create: Prisma.XOR<Prisma.FilmeCreateWithoutSessoesInput, Prisma.FilmeUncheckedCreateWithoutSessoesInput>;
    where?: Prisma.FilmeWhereInput;
};
export type FilmeUpdateToOneWithWhereWithoutSessoesInput = {
    where?: Prisma.FilmeWhereInput;
    data: Prisma.XOR<Prisma.FilmeUpdateWithoutSessoesInput, Prisma.FilmeUncheckedUpdateWithoutSessoesInput>;
};
export type FilmeUpdateWithoutSessoesInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinemas?: Prisma.CinemaUpdateManyWithoutFilmesNestedInput;
};
export type FilmeUncheckedUpdateWithoutSessoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cinemas?: Prisma.CinemaUncheckedUpdateManyWithoutFilmesNestedInput;
};
export type FilmeUpdateWithoutCinemasInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUpdateManyWithoutFilmeNestedInput;
};
export type FilmeUncheckedUpdateWithoutCinemasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessoes?: Prisma.SessaoUncheckedUpdateManyWithoutFilmeNestedInput;
};
export type FilmeUncheckedUpdateManyWithoutCinemasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    sinopse?: Prisma.StringFieldUpdateOperationsInput | string;
    classificacao?: Prisma.StringFieldUpdateOperationsInput | string;
    duracao?: Prisma.IntFieldUpdateOperationsInput | number;
    elenco?: Prisma.StringFieldUpdateOperationsInput | string;
    genero?: Prisma.EnumGeneroFilmeFieldUpdateOperationsInput | $Enums.GeneroFilme;
    dataIniciaExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dataFinalExibicao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilmeCountOutputType = {
    cinemas: number;
    sessoes: number;
};
export type FilmeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cinemas?: boolean | FilmeCountOutputTypeCountCinemasArgs;
    sessoes?: boolean | FilmeCountOutputTypeCountSessoesArgs;
};
export type FilmeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeCountOutputTypeSelect<ExtArgs> | null;
};
export type FilmeCountOutputTypeCountCinemasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CinemaWhereInput;
};
export type FilmeCountOutputTypeCountSessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoWhereInput;
};
export type FilmeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    sinopse?: boolean;
    classificacao?: boolean;
    duracao?: boolean;
    elenco?: boolean;
    genero?: boolean;
    dataIniciaExibicao?: boolean;
    dataFinalExibicao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cinemas?: boolean | Prisma.Filme$cinemasArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Filme$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.FilmeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["filme"]>;
export type FilmeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    sinopse?: boolean;
    classificacao?: boolean;
    duracao?: boolean;
    elenco?: boolean;
    genero?: boolean;
    dataIniciaExibicao?: boolean;
    dataFinalExibicao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["filme"]>;
export type FilmeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    sinopse?: boolean;
    classificacao?: boolean;
    duracao?: boolean;
    elenco?: boolean;
    genero?: boolean;
    dataIniciaExibicao?: boolean;
    dataFinalExibicao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["filme"]>;
export type FilmeSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    sinopse?: boolean;
    classificacao?: boolean;
    duracao?: boolean;
    elenco?: boolean;
    genero?: boolean;
    dataIniciaExibicao?: boolean;
    dataFinalExibicao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FilmeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "sinopse" | "classificacao" | "duracao" | "elenco" | "genero" | "dataIniciaExibicao" | "dataFinalExibicao" | "createdAt" | "updatedAt", ExtArgs["result"]["filme"]>;
export type FilmeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cinemas?: boolean | Prisma.Filme$cinemasArgs<ExtArgs>;
    sessoes?: boolean | Prisma.Filme$sessoesArgs<ExtArgs>;
    _count?: boolean | Prisma.FilmeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FilmeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type FilmeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $FilmePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Filme";
    objects: {
        cinemas: Prisma.$CinemaPayload<ExtArgs>[];
        sessoes: Prisma.$SessaoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        sinopse: string;
        classificacao: string;
        duracao: number;
        elenco: string;
        genero: $Enums.GeneroFilme;
        dataIniciaExibicao: Date;
        dataFinalExibicao: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["filme"]>;
    composites: {};
};
export type FilmeGetPayload<S extends boolean | null | undefined | FilmeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilmePayload, S>;
export type FilmeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilmeCountAggregateInputType | true;
};
export interface FilmeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Filme'];
        meta: {
            name: 'Filme';
        };
    };
    findUnique<T extends FilmeFindUniqueArgs>(args: Prisma.SelectSubset<T, FilmeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FilmeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FilmeFindFirstArgs>(args?: Prisma.SelectSubset<T, FilmeFindFirstArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FilmeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FilmeFindManyArgs>(args?: Prisma.SelectSubset<T, FilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FilmeCreateArgs>(args: Prisma.SelectSubset<T, FilmeCreateArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FilmeCreateManyArgs>(args?: Prisma.SelectSubset<T, FilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FilmeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FilmeDeleteArgs>(args: Prisma.SelectSubset<T, FilmeDeleteArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FilmeUpdateArgs>(args: Prisma.SelectSubset<T, FilmeUpdateArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FilmeDeleteManyArgs>(args?: Prisma.SelectSubset<T, FilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FilmeUpdateManyArgs>(args: Prisma.SelectSubset<T, FilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FilmeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FilmeUpsertArgs>(args: Prisma.SelectSubset<T, FilmeUpsertArgs<ExtArgs>>): Prisma.Prisma__FilmeClient<runtime.Types.Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FilmeCountArgs>(args?: Prisma.Subset<T, FilmeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilmeCountAggregateOutputType> : number>;
    aggregate<T extends FilmeAggregateArgs>(args: Prisma.Subset<T, FilmeAggregateArgs>): Prisma.PrismaPromise<GetFilmeAggregateType<T>>;
    groupBy<T extends FilmeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FilmeGroupByArgs['orderBy'];
    } : {
        orderBy?: FilmeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FilmeFieldRefs;
}
export interface Prisma__FilmeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cinemas<T extends Prisma.Filme$cinemasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Filme$cinemasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessoes<T extends Prisma.Filme$sessoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Filme$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FilmeFieldRefs {
    readonly id: Prisma.FieldRef<"Filme", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Filme", 'String'>;
    readonly sinopse: Prisma.FieldRef<"Filme", 'String'>;
    readonly classificacao: Prisma.FieldRef<"Filme", 'String'>;
    readonly duracao: Prisma.FieldRef<"Filme", 'Int'>;
    readonly elenco: Prisma.FieldRef<"Filme", 'String'>;
    readonly genero: Prisma.FieldRef<"Filme", 'GeneroFilme'>;
    readonly dataIniciaExibicao: Prisma.FieldRef<"Filme", 'DateTime'>;
    readonly dataFinalExibicao: Prisma.FieldRef<"Filme", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Filme", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Filme", 'DateTime'>;
}
export type FilmeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    where: Prisma.FilmeWhereUniqueInput;
};
export type FilmeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    where: Prisma.FilmeWhereUniqueInput;
};
export type FilmeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FilmeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FilmeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FilmeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FilmeCreateInput, Prisma.FilmeUncheckedCreateInput>;
};
export type FilmeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FilmeCreateManyInput | Prisma.FilmeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FilmeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    data: Prisma.FilmeCreateManyInput | Prisma.FilmeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FilmeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FilmeUpdateInput, Prisma.FilmeUncheckedUpdateInput>;
    where: Prisma.FilmeWhereUniqueInput;
};
export type FilmeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FilmeUpdateManyMutationInput, Prisma.FilmeUncheckedUpdateManyInput>;
    where?: Prisma.FilmeWhereInput;
    limit?: number;
};
export type FilmeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FilmeUpdateManyMutationInput, Prisma.FilmeUncheckedUpdateManyInput>;
    where?: Prisma.FilmeWhereInput;
    limit?: number;
};
export type FilmeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    where: Prisma.FilmeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FilmeCreateInput, Prisma.FilmeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FilmeUpdateInput, Prisma.FilmeUncheckedUpdateInput>;
};
export type FilmeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
    where: Prisma.FilmeWhereUniqueInput;
};
export type FilmeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilmeWhereInput;
    limit?: number;
};
export type Filme$cinemasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Filme$sessoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FilmeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FilmeSelect<ExtArgs> | null;
    omit?: Prisma.FilmeOmit<ExtArgs> | null;
    include?: Prisma.FilmeInclude<ExtArgs> | null;
};
