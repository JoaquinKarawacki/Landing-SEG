import { join } from "path";
import { mkdirSync, existsSync, copyFileSync, writeFileSync } from "fs";

function getStorageRoot() {
  return process.env.VOLUME_MOUNT_PATH ?? join(process.cwd(), "local-storage");
}

export function getUploadDir() {
  const dir = join(getStorageRoot(), "uploads");
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function getDataFile(nombre) {
  const dir = join(getStorageRoot(), "data");
  mkdirSync(dir, { recursive: true });
  const target = join(dir, nombre);
  if (!existsSync(target)) {
    const source = join(process.cwd(), "data", nombre);
    if (existsSync(source)) copyFileSync(source, target);
    else writeFileSync(target, "[]", "utf-8");
  }
  return target;
}
