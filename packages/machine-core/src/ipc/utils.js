const SheetIndex = require('../machine/SheetIndex');
const { Operand } = require('@cedalo/parser');

// if there is a formula, the cell has to be send to the client, even if value === ''
const isEmptyCell = (cell) => cell.term == null && cell.value === '';


// either pass SheetIndex or col & row number...
const cellDescriptor = (cell, row, col) => {
	const descr = cell ? cell.description() : {};
	descr.reference = typeof row === 'number' ? `${SheetIndex.columnAsStr(col)}${row}` : row.toString();
	return descr;
};

const cellDescriptorAsObject = (cell, row, col) => {
	const descr = cell ? cell.description() : {};
	const index = typeof row === 'number' ? `${SheetIndex.columnAsStr(col)}${row}` : row.toString();
	return { [index]: descr };
};

const updateNamedCellRefs = (machine, oldName, newName) =>
	machine.streamsheets.forEach((streamsheet) => {
		const updateCells = [];
		streamsheet.sheet.iterate((cell, row, col) => {
			if (cell.term && cell.references && cell.references.includes(oldName)) {
				const newTerm = cell.term.copy();
				newTerm.traverse(
					(term) => {
						if (term.hasOperandOfType(Operand.TYPE.REFERENCE) && term.operand.name === oldName) {
							term.operand.name = newName;
						}
						return true;
					},
					null,
					false
				);
				cell.term = newTerm;
				updateCells.push({ cell, row, col });
			}
		});
		streamsheet.onSheetCellsUpdated(updateCells);
	});

const collectMachineStats = machine => ({
	stats: { ...machine.stats },
	streamsheets: machine.streamsheets.map(streamsheet => ({
		id: streamsheet.id,
		name: streamsheet.name,
		stats: { ...streamsheet.stats }
	}))
});

const mapSheetCells = (sheet, fn) => {
	const cells = [];
	sheet.iterate((cell, rowidx, colidx) => {
		if (cell && !isEmptyCell(cell)) cells.push(fn(cell, rowidx, colidx));
	});
	return cells;	
};
const reduceSheetCells = (sheet, fn, acc) => {
	sheet.iterate((cell, rowidx, colidx) => {
		if (cell && !isEmptyCell(cell)) acc = fn(acc, cell, rowidx, colidx);
	});
	return acc;
};
const getSheetCellsAsList = (sheet) => mapSheetCells(sheet, cellDescriptor);
const getSheetCellsAsObject = (sheet) => {
	const cellidx = SheetIndex.create(1, 0);
	return reduceSheetCells(sheet, (acc, cell, rowidx, colidx) => {
		cellidx.set(rowidx, colidx);
		acc[cellidx.toString()] = cell.description();
		return acc;
	}, {});
};
	



module.exports = {
	cellDescriptor,
	cellDescriptorAsObject,
	collectMachineStats,
	getSheetCellsAsList,
	getSheetCellsAsObject,
	mapSheetCells,
	reduceSheetCells,
	updateNamedCellRefs
};