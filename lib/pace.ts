import type { PackageId } from "./config";

export const pacePattern = /^([2-9]|1[0-9]|20):([0-5][0-9])$/;

export function parsePace(value: string) {
  const match = value.trim().match(pacePattern);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

export function calculateDuration(distance: number, pace: string) {
  const secondsPerKm = parsePace(pace);
  if (!secondsPerKm || !distance || distance <= 0) return null;
  const totalSeconds = Math.round(distance * secondsPerKm);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { totalSeconds, hours, minutes, seconds };
}

export function formatDuration(duration: ReturnType<typeof calculateDuration>) {
  if (!duration) return "—";
  if (duration.hours > 0) return `${duration.hours} jam ${duration.minutes} menit`;
  return `${duration.minutes} menit${duration.seconds ? ` ${duration.seconds} detik` : ""}`;
}

export function recommendPackage(distance: number): PackageId {
  if (distance <= 5) return "starter";
  if (distance <= 15) return "pro";
  return "ultimate";
}
