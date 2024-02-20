declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChart = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageChart = {
    code?: number;
    data?: PageChart;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type Chart = {
    id?: number;
    userId?: number;
    goal?: string;
    chartOption?: string;
    status?: string;
    reason?: string;
    summary?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ChartCreateRequest = {
    goal: string;
    file: string;
  };

  type ChartListRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    goal?: string;
    status?: string;
    reason?: string;
    summary?: string;
    createTime?: string;
    updateTime?: string;
  };

  type ChartUpdateRequest = {
    goal?: string;
    chartOption?: string;
    status?: string;
    reason?: string;
    summary?: string;
  };

  type deleteChartByIdParams = {
    id: number;
  };

  type deleteUserByIdParams = {
    id: number;
  };

  type getAllChartsParams = {
    chartListRequest: ChartListRequest;
  };

  type getAllUsersParams = {
    userListRequest: UserListRequest;
  };

  type getChartByIdParams = {
    id: number;
  };

  type handleFileUploadParams = {
    type: string;
    file: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageChart = {
    records?: Chart[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type updateChartParams = {
    id: number;
  };

  type updateUserParams = {
    id: number;
  };

  type User = {
    id?: number;
    username?: string;
    userAccount?: string;
    password?: string;
    avatar?: string;
    role?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: boolean;
  };

  type UserListRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    username?: string;
    userAccount?: string;
    role?: string;
  };

  type UserLoginRequest = {
    userAccount: string;
    password: string;
  };

  type UserRegisterRequest = {
    userAccount: string;
    username: string;
    password: string;
  };

  type UserUpdateRequest = {
    id?: number;
    username?: string;
    userAccount?: string;
    password?: string;
    avatar?: string;
    role?: string;
  };

  type UserVO = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatar?: string;
    role?: string;
    createTime?: string;
    updateTime?: string;
  };
}
