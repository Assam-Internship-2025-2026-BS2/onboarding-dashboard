import MatrixCell from "./MatrixCell";

export default function MatrixTable({ data, products }) {
  return (
    <table className="matrix-table">
      <thead>
        <tr>
          <th align="left">Stage</th>
          {products.map((product) => (
            <th key={product}>{product}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((stage) => (
          <tr key={stage.name}>
            <td>{stage.name}</td>

            {products.map((product) => (
              <td key={product}>
                <MatrixCell
                  value={stage.products[product]}
                  stage={stage.name}
                  product={product}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}