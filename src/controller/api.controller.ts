import { Inject, Controller, Get, Query, Post, Body } from "@midwayjs/core";
import { Context } from '@midwayjs/koa';
import { TemplateService } from "../service/template.service";
import { ReportService } from "../service/report.service";

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  templateService: TemplateService;

  @Inject()
  reportService: ReportService;

  @Get('/template/list')
  async getTemplateList() {
    return this.templateService.list(1);
  }

  @Get('/template/get')
  async getTemplate(@Query('id') id: number) {
    return this.templateService.get(id);
  }

  @Post('/template/crate')
  async createTemplate(@Body() data: any ) {
    return this.templateService.create({
      name: data.name,
      description: data.description,
      userId: 1
    });
  }

  @Get('/report/list')
  async getReportList() {
    return this.reportService.list(1);
  }
  @Get('/report/get')
  async getReport(@Query('id') id: number) {
    return this.reportService.get(id);
  }

  @Post('/report/crate')
  async createReport(@Body() data: any ) {
    return this.reportService.create({
      name: data.name,
      userId: 1
    });
  }
}
