import { NodeType, other, projectDocs } from '../../base'

export const plan = [
  {
    title: '制定项目管理计划',
    input: [
      {
        type: NodeType.ProjectDoc,
        value: [projectDocs.assumingLog]
      },
      {
        type: NodeType.Other,
        value: ['其他过程的输出', other.env, other.assets]
      }
    ],
    output: [
      {
        type: NodeType.Plan
      }
    ]
  },
  {
    title: '指导与管理项目工作',
    input: [
      {
        type: NodeType.Plan
      },
      {
        type: NodeType.ProjectDoc,
        value: [
          projectDocs.changeLog,
          projectDocs.lessonsLearnedRegister,
          projectDocs.milestoneList,
          projectDocs.communicationRecord,
          projectDocs.projectSchedule,
          projectDocs.requirementTraceabilityMatrix,
          projectDocs.riskRegister,
          projectDocs.riskReport
        ]
      },
      {
        type: NodeType.Other,
        value: [other.changeRequest, other.env, other.assets]
      }
    ],
    output: [
      {
        type: NodeType.Other,
        value: [other.deliverables, other.workPerformanceData, other.changeRequest]
      },
      {
        type: NodeType.ProjectDoc,
        value: [projectDocs.issueLog]
      },
      {
        type: NodeType.Plan,
        isUpdate: true
      },
      {
        type: NodeType.ProjectDoc,
        isUpdate: true,
        value: [
          projectDocs.activityList,
          projectDocs.assumingLog,
          projectDocs.lessonsLearnedRegister,
          projectDocs.requirementDoc,
          projectDocs.riskRegister,
          projectDocs.registerOfRelatedParties
        ]
      },
      {
        type: NodeType.Other,
        isUpdate: true,
        value: [other.assets]
      }
    ]
  }
]
