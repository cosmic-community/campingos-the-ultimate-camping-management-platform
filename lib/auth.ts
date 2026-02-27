import jwt from 'jsonwebtoken'
import type { Role } from '@/types'

const JWT_SECRET = process.env.JWT_SECRET as string

export function signToken(payload: { userId: string; role: Role }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '12h' })
}

export function verifyToken(token: string): { userId: string; role: Role } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; role: Role }
  } catch (error) {
    return null
  }
}

export function requireRole(role: Role, allowed: Role[]): boolean {
  return allowed.includes(role)
}