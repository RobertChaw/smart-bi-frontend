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
  body: API.ChartCreateRequest,
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseLong>('/api/charts', {
    method: 'POST',
    data: formData,
    requestType: 'form',
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
  body: API.ChartUpdateRequest,
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
