export const ERROR_TEXTS = {
  CONNECTION: {
    DISPLAY_NAME: {
      REQUIRED: '请输入显示名称.',
    },
    PROJECT_ID: {
      REQUIRED: '请输入项目ID.',
    },
    DATASET_ID: {
      REQUIRED: '请输入数据集ID.',
    },
    CREDENTIAL: {
      REQUIRED: '请上传凭证.',
    },
    INIT_SQL: {
      REQUIRED: '请输入初始SQL语句.',
    },
    CONFIGURATION: {
      KEY: {
        REQUIRED: '请输入配置密钥.',
      },
      VALUE: {
        REQUIRED: '请输入配置值.',
      },
    },
    HOST: {
      REQUIRED: '请输入host.',
      INVALID:
        'host无效。在 macOS/Windows 上使用“host.docker.internal”连接到本地数据库.',
    },
    PORT: {
      REQUIRED: '请输入端口.',
    },
    USERNAME: {
      REQUIRED: '请输入用户名.',
    },
    PASSWORD: {
      REQUIRED: '请输入密码.',
    },
    DATABASE: {
      REQUIRED: '请输入数据库名称.',
    },
    SCHEMA: {
      REQUIRED: '请输入架构名称.',
    },
    SCHEMAS: {
      REQUIRED: '请输入 catalog.schema 列表，以逗号分隔.',
    },
    ACCOUNT: {
      REQUIRED: '请输入帐号.',
    },
  },
  ADD_RELATION: {
    FROM_FIELD: {
      REQUIRED: '请选择一个字段.',
    },
    TO_FIELD: {
      REQUIRED: '请选择一个字段.',
    },
    RELATION_TYPE: {
      REQUIRED: '请选择关系类型.',
    },
    RELATIONSHIP: {
      EXIST: '此关系已存在.',
    },
  },
  SETUP_MODEL: {
    TABLE: {
      REQUIRED: '请选择至少一张表.',
    },
  },
  SAVE_AS_VIEW: {
    NAME: {
      REQUIRED: '请输入视图名称.',
    },
  },
  MODELING_CREATE_MODEL: {
    TABLE: {
      REQUIRED: '请选择一张表.',
    },
    COLUMNS: {
      REQUIRED: '请选择至少一列.',
    },
    PRIMARY_KEY: {
      INVALID: '请重新选择，主键必须是所选列之一.',
    },
  },
  CALCULATED_FIELD: {
    NAME: {
      REQUIRED: '请输入字段名称.',
    },
    EXPRESSION: {
      REQUIRED: '请选择表达方式.',
    },
    LINEAGE: {
      REQUIRED: '请选择一个字段.',
      INVALID_STRING_TYPE: '请选择字符串类型字段.',
      INVALID_NUMBER_TYPE: '请选择数字类型字段.',
    },
  },
};
