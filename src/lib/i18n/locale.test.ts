import { describe, expect, it } from "vitest";

import { replacePathLocale, resolveDeviceLocale } from "./locale";

describe("resolveDeviceLocale", () => {
  it("uses Spanish for Spanish device variants", () => {
    expect(resolveDeviceLocale("es-ES")).toBe("es");
    expect(resolveDeviceLocale("es-MX")).toBe("es");
  });

  it("uses English for every non-Spanish language", () => {
    expect(resolveDeviceLocale("en-US")).toBe("en");
    expect(resolveDeviceLocale("de-DE")).toBe("en");
    expect(resolveDeviceLocale(undefined)).toBe("en");
  });
});

describe("replacePathLocale", () => {
  it("replaces an existing locale and preserves the path", () => {
    expect(replacePathLocale("/es/projects/ticketing/", "en")).toBe(
      "/en/projects/ticketing/",
    );
  });
});
