interface Mta {
	trigger(event: string, ...args: any[]): void;
}

interface Window {
	mta: Mta;
}

declare var mta: Mta;
