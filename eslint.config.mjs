import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  {
    ignores: [".next/**", ".next_backup_*/**", "node_modules/**"],
  },
  {
    extends: [...next],
  },
]);
