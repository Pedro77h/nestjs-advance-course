import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor(private ref: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.ref.get<string[]>('roles', context.getHandler());

    if (!roles) return false;

    const request = context.switchToHttp().getRequest();

    const requestRoles = request.user.roles;

    return roles.includes(requestRoles);
  }
}
