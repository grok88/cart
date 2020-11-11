describe('Header', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=project-header-header--header-base-example&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});
describe('Products', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=project-products-productspage--products-page-base-example&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});
describe('Carts', () => {
	it('base example, visually looks correct', async () => {
		// APIs from jest-puppeteer
		await page.goto('http://localhost:9009/iframe.html?id=project-carts-carts--cart-page-base-example&viewMode=story');
		const image = await page.screenshot();

		// API from jest-image-snapshot
		expect(image).toMatchImageSnapshot();
	});
});
