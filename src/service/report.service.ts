import { makeHttpRequest, Provide } from "@midwayjs/core";
import { IReportOptions } from "../interface";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { Report } from "../entity/report";
import { MBCollectionId, MetabaseApiToken } from "../constant/metabase";

@Provide()
export class ReportService {

  @InjectEntityModel(Report)
  reportModel: Repository<Report>;

  async list(userId: number) {
    const result = await this.reportModel.find({
      where: {
        deleted: false,
        userId: userId
      }
    });
    return result;
  }

  async create(options: IReportOptions) {
    const report = new Report();
    report.name = options.name;
    report.description = options.description;
    report.userId = options.userId;
    const res = await makeHttpRequest<any>('http://127.0.0.1:3000/api/dashboard', {
      method: 'POST',
      headers: {
        'x-api-key': MetabaseApiToken,
      },
      data: {
        name: options.name,
        description: options.description,
        collection_id: MBCollectionId.Report
      },
      dataType: 'json', // 返回的数据格式
    });
    if (res.status !== 200) {
      throw new Error('创建失败')
    }
    report.mbId = res.data.id;
    console.log('ReportService create res', res)
    const result = await this.reportModel.save(report);
    return result;
  }

  async get(id: number) {
    const result = await this.reportModel.findOne({
      where: {
        id: id
      }
    });

    // const res = await makeHttpRequest<any>(`http://127.0.0.1:3000/api/collection/${result.mbId}`, {
    //   dataType: 'json', // 返回的数据格式
    // });
    return result;
  }
}
