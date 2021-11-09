import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth, ApiExtraModels, ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags, getSchemaPath,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';
import { ApiPaginatedResponse, PaginatedDto } from "./dto/paginated-dto.dto";

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(+id);
  }

  @Get()
  // @ApiPaginatedResponse(CreateCatDto)
  @ApiExtraModels(PaginatedDto)
  @ApiOkResponse({
    schema: {
      title: `PaginatedResponseOfCreateCatDto`,
      allOf: [
        { $ref: getSchemaPath(PaginatedDto) },
        {
          properties: {
            results: {
              type: 'array',
              items: { $ref: getSchemaPath(CreateCatDto) },
            },
          },
        },
      ],
    },
  })
  async findAll(): Promise<PaginatedDto<CreateCatDto>> {
    return Promise.reject();
  }
}
