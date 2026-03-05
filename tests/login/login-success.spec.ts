// Importa funções principais do Playwright
import { expect, test } from "@playwright/test";

// Importa a Page Object da Inventory
import { InventoryPage } from "../../pages/InventoryPage";

// Teste isolado apenas para validar acesso autenticado
test("acesso à inventory com usuário autenticado", async ({ page }) => {
  // Instancia a página de inventory
  const inventoryPage = new InventoryPage(page);

  // Navega direto para a inventory
  // (usuário já autenticado via storageState)
  await page.goto("/inventory.html");

  // Valida se a URL está correta
  await expect(page).toHaveURL(/inventory/);

  // Valida o título visível da página
  await expect(inventoryPage.pageTitle).toHaveText("Products");
});
