export class RQuery {
	constructor(context = document) {
		this.context = context;
	}

	// Метод find для поиска элементов
	find(selector) {
		if (selector.startsWith('#')) {
			return this.context.getElementById(selector.slice(1)) || null;
		}
		if (selector.startsWith('.')) {
			const elements = this.context.getElementsByClassName(
				selector.slice(1),
			);
			return elements.length ? elements : null;
		}
		const elements = this.context.getElementsByTagName(selector); // Поиск по тегу
		return elements.length ? elements : null;
	}

	// Статический метод $R для создания экземпляра
	static $R(context = document) {
		return new RQuery(context);
	}
}

