import { ApiExtraModels, ApiOkResponse, ApiProperty, ApiResponse, getSchemaPath } from "@nestjs/swagger";
import { applyDecorators, Type } from "@nestjs/common";

export class PaginatedDto<TData> {
    @ApiProperty()
    total: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    offset: number;

    @ApiProperty()
    results: TData[];
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
    model: TModel,
) => {
    return applyDecorators(
        ApiResponse({
            schema: {
                title: `PaginatedResponseOf${model.name}`,
                allOf: [
                    { $ref: getSchemaPath(PaginatedDto) },
                    {
                        properties: {
                            results: {
                                type: 'array',
                                items: { $ref: getSchemaPath(model) },
                            },
                        },
                    },
                ],
            },
        }),
        ApiExtraModels(PaginatedDto, model)
    );
};