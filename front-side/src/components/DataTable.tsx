import { ReactNode } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export interface Column<T> {
  header: string
  accessor: keyof T | ((row: T) => ReactNode)
  className?: string
}

interface DataTableProps<T extends { id: number }> {
  columns: Column<T>[]
  data: T[]
  isLoading?: boolean
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
}

export function DataTable<T extends { id: number }>({
  columns, data, isLoading, onEdit, onDelete,
}: DataTableProps<T>) {
  const hasActions = onEdit || onDelete

  return (
    <div className="rounded-lg border bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 hover:bg-slate-50">
            {columns.map((col, i) => (
              <TableHead key={i} className={col.className}>{col.header}</TableHead>
            ))}
            {hasActions && <TableHead className="w-24 text-right">Ações</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_, j) => (
                    <TableCell key={j}><Skeleton className="h-4 w-full" /></TableCell>
                  ))}
                  {hasActions && <TableCell><Skeleton className="h-4 w-20 ml-auto" /></TableCell>}
                </TableRow>
              ))
            : data.length === 0
            ? (
                <TableRow>
                  <TableCell colSpan={columns.length + (hasActions ? 1 : 0)} className="text-center py-10 text-slate-400">
                    Nenhum registro encontrado
                  </TableCell>
                </TableRow>
              )
            : data.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col, j) => (
                    <TableCell key={j} className={col.className}>
                      {typeof col.accessor === 'function'
                        ? col.accessor(row)
                        : String(row[col.accessor] ?? '')}
                    </TableCell>
                  ))}
                  {hasActions && (
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        {onEdit && (
                          <Button variant="ghost" size="icon" onClick={() => onEdit(row)} className="h-8 w-8 text-slate-500 hover:text-slate-900">
                            <Pencil className="h-3.5 w-3.5" />
                          </Button>
                        )}
                        {onDelete && (
                          <Button variant="ghost" size="icon" onClick={() => onDelete(row)} className="h-8 w-8 text-slate-500 hover:text-red-600">
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  )
}
