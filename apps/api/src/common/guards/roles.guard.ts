import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly roles: string[] = []) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userRoles: string[] = request.user?.roles || [];
    if (this.roles.length === 0 || this.roles.some((r) => userRoles.includes(r))) {
      return true;
    }
    throw new ForbiddenException('Insufficient role');
  }
}
