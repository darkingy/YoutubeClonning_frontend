import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-wwbp3y6voragrwqe.us.auth0.com',
            redirectUrl: 'http://localhost:4200/callback',
            //redirectUrl: window.location.origin,
            clientId: 'difX5oVgXAWI5ja3ps1vQFV3KKYYNrPn',
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
