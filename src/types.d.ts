import "twin.macro";

import type { css as cssImport } from "@emotion/react";
import type styledImport from "@emotion/styled";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
