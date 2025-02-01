import {TableCell, TableRow} from './ui/table';

export default function LoadingTable() {
  const placeholderRows = Array.from({length: 10}).map((_, index) => (
    <TableRow key={index}>
      <TableCell className="hidden md:table-cell">{index + 1}</TableCell>
      <TableCell>
        <div className="h-4 w-32 animate-pulse rounded-md bg-gray-200" />
      </TableCell>
      <TableCell>
        <div className="h-4 w-14 animate-pulse rounded-md bg-gray-200" />
      </TableCell>
      <TableCell>
        <div className="h-4 w-40 animate-pulse rounded-md bg-gray-200" />
      </TableCell>
    </TableRow>
  ));

  return <>{placeholderRows}</>;
}
