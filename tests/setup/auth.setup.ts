import { test as setup } from "@playwright/test";
import { USERS } from "../../constants/users";
import { LoginPage } from "../../pages/LoginPage";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

  await page.context().storageState({ path: ".playwright/auth.json" });
});
