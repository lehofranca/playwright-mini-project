import { Locator, Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  get pageTitle(): Locator {
    return this.page.locator(".title");
  }
}
