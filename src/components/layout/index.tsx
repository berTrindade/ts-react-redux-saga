/* eslint-disable react/prop-types */
import { Wrapper } from '../../styles/styles';

interface DataTableProps {
    columns: string[]
    widths?: string[]
  }

export const DataTable: React.FC<DataTableProps> = ({ children, widths, columns }) => (
  <Wrapper>
    <thead>
      <tr>
        {columns.map((column, i) => (
          <th key={column} style={widths && widths[i] ? { width: widths[i] } : undefined}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </Wrapper>
);
