// authService.ts
import { IWrenAIAdaptor } from '../adaptors/wrenAIAdaptor';
import {
  PostHogTelemetry,
  TelemetryEvent,
  WrenService,
} from '../telemetry/telemetry';
import { getLogger } from '@server/utils';

const logger = getLogger('AuthService');
logger.level = 'debug';

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
  };
}

export class AuthService {
  private wrenAIAdaptor: IWrenAIAdaptor;
  private telemetry: PostHogTelemetry;

  constructor({
    wrenAIAdaptor,
    telemetry,
  }: {
    wrenAIAdaptor: IWrenAIAdaptor;
    telemetry: PostHogTelemetry;
  }) {
    this.wrenAIAdaptor = wrenAIAdaptor;
    this.telemetry = telemetry;
  }

  public async login(
    username: string,
    password: string,
  ): Promise<LoginResponse> {
    const eventName = TelemetryEvent.USER_LOGIN;
    try {
      const loginResponse = await this.wrenAIAdaptor.login({
        username,
        password,
      });
      if (loginResponse.success) {
        this.telemetry.sendEvent(eventName);
        return {
          token: loginResponse.token,
          user: loginResponse.user,
        };
      } else {
        this.telemetry.sendEvent(
          eventName,
          { username, error: loginResponse.error },
          WrenService.AI,
          false,
        );
        throw new Error(loginResponse.error);
      }
    } catch (err: any) {
      logger.error(`Error logging in: ${err.message}`);
      this.telemetry.sendEvent(
        eventName,
        { username, error: err.message },
        err.extensions?.service,
        false,
      );
      throw new Error(err.message);
    }
  }
}
