import { startup } from './startup'
import { plan } from './plan'
import { exec } from './exec'
import { monitor } from './monitor'
import { type Progress, ProgressGroupName } from '../../base'
export const integrationProgress: Progress = [
  {
    [ProgressGroupName.Startup]: startup,
    [ProgressGroupName.Plan]: plan,
    [ProgressGroupName.Exec]: exec,
    [ProgressGroupName.Monitor]: monitor
  }
]
