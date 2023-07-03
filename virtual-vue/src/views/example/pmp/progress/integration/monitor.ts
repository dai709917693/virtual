import { NodeType, other, projectDocs } from '../../base'

export const monitor = [
  {
    title: '监控项目工作',
    input: [
      {
        type: NodeType.Plan
      },
      {
        type: NodeType.ProjectDoc,
        value: [
          projectDocs.assumingLog,
          projectDocs.estimationBasis,
          projectDocs.costForecast,
          projectDocs.issueLog,
          projectDocs.lessonsLearnedRegister,
          projectDocs.milestoneList,
          projectDocs.qualityReport,
          projectDocs.riskRegister,
          projectDocs.riskReport,
          projectDocs.progressPrediction
        ]
      },
      {
        type: NodeType.Other,
        value: [other.workPerformanceInfo, other.agreement, other.env, other.assets]
      }
    ],
    output: [
      {
        type: NodeType.Other,
        value: [other.workPerformanceReport, other.changeRequest]
      },
      {
        type: NodeType.Plan,
        isUpdate: true
      },
      {
        type: NodeType.ProjectDoc,
        isUpdate: true,
        value: [
          projectDocs.costForecast,
          projectDocs.issueLog,
          projectDocs.lessonsLearnedRegister,
          projectDocs.riskRegister,
          projectDocs.progressPrediction
        ]
      }
    ]
  }
]
