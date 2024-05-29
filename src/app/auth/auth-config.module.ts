import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: '',
            redirectUrl: 'http://localhost:4200/callback',
            clientId: '',
            scope: 'openid profile offline_access email',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            logLevel:LogLevel.Debug,
            secureRoutes: ['http://localhost:8080'],
            customParamsAuthRequest: {
                audience: 'http://localhost:8080'
            }
        }
      })],
    providers: [],
    exports: [AuthModule],
})
export class AuthConfigModule {}
