import { TranslateService } from '@ngx-translate/core';
import { ScenarioIds } from './../../models/constants';
import { PortalResources } from './../../models/portal-resources';
import { ArmUtil } from '../../Utilities/arm-utils';
import { Environment, ScenarioCheckInput, ScenarioResult } from './scenario.models';

export class DynamicLinuxEnvironment extends Environment {
  name = 'DynamicLinux';

  constructor(translateService: TranslateService) {
    super();

    const disabledResult: ScenarioResult = {
      status: 'disabled',
      data: translateService.instant(PortalResources.featureNotSupportedForLinuxConsumptionApps),
    };

    this.scenarioChecks[ScenarioIds.listExtensionsArm] = {
      id: ScenarioIds.listExtensionsArm,
      runCheck: () => {
        return { status: 'disabled' };
      },
    };

    this.scenarioChecks[ScenarioIds.deploymentCenter] = {
      id: ScenarioIds.deploymentCenter,
      runCheck: () => {
        return { status: 'disabled' };
      },
    };

    this.scenarioChecks[ScenarioIds.addMsi] = {
      id: ScenarioIds.addMsi,
      runCheck: () => {
        return { status: 'disabled' };
      },
    };

    this.scenarioChecks[ScenarioIds.enableConsole] = {
      id: ScenarioIds.enableConsole,
      runCheck: () => disabledResult,
    };

    this.scenarioChecks[ScenarioIds.enableKudu] = {
      id: ScenarioIds.enableKudu,
      runCheck: () => disabledResult,
    };

    this.scenarioChecks[ScenarioIds.enableLogStream] = {
      id: ScenarioIds.enableLogStream,
      runCheck: () => disabledResult,
    };

    this.scenarioChecks[ScenarioIds.enableMetrics] = {
      id: ScenarioIds.enableMetrics,
      runCheck: () => disabledResult,
    };

    this.scenarioChecks[ScenarioIds.enableCORS] = {
      id: ScenarioIds.enableCORS,
      runCheck: () => disabledResult,
    };

    this.scenarioChecks[ScenarioIds.enableQuotas] = {
      id: ScenarioIds.enableQuotas,
      runCheck: () => disabledResult,
    };
  }

  public isCurrentEnvironment(input?: ScenarioCheckInput): boolean {
    if (input && input.site) {
      return ArmUtil.isLinuxDynamic(input.site);
    }

    return false;
  }
}
