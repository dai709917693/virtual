import { NodeType, other, projectDocs } from '../../base'

export const exec = [
  {
    title: '管理项目知识',
    input: [
      {
        type: NodeType.Plan
      },
      {
        type: NodeType.ProjectDoc,
        value: [
          projectDocs.lessonsLearnedRegister,
          projectDocs.dispatchOrder,
          projectDocs.resourceBreakdownStructure,
          projectDocs.registerOfRelatedParties
        ]
      },
      {
        type: NodeType.Other,
        value: [other.deliverables, other.env, other.assets]
      }
    ],
    output: [
      {
        type: NodeType.ProjectDoc,
        value: [projectDocs.lessonsLearnedRegister]
      },
      {
        type: NodeType.Plan,
        isUpdate: true
      },
      {
        type: NodeType.Other,
        isUpdate: true,
        value: [other.assets]
      }
    ]
  }
]
