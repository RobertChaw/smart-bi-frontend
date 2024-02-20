import { createChart } from '@/services/ant-design-pro/chart';
import { Button, Form, Input, Upload, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';

export default function CreateChart() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(`testing values`, values);
    values.file = values.fileList[0].originFileObj;
    delete values['fileList'];
    await createChart({ ...values });
    message.success('上传成功');
    form.resetFields();
  };

  const beforeUpload = (file: File) => {
    const isXLSX =
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!isXLSX) {
      message.error('只能上传.xlsx格式的文件!');
    }
    return isXLSX || Upload.LIST_IGNORE;
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <PageContainer>
      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish} encType={'multipart/form-data'}>
          <Form.Item
            name={['goal']}
            label="目标"
            rules={[
              {
                required: true,
                message: '请输入目标!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={['fileList']}
            label="文件"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: '请上传文件!',
              },
            ]}
          >
            <Upload name="file" beforeUpload={beforeUpload} maxCount={1}>
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              创建
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
}
