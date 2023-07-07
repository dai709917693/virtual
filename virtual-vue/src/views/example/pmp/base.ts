export const knowledgeArea = [
  '整合',
  '范围',
  '进度',
  '成本',
  '质量',
  '资源',
  '沟通',
  '风险',
  '采购',
  '相关方'
]

/** 项目文件 */
export const projectDocs = {
  /** 活动属性 */
  activityProps: '活动属性',
  /** 活动清单 */
  activityList: '活动清单',
  /** 假设日志 */
  assumingLog: '假设日志',
  /** 估算依据 */
  estimationBasis: '估算依据',
  /** 变更日志 */
  changeLog: '变更日志',
  /** 成本估算 */
  costEstimation: '成本估算',
  /** 成本预测 */
  costForecast: '成本预测',
  /** 持续时间估算 */
  durationEstimation: '持续时间估算',
  /** 问题日志 */
  issueLog: '问题日志',
  /** 经验教训登记册 */
  lessonsLearnedRegister: '经验教训登记册',
  /** 里程碑清单 */
  milestoneList: '里程碑清单',
  /** 物质资源分配单 */
  materialResourceAllocationList: '物质资源分配单',
  /** 项目日历 */
  projectCalendar: '项目日历',
  /** 项目沟通记录 */
  communicationRecord: '项目沟通记录',
  /** 项目进度计划 */
  projectSchedule: '项目进度计划',
  /** 项目进度网络图 */
  projectScheduleNetworkDiagram: '项目进度网络图',
  /** 项目范围说明书 */
  projectScopeStatement: '项目范围说明书',
  /** 项目团队派工单 */
  dispatchOrder: '项目团队派工单',
  /** 质量控制测量结果 */
  qualityControlMeasurementResult: '质量控制测量结果',
  /** 质量测量指标 */
  qualityMetrics: '质量测量指标',
  /** 质量报告 */
  qualityReport: '质量报告',
  /** 需求文件 */
  requirementDoc: '需求文件',
  /** 需求跟踪矩阵 */
  requirementTraceabilityMatrix: '需求跟踪矩阵',
  /** 资源分解结构 */
  resourceBreakdownStructure: '资源分解结构',
  /** 资源日历 */
  resourceCalendar: '资源日历',
  /** 资源需求 */
  resourceRequirement: '资源需求',
  /** 风险登记册 */
  riskRegister: '风险登记册',
  /** 风险报告 */
  riskReport: '风险报告',
  /** 进度数据 */
  progressData: '进度数据',
  /** 进度预测 */
  progressPrediction: '进度预测',
  /** 相关方登记册 */
  registerOfRelatedParties: '相关方登记册',
  /** 团队章程 */
  teamCharter: '团队章程',
  /** 测试与评估文件 */
  testAndEvaluationDoc: '测试与评估文件'
}

export const projectDocsCategories = [
  {
    label: '活动',
    value: [projectDocs.activityProps, projectDocs.activityList]
  },
  {
    label: '需求',
    value: [
      projectDocs.requirementDoc,
      projectDocs.requirementTraceabilityMatrix,
      projectDocs.resourceRequirement
    ]
  },
  {
    label: '资源',
    value: [
      projectDocs.resourceBreakdownStructure,
      projectDocs.resourceCalendar,
      projectDocs.materialResourceAllocationList
    ]
  },
  {
    label: '日志',
    value: [projectDocs.assumingLog, projectDocs.changeLog, projectDocs.issueLog]
  },
  {
    label: '估算',
    value: [
      projectDocs.estimationBasis,
      projectDocs.costForecast,
      projectDocs.durationEstimation,
      projectDocs.progressPrediction
    ]
  },
  {
    label: '登记册',
    value: [
      projectDocs.lessonsLearnedRegister,
      projectDocs.riskRegister,
      projectDocs.registerOfRelatedParties
    ]
  },
  {
    label: '单子',
    value: [
      projectDocs.milestoneList,
      projectDocs.materialResourceAllocationList,
      projectDocs.dispatchOrder
    ]
  },
  {
    label: '进度',
    value: [
      projectDocs.projectSchedule,
      projectDocs.projectScheduleNetworkDiagram,
      projectDocs.progressData,
      projectDocs.progressPrediction
    ]
  },
  {
    label: '日历',
    value: [projectDocs.projectCalendar, projectDocs.resourceCalendar]
  },
  {
    label: '报告',
    value: [projectDocs.qualityReport, projectDocs.riskReport]
  },
  {
    label: '质量',
    value: [projectDocs.qualityControlMeasurementResult, projectDocs.qualityMetrics]
  },
  {
    label: '其他',
    value: [
      projectDocs.communicationRecord,
      projectDocs.projectScopeStatement,
      projectDocs.teamCharter,
      projectDocs.testAndEvaluationDoc
    ]
  }
]

/** 商业文件 */
export const businessDocs = {
  case: '商业论证',
  benefit: '效益管理计划'
}

/** 其他 */
export const other = {
  /** 事业环境因素 */
  env: '事业环境因素',
  /** 组织过程资产 */
  assets: '组织过程资产',
  /** 协议 */
  agreement: '协议',
  /** 项目章程 */
  projectCharter: '项目章程',
  /** 变更请求 */
  changeRequest: '变更请求',
  /** 工作绩效数据 */
  workPerformanceData: '工作绩效数据',
  /** 工作绩效信息 */
  workPerformanceInfo: '工作绩效信息',
  /** 工作绩效报告 */
  workPerformanceReport: '工作绩效报告',
  /** 可交付结果 */
  deliverables: '可交付结果'
}

/** 项目管理计划 */
export let plan: string[] = []
;(() => {
  const planSuffix = '管理计划'
  const otherSuffix = '基准'
  const planConfig = [1, '需求', 2, 3, 4, 5, 6, 7, 8, 9, '变更', '配置']
  const referenceConfig = [1, 2, 3, '绩效测量']
  const endOfPlan = ['项目生命周期描述', '开发方法']
  planConfig.forEach((item) => {
    plan.push((typeof item === 'number' ? knowledgeArea[item] : item) + planSuffix)
  })
  referenceConfig.forEach((item) => {
    plan.push((typeof item === 'number' ? knowledgeArea[item] : item) + otherSuffix)
  })
  plan = plan.concat(endOfPlan)
})()

export enum ProgressGroupName {
  'Startup',
  'Plan',
  'Exec',
  'Monitor',
  'Close'
}

export const progressGroup = {
  [ProgressGroupName.Startup]: '启动',
  [ProgressGroupName.Plan]: '规划',
  [ProgressGroupName.Exec]: '执行',
  [ProgressGroupName.Monitor]: '监控',
  [ProgressGroupName.Close]: '收尾'
}

export enum NodeType {
  BusinessDoc,
  ProjectDoc,
  Plan,
  Other
}
export interface Node {
  type: NodeType
  isUpdate?: boolean
  value?: string[]
}
interface ProgressItem {
  title: string
  input: Node[]
  output: Node[]
}
export type Progress = Record<ProgressGroupName | number, ProgressItem[]>
