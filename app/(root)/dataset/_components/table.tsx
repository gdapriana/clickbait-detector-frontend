'use client';

import {DatasetSchema} from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Badge} from "@/components/ui/badge";
import {motion as m} from "framer-motion";

export const DataTable = ({dataset}: {dataset:DatasetSchema | undefined}) => {
  return (
    <m.div
      animate={{opacity: [0, 1]}}
      transition={{ duration: 2, ease: "anticipate" }}
      className="w-full">
      <Table>
        <TableCaption>Dataset</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-11/12">Headline</TableHead>
            <TableHead className="w-1/12">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataset?.dataset.map((data: { headline: string; clickbait: number }, index: number) => (
            <TableRow key={index}>
              <TableCell>{data.headline}</TableCell>
              <TableCell>{data.clickbait === 1 ? <Badge>True</Badge> : <Badge variant="secondary">False</Badge>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{dataset?.total_dataset} Data</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </m.div>
  )
}