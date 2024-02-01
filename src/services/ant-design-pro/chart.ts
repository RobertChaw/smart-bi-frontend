// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/charts */
export async function getAllCharts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllChartsParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/api/charts', {
    method: 'GET',
    params: {
      ...params,
      chartListRequest: undefined,
      ...params['chartListRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/charts */
export async function createChart(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createChartParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong>('/api/charts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      chartCreateRequest: undefined,
      ...params['chartCreateRequest'],
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/charts/${param0} */
export async function getChartById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseChart>(`/api/charts/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/charts/${param0} */
export async function updateChart(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateChartParams,
  body: API.Chart,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseLong>(`/api/charts/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/charts/${param0} */
export async function deleteChartById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChartByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseLong>(`/api/charts/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
