// deno-lint-ignore-file no-inferrable-types no-namespace

const ESC: string = '\x1B';
const CSI: string = `${ESC}[`;
export const beep: string = '\u0007';

export namespace cursor {
	export const left = `${CSI}G`;
	export const hide = `${CSI}?25l`;
	export const show = `${CSI}?25h`;
	export const save = `${ESC}7`;
	export const restore = `${ESC}8`;

	export function to(x: number, y?: number): string {
		if (!y) return `${CSI}${x + 1}G`;
		return `${CSI}${y + 1};${x + 1}H`;
	}
	export function move(x: number, y: number): string {
		let ret = '';

		if (x < 0) ret += `${CSI}${-x}D`;
		else if (x > 0) ret += `${CSI}${x}C`;

		if (y < 0) ret += `${CSI}${-y}A`;
		else if (y > 0) ret += `${CSI}${y}B`;

		return ret;
	}
	export function up(count: number = 1): string {
		return `${CSI}${count}A`;
	}
	export function down(count: number = 1): string {
		return `${CSI}${count}B`;
	}
	export function forward(count: number = 1): string {
		return `${CSI}${count}C`;
	}
	export function backward(count: number = 1): string {
		return `${CSI}${count}D`;
	}
	export function nextLine(count: number = 1): string {
		return `${CSI}E`.repeat(count);
	}
	export function prevLine(count: number = 1): string {
		return `${CSI}F`.repeat(count);
	}
}

export namespace scroll {
	export function up(count: number = 1): string {
		return `${CSI}S`.repeat(count);
	}
	export function down(count: number = 1): string {
		return `${CSI}T`.repeat(count);
	}
}

export namespace erase {
	export const screen = `${CSI}2J`;
	export const line = `${CSI}2K`;
	export const lineEnd = `${CSI}K`;
	export const lineStart = `${CSI}1K`;

	export function up(count: number = 1): string {
		return `${CSI}1J`.repeat(count);
	}
	export function down(count: number = 1): string {
		return `${CSI}J`.repeat(count);
	}
	export function lines(count: number): string {
		let clear = '';
		for (let i = 0; i < count; i++) clear += erase.line + (i < count - 1 ? cursor.up() : '');
		if (count) clear += cursor.left;
		return clear;
	}
}

export namespace clear {
	export const screen = `${ESC}c`;
}
