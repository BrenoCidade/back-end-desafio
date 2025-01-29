"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateTaskDto {
    constructor() {
        this.status = false;
    }
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Titulo da task',
        example: 'Jogar bola',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo title não pode estar vazio' }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição da task',
        example: 'Irei jogar bola com meus amigos',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status da task',
        example: 'pendente',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTaskDto.prototype, "status", void 0);
//# sourceMappingURL=create-task.dto.js.map