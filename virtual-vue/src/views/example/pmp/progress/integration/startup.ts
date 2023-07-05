import { NodeType, other, projectDocs } from '../../base'
export const startup = [
  {
    title: '制定项目章程',
    input: [
      {
        type: NodeType.BusinessDoc
      },
      {
        type: NodeType.Other,
        value: [other.agreement, other.env, other.assets]
      }
    ],
    output: [
      {
        type: NodeType.Other,
        value: [other.projectCharter]
      },
      {
        type: NodeType.ProjectDoc,
        value: [projectDocs.assumingLog]
      }
    ]
  }
]
