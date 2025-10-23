import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  role: string;
  sub: string;
}

export function ensureAuthenticadted(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token não foi informado!", 401);
  }

  const [, token] = authHeader.split(" ");

  const { sub: user_id, role } = verify(
    token,
    authConfig.jwt.secret
  ) as TokenPayload;

  request.user = {
    id: String(user_id),
    role,
  };

  return next();
}
