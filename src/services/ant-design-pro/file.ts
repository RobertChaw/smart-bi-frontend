// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/files/upload */
export async function handleFileUpload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleFileUploadParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString>('/api/files/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
